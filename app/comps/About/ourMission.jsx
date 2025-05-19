import Image from "next/image";

const OurMission = () => {
    return ( 
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
                {/* Ensure image scales correctly within its container */}
                <Image 
                    src={"/OurMissionImage.jpg"} 
                    alt="Image of gears with a lightbulb inside shining bright" 
                    width={616} 
                    height={640} 
                    className="w-full h-auto object-cover rounded-lg" // Added responsive classes
                />
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Mission</h2>
                <p className="text-base sm:text-lg">At Automation Works, our mission is to empower businesses to reach new heights of efficiency and productivity through innovative automation solutions. We strive to deliver exceptional value to our clients by providing tailored solutions that meet their unique needs, backed by unparalleled support and expertise.</p>
            </div>
        </div>
     );
}
 
export default OurMission;
