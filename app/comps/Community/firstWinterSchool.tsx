import Image from "next/image";
const FirstWinterSchool = () => {
    return (
        // Use max-width, center, responsive flex direction, padding, and gap
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10 px-4 py-10 md:py-16 lg:py-20 items-center">
             {/* Responsive image container and image */}
             <div className="w-full md:w-1/2">
                <Image 
                    src={"/FirstWinterSchoolImage.png"} 
                    width={631.96} // Keep original width for aspect ratio calculation
                    height={640}  // Keep original height for aspect ratio calculation
                    alt={"Image of people involved in the Automation Works winter school"}
                    className="w-full h-auto object-cover rounded-lg" // Make image responsive
                />
            </div>
            {/* Responsive width and text sizes */}
            <div className="flex flex-col justify-center gap-4 w-full md:w-1/2">
                <h3 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">The First Winter School</h3>
                <p className="text-base md:text-lg lg:text-[18px]">We launched a technology workshop at Automation Works, inviting 4-5 local high school students. The response was overwhelming, leading us to organize a full-fledged Winter School at the SSK Lecture Hall, accommodating 50 grade 11/12 learners. We partnered with esteemed institutions like Stellenbosch University, CPUT, and industry leaders to provide hands-on exposure to modern technology.</p>
            </div>
        </div>
     );
}
 
export default FirstWinterSchool;
