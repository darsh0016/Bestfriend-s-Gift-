"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

export function FadingEndPage() {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    // Fade out after 2 seconds
    const timer = setTimeout(() => {
      setOpacity(0)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/10 p-4 transition-opacity duration-[3000ms]"
      style={{ opacity }}
    >
      <div className="text-center space-y-8 animate-fadeInUp">
        {/* Final heart */}
        <div className="flex justify-center">
          <Heart className="w-20 h-20 text-primary animate-float" fill="currentColor" />
        </div>

        {/* The End */}
        <div className="space-y-4">
          <h1 className="font-script text-5xl md:text-6xl text-primary">The End</h1>
          <p className="font-serif-display text-xl text-foreground/60">...and the beginning of forever</p>
        </div>

        {/* Decorative dots */}
        <div className="flex justify-center items-center gap-2 pt-8">
          <div className="w-2 h-2 rounded-full bg-primary/40"></div>
          <div className="w-2 h-2 rounded-full bg-accent/40"></div>
          <div className="w-2 h-2 rounded-full bg-primary/40"></div>
        </div>
      </div>
    </div>
  )
}
