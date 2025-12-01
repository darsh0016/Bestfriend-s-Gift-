"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface IntroductionPageProps {
  onNext: () => void
}

export function IntroductionPage({ onNext }: IntroductionPageProps) {
  // CUSTOMIZABLE: Replace with your personalized message
  const message =
    "I just wanted to take a moment to thank you for being such an incredible part of my life. Your presence brings so much joy and warmth to my days, and I'm grateful for every moment we share together."

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/5 to-background p-4">
      <div className="max-w-4xl w-full space-y-12 animate-fadeInUp">
        {/* Large script heading */}
        <div className="text-center">
          <h1 className="font-script text-5xl md:text-6xl text-primary">Umm...</h1>
        </div>

        {/* Two polaroid-style picture frames */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <div className="bg-white p-4 pb-12 shadow-xl rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
            <img src="/images/intro-photo-1.jpg" alt="Memory 1" className="w-64 h-64 object-cover" />
            <p className="text-center mt-3 font-sans text-sm text-gray-600">A special Namunu of my life</p>
          </div>
          <div className="bg-white p-4 pb-12 shadow-xl rotate-[4deg] hover:rotate-0 transition-transform duration-300">
            <img src="/images/intro-photo-2.jpg" alt="Memory 2" className="w-64 h-64 object-cover" />
            <p className="text-center mt-3 font-sans text-sm text-gray-600">The only Drama Queen i want</p>
          </div>
        </div>

        {/* Thank you text */}
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="font-serif-display text-base md:text-lg text-foreground/90 leading-relaxed">{message}</p>
        </div>

        {/* Continue button */}
        <div className="flex justify-center pt-4">
          <Button onClick={onNext} className="font-serif-display text-base px-8 py-6 bg-primary hover:bg-primary/90">
            Continue <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
