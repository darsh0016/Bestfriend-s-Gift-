"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface StoryPageProps {
  onNext: () => void
}

export function StoryPage({ onNext }: StoryPageProps) {
  // CUSTOMIZABLE: Replace with your personalized story and commitment
  const storyText =
    "From the very first moment I met you, I knew there was something special about you. The way you smiled, the way you laughed, the way you made me feel seen and understood. Every day since then, my feelings have only grown stronger. You've become my best friend, my confidant, and the person I think about first thing in the morning and last thing at night."
  const commitmentText =
    "I promise to cherish every moment we share, to support you in your dreams, and to be there through all of life's adventures. You mean the world to me."

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-3xl w-full animate-fadeInUp">
        {/* Vintage postcard style container */}
        <div className="vintage-frame bg-gradient-to-br from-secondary/20 to-accent/10 p-8 md:p-12 relative">
          {/* Postage stamp design */}
          <div className="absolute top-4 right-4 w-20 h-24 border-4 border-primary/30 border-dashed bg-background/50 flex flex-col items-center justify-center gap-1">
            <Heart className="w-8 h-8 text-primary" fill="currentColor" />
            <span className="font-serif-display text-xs text-foreground/60">LOVE</span>
          </div>

          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-2">
              <h2 className="font-serif-display text-xl md:text-2xl text-primary tracking-wide">Since the Moment</h2>
              <h1 className="font-script text-3xl md:text-4xl text-primary">We Met...</h1>
            </div>

            {/* Story text */}
            <div className="space-y-6">
              <p className="font-serif-display text-base text-foreground/90 leading-relaxed">{storyText}</p>

              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-6"></div>

              <p className="font-serif-display text-base text-foreground/90 leading-relaxed italic">{commitmentText}</p>
            </div>

            {/* Continue button */}
            <div className="flex justify-center pt-6">
              <Button
                onClick={onNext}
                className="font-serif-display text-base px-8 py-6 bg-primary hover:bg-primary/90"
              >
                Keep Reading
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
