// ./comps/Home/caseStudiesSection.tsx
'use client' // <--- Add this

import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useSpring, animated } from '@react-spring/web'; // <--- Import hooks
import { useInView } from 'react-intersection-observer';   // <--- Import useInView

type CardProps = {
  buttonColor: "b" | "w"
  bgColor: "black" | "white"
}

// Card component remains the same for now
const Card = ({ buttonColor, bgColor }: CardProps) => {
  const isWhite = buttonColor === "w"
  return (
    <div className="w-full lg:w-[560px] py-10 sm:w-[300px]">
      <div className={`w-full aspect-[3/2] ${bgColor === "black" ? "bg-black" : "bg-white border border-black"}`}></div>
      <div className="w-full mt-3 sm:mt-5 flex flex-row items-start justify-between">
        <div className="flex-1 pr-2">
          <h5 className="text-base sm:text-lg font-semibold">The name of project</h5>
          <p className="text-sm sm:text-base mt-1">
            A brief description of project one. This project showcases the skills of automations.
          </p>
        </div>
        <button
          className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full sm:rounded-[15px] border-black border flex justify-center items-center ${isWhite ? "bg-white" : "bg-black"}`}
        >
          {buttonColor === "w" ? (
            <Image
              src={"/blue-arrow-right.png"}
              alt="Blue arrow pointing right"
              width={24}
              height={24}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          ) : (
            <Image
              src={"/white-arrow-right.png"}
              alt="White arrow pointing right"
              width={24}
              height={24}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          )}
        </button>
      </div>
    </div>
  )
}

export const CaseStudies = () => {
  // --- Animation for the Section Header (Title and Link) ---
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const headerSpring = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 1, tension: 280, friction: 60 },
    delay: headerInView ? 200 : 0,
  });

  return (
    <div className="flex flex-col gap-5 my-5 sm:my-10 px-4 sm:px-6 lg:px-8 lg:w-[1346px] mx-auto py-10 md:py-16"> {/* Added mx-auto and py padding */}
      <animated.div
        ref={headerRef}
        style={headerSpring}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-black pb-2 sm:pb-4"
      >
        <h4 className="text-3xl sm:text-4xl lg:text-[61px] font-bold">Recent Projects</h4>
        <Link href="/portfolio" className="flex flex-row justify-center items-center gap-2 sm:gap-5 mt-2 sm:mt-0 group">
          <p className="text-lg sm:text-2xl lg:text-[35px] group-hover:text-blue-700 transition-colors">View Case Studies</p>
          <Image
            src={"/Icon.png"}
            alt="Arrow pointing right"
            width={20}
            height={20}
            className="w-5 h-5 sm:w-8 sm:h-8"
          />
        </Link>
      </animated.div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-[1200px] mx-auto" // Ensure carousel itself is centered if its parent allows
      >
        <CarouselContent>
          {[...Array(3)].map((_, index) => (
            <CarouselItem key={index} className="sm:basis-full"> {/* Consider md:basis-1/2 lg:basis-1/3 if you want multiple cards visible */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 p-1"> {/* Added p-1 to CarouselItem's child div */}
                <Card buttonColor="w" bgColor="black" />
                <Card buttonColor="b" bgColor="white" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  )
}