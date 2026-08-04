import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import TechnologySection from "./components/TechnologySection";
import ExperienceSection from "./components/ExperienceSection";
import CurrentlyLearningSection from "./components/CurrentlyLearningSection";
import HomeLabSection from "./components/HomelabSection";
import BannerSection from "./components/BannerSection";

export default function Home() {
  return (
    <div className="blueprint-bg text-white">
      <Navbar />

      <main className="flex-1">
        <BannerSection />

        <div className="mb-2 mt-2 flex">
          <AboutSection />
          <TechnologySection />
        </div>

        <ExperienceSection />
        <ProjectSection />

        <div className="flex">
          <CurrentlyLearningSection />
          <HomeLabSection />
        </div>
      </main>
    </div>
  );
}