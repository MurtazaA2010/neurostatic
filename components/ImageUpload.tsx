import { useState, useRef } from 'react'
import { Button } from 'components/ui/button'
import { Card } from 'components/ui/card'
import { Upload, X, Image as ImageIcon } from 'lucide-react'
import { cn } from 'lib/utils'
import '/App.css'
import '/index.css'
interface ImageUploadProps {
  onImageSelect: (file: File) => void
  selectedImage?: File | null
  onRemoveImage?: () => void
  className?: string
}

export function ImageUpload({ onImageSelect, selectedImage, onRemoveImage, className }: ImageUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (file.type.startsWith('image/')) {
        onImageSelect(file)
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const file = files[0]
      if (file.type.startsWith('image/')) {
        onImageSelect(file)
      }
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const imageUrl = selectedImage ? URL.createObjectURL(selectedImage) : null

  return (
    <div className={cn("w-full", className)}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {selectedImage ? (
        <Card className="relative overflow-hidden">
          <img
            src={imageUrl!}
            alt="Selected"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <Button
              variant="destructive"
              size="sm"
              onClick={onRemoveImage}
              className="absolute top-2 right-2"
            >
              <X className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              onClick={handleButtonClick}
              className="bg-white/90 text-black hover:bg-white"
            >
              <Upload className="h-4 w-4 mr-2" />
              Change Image
            </Button>
          </div>
        </Card>
      ) : (
        <Card
          className={cn(
            "border-2 border-dashed transition-all duration-200 cursor-pointer hover:border-primary/50 hover:bg-primary/5",
            isDragOver && "border-primary bg-primary/10",
            className
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleButtonClick}
        >
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-4 p-4 rounded-full bg-muted">
              <ImageIcon className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Upload Featured Image</h3>
            <p className="text-muted-foreground mb-4">
              Drag and drop an image here, or click to select
            </p>
            <Button type="button" variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Choose Image
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              Supports: JPEG, PNG, WebP (Max 10MB)
            </p>
          </div>
        </Card>
      )}
    </div>
  )
}