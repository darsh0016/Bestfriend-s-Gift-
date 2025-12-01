"use client"

import { Button } from "@/components/ui/button"
import { Heart, Star } from "lucide-react"

interface ReasonsPageProps {
  onNext: () => void
}

export function ReasonsPage({ onNext }: ReasonsPageProps) {
  // CUSTOMIZABLE: Edit the reasons list
  const reasons = [
    "Your smile lights up every room you enter",
    "The way you listen and truly understand",
    "Your kindness and compassion for others",
    "How you make me laugh even on difficult days",
    "Your intelligence and the way you see the world",
    "The comfort I feel just being near you",
    "Your dreams and the passion you have for life",
    "How you inspire me to be a better person",
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/15 p-4 py-16">
      <div className="max-w-4xl w-full space-y-12 animate-fadeInUp">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <Star className="w-12 h-12 text-accent animate-float" />
          </div>
          <h2 className="font-script text-5xl md:text-6xl text-primary">Why I Love You</h2>
          <div className="flex justify-center items-center gap-3">
            <div className="h-px w-20 bg-primary/20"></div>
            <Heart className="w-4 h-4 text-primary/60" fill="currentColor" />
            <div className="h-px w-20 bg-primary/20"></div>
          </div>
          <p className="font-serif-display text-xl text-foreground/70">
            Here are just some of the countless reasons...
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card paper-texture rounded-lg p-6 shadow-lg border border-border/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" />
                <p className="font-sans text-lg md:text-xl text-foreground/90 leading-relaxed">{reason}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center">
          <p className="font-serif-display text-xl text-muted-foreground italic">
            And there are so many more reasons I could write forever...
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
