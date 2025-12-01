"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

interface ReasonsChancePageProps {
  onNext: () => void
}

export function ReasonsChancePage({ onNext }: ReasonsChancePageProps) {
  // CUSTOMIZABLE: Replace with your personalized reasons
  const reasons = [
    "I promise to always make you laugh and keep life fun and exciting",
    "I'll support your dreams and ambitions with everything I have",
    "We've Same Energy, Same Vibes",
    "We both Cry we both console Each other",
    "We both Overthinks Badly but clear each others mind.",
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 paper-texture">
      <div className="max-w-4xl w-full space-y-12 animate-fadeInUp">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="font-serif-display text-2xl md:text-3xl text-foreground uppercase tracking-wide">
            Reasons Why I Think
          </h1>
          <h2 className="font-script text-4xl md:text-5xl text-primary">We Should be The best DUO Bestfriends</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Stack of side-on photo frames */}
          <div className="relative h-96 hidden md:block">
            <div className="absolute top-0 left-0 vintage-frame bg-white p-3 rotate-[-8deg] shadow-xl w-64 z-10">
              <img src="/images/chance-photo-1.jpg" alt="Photo 1" className="w-full h-80 object-cover" />
            </div>
            <div className="absolute top-4 left-8 vintage-frame bg-white p-3 rotate-[-4deg] shadow-xl w-64 z-20">
              <img src="/images/chance-photo-2.jpg" alt="Photo 2" className="w-full h-80 object-cover" />
            </div>
            <div className="absolute top-8 left-16 vintage-frame bg-white p-3 rotate-[2deg] shadow-xl w-64 z-30">
              <img src="/images/chance-photo-3.jpg" alt="Photo 3" className="w-full h-80 object-cover" />
            </div>
          </div>

          {/* List of reasons */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <p className="font-serif-display text-lg text-foreground/90 leading-relaxed pt-1">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Continue button */}
        <div className="flex justify-center pt-4">
          <Button onClick={onNext} className="font-serif-display text-base px-8 py-6 bg-primary hover:bg-primary/90">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
