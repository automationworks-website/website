// ./comps/Home/testimonialSection.tsx
'use client' // <--- Add this

import Image from "next/image"
import Link from "next/link"
import { useSpring, useTrail, animated } from '@react-spring/web' // <--- Import hooks
import { useInView } from 'react-intersection-observer'      // <--- Import useInView

type Props = {
  amountOfStars: number
  name: string
  review: string
}

// TestimonialCards component remains the same internally
const TestimonialCards = ({ amountOfStars, name, review }: Props) => {
  const maxStars: number = 5
  const nonFilledStars: number = maxStars - amountOfStars

  return (
    <div className="flex flex-col gap-4 border border-black rounded-3xl p-4 sm:p-5 h-full"> {/* Added h-full for consistent height if needed */}
      <p className="text-base sm:text-lg font-semibold">{name}</p>
      <p className="text-sm sm:text-base flex-grow">{review}</p> {/* Added flex-grow to push stars down */}
      <div className="flex gap-1 mt-auto"> {/* Added mt-auto to push stars to bottom if content varies */}
        {Array(amountOfStars)
          .fill(null)
          .map((_, index) => (
            <Image
              key={`filled-${index}`}
              src="/star_filled.png"
              alt="Filled star"
              width={20}
              height={20}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          ))}
        {Array(nonFilledStars)
          .fill(null)
          .map((_, index) => (
            <Image
              key={`non-filled-${index}`}
              src="/non-filled-star.png"
              alt="Non-filled star"
              width={20}
              height={20}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          ))}
      </div>
    </div>
  )
}

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      amountOfStars: 5,
      name: "John Doe",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec lectus vel sapien vulputate mollis",
    },
    {
      id: 2,
      amountOfStars: 4,
      name: "Jane Smith",
      review: "Praesent euismod, nunc vel tincidunt lacinia, nulla nunc aliquam nunc, vitae aliquam nunc nunc vitae nunc. This review is a bit longer to test the layout.",
    },
    {
      id: 3,
      amountOfStars: 5,
      name: "Bob Johnson",
      review: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
  ]

  // --- Animation for the Section Header ---
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

  // --- Animation for Testimonial Cards using useTrail ---
  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Start when a small part of the cards container is visible
  });

  const trail = useTrail(testimonials.length, {
    opacity: cardsInView ? 1 : 0,
    transform: cardsInView ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.95)',
    from: { opacity: 0, transform: 'translateY(30px) scale(0.95)' },
    config: { mass: 1, tension: 280, friction: 50 },
    delay: cardsInView ? 400 : 0, // Overall delay for the trail to start, after header
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col my-8 sm:my-10 lg:my-16 gap-6 sm:gap-10 py-10 md:py-16"> {/* Added py padding */}
      <animated.div
        ref={headerRef}
        style={headerSpring}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-l-4 border-[#232A58] px-3 py-2 sm:py-0"
      >
        <div className="mb-4 sm:mb-0">
          <p className="text-sm sm:text-base font-semibold text-gray-600">Testimonials</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[45px] font-bold">Don't Just Take Our Word for It</h2>
        </div>
        <Link href="/contact">
          <button className="flex flex-row gap-3 sm:gap-5 justify-center items-center bg-white hover:bg-gray-100 transition-colors duration-300 rounded-full px-4 py-2 shadow-md hover:shadow-lg"> {/* Added shadow for button */}
            <Image
              src="/testimonial-button.png"
              width={55}
              height={55}
              alt="Mail icon"
              className="w-10 h-10 sm:w-[55px] sm:h-[55px]"
            />
            <p className="text-sm sm:text-base">Get Started Today</p>
          </button>
        </Link>
      </animated.div>

      {/* Grid for Testimonial Cards */}
      <div
        ref={cardsRef} // Attach ref to the container of the cards
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {trail.map((props, index) => {
          const testimonial = testimonials[index];
          return (
            <animated.div
              key={testimonial.id}
              style={props}
              // className="h-full" // Ensure animated.div takes full height of grid cell
            >
              <TestimonialCards
                amountOfStars={testimonial.amountOfStars}
                name={testimonial.name}
                review={testimonial.review}
              />
            </animated.div>
          );
        })}
      </div>
    </div>
  )
}

export default TestimonialSection