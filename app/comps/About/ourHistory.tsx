import Image from "next/image"

interface cardProps {
    label: string;
    title: string;
    paragraph: string;
}

const HistoryCards = ({label, title, paragraph} : cardProps) => {
    return (
        <div className="flex flex-col gap-3 w-full p-5 sm:p-7 bg-[#232A58] rounded-[20px] sm:rounded-[30px]">
            <p className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-[#EEA320] ">{label}</p>
            <p className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white">{title}</p>
            <p className="text-base sm:text-lg lg:text-[20px] text-white">{paragraph}</p>
        </div>
    )
}

const OurHistory = () => {
    return ( 
        <div className="flex flex-col lg:flex-row py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto justify-between items-center lg:items-start gap-8 lg:gap-4">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 order-1 lg:order-none">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold mb-4 text-center lg:text-left">A Legacy of Innovation: Our History</h1>
                <p className="text-base sm:text-lg text-center lg:text-left">Streamline operations, reduce costs, and revolutionize your industrial processes with our advanced automation solutions, carefully designed to significantly enhance efficiency, productivity, and overall performance, while minimizing errors and maximizing results.</p>
            </div>
            {/* Timeline Visual - Hidden on mobile, shown on lg screens */}
            <div className="order-3 lg:order-none lg:h-auto hidden lg:flex justify-center lg:block"> 
                {/* On large screens, use original image. On smaller screens, maybe hide or use a different visual. For now, let's keep it but allow flexbox to manage spacing. */}
                 {/* The height might still be an issue on smaller screens if not handled carefully. Consider conditional rendering or CSS height adjustments if needed. */}
                <Image src={"/OurHistoryTimelineLine.png"} alt={"Automation Works history timeline"} width={20} height={1172} className="h-auto max-h-[80vh] lg:max-h-[1172px] w-auto" />
            </div>
            {/* History Cards */}
            <div className="w-full lg:w-1/2 flex flex-col gap-5 order-2 lg:order-none">
                <HistoryCards label={"01"} title={"2001: Company Founded"} paragraph="Automation Works was established as a leading supplier of automated processing systems and equipment, offering a comprehensive range of services and backed by a 100% guarantee." />
                <HistoryCards label={"02"} title={"Expansion"} paragraph="Expanded service offerings and client base, solidifying position in the market." /> {/* Example different content */}
                <HistoryCards label={"03"} title={"Innovation Milestone"} paragraph="Introduced groundbreaking technology or service, setting new industry standards." /> {/* Example different content */}
                <HistoryCards label={"04"} title={"Present Day"} paragraph="Continuing to lead with cutting-edge automation solutions and exceptional customer support." /> {/* Example different content */}
            </div>
        </div>
     );
}
 
export default OurHistory;
