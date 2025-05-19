import Image from "next/image";
import Link from 'next/link';

const HeroSectionServices = () => {
    return (
        // Added container mx-auto px-4 for padding and centering
        <div className="container mx-auto px-4 flex flex-col gap-10 py-10">
            {/* Changed to flex-col, lg:flex-row for responsiveness. Added items-center */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                {/* Removed fixed width, adjusted text size for responsiveness */}
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold lg:w-1/2 text-center lg:text-left">Expert Solutions for Optimized Operations</h1>
                {/* Removed fixed width, adjusted text size */}
                <div className="flex flex-col lg:w-1/2 gap-7 items-center lg:items-start">
                    <p className="text-lg md:text-xl text-center lg:text-left">Streamline operations, reduce costs, and revolutionize your industrial processes with our advanced automation solutions, carefully designed to significantly enhance efficiency, productivity, and overall performance, while minimizing errors and maximizing results.</p>
                    {/* Made button width responsive */}
                    <Link href="/contact" >
                        <button className="rounded-[10px] text-base md:text-lg font-semibold text-white bg-black w-full sm:w-auto lg:w-[482px] h-auto px-5 py-3 lg:h-[55px]">Take the First Step Towards a More Efficient Tomorrow</button>
                    </Link>
                </div>
            </div>
            {/* Added w-full h-auto for responsive image scaling */}
            <Image src={"/PlaceholderImageServices.jpg"} alt="Just a placeholder for now" width={1330} height={690} className="w-full h-auto object-cover rounded-lg" />
        </div>
     );
}
 
export default HeroSectionServices;
