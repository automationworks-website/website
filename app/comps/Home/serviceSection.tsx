// ./comps/Home/serviceSection.tsx
'use client' // <--- Add this

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useSpring, animated } from '@react-spring/web' // <--- Import hooks
import { useInView } from 'react-intersection-observer'      // <--- Import useInView

const ServiceSection = () => {
  const services = [
    {
      id: "item-1",
      title: "Development and design",
      content:
        "We specialize in creating custom automation solutions tailored to your specific needs, enhancing efficiency and productivity in your operations.",
    },
    {
      id: "item-2",
      title: "System Integration and Installation",
      content:
        "Our expert team ensures seamless integration of new systems into your existing infrastructure, minimizing downtime and maximizing performance.",
    },
    {
      id: "item-3",
      title: "CIP (Cleaning In Place) Systems",
      content:
        "We design and implement advanced CIP systems that maintain the highest standards of hygiene in your production processes, ensuring product quality and safety.",
    },
    {
      id: "item-4",
      title: "Cheddar Block Formers",
      content:
        "Our innovative Cheddar Block Formers streamline cheese production, improving consistency and reducing waste in your manufacturing process.",
    },
    {
      id: "item-5",
      title: "Automated Sheep Feeders",
      content:
        "We provide cutting-edge automated feeding solutions for the livestock industry, ensuring precise nutrition and reducing labor costs.",
    },
    {
      id: "item-6",
      title: "After-Sales Support and Repair",
      content:
        "Our dedicated support team offers comprehensive after-sales service, including maintenance, repairs, and upgrades to keep your systems running at peak efficiency.",
    },
  ]

  // --- Animation for the Image on the left ---
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

  // --- Animation for the Accordion block on the right ---
  const [accordionRef, accordionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const accordionSpring = useSpring({
    opacity: accordionInView ? 1 : 0,
    transform: accordionInView ? 'translateX(0px)' : 'translateX(50px)', // Slide in from right
    config: { mass: 1, tension: 220, friction: 40 },
    delay: accordionInView ? 350 : 0, // Slightly after the image
  });

  // --- Animation for the decorative arrow ---
  const [arrowRef, arrowInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const arrowSpring = useSpring({
    opacity: arrowInView ? 1 : 0,
    transform: arrowInView ? 'translateY(0px) scale(1)' : 'translateY(20px) scale(0.8)',
    config: { mass: 1, tension: 280, friction: 60 },
    delay: arrowInView ? 500 : 0,
  });


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16"> {/* Added py padding */}
      <animated.div
        ref={arrowRef}
        style={arrowSpring}
        className="w-full flex justify-end pr-5 mb-[-20px] md:mb-[-40px]" // Negative margin to pull it up slightly
      >
        <Image
          src={"/serviceArrow.svg"}
          alt="Curly arrow pointing to accordion"
          width={62.95}
          height={107.5}
          className="w-12 h-auto lg:w-auto"
        />
      </animated.div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <animated.div
          ref={imageRef}
          style={imageSpring}
          className="order-2 md:order-1"
        >
          <Image
            src={"/services-image-text.png"}
            width={695}
            height={812}
            alt="Two images of projects done by Automation Works"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </animated.div>
        <animated.div
          ref={accordionRef}
          style={accordionSpring}
          className="flex flex-col justify-center gap-6 order-1 md:order-2"
        >
          <Accordion type="single" collapsible className="w-full">
            {services.map((service) => (
              <AccordionItem key={service.id} value={service.id}>
                <AccordionTrigger className="font-light text-xl sm:text-2xl md:text-3xl text-left">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="text-base sm:text-lg">{service.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </animated.div>
      </div>
    </div>
  )
}

export default ServiceSection