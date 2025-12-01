"use client"

import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"

interface MemoryCollagePageProps {
  onNext: () => void
}

export function MemoryCollagePage({ onNext }: MemoryCollagePageProps) {
  // CUSTOMIZABLE: Replace with your personalized memories
  const memories = [
    {
      image: "/images/memory-1.jpg",
      caption: "My first Smile after all bad phase",
    },
    {
      image: "/images/memory-2.jpg",
      caption: "When you made my heart skip",
    },
    {
      image: "/images/memory-3.jpg",
      caption: "That time we laughed until we cried",
    },
    {
      image: "/images/memory-4.jpg",
      caption: "A perfect Buddy I'll never Leave",
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 paper-texture">
      <div className="max-w-5xl w-full space-y-12 animate-fadeInUp">
        {/* Heading */}
        <div className="text-center space-y-4">
          <Camera className="w-12 h-12 mx-auto text-primary/60" />
          <h1 className="font-serif-display text-3xl md:text-4xl text-foreground uppercase tracking-wide">
            My Favorite Memory Is...
          </h1>
          <h2 className="font-script text-4xl md:text-5xl text-primary">Moments I Replay When I Miss You</h2>
        </div>

        {/* Photo collage with pinned/taped effect */}
        <div className="grid md:grid-cols-2 gap-8">
          {memories.map((memory, index) => (
            <div key={index} className="relative group">
              {/* Tape effect at top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-accent/30 rounded-sm z-10 shadow-sm"></div>

              {/* Photo container */}
              <div className="bg-white p-4 pb-16 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={memory.image || "/placeholder.svg"}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-72 object-cover"
                />
                <p className="text-center mt-4 font-sans text-sm text-gray-700 italic">{memory.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Continue button */}
        <div className="flex justify-center pt-4">
          <Button onClick={onNext} className="font-serif-display text-base px-8 py-6 bg-primary hover:bg-primary/90">
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}
