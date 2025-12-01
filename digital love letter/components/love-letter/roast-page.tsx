"use client"

import { Button } from "@/components/ui/button"
import { Smile } from "lucide-react"

interface RoastPageProps {
  onNext: () => void
}

export function RoastPage({ onNext }: RoastPageProps) {
  // CUSTOMIZABLE: Replace with your personalized cute complaints
  const complaints = [
    "You're way too adorable when you're concentrating - it's honestly distracting",
    "Calling each others by weird funny Names like KUTRAA KUTRII",
    "Your laugh is so contagious that I can't help but smile like an idiot",
    "You're annoyingly perfect at making me forget why I was ever upset",
    "You make me want to write cheesy love letters (clearly, it's working)",
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/5 to-background p-4">
      <div className="max-w-3xl w-full space-y-12 animate-fadeInUp">
        {/* Heading with crumpled paper effect */}
        <div className="text-center space-y-4">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-secondary/20 rounded-lg transform rotate-1"></div>
            <div className="relative bg-background vintage-frame p-6">
              <h1 className="font-serif-display text-2xl md:text-3xl text-foreground uppercase tracking-wide">
                5 Things I Can't Stand About You
              </h1>
              <h2 className="font-script text-3xl md:text-4xl text-primary">(But Secretly Love)</h2>
            </div>
          </div>
        </div>

        {/* List with humorous doodle accents */}
        <div className="space-y-6">
          {complaints.map((complaint, index) => (
            <div key={index} className="vintage-frame bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Smile className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="font-serif-display text-sm text-muted-foreground uppercase tracking-wider">
                    Number {index + 1}
                  </span>
                  <p className="font-serif-display text-lg text-foreground/90 leading-relaxed mt-2">{complaint}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Playful note */}
        <div className="text-center">
          <p className="font-script text-2xl text-primary italic">(Just kidding... I love everything about you!)</p>
        </div>

        {/* Continue button */}
        <div className="flex justify-center pt-4">
          <Button onClick={onNext} className="font-serif-display text-base px-8 py-6 bg-primary hover:bg-primary/90">
            Keep Going
          </Button>
        </div>
      </div>
    </div>
  )
}
