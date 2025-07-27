"use client"
import { useState } from 'react'
import { Button } from 'components/ui/button'
import { Input } from 'components/ui/input'
import { Label } from 'components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from 'components/ui/card'
import { ArrowLeft, Save, Eye, Send } from 'lucide-react'
import { useToast } from 'hooks/use-toast'
import { ImageUpload } from 'components/ImageUpload'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

const RichTextEditor = dynamic(() =>
  import('components/RichTextEditor').then((mod) => mod.RichTextEditor),
  { ssr: false }
)

interface ProjectData {
  title: string
  description: string
  image: File | null
  industry: string
  duration: string
  client: string
  year: string
  solution: string
  results: string
  testimonial: {
    content: string
    author: string
    position: string
  }
}

export default function ProjectCreate() {
  const [projectData, setProjectData] = useState<ProjectData>({
    title: '',
    description: '',
    image: null,
    industry: '',
    duration: '',
    client: '',
    year: '',
    solution: '',
    results: '',
    testimonial: {
      content: '',
      author: '',
      position: ''
    }
  })
  const [isPreview, setIsPreview] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProjectData(prev => ({ ...prev, [name]: value }))
  }

  const handleTestimonialChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProjectData(prev => ({
      ...prev,
      testimonial: {
        ...prev.testimonial,
        [name]: value
      }
    }))
  }

  const handleImageSelect = (file: File) => {
    setProjectData(prev => ({ ...prev, image: file }))
  }

  const handleRemoveImage = () => {
    setProjectData(prev => ({ ...prev, image: null }))
  }

  const handleContentChange = (content: string) => {
    setProjectData(prev => ({ ...prev, description: content }))
  }

  const handleSubmit = async () => {
    // Validate required fields
    if (!projectData.title.trim()) {
      toast({
        title: "Title Required",
        description: "Please add a title before submitting.",
        variant: "destructive",
      })
      return
    }

    if (!projectData.description.trim()) {
      toast({
        title: "Description Required",
        description: "Please add a description before submitting.",
        variant: "destructive",
      })
      return
    }

    if (!projectData.image) {
      toast({
        title: "Image Required",
        description: "Please add a project image before submitting.",
        variant: "destructive",
      })
      return
    }

    const formData = new FormData()
    formData.append("title", projectData.title)
    formData.append("description", projectData.description)
    formData.append("image", projectData.image)
    formData.append("industry", projectData.industry)
    formData.append("duration", projectData.duration)
    formData.append("client", projectData.client)
    formData.append("year", projectData.year)
    formData.append("solution", projectData.solution)
    formData.append("results", projectData.results)
    formData.append("testimonialContent", projectData.testimonial.content)
    formData.append("testimonialAuthor", projectData.testimonial.author)
    formData.append("testimonialPosition", projectData.testimonial.position)

    try {
      const res = await fetch("/api/case-studies", {
        method: "POST",
        body: formData,
      })
      
      const data = await res.json()
      
      if (res.ok && data.success) {
        toast({
          title: "Project Created!",
          description: "Your project has been created successfully.",
        })
        setTimeout(() => {
          router.push('/admin')
        }, 1200)
        // Reset form
        setProjectData({
          title: '',
          description: '',
          image: null,
          industry: '',
          duration: '',
          client: '',
          year: '',
          solution: '',
          results: '',
          testimonial: {
            content: '',
            author: '',
            position: ''
          }
        })
      } else {
        toast({
          title: "Error",
          description: data.msg || "Failed to create the project",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create the project",
        variant: "destructive",
      })
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
              Create New Project
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
            
            <Button onClick={handleSubmit} variant="outline">
              <Send className="h-4 w-4 mr-2" />
              Submit
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {!isPreview ? (
            // Edit Mode
            <div className="space-y-8">
              {/* Basic Information */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">Project Information</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title*</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="Project title"
                      value={projectData.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client">Client</Label>
                    <Input
                      id="client"
                      name="client"
                      placeholder="Client name"
                      value={projectData.client}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input
                      id="industry"
                      name="industry"
                      placeholder="Industry"
                      value={projectData.industry}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input
                      id="year"
                      name="year"
                      placeholder="Year"
                      value={projectData.year}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input
                      id="duration"
                      name="duration"
                      placeholder="Project duration"
                      value={projectData.duration}
                      onChange={handleChange}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Featured Image */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">Featured Image*</CardTitle>
                </CardHeader>
                <CardContent>
                  <ImageUpload
                    onImageSelect={handleImageSelect}
                    selectedImage={projectData.image}
                    onRemoveImage={handleRemoveImage}
                  />
                </CardContent>
              </Card>

              {/* Project Details */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="solution">Solution</Label>
                    <Input
                      id="solution"
                      name="solution"
                      placeholder="Solution provided"
                      value={projectData.solution}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="results">Results</Label>
                    <Input
                      id="results"
                      name="results"
                      placeholder="Project results"
                      value={projectData.results}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Description*</Label>
                    <RichTextEditor
                      content={projectData.description}
                      onChange={handleContentChange}
                      placeholder="Describe the project in detail..."
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">Testimonial</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="testimonialContent">Content</Label>
                    <Input
                      id="testimonialContent"
                      name="content"
                      placeholder="Testimonial content"
                      value={projectData.testimonial.content}
                      onChange={handleTestimonialChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="testimonialAuthor">Author</Label>
                      <Input
                        id="testimonialAuthor"
                        name="author"
                        placeholder="Author name"
                        value={projectData.testimonial.author}
                        onChange={handleTestimonialChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="testimonialPosition">Position</Label>
                      <Input
                        id="testimonialPosition"
                        name="position"
                        placeholder="Author position"
                        value={projectData.testimonial.position}
                        onChange={handleTestimonialChange}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            // Preview Mode
            <Card className="shadow-elegant">
              <CardContent className="p-8 space-y-6">
                {projectData.image && (
                  <img
                    src={URL.createObjectURL(projectData.image)}
                    alt="Featured"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                )}
                
                <h1 className="text-4xl font-bold text-foreground">
                  {projectData.title || 'Untitled Project'}
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Client</h3>
                    <p>{projectData.client || 'Not specified'}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Industry</h3>
                    <p>{projectData.industry || 'Not specified'}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Year</h3>
                    <p>{projectData.year || 'Not specified'}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Duration</h3>
                    <p>{projectData.duration || 'Not specified'}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mt-6 mb-4">Project Details</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Solution</h3>
                      <p>{projectData.solution || 'Not specified'}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Results</h3>
                      <p>{projectData.results || 'Not specified'}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Description</h3>
                      <div 
                        className="prose prose-lg max-w-none dark:prose-invert"
                        dangerouslySetInnerHTML={{ __html: projectData.description || '<p>No description yet...</p>' }}
                      />
                    </div>
                  </div>
                </div>

                {projectData.testimonial.content && (
                  <div className="mt-8 p-6 bg-muted rounded-lg">
                    <blockquote className="italic">
                      "{projectData.testimonial.content}"
                    </blockquote>
                    <div className="mt-4">
                      <p className="font-semibold">{projectData.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{projectData.testimonial.position}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}