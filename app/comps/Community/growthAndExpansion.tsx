import Image from 'next/image'

const GrowthAndExpansion = () => {
    return (
        // Use max-width, center, responsive flex direction, padding, and gap
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10 px-4 py-10 md:py-16 lg:py-20 items-center">
            {/* Responsive width and text sizes, adjust order for mobile */}
            <div className="flex flex-col justify-center gap-4 w-full md:w-1/2 order-2 md:order-1">
                <h3 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">Growth and Expansion</h3>
                <p className="text-base md:text-lg lg:text-[18px]">Over the past 7 years, we've successfully hosted the Winter School in Swellendam and an additional event in Cape Town, reaching over 1200 grade 9 learners. We've also organized technology Expos for teachers and learners, with the Minister of Education, Debbie Schafer, attending the 2017 Winter School.</p>
            </div>
            {/* Responsive image container and image */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
                <Image 
                    src={"/GrowthAndExpansionImage.png"} 
                    width={631.96} // Keep original width for aspect ratio calculation
                    height={640}  // Keep original height for aspect ratio calculation
                    alt={"Image of people involved in the Automation Works winter school"}
                    className="w-full h-auto object-cover rounded-lg" // Make image responsive
                />
            </div>
        </div>
     );
}
 
export default GrowthAndExpansion;
