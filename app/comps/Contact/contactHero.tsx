import Image from "next/image";
import Link from "next/link";
import ContactForm from "../contactForm";

const ContactHero = () => {
    return (
        // Use max-width, padding, and responsive flex direction
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center items-start">
            {/* Contact Info Section */}
            <div className="flex flex-col w-full lg:w-1/2">
                {/* Responsive text size */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Contact Us</h1>
                <p className="text-lg sm:text-xl mb-6 text-gray-600">Our friendly team would love to hear from you.</p>
                {/* Removed fixed width, adjusted gap */}
                <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-3 items-center">
                        <Image src={"/EmailIcon.svg"} width={20} height={16} alt="Email Icon"/>
                        <Link href={"mailto:info@automationworks.co.za"} className="text-blue-600 hover:underline break-all">info@automationworks.co.za</Link>
                    </div>
                    {/* Removed misplaced closing div from here */}
                    <div className="flex flex-row gap-3 items-center">
                        <Image src={"/PhoneIcon.svg"} width={18} height={18} alt="Phone Icon"/>
                        <Link href={"tel:+27119721316"} className="text-blue-600 hover:underline">+27 11 972 1316 (JHB)</Link>
                    </div>
                    <div className="flex flex-row gap-3 items-start"> {/* Changed items-center to items-start for long addresses */}
                        <Image src={"/LocationIcon.svg"} width={14} height={20} alt="Location Icon" className="mt-1"/> {/* Added margin-top for alignment */}
                        {/* Added target="_blank" and rel="noopener noreferrer" for external links */}
                        <Link href={"https://maps.google.com/?q=9+Wonderboom+Street,+Glen+Marais,+Kempton+Park,+South+Africa"} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">9 Wonderboom Street, Glen Marais, Kempton Park, South Africa</Link>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <Image src={"/PhoneIcon.svg"} width={18} height={18} alt="Phone Icon"/>
                        <Link href={"tel:+27285142558"} className="text-blue-600 hover:underline">+27 28 514 2558 / 2587 (SWD)</Link>
                    </div>
                    <div className="flex flex-row gap-3 items-start"> {/* Changed items-center to items-start */}
                        <Image src={"/LocationIcon.svg"} width={14} height={20} alt="Location Icon" className="mt-1"/> {/* Added margin-top */}
                        <Link href={"https://maps.google.com/?q=Oaktree+Business+Park,+Buffeljagsrivier+6742,+Western+Cape,+South+Africa"} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Oaktree Business Park, Buffeljagsrivier 6742, Western Cape, South Africa</Link>
                    </div>
                </div> {/* Moved the closing div here */}
            </div>
            {/* Contact Form Section */}
            <div className="w-full lg:w-1/2">
                <ContactForm/>
            </div>
        </div>
     );
}
 
export default ContactHero;
