"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface FinalQuestionPageProps {
  onNext: () => void
}

export function FinalQuestionPage({ onNext }: FinalQuestionPageProps) {
  // CUSTOMIZABLE: Change to "BOYFRIEND" or "PARTNER" as needed
  const relationship = "BESTFRIEND"
  // CUSTOMIZABLE: Replace with your personalized message
  const finalMessage =
    "I know this is a big question, and I want you to know that whatever your answer is, I'll respect it completely. EVU hun nai kav You don't Have any option... because you mean the world to me, and I can't imagine my Life without you in it. You've brought so much joy, laughter, and love into my life, and I want to continue this beautiful journey together, Forever?"

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-primary">
      <div className="max-w-3xl w-full space-y-12 animate-scaleIn">
        {/* Main question */}
        <div className="text-center space-y-8">
          <div className="flex justify-center gap-3">
            <Heart className="w-8 h-8 text-primary-foreground/80 animate-float" fill="currentColor" />
            <Heart className="w-10 h-10 text-primary-foreground" fill="currentColor" />
            <Heart className="w-8 h-8 text-primary-foreground/80 animate-float" fill="currentColor" />
          </div>

          <h1 className="font-serif-display text-3xl md:text-4xl text-primary-foreground uppercase tracking-wide leading-tight">
            Will You Be My {relationship}?
          </h1>
        </div>

        {/* Torn notepad with heartfelt message */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-background p-8 md:p-10 shadow-2xl">
            {/* Torn paper effect at top */}
            <div
              className="absolute -top-2 left-0 right-0 h-4 bg-background/50"
              style={{
                clipPath:
                  "polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0, 100% 100%, 0 100%)",
              }}
            ></div>

            <p className="font-serif-display text-base text-foreground/90 leading-relaxed text-center">
              {finalMessage}
            </p>
          </div>
        </div>

        {/* Continue to choice */}
        <div className="flex justify-center pt-4">
          <Button
            onClick={onNext}
            size="lg"
            className="font-serif-display text-base px-10 py-6 bg-background text-primary hover:bg-background/90 shadow-xl"
          >
            Answer the Question
          </Button>
        </div>
      </div>
    </div>
  )
}
