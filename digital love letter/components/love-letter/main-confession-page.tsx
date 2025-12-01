"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface MainConfessionPageProps {
  onNext: () => void
}

export function MainConfessionPage({ onNext }: MainConfessionPageProps) {
  // CUSTOMIZABLE: Replace with your personalized message
  const additionalText =
    "Every moment with you feels like a dream I never want to wake up from. You've filled my life with colors I didn't know existed."

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/10 p-4">
      <div className="max-w-4xl w-full space-y-16 animate-scaleIn text-center">
        {/* Ribbon/bow decoration at top */}
        <div className="flex justify-center">
          <div className="relative w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full text-primary/20">
              <path d="M50 20 L30 40 L50 35 L70 40 Z M50 35 L50 80" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="30" cy="40" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="70" cy="40" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

        {/* Main confession */}
        <div className="space-y-8">
          <h1 className="font-script text-4xl md:text-5xl text-primary leading-tight px-4">I am so in love with you</h1>

          <div className="flex justify-center gap-3">
            <Heart className="w-6 h-6 text-primary animate-float" fill="currentColor" />
            <Heart className="w-8 h-8 text-primary" fill="currentColor" />
            <Heart className="w-6 h-6 text-primary animate-float" fill="currentColor" />
          </div>

          <p className="font-serif-display text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed px-4">
            {additionalText}
          </p>
        </div>

        {/* Continue button */}
        <div className="flex justify-center pt-8">
          <Button
            onClick={onNext}
            size="lg"
            className="font-serif-display text-base px-10 py-6 bg-primary hover:bg-primary/90"
          >
            Continue Reading
          </Button>
        </div>
      </div>
    </div>
  )
}
