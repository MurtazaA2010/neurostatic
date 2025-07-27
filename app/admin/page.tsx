"use client"

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, BarChart3, Users, FileText, Eye } from "lucide-react";
import Navbar from 'components/indexComponents/Navbar';
import Footer from "components/indexComponents/Footer";
import { Button } from "components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "components/ui/table";
import { Badge } from "components/ui/badge";
import "App.css"
import "Index.css"
import Link from "next/link";
import RotateLoader from "react-spinners/RotateLoader";
interface BlogPost {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  readTime: string;
  date?: string;
  views?: number;
}

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  industry: string;
  duration: string;
  client: string;
  year: string;
  solution: string;
  results: string[];
  testimonial?: {
    content?: string;
    author?: string;
    position?: string;
  };
  date?: string;
}

export default function BlogCreate() {
  const [minTimePassed, setMinTimePassed] = useState(false);
  useEffect(() => {
    setMinTimePassed(false);
    const timer = setTimeout(() => setMinTimePassed(true), 3000);
    return () => clearTimeout(timer);
  }, []);


  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedTab, setSelectedTab] = useState<'dashboard' | 'posts' | 'analytics' | "projects">('dashboard');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/blog');
        const data = await res.json();
        if (data.blogs) {
          setPosts(data.blogs);
        }
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/case-studies');
        const data = await res.json();
        if (data.projects) {
          setProjects(data.projects);
        }
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      }
    };
    fetchProjects();
  }, []);

  const handleDeletePost = async (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        const res = await fetch(`/api/blog/${id}`, { method: 'DELETE' });
        const data = await res.json();
        if (data.success) {
          setPosts(posts.filter(post => post._id !== id));
        } else {
          alert(data.msg || 'Failed to delete post');
        }
      } catch (err) {
        alert('Error deleting post');
      }
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        const res = await fetch(`/api/case-studies/${id}`, { method: 'DELETE' });
        const data = await res.json();
        if (data.success) {
          setProjects(projects.filter(project => project._id !== id));
        } else {
          alert(data.msg || 'Failed to delete project');
        }
      } catch (err) {
        alert('Error deleting project');
      }
    }
  };

  const totalViews = posts.reduce((sum, post) => sum + (post.views || 0), 0);
  const totalPosts = posts.length;
  const avgReadTime = posts.reduce((sum, post) => sum + parseInt(post.readTime), 0) / totalPosts;

  const TabButton = ({ tab, label, icon: Icon }: { tab: string; label: string; icon: any }) => (
    <button
      onClick={() => setSelectedTab(tab as any)}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
        selectedTab === tab
          ? 'bg-amber-100 text-amber-800 border border-amber-200'
          : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
      }`}
    >
      <Icon size={20} />
      {label}
    </button>
  );

  if (!minTimePassed) {
    return (
      <div className="min-h-screen bg-slate-50 flex justify-center items-center">
        <RotateLoader color="#2563eb" size={18} />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-slate-50">
<Navbar></Navbar>      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-slate-800 mb-4">Admin Dashboard</h1>
          <p className="text-slate-600">Manage your blog content and monitor performance</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-slate-200 pb-4">
          <TabButton tab="dashboard" label="Dashboard" icon={BarChart3} />
          <TabButton tab="posts" label="Manage Posts" icon={FileText} />
          <TabButton tab="analytics" label="Analytics" icon={Users} />
          <TabButton tab="projects" label="Projects" icon={BarChart3} />
        </div>

        {/* Dashboard Tab */}
        {selectedTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalPosts}</div>
                  <p className="text-xs text-muted-foreground">Published articles</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalViews.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">All time views</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Read Time</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{Math.round(avgReadTime)} min</div>
                  <p className="text-xs text-muted-foreground">Average per post</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <div key={post._id} className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg">
                      <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h3 className="font-medium text-slate-800">{post.title}</h3>
                        <p className="text-sm text-slate-600">{post.date} • {post.views} views</p>
                      </div>
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Posts Management Tab */}
        {selectedTab === 'posts' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-serif text-slate-800">Manage Posts</h2>
              <Link href={"/admin/blog/create/"}>
                <Button 
                  className="bg-amber-600 hover:bg-amber-700"
                  onClick={() => window.location.href = '/admin/blog/create/'}
                >
                  <Plus size={20} className="mr-2" />
                  New Post
                </Button>
              </Link>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {posts.map((post) => (
                      <TableRow key={post._id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img src={post.image} alt={post.title} className="w-12 h-12 object-cover rounded" />
                            <div>
                              <div className="font-medium">{post.title}</div>
                              <div className="text-sm text-slate-500">{post.readTime}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{post.category}</Badge>
                        </TableCell>
                        <TableCell>{post.date ? new Date(post.date).toLocaleDateString() : ''}</TableCell>
                        <TableCell>{post.views?.toLocaleString()}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Edit size={16} />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => handleDeletePost(post._id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Analytics Tab */}
        {selectedTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-slate-800">Analytics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Popular Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {posts
                      .sort((a, b) => (b.views || 0) - (a.views || 0))
                      .map((post, index) => (
                        <div key={post._id} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{post.title}</div>
                            <div className="text-xs text-slate-500">{post.views} views</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Array.from(new Set(posts.map(p => p.category))).map((category) => {
                      const categoryPosts = posts.filter(p => p.category === category);
                      const categoryViews = categoryPosts.reduce((sum, p) => sum + (p.views || 0), 0);
                      return (
                        <div key={category} className="flex justify-between items-center">
                          <Badge variant="secondary">{category}</Badge>
                          <div className="text-sm text-slate-600">
                            {categoryPosts.length} posts • {categoryViews} views
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {selectedTab === 'projects' && (
          <div className="space-y-8">
            {/* Projects Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{projects.length}</div>
                  <p className="text-xs text-muted-foreground">Published projects</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Industries</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{Array.from(new Set(projects.map(p => p.industry))).length}</div>
                  <p className="text-xs text-muted-foreground">Unique industries</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Clients</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{Array.from(new Set(projects.map(p => p.client))).length}</div>
                  <p className="text-xs text-muted-foreground">Unique clients</p>
                </CardContent>
              </Card>
            </div>
            {/* Recent Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.slice(0, 3).map((project) => (
                    <div key={project._id} className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg">
                      <img src={project.image} alt={project.title} className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h3 className="font-medium text-slate-800">{project.title}</h3>
                        <p className="text-sm text-slate-600">{project.year} • {project.client}</p>
                      </div>
                      <Badge variant="secondary">{project.industry}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Add Project Button and Manage Projects Title */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-serif text-slate-800">Manage Projects</h2>
              <Link href={"/admin/projects/create/"}>
                <Button 
                  className="bg-amber-600 hover:bg-amber-700"
                  onClick={() => window.location.href = '/admin/projects/create/'}
                >
                  <Plus size={20} className="mr-2" />
                  Add Project
                </Button>
              </Link>
            </div>
            {/* Projects Management Table */}
            <Card>
              <CardHeader>
                <CardTitle>Manage Projects</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Industry</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Year</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projects.map((project) => (
                      <TableRow key={project._id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img src={project.image} alt={project.title} className="w-12 h-12 object-cover rounded" />
                            <div>
                              <div className="font-medium">{project.title}</div>
                              <div className="text-sm text-slate-500">{project.industry}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{project.industry}</TableCell>
                        <TableCell>{project.client}</TableCell>
                        <TableCell>{project.year}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => handleDeleteProject(project._id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            {/* Projects Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Popular Industries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Array.from(new Set(projects.map(p => p.industry))).map((industry) => {
                      const industryProjects = projects.filter(p => p.industry === industry);
                      return (
                        <div key={industry} className="flex justify-between items-center">
                          <Badge variant="secondary">{industry}</Badge>
                          <div className="text-sm text-slate-600">
                            {industryProjects.length} projects
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Clients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Array.from(new Set(projects.map(p => p.client))).map((client) => {
                      const clientProjects = projects.filter(p => p.client === client);
                      return (
                        <div key={client} className="flex justify-between items-center">
                          <Badge variant="secondary">{client}</Badge>
                          <div className="text-sm text-slate-600">
                            {clientProjects.length} projects
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};