"use client"

import { Button } from "@/components/ui/button"
import { Heart, Sparkle } from "lucide-react"

interface AnticipationPageProps {
  onNext: () => void
}

export function AnticipationPage({ onNext }: AnticipationPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/15 p-4">
      <div className="max-w-2xl w-full text-center space-y-12 animate-fadeInUp">
        {/* Decorative top */}
        <div className="flex justify-center items-center gap-4">
          <Sparkle className="w-6 h-6 text-accent animate-float" style={{ animationDelay: "0s" }} />
          <Sparkle className="w-8 h-8 text-primary animate-float" style={{ animationDelay: "0.5s" }} />
          <Sparkle className="w-6 h-6 text-accent animate-float" style={{ animationDelay: "1s" }} />
        </div>

        {/* Main message */}
        <div className="space-y-6">
          <h2 className="font-script text-4xl md:text-5xl text-primary leading-tight">
            There's something
            <br />I need to tell you...
          </h2>

          <div className="flex justify-center items-center gap-3 py-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>

          <p className="font-serif-display text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl mx-auto">
            I've been holding these feelings in my heart for a while now, and I think it's time you knew...
          </p>
        </div>

        {/* Pulsing heart */}
        <div className="py-8">
          <Heart className="w-16 h-16 mx-auto text-primary animate-pulse" fill="currentColor" />
        </div>

        {/* Continue button */}
        <div className="pt-4">
          <Button
            onClick={onNext}
            size="lg"
            className="font-serif-display text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Tell Me More
          </Button>
        </div>
      </div>
    </div>
  )
}
