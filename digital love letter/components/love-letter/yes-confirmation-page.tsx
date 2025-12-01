"use client"

import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Star } from "lucide-react"

interface YesConfirmationPageProps {
  onNext: () => void
}

export function YesConfirmationPage({ onNext }: YesConfirmationPageProps) {
  // CUSTOMIZABLE: Change celebration message
  const ladyName = "my lady"
  const lovingMessage =
    "I So happy to create a lifetime of beautiful memories with you. You've made me the happiest person alive, and I promise to spend every day proving that you made the right choice. Thank you for choosing me, for believing in us, and for being the most incredible person I've ever known."

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative"
      style={{ background: "linear-gradient(135deg, #FFF5F5 0%, #FFE4E1 50%, #FFF0F0 100%)" }}
    >
      {/* Faint star patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(30)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-primary/30"
            fill="currentColor"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl w-full text-center space-y-12 animate-fadeInUp relative z-10">
        {/* Sparkle header */}
        <div className="flex justify-center items-center gap-4">
          <Sparkles className="w-10 h-10 text-primary/60 animate-float" />
          <Heart className="w-12 h-12 text-primary animate-float" fill="currentColor" />
          <Sparkles className="w-10 h-10 text-primary/60 animate-float" />
        </div>

        {/* Main message */}
        <div className="space-y-8">
          {/* Script text */}
          <h1 className="font-script text-4xl md:text-5xl text-primary leading-tight">
            Thank you so much, {ladyName}.
          </h1>

          {/* Loving message */}
          <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="font-serif-display text-lg md:text-xl text-foreground/90 leading-relaxed">{lovingMessage}</p>
          </div>
        </div>

        {/* Decorative hearts */}
        <div className="flex justify-center items-center gap-3 py-6">
          <Heart className="w-6 h-6 text-primary/70" fill="currentColor" />
          <Heart className="w-8 h-8 text-primary" fill="currentColor" />
          <Heart className="w-10 h-10 text-primary" fill="currentColor" />
          <Heart className="w-8 h-8 text-primary" fill="currentColor" />
          <Heart className="w-6 h-6 text-primary/70" fill="currentColor" />
        </div>

        {/* Final sentiment */}
        <div className="space-y-4">
          <p className="font-script text-3xl md:text-4xl text-primary">Forever yours 💕</p>
        </div>

        {/* Continue to end */}
        <div className="flex justify-center pt-8">
          <Button
            onClick={onNext}
            variant="ghost"
            className="font-serif-display text-base text-primary/60 hover:text-primary"
          >
            Continue →
          </Button>
        </div>
      </div>
    </div>
  )
}
