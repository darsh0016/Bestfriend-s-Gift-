"use client"

import { Button } from "@/components/ui/button"
import { Heart, X } from "lucide-react"

interface InteractiveChoicePageProps {
  onAnswer: (response: "yes" | "no") => void
}

export function InteractiveChoicePage({ onAnswer }: InteractiveChoicePageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
      <div className="max-w-3xl w-full space-y-16 animate-scaleIn">
        {/* Question reminder */}
        <div className="text-center">
          <h2 className="font-script text-5xl md:text-6xl text-primary">So... what do you say?</h2>
        </div>

        {/* Choice buttons */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Yes button */}
          <Button
            onClick={() => onAnswer("yes")}
            size="lg"
            className="group relative font-serif-display text-2xl px-16 py-12 bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 rounded-2xl"
          >
            <Heart className="absolute -top-3 -right-3 w-8 h-8 text-accent animate-float" fill="currentColor" />
            <span>Yes! 💕</span>
          </Button>

          {/* No button */}
          <Button
            onClick={() => onAnswer("no")}
            size="lg"
            variant="outline"
            className="group font-serif-display text-2xl px-16 py-12 border-2 border-muted-foreground/30 hover:border-muted-foreground/50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl"
          >
            <X className="absolute -top-3 -right-3 w-6 h-6 text-muted-foreground/50" />
            <span>No, sorry</span>
          </Button>
        </div>

        {/* Small reassuring text */}
        <div className="text-center">
          <p className="font-serif-display text-sm text-muted-foreground italic">
            Take your time... there's no pressure, I promise.
          </p>
        </div>
      </div>
    </div>
  )
}
