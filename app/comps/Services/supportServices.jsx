import Link from "next/link";
const SupportServices = () => {
    return (
        // Use container, add padding
        <div className="container mx-auto px-4 flex flex-col items-center gap-8 py-10">
            <div className="py-8 text-center"> {/* Added text-center */}
                {/* Responsive heading size */}
                <h3 className="text-3xl md:text-4xl lg:text-[48px] font-bold">
                    Support
                </h3>
                {/* Responsive text size */}
                <p className="text-base md:text-lg lg:text-[18px] mt-2"> {/* Added margin-top */}
                    Ongoing Assistance for Your Peace of Mind
                </p>
            </div>
            {/* Changed to flex-col lg:flex-row, adjusted gap */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 items-stretch justify-center w-full"> {/* Added items-stretch, justify-center, w-full */}
                {/* Responsive width and height, adjusted padding */}
                <div className="w-full lg:w-1/3 h-auto rounded-[30px] md:rounded-[50px] p-1.5 bg-gradient-to-b from-[#91A5C6] via-[#232A58] to-[#91A5C6] z-10" >
                    {/* Adjusted padding, rounded corners */}
                    <div className="px-6 py-8 gap-2 w-full h-full bg-white rounded-[28px] md:rounded-[48px] flex flex-col justify-center text-center lg:text-left"> {/* Added text-center lg:text-left */}
                        {/* Responsive heading size */}
                        <h4 className="text-2xl md:text-[32px] font-bold">After-sales Support</h4>
                        {/* Responsive text size, removed fixed width */}
                        <p className="text-base md:text-lg lg:text-[20px]">Benefit from years of engineering and installation experience with our comprehensive support services.</p>
                    </div>
                </div>
                {/* Responsive width and height, adjusted padding */}
                <div
                    className="w-full lg:w-1/3 h-auto rounded-[30px] md:rounded-[50px] p-1.5 bg-gradient-to-b from-[#91A5C6] via-[#232A58] to-[#91A5C6] z-10"
                >
                    {/* Adjusted padding, rounded corners */}
                    <div className="px-6 py-8 gap-2 w-full h-full bg-white rounded-[28px] md:rounded-[48px] flex flex-col justify-center text-center"> {/* Added text-center */}
                        {/* Responsive heading size */}
                        <h4 className="text-2xl md:text-[32px] font-bold">Breakdown Support</h4>
                        {/* Responsive text size, removed fixed width */}
                        <p className="text-base md:text-lg lg:text-[20px]"> Get prompt assistance with breakdowns and repairs, minimizing downtime and ensuring your operations run smoothly.</p>
                    </div>
                </div>
                {/* Responsive width and height, adjusted padding */}
                <div
                    className="w-full lg:w-1/3 h-auto rounded-[30px] md:rounded-[50px] p-1.5 bg-gradient-to-b from-[#91A5C6] via-[#232A58] to-[#91A5C6] z-10"
                >
                     {/* Adjusted padding, rounded corners */}
                    <div className="px-6 py-8 gap-2 w-full h-full bg-white rounded-[28px] md:rounded-[48px] flex flex-col justify-center text-center lg:text-left"> {/* Added text-center lg:text-left */}
                        {/* Responsive heading size */}
                        <h4 className="text-2xl md:text-[32px] font-bold">Spare Parts Backup</h4>
                        {/* Responsive text size, removed fixed width */}
                        <p className="text-base md:text-lg lg:text-[20px]">Ensure continuity with our comprehensive spare parts inventory, featuring a full range of parts and components</p>
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
 
export default SupportServices;
