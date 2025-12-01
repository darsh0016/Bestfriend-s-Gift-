"use client"

import { useState } from "react"
import { CoverPage } from "@/components/love-letter/cover-page"
import { TitlePage } from "@/components/love-letter/title-page"
import { IntroductionPage } from "@/components/love-letter/introduction-page"
import { PreConfessionPage } from "@/components/love-letter/pre-confession-page"
import { MainConfessionPage } from "@/components/love-letter/main-confession-page"
import { StoryPage } from "@/components/love-letter/story-page"
import { ReasonsLovePage } from "@/components/love-letter/reasons-love-page"
import { ReasonsChancePage } from "@/components/love-letter/reasons-chance-page"
import { RoastPage } from "@/components/love-letter/roast-page"
import { MemoryCollagePage } from "@/components/love-letter/memory-collage-page"
import { ThisOrThatPage } from "@/components/love-letter/this-or-that-page"
import { FinalQuestionPage } from "@/components/love-letter/final-question-page"
import { InteractiveChoicePage } from "@/components/love-letter/interactive-choice-page"
import { YesConfirmationPage } from "@/components/love-letter/yes-confirmation-page"
import { FadingEndPage } from "@/components/love-letter/fading-end-page"
import { NoConfirmationPage } from "@/components/love-letter/no-confirmation-page"

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null)

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const handleAnswer = (response: "yes" | "no") => {
    setAnswer(response)
    setCurrentPage((prev) => prev + 1)
  }

  const pages = [
    <CoverPage key="cover" onNext={handleNext} />, // Slide 1
    <TitlePage key="title" onNext={handleNext} />, // Slide 2
    <IntroductionPage key="intro" onNext={handleNext} />, // Slide 3
    <PreConfessionPage key="pre-confession" onNext={handleNext} />, // Slide 4
    <MainConfessionPage key="main-confession" onNext={handleNext} />, // Slide 5
    <StoryPage key="story" onNext={handleNext} />, // Slide 6
    <ReasonsLovePage key="reasons-love" onNext={handleNext} />, // Slide 7
    <ReasonsChancePage key="reasons-chance" onNext={handleNext} />, // Slide 8
    <RoastPage key="roast" onNext={handleNext} />, // Slide 9
    <MemoryCollagePage key="memory" onNext={handleNext} />, // Slide 10
    <ThisOrThatPage key="this-or-that" onNext={handleNext} />, // Slide 11
    <FinalQuestionPage key="final-question" onNext={handleNext} />, // Slide 12
    <InteractiveChoicePage key="choice" onAnswer={handleAnswer} />, // Slide 13
    answer === "yes" ? <YesConfirmationPage key="yes" onNext={handleNext} /> : <NoConfirmationPage key="no" />, // Slide 14
    <FadingEndPage key="end" />, // Slide 15
  ]

  return <main className="min-h-screen">{pages[currentPage]}</main>
}
