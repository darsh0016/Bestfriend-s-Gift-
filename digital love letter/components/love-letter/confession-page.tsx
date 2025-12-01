"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface ConfessionPageProps {
  onNext: () => void
}

export function ConfessionPage({ onNext }: ConfessionPageProps) {
  // CUSTOMIZABLE: Change the confession message
  const confessionMessage = "I love you."

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-primary/10 p-4">
      <div className="max-w-4xl w-full text-center space-y-16 animate-scaleIn">
        {/* Floating hearts decoration */}
        <div className="relative h-24">
          <Heart
            className="absolute top-0 left-1/4 w-8 h-8 text-primary/30 animate-float"
            fill="currentColor"
            style={{ animationDelay: "0s", animationDuration: "4s" }}
          />
          <Heart
            className="absolute top-0 right-1/4 w-6 h-6 text-primary/40 animate-float"
            fill="currentColor"
            style={{ animationDelay: "1s", animationDuration: "3.5s" }}
          />
          <Heart
            className="absolute top-12 left-1/3 w-5 h-5 text-primary/25 animate-float"
            fill="currentColor"
            style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
          />
          <Heart
            className="absolute top-12 right-1/3 w-7 h-7 text-primary/35 animate-float"
            fill="currentColor"
            style={{ animationDelay: "1.5s", animationDuration: "3s" }}
          />
        </div>

        {/* Main confession */}
        <div className="space-y-8">
          <div className="bg-card/50 backdrop-blur-sm paper-texture vintage-frame rounded-2xl p-12 md:p-16 shadow-2xl">
            <h1 className="font-script text-6xl md:text-7xl text-primary leading-tight text-balance">
              {confessionMessage}
            </h1>
          </div>

          {/* Supporting text */}
          <p className="font-serif-display text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto pt-8">
            These three words hold everything I feel when I think of you
          </p>
        </div>

        {/* Large decorative heart */}
        <div className="py-4">
          <Heart className="w-20 h-20 mx-auto text-primary" fill="currentColor" />
        </div>

        {/* Navigation */}
        <div>
          <Button
            onClick={onNext}
            size="lg"
            className="font-serif-display text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}
