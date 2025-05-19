import Link from "next/link"
const ConsultationsSection = () => {
    return (
        // Use container, add padding
        <div className="container mx-auto px-4 flex flex-col items-center gap-8 py-10">
            <div className="py-8 text-center"> {/* Added text-center */}
                {/* Responsive heading size */}
                <h3 className="text-3xl md:text-4xl lg:text-[48px] font-bold">
                    Consultations
                </h3>
                {/* Responsive text size */}
                <p className="text-base md:text-lg lg:text-[18px] mt-2"> {/* Added margin-top */}
                    Expert Guidance for Your Success
                </p>
            </div>
            {/* Changed to flex-col lg:flex-row, adjusted gap */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 items-stretch justify-center w-full"> {/* Added items-stretch, justify-center, w-full */}
                {/* Responsive width and height, adjusted padding */}
                <div className="w-full lg:w-1/3 h-auto rounded-[30px] md:rounded-[50px] p-1.5 bg-gradient-to-b from-[#91A5C6] via-[#232A58] to-[#91A5C6] z-10" >
                    {/* Adjusted padding, rounded corners */}
                    <div className="px-6 py-8 gap-2 w-full h-full bg-white rounded-[28px] md:rounded-[48px] flex flex-col justify-center text-center lg:text-left"> {/* Added text-center lg:text-left */}
                        {/* Responsive heading size */}
                        <h4 className="text-2xl md:text-[32px] font-bold">Needs Assessment</h4>
                        {/* Responsive text size, removed fixed width */}
                        <p className="text-base md:text-lg lg:text-[20px]">Identify areas for improvement and opportunities for growth with our comprehensive assessments.</p>
                    </div>
                </div>
                {/* Responsive width and height, adjusted padding */}
                <div
                    className="w-full lg:w-1/3 h-auto rounded-[30px] md:rounded-[50px] p-1.5 bg-gradient-to-b from-[#91A5C6] via-[#232A58] to-[#91A5C6] z-10"
                >
                    {/* Adjusted padding, rounded corners */}
                    <div className="px-6 py-8 gap-2 w-full h-full bg-white rounded-[28px] md:rounded-[48px] flex flex-col justify-center text-center"> {/* Added text-center */}
                        {/* Responsive heading size */}
                        <h4 className="text-2xl md:text-[32px] font-bold">System Design</h4>
                        {/* Responsive text size, removed fixed width */}
                        <p className="text-base md:text-lg lg:text-[20px]"> Develop efficient and effective systems that meet operational requirements</p>
                    </div>
                </div>
                {/* Responsive width and height, adjusted padding */}
                <div
                    className="w-full lg:w-1/3 h-auto rounded-[30px] md:rounded-[50px] p-1.5 bg-gradient-to-b from-[#91A5C6] via-[#232A58] to-[#91A5C6] z-10"
                >
                     {/* Adjusted padding, rounded corners */}
                    <div className="px-6 py-8 gap-2 w-full h-full bg-white rounded-[28px] md:rounded-[48px] flex flex-col justify-center text-center lg:text-left"> {/* Added text-center lg:text-left */}
                        {/* Responsive heading size */}
                        <h4 className="text-2xl md:text-[32px] font-bold">Expansion Planning</h4>
                        {/* Responsive text size, removed fixed width */}
                        <p className="text-base md:text-lg lg:text-[20px]">Ensure scalability and flexibility in our designs, so your systems can adapt to changing demands and growth</p>
                    </div>
                </div>

            </div>
            <div className="py-8 w-full flex justify-center"> {/* Added w-full flex justify-center */}
                {/* Responsive button width and size */}
                <Link href="/contact">
                    <button className="text-white bg-[#232A58] hover:bg-[#1f2351] px-5 py-3 w-full sm:w-auto md:w-[182px] text-base md:text-[18px] rounded-[10px]">
                        Contact Us Today
                    </button>
                </Link>
            </div>
        </div>

     );
}
 
export default ConsultationsSection;
