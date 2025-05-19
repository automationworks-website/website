// ./comps/Home/winterSchoolSection.jsx
'use client' // <--- Add this

import Image from "next/image"
import Link from "next/link"
import { useSpring, animated } from '@react-spring/web' // <--- Import hooks
import { useInView } from 'react-intersection-observer'      // <--- Import useInView

const WinterSchool = () => {
  // --- Animation for the Text Content Block ---
  const [textBlockRef, textBlockInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the text block is visible
  });
  const textBlockSpring = useSpring({
    opacity: textBlockInView ? 1 : 0,
    transform: textBlockInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { mass: 1, tension: 220, friction: 50 },
    delay: textBlockInView ? 200 : 0,
  });

  // --- Animation for the Image ---
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the image is visible
  });
  const imageSpring = useSpring({
    opacity: imageInView ? 1 : 0,
    transform: imageInView ? 'scale(1)' : 'scale(0.95)', // Subtle scale up and fade
    config: { mass: 1, tension: 220, friction: 40 },
    delay: imageInView ? 350 : 0, // Slightly after the text block
  });

  return (
    <div className="max-w-[1346px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-10 justify-center items-center my-8 sm:my-10 lg:my-16 py-10 md:py-16"> {/* Added py padding */}
      <animated.div
        ref={textBlockRef}
        style={textBlockSpring}
        className="w-full max-w-3xl flex flex-col justify-center items-center gap-3 sm:gap-4"
      >
        <p className="text-sm sm:text-base font-semibold text-center text-gray-600">Empowering the Future</p>
        <h4 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
          Automation Works Training Facility & Techno-Buzz Winter School
        </h4>
        <p className="text-base sm:text-lg text-center my-3 sm:my-5">
          Automation Works Training Facility offers a 12-month industrial factory automation skills training course to
          10 students annually, focusing on job readiness for successful workplace placements. The Techno-Buzz Winter
          School aids school learners in career choices through practical workstations in engineering and technology,
          providing exposure to higher education paths via universities, colleges, and leading companies.
        </p>
        <Link href="/community">
          <button className="px-6 py-3 w-full sm:w-auto font-semibold text-base sm:text-lg border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
            Learn More
          </button>
        </Link>
      </animated.div>
      <animated.div
        ref={imageRef}
        style={imageSpring}
        className="w-full"
      >
        <Image
          src="/winter-school.jpg"
          width={1313}
          height={700}
          alt="Image of student in automation works higher education program"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </animated.div>
    </div>
  )
}

export default WinterSchool