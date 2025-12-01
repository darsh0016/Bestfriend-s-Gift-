"use client"

import { Button } from "@/components/ui/button"
import { Mail, FileText } from "lucide-react"

interface PreConfessionPageProps {
  onNext: () => void
}

export function PreConfessionPage({ onNext }: PreConfessionPageProps) {
  // CUSTOMIZABLE: Replace with your personalized message
  const message =
    "There's Something I want to tell. That You've been the best part of my life and i'm glad to have you in my life. That day and today's day i must say that you're the only one whom i can trust. Thank you for being in my life!!"

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 paper-texture">
      <div className="max-w-3xl w-full space-y-12 animate-fadeInUp">
        {/* Large script heading */}
        <div className="text-center">
          <h1 className="font-script text-5xl md:text-6xl text-primary">So...</h1>
        </div>

        {/* Envelope outline with notepad */}
        <div className="flex justify-center gap-8 items-center flex-wrap">
          <div className="relative">
            <Mail className="w-32 h-32 text-primary/30 stroke-[1.5]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <FileText className="w-16 h-16 text-primary/60 animate-float" />
            </div>
          </div>
        </div>

        {/* Message text */}
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="vintage-frame bg-card p-8">
            <p className="font-serif-display text-base md:text-lg text-foreground/90 leading-relaxed text-center">
              {message}
            </p>
          </div>
        </div>

        {/* Continue button */}
        <div className="flex justify-center pt-4">
          <Button onClick={onNext} className="font-serif-display text-base px-8 py-6 bg-primary hover:bg-primary/90">
            I'm ready to hear it →
          </Button>
        </div>
      </div>
    </div>
  )
}
