import { AwardsAndCertificates } from "../comps/About/awardsAndCertificates";
import OurHistory from "../comps/About/ourHistory";
import OurMission from "../comps/About/ourMission";
import { OurTeam } from "../comps/About/ourTeam";
import OurVision from "../comps/About/ourVision";
import GetInTouch from "../comps/GetInTouch";
import SocialProof from "../comps/Home/socialProof";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Automation Works",
  description: "Learn about the history, mission, vision, and team behind Automation Works. Discover our commitment to industrial automation and software development excellence.",
};

const about = () => {
    return (
        <>
        <section id="our-history">
          <OurHistory/>
        </section>
        <section id="our-mission">
          <OurMission/>
        </section>
        <section id="our-vision">
          <OurVision/>
        </section>
        <section id="our-team">
          <OurTeam/>
        </section>
        {/* Assuming SocialProof corresponds to 'Our Partners' */}
        <section id="our-partners">
          <SocialProof/>
        </section>
        <section id="awards-and-certificates">
          <AwardsAndCertificates/>
        </section>

        {/* GetInTouch is typically not linked from the main nav dropdown */}
        <GetInTouch/>
        </>
     );
}

export default about;
