"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

interface Slide {
  url: string
  title: string
}

interface ImageSliderProps {
  slides: Slide[]
}

export function ImageSlider({ slides }: ImageSliderProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative"
          >
            <Image
              src={slide.url}
              alt={slide.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end">
              <div className="w-full p-8 text-white">
                <h3 className="text-2xl font-bold">{slide.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={previousSlide}
      >
        <LuChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={nextSlide}
      >
        <LuChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
} 