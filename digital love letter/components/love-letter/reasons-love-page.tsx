"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface ReasonsLovePageProps {
  onNext: () => void
}

export function ReasonsLovePage({ onNext }: ReasonsLovePageProps) {
  // CUSTOMIZABLE: Replace with your personalized reasons
  const reasons = [
    "Your smile lights up my entire world and makes even the darkest days brighter",
    "The way you understand me without words, like you can read my heart",
    "Your kindness and compassion towards everyone you meet inspires me daily",
    "How you make me laugh until my cheeks hurt, even when I'm feeling down",
    "The incredible strength and courage you show in everything you do",
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/5 to-background p-4">
      <div className="max-w-4xl w-full space-y-12 animate-fadeInUp">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="font-serif-display text-3xl md:text-4xl text-foreground uppercase tracking-wide">
            Reasons Why I
          </h1>
          <h2 className="font-script text-5xl md:text-6xl text-primary">Love You</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* List of reasons */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                </div>
                <p className="font-serif-display text-lg text-foreground/90 leading-relaxed pt-1">{reason}</p>
              </div>
            ))}
          </div>

          {/* Large photo frame placeholder */}
          <div className="vintage-frame bg-secondary/30 p-6">
            <div className="aspect-[3/4] bg-muted rounded-sm flex items-center justify-center">
              <img
                src="/images/reasons-love-photo.jpg"
                alt="Special photo"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
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
