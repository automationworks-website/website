import type { Metadata } from "next";
import ContactHero from "../comps/Contact/contactHero";
import OfficeHours from "../comps/Contact/officeHours";
import OurLocations from "../comps/Contact/ourLocations";

export const metadata: Metadata = {
  title: "Contact Us | Automation Works",
  description: "Get in touch with Automation Works. Find our office hours, locations, and contact information for inquiries about industrial automation and software development.",
};

const contact = () => {
    return (
        <>
        <ContactHero/>
        <OfficeHours/>
        <OurLocations/>
        </>
     );
}

export default contact;
