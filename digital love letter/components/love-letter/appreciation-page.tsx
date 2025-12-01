"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Heart } from "lucide-react"

interface AppreciationPageProps {
  onNext: () => void
}

export function AppreciationPage({ onNext }: AppreciationPageProps) {
  // CUSTOMIZABLE: Change the appreciation message
  const appreciationText = `Every day with you has been a gift. Your kindness, your laughter, and your presence have brought so much light into my life. I find myself grateful for every moment we share, every conversation we have, and every smile you give me.

You have this incredible way of making everything better just by being there. When I'm with you, the world feels brighter, warmer, and full of possibilities.`

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent/10 via-background to-secondary/20 p-4">
      <div className="max-w-3xl w-full space-y-12 animate-fadeInUp">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Sparkles className="w-12 h-12 text-accent animate-float" />
          </div>
          <h2 className="font-script text-4xl md:text-5xl text-primary">I'm Grateful for You</h2>
          <div className="flex justify-center items-center gap-3">
            <div className="h-px w-20 bg-primary/20"></div>
            <Heart className="w-4 h-4 text-primary/60" fill="currentColor" />
            <div className="h-px w-20 bg-primary/20"></div>
          </div>
        </div>

        {/* Content card */}
        <div className="bg-card paper-texture rounded-lg p-8 md:p-12 shadow-xl border border-border/50">
          <p className="font-serif-display text-lg md:text-xl text-foreground/90 leading-relaxed text-pretty whitespace-pre-line">
            {appreciationText}
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center items-center gap-6">
          <div className="w-3 h-3 rounded-full bg-primary/30"></div>
          <div className="w-2 h-2 rounded-full bg-accent/40"></div>
          <div className="w-3 h-3 rounded-full bg-primary/30"></div>
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
