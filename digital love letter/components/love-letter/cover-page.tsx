"use client"

import { Button } from "@/components/ui/button"
import { Heart, Mail } from "lucide-react"

interface CoverPageProps {
  onNext: () => void
}

export function CoverPage({ onNext }: CoverPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/10 p-4">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fadeInUp">
        {/* Decorative header */}
        <div className="flex justify-center items-center gap-3">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/30"></div>
          <Heart className="w-8 h-8 text-primary animate-float" fill="currentColor" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/30"></div>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <div className="relative inline-block">
            <Mail className="w-24 h-24 mx-auto text-primary/80" />
            <div className="absolute -top-2 -right-2 w-12 h-12 wax-seal rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
            </div>
          </div>

          <h1 className="font-script text-4xl md:text-5xl text-primary leading-tight">For Someone Special</h1>

          <p className="font-serif-display text-base md:text-lg text-foreground/80 max-w-xl mx-auto leading-relaxed">
            A heartfelt message awaits you within these pages
          </p>

          <div className="pt-8">
            <Button
              onClick={onNext}
              size="lg"
              className="font-serif-display text-base px-8 py-6 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Open the Letter
            </Button>
          </div>
        </div>

        {/* Decorative footer */}
        <div className="flex justify-center items-center gap-2 pt-8">
          <div className="w-2 h-2 rounded-full bg-primary/40"></div>
          <div className="w-2 h-2 rounded-full bg-accent/40"></div>
          <div className="w-2 h-2 rounded-full bg-primary/40"></div>
        </div>
      </div>
    </div>
  )
}
