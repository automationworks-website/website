'use client'

import * as React from 'react'
import Autoplay from "embla-carousel-autoplay" // Import Autoplay plugin
import { useTransition, animated } from '@react-spring/web' // Import useTransition and animated
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi, // Import CarouselApi type
} from "@/components/ui/carousel" // Import Carousel components
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button' // Keep Button for the toggle
import type { HeroSliderProps, SlideProps } from '@/app/types/slider'

export default function HeroSlider({
  slides = [],
  autoPlay = true,
  interval = 7000
}: HeroSliderProps) {
  const [api, setApi] = React.useState<CarouselApi>() // State to hold the API
  const [currentSlide, setCurrentSlide] = React.useState(0) // State for dots
  const [isPlaying, setIsPlaying] = React.useState(autoPlay) // State for autoplay toggle button

  // Initialize Autoplay plugin with options
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: interval, stopOnInteraction: true, stopOnMouseEnter: true })
  )

  // Effect to update current slide index for dots
  React.useEffect(() => {
    if (!api) {
      return
    }
    setCurrentSlide(api.selectedScrollSnap()) // Set initial slide

    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)
    api.on("reInit", handleSelect) // Handle reinitialization

    // Update isPlaying state based on plugin
    setIsPlaying(autoplayPlugin.current.isPlaying())

    return () => {
      api.off("select", handleSelect)
      api.off("reInit", handleSelect)
    }
  }, [api])

  // Function to scroll to a specific slide (for dots)
  const scrollToSlide = React.useCallback((index: number) => {
    api?.scrollTo(index)
    // Optional: Reset autoplay timer on manual dot click
    // autoplayPlugin.current.reset()
  }, [api])

  // Function to toggle autoplay
  const toggleAutoplay = React.useCallback(() => {
    const player = autoplayPlugin.current
    if (!player) return

    if (player.isPlaying()) {
      player.stop()
      setIsPlaying(false)
    } else {
      player.play()
      setIsPlaying(true)
    }
  }, [])


  if (slides.length === 0) {
    return null
  }

  return (
    // Use the Carousel component
    <Carousel
      setApi={setApi} // Pass setApi to get the API instance
      opts={{
        loop: true, // Enable infinite looping
        align: "start",
      }}
      plugins={[autoplayPlugin.current]} // Add autoplay plugin
      className="relative h-screen w-full overflow-hidden bg-background" // Keep container styles
    >
      {/* CarouselContent holds the slides */}
      <CarouselContent className="h-full">
        {slides.map((slide: SlideProps, index: number) => (
          // Each slide is a CarouselItem
          <CarouselItem key={slide.id} className="h-full basis-full p-0"> {/* Remove padding */}
            {/* Render the actual slide content */}
            <div className="h-full w-full">
              {slide.content}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Buttons - Use CarouselPrevious/Next */}
      {slides.length > 1 && (
        <>
          {/* Previous Button */}
          <CarouselPrevious
            variant="ghost"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full border-none bg-black/50 text-white hover:bg-black/75 disabled:bg-black/20" // Apply custom styles
          />
          {/* Next Button */}
          <CarouselNext
            variant="ghost"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full border-none bg-black/50 text-white hover:bg-black/75 disabled:bg-black/20" // Apply custom styles
          />

          {/* Dots Navigation */}
          <div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 transform gap-2 md:bottom-4"> {/* Adjusted bottom position */}
            {slides.map((_: any, index: number) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  index === currentSlide
                    ? "bg-primary w-4" // Active dot style
                    : "bg-primary/50 hover:bg-primary/75" // Inactive dot style
                )}
                onClick={() => scrollToSlide(index)} // Use scrollToSlide
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : "false"}
              />
            ))}
          </div>

          {/* Auto Play Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute bottom-4 right-4 z-10 bg-background/80 hover:bg-background/90" // Keep styles
            onClick={toggleAutoplay} // Use toggleAutoplay
            aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {isPlaying ? "Pause" : "Play"} {/* Update text based on isPlaying state */}
          </Button>
        </>
      )}
    </Carousel>
  )
}
