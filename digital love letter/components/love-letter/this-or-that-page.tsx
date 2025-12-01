"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Check } from "lucide-react"

interface ThisOrThatPageProps {
  onNext: () => void
}

export function ThisOrThatPage({ onNext }: ThisOrThatPageProps) {
  // CUSTOMIZABLE: Replace with your personalized questions
  const questions = [
    {
      question: "Coffee or Tea?",
      option1: "Coffee",
      option2: "Tea",
      senderChoice: "Coffee",
      note: "Because mornings need a kick!",
    },
    {
      question: "Sunrise or Sunset?",
      option1: "Sunrise",
      option2: "Sunset",
      senderChoice: "Sunset",
      note: "Perfect end to any day with you",
    },
    {
      question: "Beach or Mountains?",
      option1: "Beach",
      option2: "Mountains",
      senderChoice: "Beach",
      note: "Sand between our toes forever",
    },
    {
      question: "Who Loves More?",
      option1: "You",
      option2: "Me",
      senderChoice: "Me",
      note: "It's impossible to measure, but I'm trying my hardest",
    },
  ]

  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(new Array(questions.length).fill(null))
  const [revealed, setRevealed] = useState<boolean[]>(new Array(questions.length).fill(false))

  const handleChoice = (questionIndex: number, choice: string) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[questionIndex] = choice
    setSelectedAnswers(newAnswers)

    const newRevealed = [...revealed]
    newRevealed[questionIndex] = true
    setRevealed(newRevealed)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/5 to-background p-4">
      <div className="max-w-4xl w-full space-y-12 animate-fadeInUp">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="font-serif-display text-3xl md:text-4xl text-foreground uppercase tracking-wide">
            Just Checking If
          </h1>
          <h2 className="font-script text-5xl md:text-6xl text-primary">You Know Me...</h2>
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {questions.map((q, index) => (
            <div key={index} className="vintage-frame bg-card p-6 space-y-4">
              <h3 className="font-serif-display text-xl md:text-2xl text-foreground text-center">{q.question}</h3>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => handleChoice(index, q.option1)}
                  variant={selectedAnswers[index] === q.option1 ? "default" : "outline"}
                  className="font-serif-display text-base px-6 py-6 min-w-32"
                >
                  {q.option1}
                  {selectedAnswers[index] === q.option1 && <Check className="ml-2 w-4 h-4" />}
                </Button>
                <Button
                  onClick={() => handleChoice(index, q.option2)}
                  variant={selectedAnswers[index] === q.option2 ? "default" : "outline"}
                  className="font-serif-display text-base px-6 py-6 min-w-32"
                >
                  {q.option2}
                  {selectedAnswers[index] === q.option2 && <Check className="ml-2 w-4 h-4" />}
                </Button>
              </div>

              {revealed[index] && (
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 animate-fadeInUp">
                  <p className="font-serif-display text-base text-foreground/80 text-center">
                    <Heart className="inline w-4 h-4 text-primary mr-2" fill="currentColor" />
                    My choice: <span className="font-semibold text-primary">{q.senderChoice}</span>
                  </p>
                  <p className="font-serif-display text-sm text-muted-foreground text-center mt-2 italic">{q.note}</p>
                </div>
              )}
            </div>
          ))}
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
