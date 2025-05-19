import type { Metadata } from "next";
import HeroSectionServices from '@/app/comps/Services/heroSection';
import AutomationServices from '../comps/Services/automationServices';
import ConsultationsSection from '../comps/Services/consultationsSection';
import EngineeringServices from '../comps/Services/engineeringServices';
import SupportServices from '../comps/Services/supportServices';
import GetInTouch from '../comps/GetInTouch';

export const metadata: Metadata = {
  title: "Services | Automation Works",
  description: "Explore the comprehensive industrial automation, engineering, consultation, and support services offered by Automation Works.",
};

const services = () => {
    return (
        <>
            <HeroSectionServices />

            <section id="automation-services">
                <AutomationServices />
            </section>

            <section id="consultations">
                <ConsultationsSection />
            </section>

            <section id="engineering-services">
                <EngineeringServices />
            </section>

            <section id="support-services">
                <SupportServices />
            </section>

            <section id="get-in-touch">
                <GetInTouch />
            </section>
        </>
     );
}

export default services;
