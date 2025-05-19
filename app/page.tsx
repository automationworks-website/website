import AboutSection from "./comps/Home/aboutSection";
import { CaseStudies } from "./comps/Home/caseStudiesSection";
import ServiceSection from "./comps/Home/serviceSection";
import SocialProof from "./comps/Home/socialProof";
import WhyChooseUs from "./comps/Home/whyChooseUsSection";
import WinterSchool from "./comps/Home/winterSchoolSection";
import TestimonialSection from "./comps/Home/testimonialSection";
import GetInTouch from "./comps/GetInTouch";
import HeroSlider from "./comps/Home/heroSlider";
import { SliderContent } from "./comps/Home/sliderContent"; // Import SliderContent


export default function Home() {
  // Define slide data
  const slidesData = [
    {
      id: '1',
      heading: "Saving you time and money through industrial automation.",
      paragraph: "Streamline operations, reduce costs, and revolutionize your industrial processes with our advanced automation solutions, carefully designed to significantly enhance efficiency, productivity, and overall performance, while minimizing errors and maximizing results.",
      image1Url: "/PlaceholderImage.png", // Placeholder for top-right image
      image2Url: "/PlaceholderImage.png", // Placeholder for bottom-left image
      button1Text: "Our Solutions",
      button1Link: "/services", // Example link
      button2Text: "Start Today",
      button2Link: "/contact", // Example link
    },
    {
      id: '2',
      heading: "Siemens LOGO! PLC online training",
      paragraph: "Unlock your potential with our innovative Siemens LOGO! PLC online training. Developed in partnership with the Automation Works Training Facility, this course offers comprehensive, accessible learning for aspiring automation professionals.",
      image1Url: "/PlaceholderImage.png", // TODO: Update image path if needed
      image2Url: "/PlaceholderImage.png", // TODO: Update image path if needed
      button1Text: "Learn More",
      button1Link: "/community", // Updated link to community/training page
      button2Text: "Contact Us",
      button2Link: "/contact",
    },
    {
      id: '3',
      heading: "Full process Development and Design",
      paragraph: "From concept to completion, Automation Works expertly handles all electrical and instrumentation installations, ensuring seamless integration and optimal performance for your full process development and design needs.",
      image1Url: "/PlaceholderImage.png", // TODO: Update image path if needed
      image2Url: "/PlaceholderImage.png", // TODO: Update image path if needed
      button1Text: "View Portfolio",
      button1Link: "/portfolio",
      button2Text: "Request Quote",
      button2Link: "/contact",
    },
    {
      id: '4',
      heading: "What if it was actually easy? Automation & Production Control",
      paragraph: "What if automation and production control were actually easy? Automation Works makes it easy, simplifying complex processes for optimal efficiency.",
      image1Url: "/PlaceholderImage.png", // TODO: Update image path if needed
      image2Url: "/PlaceholderImage.png", // TODO: Update image path if needed
      button1Text: "Our Services",
      button1Link: "/services",
      button2Text: "Get In Touch",
      button2Link: "/contact",
    },
  ];

  // Map data to SliderContent components
  const slides = slidesData.map(slide => ({
    id: slide.id,
    content: <SliderContent {...slide} />
  }));

  return (
  <>
    <HeroSlider slides={slides} />
    <AboutSection/>
    <SocialProof/>
    <ServiceSection/>
    <CaseStudies/>
    <WhyChooseUs/>
    <WinterSchool/>
    <TestimonialSection/>
    <GetInTouch/>
  
  </>  
);
}
