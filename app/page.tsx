import Navbar from "./components/Navbar"
import Image from "next/image";
import Link from "next/link";
import githubLogo from "./assets/github-logo.png"
import linkedinLogo from "./assets/linkedin-logo.png"
import gmailLogo from "./assets/gmail-logo.png"
import gmailButtonLogo from "./assets/gmail-button-logo.png"
import { MessageCircle } from 'lucide-react';
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import TechnologySection from "./components/TechnologySection";
import ExperienceSection from "./components/ExperienceSection";
import CurrentlyLearning from "./components/CurrentlyLearning";

export default function Home() {
  return (
    <div className="flex bg-[#0f1112]">
      <Navbar></Navbar>
      <main className="flex-1">
        <div className="mb-2 mt-2 flex">
          <AboutSection />
          <TechnologySection />
        </div>
        <ExperienceSection />
        <ProjectSection />
        <div>
          <CurrentlyLearning />
        </div>
      </main>



    </div>
  );
}
