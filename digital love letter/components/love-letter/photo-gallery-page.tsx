"use client"

import { Button } from "@/components/ui/button"
import { Heart, Camera } from "lucide-react"

interface PhotoGalleryPageProps {
  onNext: () => void
}

export function PhotoGalleryPage({ onNext }: PhotoGalleryPageProps) {
  // CUSTOMIZABLE: Replace with actual photo descriptions and update placeholder dimensions
  const photos = [
    {
      description: "Beautiful couple laughing together at sunset on the beach with warm golden light",
      alt: "Beautiful couple laughing together at sunset on the beach with warm golden light",
    },
    {
      description: "Romantic candlelit dinner date with couple holding hands across table",
      alt: "Romantic candlelit dinner date with couple holding hands across table",
    },
    {
      description: "Couple walking hand in hand through autumn park with colorful fall leaves",
      alt: "Couple walking hand in hand through autumn park with colorful fall leaves",
    },
    {
      description: "Happy couple embracing and smiling at camera in cozy home setting",
      alt: "Happy couple embracing and smiling at camera in cozy home setting",
    },
  ]

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 py-16"
      style={{
        background:
          "repeating-linear-gradient(45deg, oklch(0.96 0.01 30), oklch(0.96 0.01 30) 10px, oklch(0.94 0.015 35) 10px, oklch(0.94 0.015 35) 20px)",
      }}
    >
      <div className="max-w-5xl w-full space-y-12 animate-fadeInUp">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <Camera className="w-12 h-12 text-primary animate-float" />
          </div>
          <h2 className="font-script text-5xl md:text-6xl text-primary">Our Memories Together</h2>
          <div className="flex justify-center items-center gap-3">
            <div className="h-px w-20 bg-primary/20"></div>
            <Heart className="w-4 h-4 text-primary/60" fill="currentColor" />
            <div className="h-px w-20 bg-primary/20"></div>
          </div>
          <p className="font-serif-display text-xl text-foreground/80">Every moment with you is a treasure</p>
        </div>

        {/* Photo grid with polaroid style */}
        <div className="grid md:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="group" style={{ animationDelay: `${index * 0.15}s` }}>
              {/* Polaroid frame */}
              <div className="bg-card rounded-lg p-4 shadow-xl hover:shadow-2xl hover:rotate-1 transition-all duration-300 border-2 border-border/30">
                {/* Photo */}
                <div className="aspect-square bg-muted rounded overflow-hidden mb-4">
                  <img
                    src={`https://placehold.co/600x600?text=${encodeURIComponent(photo.description)}`}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption area */}
                <div className="h-16 flex items-center justify-center">
                  <Heart
                    className="w-6 h-6 text-primary/60 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative note */}
        <div className="bg-card paper-texture rounded-lg p-6 md:p-8 shadow-lg border border-border/50 max-w-2xl mx-auto">
          <p className="font-serif-display text-xl md:text-2xl text-center text-foreground/80 italic">
            "Every picture tells our story, and I want to create a million more memories with you."
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center pt-4">
          <Button
            onClick={onNext}
            size="lg"
            className="font-serif-display text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}
