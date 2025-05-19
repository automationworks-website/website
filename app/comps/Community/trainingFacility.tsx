import { Button } from "@/components/ui/button";
import Image from "next/image";

const TrainingFacility = () => {
    return (
        // Use max-width, center, padding
        <div className="max-w-screen-xl mx-auto px-4 py-10 md:py-16 lg:py-20">
            {/* Responsive title, fixed border color */}
            <h4 className="text-3xl md:text-4xl lg:text-[48px] font-bold mb-8 md:mb-12 text-center border-b border-b-gray-300 pb-4"> {/* Used gray-300 for border */}
                Automation Works Training Facility
            </h4>
            {/* Responsive flex layout */}
            <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* Responsive image container */}
                <div className="w-full md:w-1/2">
                    <Image 
                        src={"/TrainingFacilityImage.png"} 
                        width={631.96} 
                        height={640} 
                        alt={"Image of people involved in the Automation Works winter school"} 
                        className="w-full h-auto object-cover rounded-lg" // Make image responsive
                    />
                </div>
                {/* Responsive text container */}
                <div className="flex flex-col justify-center gap-4 w-full md:w-1/2">
                    {/* Responsive heading */}
                    <h3 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">Empowering Your Future through Automation</h3>
                    {/* Responsive paragraph, fixed typo */}
                    <p className="text-base md:text-lg lg:text-[18px] mb-5">Our training facility equips students with theoretical and practical skills in automation, networking, and industry processes. We offer hands-on experience with Revolution 4.0 technology, exposure to higher education career paths, and skills training in a supportive environment.</p>
                    {/* Responsive button */}
                    <Button variant="default" className="bg-[#232A58] w-full sm:w-auto text-base md:text-[16px] px-6 py-3 hover:bg-opacity-90 transition-colors self-start">Learn More at Our Training Facility</Button> {/* Adjusted size, padding, alignment */}
                </div>
            </div>
        </div>
     );
}
 
export default TrainingFacility;
