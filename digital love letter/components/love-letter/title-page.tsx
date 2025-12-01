"use client"

import { Heart } from "lucide-react"

interface TitlePageProps {
  onNext: () => void
}

export function TitlePage({ onNext }: TitlePageProps) {
  // CUSTOMIZABLE: Replace with sender's name
  const senderName = "Your Name"

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-3xl w-full text-center space-y-12 animate-fadeInUp">
        {/* Decorative dried flowers at top */}
        <div className="flex justify-center gap-4">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-3xl">🌸</span>
          </div>
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-3xl">🌿</span>
          </div>
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-3xl">🌹</span>
          </div>
        </div>

        {/* Main title */}
        <div className="space-y-6">
          <h1 className="font-serif-display text-2xl md:text-3xl text-foreground tracking-wide uppercase">
            A Special Note For
          </h1>
          <h2 className="font-script text-4xl md:text-5xl text-primary">{Chocolate Brownie}</h2>
        </div>

        {/* Prominent photo frame placeholder */}
        <div className="vintage-frame bg-secondary/30 p-6 mx-auto max-w-md">
          <div className="aspect-[4/3] bg-muted rounded-sm flex items-center justify-center overflow-hidden">
            <img src="/images/title-photo.jpg" alt="Special moment" className="w-full h-full object-cover rounded-sm" />
          </div>
        </div>

        {/* Call to action link */}
        <div className="pt-4">
          <button
            onClick={onNext}
            className="group inline-flex items-center gap-2 font-serif-display text-base md:text-lg text-primary border-b-2 border-primary pb-1 transition-all duration-300 hover:text-primary/70 hover:border-primary/70 hover:gap-3 uppercase tracking-wider"
          >
            Press Here To Go Ahead
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-3">
          <Heart className="w-5 h-5 text-primary/60" fill="currentColor" />
          <Heart className="w-4 h-4 text-accent/60" fill="currentColor" />
          <Heart className="w-5 h-5 text-primary/60" fill="currentColor" />
        </div>
      </div>
    </div>
  )
}
