"use client"
import { useState , useEffect } from 'react'
import { Button } from 'components/ui/button'
import { Input } from 'components/ui/input'
import { Label } from 'components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from 'components/ui/card'
import { ArrowLeft, Save, Eye, Send } from 'lucide-react'
import { useToast } from 'hooks/use-toast'
import { ImageUpload } from 'components/ImageUpload';
import Link from 'next/link'
import dynamic from 'next/dynamic'
import 'App.css'
import 'index.css'
import RotateLoader from 'react-spinners/RotateLoader'
interface BlogPost {
  title: string
  content: string
  featuredImage: File | null
  category: string
  readTime: string
}
const RichTextEditor = dynamic(() =>
  import('components/RichTextEditor').then((mod) => mod.RichTextEditor),
  { ssr: false }
)

export default function BlogCreate() {
  const [blogPost, setBlogPost] = useState<BlogPost>({
    title: '',
    content: '',
    featuredImage: null,
    category: '',
    readTime: '',
  })
  const [isPreview, setIsPreview] = useState(false)
  const { toast } = useToast()

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogPost(prev => ({ ...prev, title: e.target.value }))
  }

  const handleContentChange = (content: string) => {
    setBlogPost(prev => ({ ...prev, content }))
  }

  const handleImageSelect = (file: File) => {
    setBlogPost(prev => ({ ...prev, featuredImage: file }))
  }

  const handleRemoveImage = () => {
    setBlogPost(prev => ({ ...prev, featuredImage: null }))
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogPost(prev => ({ ...prev, category: e.target.value }))
  }

  const handleReadTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogPost(prev => ({ ...prev, readTime: e.target.value }))
  }

  const handleSaveDraft = () => {
    // In a real app, this would save to your backend
    toast({
      title: "Draft Saved",
      description: "Your blog post has been saved as a draft.",
    })
  }

  const handlePublish = async () => {
    if (!blogPost.title.trim()) {
      toast({
        title: "Title Required",
        description: "Please add a title before publishing.",
        variant: "destructive",
      })
      return
    }

    if (!blogPost.content.trim()) {
      toast({
        title: "Content Required",
        description: "Please add some content before publishing.",
        variant: "destructive",
      })
      return
    }

    if (!blogPost.featuredImage) {
      toast({
        title: "Image Required",
        description: "Please add a featured image before publishing.",
        variant: "destructive",
      })
      return
    }

    if (!blogPost.category.trim()) {
      toast({
        title: "Category Required",
        description: "Please add a category before publishing.",
        variant: "destructive",
      })
      return
    }

    if (!blogPost.readTime.trim()) {
      toast({
        title: "Read Time Required",
        description: "Please add a read time before publishing.",
        variant: "destructive",
      })
      return
    }

    const formData = new FormData();
    formData.append("title", blogPost.title);
    formData.append("description", blogPost.content); // using content as description
    formData.append("category", blogPost.category);
    formData.append("image", blogPost.featuredImage);
    formData.append("readTime", blogPost.readTime);

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast({
          title: "Blog Published!",
          description: "Your blog post has been published successfully.",
        });
        // Optionally, reset form or redirect
        setBlogPost({ title: '', content: '', featuredImage: null, category: '', readTime: '' });
      } else {
        toast({
          title: "Error",
          description: data.msg || "Failed to publish blog post.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to publish blog post.",
        variant: "destructive",
      });
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-elegant">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Create New Blog Post
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              onClick={() => setIsPreview(!isPreview)}
              className="hidden sm:flex"
            >
              <Eye className="h-4 w-4 mr-2" />
              {isPreview ? 'Edit' : 'Preview'}
            </Button>
            
            <Button onClick={handlePublish} variant="outline">
              <Send className="h-4 w-4 mr-2" />
              Publish
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {!isPreview ? (
            // Edit Mode
            <div className="space-y-8">
              {/* Title Input */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">Blog Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter your blog post title..."
                      value={blogPost.title}
                      onChange={handleTitleChange}
                      className="text-lg font-medium"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Featured Image */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">Featured Image</CardTitle>
                </CardHeader>
                <CardContent>
                  <ImageUpload
                    onImageSelect={handleImageSelect}
                    selectedImage={blogPost.featuredImage}
                    onRemoveImage={handleRemoveImage}
                  />
                </CardContent>
              </Card>

              {/* Category Input */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      placeholder="Enter blog category..."
                      value={blogPost.category}
                      onChange={handleCategoryChange}
                      className="text-lg font-medium"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Read Time Input */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">Read Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="readTime">Read Time</Label>
                    <Input
                      id="readTime"
                      placeholder="e.g. 5 min read"
                      value={blogPost.readTime}
                      onChange={handleReadTimeChange}
                      className="text-lg font-medium"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Rich Text Editor */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">Content</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <RichTextEditor
                    content={blogPost.content}
                    onChange={handleContentChange}
                    placeholder="Start writing your blog post..."
                  />
                </CardContent>
              </Card>
            </div>
          ) : (
            // Preview Mode
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                {blogPost.featuredImage && (
                  <img
                    src={URL.createObjectURL(blogPost.featuredImage)}
                    alt="Featured"
                    className="w-full h-64 object-cover rounded-lg mb-8"
                  />
                )}
                
                <h1 className="text-4xl font-bold mb-8 text-foreground">
                  {blogPost.title || 'Untitled Blog Post'}
                </h1>
                
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: blogPost.content || '<p>No content yet...</p>' }}
                />
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}