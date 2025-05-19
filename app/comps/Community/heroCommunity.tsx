import Image from "next/image";

export const HeroCommunity = () => {
    return (
        // Use max-w-screen-xl for large screens, px-4 for padding, flex-col default, md:flex-row for medium screens and up
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10 px-4 py-10 md:py-16 lg:py-20">
            {/* Allow image to shrink/grow, maintain aspect ratio */}
            <div className="w-full md:w-1/2">
                <Image 
                    src={"/CommunityHero.png"} 
                    width={633} 
                    height={640} 
                    alt={"Image of children being taught by Automation Works Community"}
                    className="w-full h-auto object-cover rounded-lg" // Make image responsive
                    priority // Add priority as this is likely the LCP image
                />
            </div>
            {/* Adjust width for responsiveness */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                {/* Responsive text sizes */}
                <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight">Welcome to Our Vibrant Community</h1>
                {/* Responsive text size */}
                <p className="text-base md:text-lg lg:text-[18px] mt-4">At Automation Works, we're building a community that empowers individuals and organizations to thrive in the era of automation. Through our initiatives, partnerships, and resources, we aim to foster collaboration, knowledge-sharing, and growth</p>
                {/* Responsive button layout */}
                <div className="flex flex-col sm:flex-row gap-5 py-8">
                    <button className="text-base md:text-[16px] rounded-[10px] py-[8px] px-[20px] bg-[#232A58] text-white hover:bg-opacity-90 transition-colors">Contact Us</button>
                    <button className="text-base md:text-[16px] rounded-[10px] py-[8px] px-[20px] border border-black hover:bg-gray-100 transition-colors">Training Facility</button>
                </div>
            </div>
            
        </div>
    );
}
