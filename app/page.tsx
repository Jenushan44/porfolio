import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import TechnologySection from "./components/TechnologySection";
import ExperienceSection from "./components/ExperienceSection";
import HomeLabSection from "./components/HomelabSection";
import BannerSection from "./components/BannerSection";
import CertificationSection from "./components/CertificationSection";
import ContactSection from "./components/ContactSection";
import CursorGrid from "./components/CursorGrid";

export default function Home() {
  return (
    <div className="relative min-h-screen">

      <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
        <CursorGrid cellSize={30} color="#1b88f2" radius={120} falloff="smooth" holdTime={200} fadeDuration={600} lineWidth={2} maxOpacity={1} fillOpacity={0} gridOpacity={0.12} cellRadius={0} clickPulse={true} pulseSpeed={2000} />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="flex-1 mb-20">
          <BannerSection />

          <div className="mb-2 mt-2">
            <AboutSection />
            <TechnologySection />
          </div>

          <ExperienceSection />
          <ProjectSection />
          <HomeLabSection />
          <CertificationSection />
          <ContactSection />

        </main>
      </div>
    </div>
  );
}