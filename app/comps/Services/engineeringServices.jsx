import Link from "next/link"
export default function EngineeringServices() {
    return (
      // Use container for consistency
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center justify-center mb-10 gap-4 text-center"> {/* Added text-center */}
            {/* Responsive heading size */}
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold">
                Engineering Services
            </h2>
            {/* Responsive text size */}
            <p className="text-base md:text-lg">Customized Solutions for Your Unique Needs</p>
        </div>

        {/* Adjusted gap, padding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 p-0 md:p-6 border-2 border-[#232A58] rounded-lg">
          {/* Added border-b for mobile, md:border-r and md:border-b-0 for desktop. Adjusted padding */}
          <div className="flex flex-col py-8 px-4 md:px-2 gap-4 border-b-2 md:border-b-0 md:border-r-2 border-[#232A58]"> {/* Increased gap */}
            {/* Responsive heading size */}
            <h3 className="font-semibold text-2xl md:text-[32px]">Development and Design</h3>
            <p className="text-sm md:text-[14px] text-muted-foreground">
                Our team of expert engineers will design and implement tailored solutions to meet your unique needs.
            </p>
            {/* Responsive button */}
            <Link href="contact">
            <button className="text-black bg-white border-2 border-black hover:bg-gray-100 px-5 py-3 w-full sm:w-auto text-base rounded-[10px] mt-auto"> {/* Added mt-auto to push button down */}
            Contact Us Today
          </button>
          </Link>
          </div>

          {/* Added border-b for mobile, md:border-r and md:border-b-0 for desktop. Adjusted padding */}
          <div className="flex flex-col py-8 px-4 md:px-2 gap-4 border-b-2 md:border-b-0 md:border-r-2 border-[#232A58]"> {/* Increased gap */}
            {/* Responsive heading size */}
            <h3 className="font-semibold text-2xl md:text-[32px]">System Installation</h3>
            <p className="text-sm md:text-[14px] text-muted-foreground">
                Receive expert installation services for seamless integration into your existing infrastructure.
            </p>
             {/* Responsive button */}
             <Link href="contact">
            <button className="text-black bg-white border-2 border-black hover:bg-gray-100 px-5 py-3 w-full sm:w-auto text-base rounded-[10px] mt-auto"> {/* Added mt-auto */}
            Contact Us Today
          </button>
          </Link>
          </div>

          {/* No border needed here. Adjusted padding */}
          <div className="flex flex-col py-8 px-4 md:px-2 gap-4"> {/* Increased gap */}
             {/* Responsive heading size */}
            <h3 className="font-semibold text-2xl md:text-[32px]">Training and Support</h3>
            <p className="text-sm md:text-[14px] text-muted-foreground">
                Empower your personnel with the knowledge and skills necessary to successfully operate your new systems.
            </p>
             {/* Responsive button */}
             <Link href="contact">
            <button className="text-black bg-white border-2 border-black hover:bg-gray-100 px-5 py-3 w-full sm:w-auto text-base rounded-[10px] mt-auto"> {/* Added mt-auto */}
            Contact Us Today
          </button>
          </Link>
          </div>
        </div>
      </div>
    )
  }
