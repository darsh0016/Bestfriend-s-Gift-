"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Heart, Sparkles } from "lucide-react"

interface JourneyPageProps {
  onNext: () => void
}

export function JourneyPage({ onNext }: JourneyPageProps) {
  // CUSTOMIZABLE: Edit journey milestones
  const milestones = [
    {
      title: "The First Hello",
      description:
        "I remember the first time we met. Your smile caught my attention, but your warmth captured my heart.",
      icon: Sparkles,
    },
    {
      title: "Growing Closer",
      description:
        "Each conversation brought us nearer. I found myself looking forward to every moment we could spend together.",
      icon: Heart,
    },
    {
      title: "Falling for You",
      description:
        "Somewhere along the way, I realized you had become my favorite person. Every day with you felt like coming home.",
      icon: Calendar,
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/20 via-background to-accent/10 p-4 py-16">
      <div className="max-w-4xl w-full space-y-12 animate-fadeInUp">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="font-script text-4xl md:text-5xl text-primary">Our Journey Together</h2>
          <div className="flex justify-center items-center gap-3">
            <div className="h-px w-20 bg-primary/20"></div>
            <Heart className="w-4 h-4 text-primary/60" fill="currentColor" />
            <div className="h-px w-20 bg-primary/20"></div>
          </div>
          <p className="font-serif-display text-lg text-foreground/70 max-w-2xl mx-auto">
            Looking back on how we got here
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon
            return (
              <div key={index} className="relative" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Connector line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-primary/30 to-transparent hidden md:block"></div>
                )}

                {/* Milestone card */}
                <div className="flex gap-6 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card paper-texture rounded-lg p-6 md:p-8 shadow-lg border border-border/50">
                    <h3 className="font-serif-display text-xl md:text-2xl text-primary mb-3">{milestone.title}</h3>
                    <p className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-center pt-8">
          <Button
            onClick={onNext}
            size="lg"
            className="font-serif-display text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}
