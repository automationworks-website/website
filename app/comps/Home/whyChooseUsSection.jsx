// ./comps/Home/whyChooseUsSection.jsx
'use client' // <--- Add this

import Image from "next/image"
import { useSpring, animated } from '@react-spring/web' // <--- Import hooks
import { useInView } from 'react-intersection-observer'      // <--- Import useInView

const WhyChooseUs = () => {
  // --- Animation for the Image ---
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const imageSpring = useSpring({
    opacity: imageInView ? 1 : 0,
    transform: imageInView ? 'translateX(0px)' : 'translateX(-50px)', // Slide in from left
    config: { mass: 1, tension: 220, friction: 40 },
    delay: imageInView ? 200 : 0,
  });

  // --- Animation for the Text Content (excluding stats) ---
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const textSpring = useSpring({
    opacity: textInView ? 1 : 0,
    transform: textInView ? 'translateY(0px)' : 'translateY(50px)', // Slide up
    config: { mass: 1, tension: 220, friction: 50 },
    delay: textInView ? 350 : 0, // After image
  });

  // --- Animation for Stats Numbers ---
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const numberSprings = {
    productivity: useSpring({
      number: statsInView ? 10 : 0,
      from: { number: 0 },
      config: { mass: 1, tension: 200, friction: 100, duration: 1500 }, // Slower for counting
      delay: statsInView ? 500 : 0,
    }),
    education: useSpring({
      number: statsInView ? 10 : 0,
      from: { number: 0 },
      config: { mass: 1, tension: 200, friction: 100, duration: 1500 },
      delay: statsInView ? 600 : 0, // Stagger
    }),
    customers: useSpring({
      number: statsInView ? 500 : 0,
      from: { number: 0 },
      config: { mass: 1, tension: 200, friction: 100, duration: 2000 }, // Slower for larger number
      delay: statsInView ? 700 : 0, // Stagger
    }),
    establishment: useSpring({
      number: statsInView ? 24 : 0,
      from: { number: 0 },
      config: { mass: 1, tension: 200, friction: 100, duration: 1500 },
      delay: statsInView ? 800 : 0, // Stagger
    }),
  };

  // Animation for the stat descriptions
  const statDescriptionSpring = useSpring({
    opacity: statsInView ? 1 : 0,
    transform: statsInView ? 'translateY(0px)' : 'translateY(20px)',
    config: { mass: 1, tension: 280, friction: 60 },
    delay: statsInView ? 900 : 0, // After numbers start counting
  });


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 lg:my-20 py-10 md:py-16"> {/* Added py padding */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <animated.div
          ref={imageRef}
          style={imageSpring}
          className="order-2 lg:order-1"
        >
          <Image
            src="/chooseUsImage.png"
            width={616}
            height={640}
            alt="AI generated image of an automation company in South Africa"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </animated.div>
        <div className="order-1 lg:order-2">
          <animated.div ref={textRef} style={textSpring}>
            <p className="text-sm sm:text-base font-semibold text-gray-600 mb-2">Why Choose Us</p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Leading Process Automation Solutions for Southern Africa
            </h3>
            <p className="text-base sm:text-lg mb-6">
              Our clients, including top food and manufacturing companies in South Africa and southern Africa, trust us
              for outstanding service and high-quality process automation products, backed by our extensive expertise and
              reliable solutions.
            </p>
          </animated.div>

          {/* Stats Section */}
          <div ref={statsRef} className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <animated.p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                {numberSprings.productivity.number.to(n => n.toFixed(0) + (n === 10 ? 'x' : ''))}
              </animated.p>
              <animated.p style={statDescriptionSpring} className="text-sm sm:text-base">Increase in productivity</animated.p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <animated.p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                {numberSprings.education.number.to(n => n.toFixed(0))}
              </animated.p>
              <animated.p style={statDescriptionSpring} className="text-sm sm:text-base">Years of providing higher education</animated.p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <animated.p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                {numberSprings.customers.number.to(n => n.toFixed(0) + (n >= 1 ? '+' : ''))}
              </animated.p>
              <animated.p style={statDescriptionSpring} className="text-sm sm:text-base">Happy customers</animated.p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <animated.p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                {numberSprings.establishment.number.to(n => n.toFixed(0))}
              </animated.p>
              <animated.p style={statDescriptionSpring} className="text-sm sm:text-base">Years of establishment</animated.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs