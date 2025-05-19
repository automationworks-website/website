import type { Metadata } from "next";
import ContactTrainingFacility from "../comps/Community/contactTrainingFacility";
import FirstWinterSchool from "../comps/Community/firstWinterSchool";
import GrowthAndExpansion from "../comps/Community/growthAndExpansion";
import { HeroCommunity } from "../comps/Community/heroCommunity";
import LessonLearned from "../comps/Community/lessonLearned";
import SkillsTraining from "../comps/Community/skillsTraining";
import TrainingFacility from "../comps/Community/trainingFacility";
import WinterSchoolHistory from "../comps/Community/winterSchoolHistory";
import WinterSchoolSection from "../comps/Community/winterSchoolSection";

export const metadata: Metadata = {
  title: "Community & Training | Automation Works",
  description: "Learn about Automation Works' community initiatives, including the Winter School program and skills training, and our partnership with the Automation Works Training Facility.",
};

const community = () => {
    return (
        <>
            <HeroCommunity />

            <section id="winter-school">
                <WinterSchoolSection />
                <WinterSchoolHistory />
                <FirstWinterSchool />
                <GrowthAndExpansion />
            </section>

            <section id="skills-training">
                <SkillsTraining />
            </section>

            <section id="lessons-learned">
                 <LessonLearned />
            </section>

            <section id="training-facility">
                <TrainingFacility />
                <ContactTrainingFacility />
            </section>
        </>
     );}

export default community;
