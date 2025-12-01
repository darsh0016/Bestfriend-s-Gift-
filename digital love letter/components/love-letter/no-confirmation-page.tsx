"use client"

import { Heart } from "lucide-react"

export function NoConfirmationPage() {
  // CUSTOMIZABLE: Change the respectful acknowledgment message
  const acknowledgmentMessage = "I understand and respect your decision. Thank you for being honest with me."
  const closingMessage =
    "What we have means a lot to me, and I hope we can continue to be close in whatever way feels right for you."

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/30 via-background to-secondary/10 p-4">
      <div className="max-w-2xl w-full text-center space-y-12 animate-fadeInUp">
        {/* Simple heart icon */}
        <div className="flex justify-center">
          <Heart className="w-16 h-16 text-muted-foreground/60" />
        </div>

        {/* Message */}
        <div className="space-y-8">
          <div className="bg-card paper-texture rounded-lg p-10 md:p-12 shadow-lg border border-border/50">
            <h2 className="font-serif-display text-3xl md:text-4xl text-foreground/90 mb-8 leading-relaxed">
              {acknowledgmentMessage}
            </h2>

            <p className="font-sans text-xl md:text-2xl text-foreground/70 leading-relaxed">{closingMessage}</p>
          </div>
        </div>

        {/* Subtle closing */}
        <div className="pt-8">
          <p className="font-serif-display text-2xl text-muted-foreground italic">With understanding and care</p>
        </div>
      </div>
    </div>
  )
}
