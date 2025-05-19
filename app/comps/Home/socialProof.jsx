// ./comps/Home/socialProof.jsx
'use client' // <--- Add this

import Image from "next/image"
import { useSpring, useTrail, animated } from '@react-spring/web' // <--- Import hooks
import { useInView } from 'react-intersection-observer'      // <--- Import useInView

const SocialProof = () => {
  const images = [
    { id: 1, url: "/Unilever_Logo-1.png", alt: "Unilever logo" },
    { id: 2, url: "/Clover_Logo-1.png", alt: "Clover logo" },
    { id: 3, url: "/Ladismith_Cheese_logo-1.png", alt: "Ladismith Cheese logo" },
    { id: 4, url: "/Parmalat_Logo-1.png", alt: "Parmalat logo" },
    { id: 5, url: "/ssk_logo-1.png", alt: "SSK logo" },
    { id: 6, url: "/Tiger-Brands-Logo-1.png", alt: "Tiger Brands logo" },
  ]

  // --- Animation for the introductory paragraph ---
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const textSpring = useSpring({
    opacity: textInView ? 1 : 0,
    transform: textInView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 280, friction: 60 },
    delay: textInView ? 200 : 0,
  });

  // --- Animation for the logos using useTrail ---
  const [logosRef, logosInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Logos can start animating when a small part is visible
  });

  const trail = useTrail(images.length, {
    opacity: logosInView ? 1 : 0,
    transform: logosInView ? 'scale(1) translateY(0px)' : 'scale(0.8) translateY(20px)',
    from: { opacity: 0, transform: 'scale(0.8) translateY(20px)' },
    config: { mass: 1, tension: 280, friction: 40 },
    delay: logosInView ? 300 : 0, // Overall delay for the trail to start
    // Staggering is inherent in how useTrail applies delays based on index
  });

  return (
    <div className="py-10 md:py-20 flex flex-col justify-center items-center">
      <animated.p
        ref={textRef}
        style={textSpring}
        className="text-lg md:text-xl font-bold text-center mb-6 md:mb-10"
      >
        Trusted by the world's best companies
      </animated.p>
      <div
        ref={logosRef} // Attach ref to the container of the logos
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 px-4 max-w-7xl mx-auto"
      >
        {trail.map((props, index) => (
          <animated.div
            key={images[index].id}
            style={props}
            className="flex items-center justify-center"
          >
            <Image
              src={images[index].url || "/placeholder.svg"}
              alt={images[index].alt}
              width={125}
              height={80}
              className="w-full h-auto max-w-[125px] object-contain"
            />
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default SocialProof