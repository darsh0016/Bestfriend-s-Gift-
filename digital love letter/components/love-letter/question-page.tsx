"use client"

import { Button } from "@/components/ui/button"
import { Heart, Sparkles } from "lucide-react"

interface QuestionPageProps {
  onAnswer: (answer: "yes" | "no") => void
}

export function QuestionPage({ onAnswer }: QuestionPageProps) {
  // CUSTOMIZABLE: Change the relationship title and question
  const relationshipTitle = "Girlfriend"
  const reassuranceMessage =
    "Whatever your answer, I want you to know that you mean the world to me. I value what we have, and I'll always cherish our connection."

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/15 via-background to-accent/20 p-4">
      <div className="max-w-3xl w-full text-center space-y-12 animate-scaleIn">
        {/* Floating sparkles */}
        <div className="relative h-20">
          <Sparkles
            className="absolute top-0 left-1/4 w-8 h-8 text-accent animate-float"
            style={{ animationDelay: "0s" }}
          />
          <Sparkles
            className="absolute top-0 right-1/4 w-6 h-6 text-primary/60 animate-float"
            style={{ animationDelay: "0.7s" }}
          />
          <Sparkles
            className="absolute top-10 left-1/3 w-7 h-7 text-accent/70 animate-float"
            style={{ animationDelay: "0.3s" }}
          />
          <Sparkles
            className="absolute top-10 right-1/3 w-5 h-5 text-primary/40 animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* The big question */}
        <div className="space-y-8">
          <div className="bg-card/80 backdrop-blur-sm paper-texture vintage-frame rounded-2xl p-10 md:p-16 shadow-2xl">
            <h1 className="font-script text-5xl md:text-6xl text-primary leading-tight mb-8">
              Will You Be My
              <br />
              {relationshipTitle}?
            </h1>

            <div className="flex justify-center py-6">
              <Heart className="w-16 h-16 text-primary animate-pulse" fill="currentColor" />
            </div>
          </div>

          {/* Reassurance message */}
          <div className="max-w-2xl mx-auto">
            <p className="font-sans text-base md:text-lg text-foreground/70 leading-relaxed">{reassuranceMessage}</p>
          </div>
        </div>

        {/* Answer buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <Button
            onClick={() => onAnswer("yes")}
            size="lg"
            className="font-serif-display text-lg px-12 py-8 rounded-full bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 min-w-[200px]"
          >
            Yes! 💕
          </Button>

          <Button
            onClick={() => onAnswer("no")}
            size="lg"
            variant="outline"
            className="font-serif-display text-lg px-12 py-8 rounded-full border-2 border-muted-foreground/30 hover:bg-muted shadow-lg transition-all duration-300 min-w-[200px]"
          >
            No, I'm sorry
          </Button>
        </div>

        {/* Decorative footer */}
        <div className="flex justify-center items-center gap-3 pt-8">
          <div className="w-2 h-2 rounded-full bg-primary/40"></div>
          <div className="w-2 h-2 rounded-full bg-accent/40"></div>
          <div className="w-2 h-2 rounded-full bg-primary/40"></div>
        </div>
      </div>
    </div>
  )
}
