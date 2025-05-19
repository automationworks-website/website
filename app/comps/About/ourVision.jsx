import Image from "next/image";

const OurVision = () => {
    return ( 
        // Changed layout to flex-col on small screens, flex-row on large. Added max-width, centering, and padding.
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 items-center">
            {/* Text Section - Order first on mobile */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
                {/* Responsive heading size */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Vision</h2>
                {/* Responsive paragraph size */}
                <p className="text-base sm:text-lg">Our vision is to be the leading provider of automation solutions globally, recognized for our commitment to excellence, innovation, and customer satisfaction. We aim to revolutionize industries by harnessing the power of automation, enabling businesses to achieve unprecedented levels of success and shaping a brighter future for generations to come.</p>
            </div>
            {/* Image Section - Order second on mobile */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                {/* Responsive image */}
                <Image 
                    src={"/OurVisionImage.jpg"} 
                    alt="Abstract image representing vision and future" // Updated alt text for clarity
                    width={616} 
                    height={640} 
                    className="w-full h-auto object-cover rounded-lg" // Added responsive classes
                />
            </div>
        </div>
     );
}
 
export default OurVision;
