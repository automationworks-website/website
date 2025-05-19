"use client"
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel"


type Props = {
    name: string;
    role: string;
 
}

const CardComp = ({name, role}: Props) => {
    return (
        // Use relative positioning on the parent for the absolute child
        <div className="relative flex justify-center items-end w-full"> 
            {/* Image takes full width of its container, height adjusts automatically */}
            <Image 
                src={"/PlaceholderImage.png"} 
                alt={`Image of ${name}, ${role}`} // More specific alt text
                width={299} 
                height={282.8} 
                className="w-full h-auto rounded-lg" // Make image responsive and add rounding
            />
            {/* Adjusted overlay: relative width, centered horizontally */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 p-3 sm:p-4 bg-white rounded-[15px] shadow-md">
                <p className="text-sm sm:text-base font-bold text-center">{name}</p>
                <p className="text-xs sm:text-sm text-center">{role}</p>
            </div>
        </div>
    )
}

export const OurTeam = () => {
    return ( 
        // Responsive container and padding
        <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col">
            {/* Responsive headings, centered text */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[61px] font-medium text-center">Our Team</h3>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[61px] font-light text-center mb-6">Of Professionals</h3>
            <div className="py-8">
                <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
                >
                <CarouselContent className="-ml-2 md:-ml-4">
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <CardComp name="Emily Chen" role="Software Engineer" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <CardComp name="Liam Brown" role="Data Scientist" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <CardComp name="Ava Lee" role="Product Manager" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <CardComp name="Ethan Kim" role="UX Designer" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <CardComp name="Sophia Patel" role="DevOps Engineer" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <CardComp name="Jackson Hall" role="Solutions Architect" />
                    </CarouselItem>

                </CarouselContent>
                <CarouselPrevious />
                </Carousel>
            </div>
        </div>
    );
}
