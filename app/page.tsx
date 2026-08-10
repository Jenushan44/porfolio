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
import ScrollReveal from "./components/ScrollReveal";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">

      <div className="absolute bottom-0 left-0 right-0 top-0 z-10">
        <CursorGrid cellSize={30} color="#1b88f2" radius={120} falloff="smooth" holdTime={100} fadeDuration={300} lineWidth={1.25} maxOpacity={0.8} fillOpacity={0} gridOpacity={0.12} cellRadius={0} clickPulse={true} pulseSpeed={2500} />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="mb-20 flex-1">
          <BannerSection />

          <div className="py-25">
            <ScrollReveal>
              <AboutSection />
            </ScrollReveal>
          </div>

          <div className="py-25">
            <ScrollReveal>
              <ExperienceSection />
            </ScrollReveal>
          </div>

          <div className="py-25">
            <ScrollReveal>
              <ProjectSection />
            </ScrollReveal>
          </div>

          <div className="py-25">
            <ScrollReveal>
              <TechnologySection />
            </ScrollReveal>
          </div>

          <div className="py-25">
            <ScrollReveal>
              <HomeLabSection />
            </ScrollReveal>
          </div>

          <div className="py-25">
            <ScrollReveal>
              <CertificationSection />
            </ScrollReveal>
          </div>

          <div className="py-25">
            <ScrollReveal>
              <ContactSection />
            </ScrollReveal>
          </div>
        </main>
        <Footer />

      </div>
    </div>
  );
}