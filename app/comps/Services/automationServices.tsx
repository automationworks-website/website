
import Link from "next/link";
export default function AutomationServices() {
  return (
    // Use container for consistency, adjust max-width if needed
    <div className="container mx-auto px-4 py-10">
      {/* Changed to flex-col md:flex-row, added gap */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 md:gap-0">
        {/* Responsive heading size */}
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-medium text-center md:text-left">
          Automation Services: Streamline Your Operations
        </h2>
        {/* Responsive button width and size */}
        <Link href="/contact">
          <button className="text-white bg-[#232A58] hover:bg-[#1f2351] px-5 py-3 w-full sm:w-auto md:w-[182px] text-base md:text-[18px] rounded-[10px]">
            Contact Us Today
          </button>
        </Link>
      </div>

      {/* Adjusted gap, padding */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 p-0 md:p-6 border-2 border-[#232A58] rounded-lg">
        {/* Added border-b for mobile, md:border-r and md:border-b-0 for desktop */}
        <div className="flex flex-col py-8 px-4 md:px-2 gap-3 border-b-2 md:border-b-0 md:border-r-2 border-[#232A58]">
          {/* Responsive heading size */}
          <h3 className="font-semibold text-2xl md:text-[32px]">Process Automation</h3>
          <p className="text-sm md:text-[14px] text-muted-foreground">
            Streamline workflows and reduce manual errors with custom automation solutions
          </p>
        </div>

        {/* Added border-b for mobile, md:border-r and md:border-b-0 for desktop */}
        <div className="flex flex-col py-8 px-4 md:px-2 gap-3 border-b-2 md:border-b-0 md:border-r-2 border-[#232A58]">
          {/* Responsive heading size */}
          <h3 className="font-semibold text-2xl md:text-[32px]">System Integration</h3>
          <p className="text-sm md:text-[14px] text-muted-foreground">
            Seamlessly connect disparate systems and data sources for enhanced visibility and control
          </p>
        </div>

        {/* No border needed here for mobile or desktop */}
        <div className="flex flex-col py-8 px-4 md:px-2 gap-3">
          {/* Responsive heading size */}
          <h3 className="font-semibold text-2xl md:text-[32px]">Design and Build</h3>
          <p className="text-sm md:text-[14px] text-muted-foreground">
            Leverage our complete design and build option for process automation or industrial control systems projects
          </p>
        </div>
      </div>
    </div>
  )
}
