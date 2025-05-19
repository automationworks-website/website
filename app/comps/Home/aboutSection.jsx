// ./comps/Home/aboutSection.tsx
'use client' // <--- Add this

import Image from "next/image"
import Link from "next/link"
import { useSpring, animated } from '@react-spring/web' // <--- Import useSpring and animated
import { useInView } from 'react-intersection-observer' // <--- We'll use this popular library for useInView

// ... (YoutubeEmbed component remains the same)
const YoutubeEmbed = () => {
  return (
    <div className="aspect-w-16 aspect-h-10 w-full">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/ZeO5Wo_Toz0"
        title="AW Website"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}


const AboutSection = () => {
  // --- Animation for Title and Button block ---
  const [titleRef, titleInView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1,   // Trigger when 10% of the element is visible
  });
  const titleSpring = useSpring({
    opacity: titleInView ? 1 : 0,
    transform: titleInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { mass: 1, tension: 280, friction: 60 },
    delay: titleInView ? 200 : 0,
  });

  // --- Animation for Subheading ---
  const [subheadingRef, subheadingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const subheadingSpring = useSpring({
    opacity: subheadingInView ? 1 : 0,
    transform: subheadingInView ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 1, tension: 280, friction: 60 },
    delay: subheadingInView ? 400 : 0, // Delay after title
  });

  // --- Animation for Paragraphs ---
  const [paragraphsRef, paragraphsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const paragraphsSpring = useSpring({
    opacity: paragraphsInView ? 1 : 0,
    transform: paragraphsInView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 280, friction: 60 },
    delay: paragraphsInView ? 300 : 0,
  });

  // --- Animation for YouTube Embed ---
  const [youtubeRef, youtubeInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // A bit more visible before it animates
  });
  const youtubeSpring = useSpring({
    opacity: youtubeInView ? 1 : 0,
    transform: youtubeInView ? 'scale(1)' : 'scale(0.95)',
    config: { mass: 1, tension: 280, friction: 40 },
    delay: youtubeInView ? 300 : 0,
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-10 md:py-16"> {/* Added some py padding for scroll triggering */}
      {/* Animated block for Title, Arrow, and Button */}
      <animated.div
        ref={titleRef}
        style={titleSpring}
        className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[61px] font-bold">Automation Works</h2>
        <div className="hidden md:block">
          <Image
            src="/ArrowAbout.png"
            alt="An arrow from left to right pointing to a button to learn more about the journey of Automation Works"
            width={438}
            height={2}
            className="w-full h-auto"
          />
        </div>
        <Link href="/about">
          <button className="bg-[#232A58] px-4 py-2 h-12 md:h-[55px] w-full md:w-[250px] rounded-xl text-white text-base md:text-lg font-semibold">
            Learn About Our Journey
          </button>
        </Link>
      </animated.div>

      {/* Animated Subheading */}
      <animated.div
        ref={subheadingRef}
        style={subheadingSpring}
        className="flex flex-col space-y-6 md:space-y-10 xl:py-8 pt-6 md:pt-10" // Adjust existing py for spacing
      >
        <h3 className="font-bold text-2xl md:text-[26px] lg:text-[34px] xl:text-[48px] text-[#91A5C6]">
          The Story Behind Our Pursuit of Innovation and Excellence
        </h3>
      </animated.div>

      <div className="grid md:grid-cols-2 gap-5 py-10">
        {/* Animated Paragraphs */}
        <animated.div
          ref={paragraphsRef}
          style={paragraphsSpring}
          className="gap-5 flex flex-col justify-center items-center md:pr-5" // Changed from items-center
        >
          <p className="text-sm md:text-base lg:text-lg">
            At Automation Works, we're driven by a passion for inspiring solutions and a dream to make a meaningful
            impact. As a small but highly effective, award-winning team, we specialize in designing, delivering,
            managing, and servicing automated processing software systems and equipment for the food and beverage, and
            other industrial sectors.
          </p>
          <p className="text-sm md:text-base lg:text-lg">
            With over 25 years of experience, our unique blend of technical and mechanical expertise enables us to craft
            sophisticated solutions that maximize productivity, enhance hygiene standards, and reduce costs. We're
            dedicated to understanding your unique challenges and delivering tailored solutions that transform your
            operations and drive success.
          </p>
        </animated.div>

        {/* Animated YouTube Embed */}
        <animated.div
          ref={youtubeRef}
          style={youtubeSpring}
          className="flex justify-center"
        >
          <YoutubeEmbed />
        </animated.div>
      </div>
    </div>
  )
}

export default AboutSection