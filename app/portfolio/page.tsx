import type { Metadata } from "next";
import GetInTouch from "../comps/GetInTouch";
import ShowcaseSection from "../comps/Portfolio/ShowcaseSection"; // Import the new component

export const metadata: Metadata = {
  title: "Portfolio | Automation Works",
  description: "View examples of industrial automation and software development projects completed by Automation Works.",
};

const portfolio = () => {
    return (
        <>
            <ShowcaseSection /> {/* Add the ShowcaseSection here */}
            <GetInTouch />
       </>
     );
}

export default portfolio;
