"use client"
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  // CarouselNext, // You might want to add CarouselNext
} from "@/components/ui/carousel"

// REMINDER: Ensure your app/layout.tsx (or equivalent) has:
// <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
// in the <head>

type Props = {
    name: string;
    role: string;
    // Consider adding an imageUrl prop if each team member has a unique image
    // imageUrl: string; 
}

const CardComp = ({name, role}: Props) => {
    return (
        // Use relative positioning on the parent for the absolute child
        <div className="relative flex justify-center items-end w-full"> 
            {/* Image takes full width of its container, height adjusts automatically */}
            <Image 
                src={"/PlaceholderImage.png"} // Replace with dynamic imageUrl if available
                alt={`Image of ${name}, ${role}`} // More specific alt text
                width={299} // Aspect ratio hint, actual size controlled by CSS
                height={282.8} // Aspect ratio hint
                className="w-full h-auto rounded-lg object-cover" // Make image responsive, add rounding, ensure it covers
                priority={true} // Consider adding priority for images visible in the initial viewport of the carousel
            />
            {/* Adjusted overlay: relative width, centered horizontally */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 p-3 sm:p-4 bg-white rounded-[15px] shadow-md">
                <p className="text-sm sm:text-base font-bold text-center truncate">{name}</p> {/* Added truncate for long names */}
                <p className="text-xs sm:text-sm text-center truncate">{role}</p> {/* Added truncate for long roles */}
            </div>
        </div>
    )
}

export const OurTeam = () => {
    // Dummy data for team members (ideally, this would come from props or state)
    const teamMembers = [
        { name: "Emily Chen", role: "Software Engineer" },
        { name: "Liam Brown", role: "Data Scientist" },
        { name: "Ava Lee", role: "Product Manager" },
        { name: "Ethan Kim", role: "UX Designer" },
        { name: "Sophia Patel", role: "DevOps Engineer" },
        { name: "Jackson Hall", role: "Solutions Architect" },
        { name: "Olivia Green", role: "Marketing Specialist" }, // Example of another member
        { name: "Noah Davis", role: "QA Engineer" },      // Example of another member
    ];

    return ( 
        // Responsive container and padding
        <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col">
            {/* Responsive headings, centered text */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[61px] font-medium text-center">Our Team</h3>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[61px] font-light text-center mb-6 sm:mb-8 md:mb-10">Of Professionals</h3> {/* Adjusted margin bottom for responsiveness */}
            
            <div className="py-8"> {/* Added some vertical padding around the carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {teamMembers.map((member, index) => (
                            <CarouselItem 
                                key={index} 
                                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4" // Explicit basis for sm screens
                            >
                                <CardComp name={member.name} role={member.role} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-[-12px] sm:left-0 md:left-1 top-1/2 -translate-y-1/2 z-10" /> {/* Example positioning for prev/next */}
                    {/* <CarouselNext className="absolute right-[-12px] sm:right-0 md:right-1 top-1/2 -translate-y-1/2 z-10" /> */} {/* Add and style CarouselNext if needed */}
                </Carousel>
            </div>
        </div>
    );
}