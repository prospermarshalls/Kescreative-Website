import { AboutUsTop } from "../components/rating-folder/AboutUsTop";
import { AboutUs } from "../layouts/Sections/About-us/AboutUs";
import { ProjectHandlingContainer } from "../layouts/Sections/Handling-process/ProjectHandlingContainer";
import Hero from "../layouts/Sections/hero/Hero";
import { ProjectsContainer } from "../layouts/Sections/Projects/ProjectsContainer";
import { StaffContainer } from "../layouts/Sections/staff-container/StaffContainer";

export function MainPage() {
  return (
    <div className=" font-poppins   text-[#fdfde1]">
      <Hero />
      <AboutUs />
      <ProjectsContainer />
      <ProjectHandlingContainer />
      <AboutUsTop />
      <StaffContainer />
    </div>
  );
}
