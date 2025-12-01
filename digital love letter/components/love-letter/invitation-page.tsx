"use client"

import { Button } from "@/components/ui/button"
import { Heart, Scroll } from "lucide-react"

interface InvitationPageProps {
  onNext: () => void
}

export function InvitationPage({ onNext }: InvitationPageProps) {
  // CUSTOMIZABLE: Change sender name here
  const senderName = "Alex"
  // CUSTOMIZABLE: Change recipient name here
  const recipientName = "Jordan"

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/20 via-background to-primary/5 p-4">
      <div className="max-w-3xl w-full">
        {/* Letter envelope effect */}
        <div className="relative">
          {/* Paper with vintage frame */}
          <div className="bg-card paper-texture vintage-frame rounded-lg p-8 md:p-12 shadow-2xl animate-scaleIn">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-accent/40"></div>
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-accent/40"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-accent/40"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-accent/40"></div>

            <div className="space-y-8 text-center">
              {/* Icon header */}
              <div className="flex justify-center">
                <Scroll className="w-16 h-16 text-primary/70" />
              </div>

              {/* Greeting */}
              <div className="space-y-4">
                <h2 className="font-script text-4xl md:text-5xl text-primary">Dearest {recipientName},</h2>

                <div className="flex justify-center items-center gap-3 py-4">
                  <div className="h-px w-16 bg-primary/20"></div>
                  <Heart className="w-5 h-5 text-primary/60" fill="currentColor" />
                  <div className="h-px w-16 bg-primary/20"></div>
                </div>

                <p className="font-serif-display text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                  I've written something special for you. A message from my heart that I hope will make you smile.
                </p>

                <p className="font-sans text-base text-muted-foreground italic pt-4">
                  Take your time as you read through these words...
                </p>
              </div>

              {/* Signature */}
              <div className="pt-8">
                <p className="font-script text-2xl text-primary/80">With all my heart,</p>
                <p className="font-script text-3xl text-primary pt-2">{senderName}</p>
              </div>

              {/* Continue button */}
              <div className="pt-8">
                <Button
                  onClick={onNext}
                  size="lg"
                  variant="outline"
                  className="font-serif-display text-lg px-8 py-6 rounded-full border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                >
                  Continue Reading
                </Button>
              </div>
            </div>
          </div>

          {/* Wax seal decoration */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 wax-seal rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-8 h-8 text-primary-foreground" fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  )
}
