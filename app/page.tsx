import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import TechnologySection from "./components/TechnologySection";
import ExperienceSection from "./components/ExperienceSection";
import CurrentlyLearningSection from "./components/CurrentlyLearningSection";
import HomeLabSection from "./components/HomelabSection";
import BannerSection from "./components/BannerSection";
import EducationSection from "./components/EducationSection"

export default function Home() {
  return (
    <div className="blueprint-bg text-white">
      <Navbar />

      <main className="flex-1 mb-20">
        <BannerSection />

        <div className="mb-2 mt-2">
          <AboutSection />
          <EducationSection />
          <TechnologySection />
        </div>

        <ExperienceSection />
        <ProjectSection />
        <HomeLabSection />


        <div className="flex">
        </div>
      </main>
    </div>
  );
}