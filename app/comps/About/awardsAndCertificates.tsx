"use client"
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel"


type Props = {
    src: string;
    alt: string;
 
}

const CertificateCard = ({src, alt}: Props) => {
    return (
        <Image src={src} alt={alt} width={299} height={282.8} /> // TODO: Update alt text with specific certificate/award name
    )
}

export const AwardsAndCertificates = () => {
    return ( 
        <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[61px] font-medium text-center md:text-left">Our Awards and Certificates</h3>
            <div className="py-8">
                <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
                >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {/* Added flex justify-center to center the card */}
                    <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center">
                        <CertificateCard src="/PlaceholderImage.png" alt="Image of a certificate or award received by Automation Works" />
                    </CarouselItem>
                     {/* Added flex justify-center to center the card */}
                    <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center">
                        <CertificateCard src="/PlaceholderImage.png" alt="Image of a certificate or award received by Automation Works" />
                    </CarouselItem>
                     {/* Added flex justify-center to center the card */}
                    <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center">
                        <CertificateCard src="/PlaceholderImage.png" alt="Image of a certificate or award received by Automation Works" />
                    </CarouselItem>
                     {/* Added flex justify-center to center the card */}
                    <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center">
                        <CertificateCard src="/PlaceholderImage.png" alt="Image of a certificate or award received by Automation Works" />
                    </CarouselItem>src
                     {/* Added flex justify-center to center the card */}
                    <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center">
                        <CertificateCard src="/PlaceholderImage.png" alt="Image of a certificate or award received by Automation Works" />
                    </CarouselItem>
                     {/* Added flex justify-center to center the card */}
                    <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center">
                        <CertificateCard src="/PlaceholderImage.png" alt="Image of a certificate or award received by Automation Works" />
                    </CarouselItem>

                </CarouselContent>
                <CarouselPrevious />
                </Carousel>
            </div>
        </div>
    );
}
