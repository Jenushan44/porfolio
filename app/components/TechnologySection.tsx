"use client";

import { OrbitingCircles } from "@/app/components/ui/orbiting-circles";
import { Code2 } from "lucide-react"
import { bebasNeue, ibmPlexMono, barlowCondensed } from "../fonts";
import { useEffect, useState } from "react";

type Technology = {
  name: string;
  icon: string;
};

const innerTechnologies: Technology[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", },
];

const outerTechnologies: Technology[] = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", },
];

function TechnologyIcon({ technology }: { technology: Technology }) {

  return (
    <div className="group/tech relative flex h-[60px] w-[60px] items-center justify-center sm:h-[75px] sm:w-[75px] lg:h-[100px] lg:w-[100px]">

      <div className="absolute h-[48px] w-[48px] sm:h-[58px] sm:w-[58px] lg:h-[72px] lg:w-[72px] translate-x-[4px] translate-y-[4px] border border-[#1b88f2]/20 bg-[#0a4f93]/20 transition-all duration-300 group-hover/tech:translate-x-[7px] group-hover/tech:translate-y-[7px]" />


      <div className="absolute h-[48px] w-[48px] sm:h-[58px] sm:w-[58px] lg:h-[72px] lg:w-[72px] border border-[#1b88f2]/40 bg-[#001432] transition-all duration-300 group-hover/tech:-translate-x-[2px] group-hover/tech:-translate-y-[2px] group-hover/tech:border-[#1b88f2] group-hover/tech:shadow-[0_0_20px_rgba(27,136,242,0.15)]" />

      <img src={technology.icon} alt={technology.name} className="relative z-10 h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 transition-all duration-300 group-hover/tech:-translate-x-[2px] group-hover/tech:-translate-y-[2px]" />

      <p className={`${ibmPlexMono.className} absolute text-center -bottom-8 z-20 bg-[#001127] px-3 py-1.5 text-sm text-[#1b88f2] opacity-0 transition-all duration-300 group-hover/tech:-translate-y-1 group-hover/tech:opacity-100`}>{technology.name}</p>

    </div>
  );
}

function TechnologiesSection() {

  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState("large");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("small");
      } else if (window.innerWidth < 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div id="technology-section" className="relative py-16 sm:py-20 lg:py-28 scroll-mt-5">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        <div className="group relative mb-10">
          <p className={`${barlowCondensed.className} pointer-events-none absolute -right-2 -top-8 text-[100px] sm:text-[120px] lg:text-[150px] font-semibold leading-none text-[#1b88f2] opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.4]`}>04</p>

          <div className="relative">
            <p className={`${barlowCondensed.className} text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] font-semibold leading-[0.8] text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#dbeeff] group-hover:drop-shadow-[0_0_10px_rgba(27,136,242,0.35)]`}>Technologies</p>
            <p className={`${ibmPlexMono.className} mt-4 text-sm text-white/40`}>The languages, frameworks, and tools I have worked with.</p>
            <div className="mt-5 h-[1px] w-20 bg-[#1b88f2] transition-all duration-500 group-hover:w-48" />
          </div>
        </div>

        <div className="relative mt-10 flex h-[520px] items-center justify-center sm:h-[620px] md:h-[700px] lg:mt-12 lg:h-[800px]">


          <div className="absolute h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] md:h-[520px] md:w-[520px] lg:h-[600px] lg:w-[600px] rounded-full bg-[#1b88f2]/[0.04] blur-[90px]" />
          <div className="absolute bottom-20 top-20 left-1/2 w-[1px] bg-[#1b88f2]/10" />
          <div className="absolute left-[18%] right-[18%] top-1/2 h-[1px] bg-[#1b88f2]/10" />

          <div className="absolute h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] lg:h-[145px] lg:w-[145px] translate-x-[7px] translate-y-[7px] border border-[#1b88f2]/20 bg-[#0a4f93]/10" />

          <div className="group/core absolute z-20 flex h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] lg:h-[145px] lg:w-[145px] items-center justify-center border border-[#1b88f2]/70 bg-[#001127] transition-all duration-300 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:border-[#1b88f2] hover:shadow-[0_0_30px_rgba(27,136,242,0.15)]">

            <div className="absolute top-2 right-2 bottom-2 left-2 border border-[#1b88f2]/15 transition-all duration-300 group-hover/core:top-1 group-hover/core:right-1 group-hover/core:bottom-1 group-hover/core:left-1" />

            <div className="relative text-center">
              <p className={`${ibmPlexMono.className} text-4xl text-white/90 transition-all duration-300 group-hover/core:text-[#1b88f2]`}><Code2 className="h-8 w-8 text-white/90 transition-all duration-300 group-hover/core:text-[#1b88f2] sm:h-10 sm:w-10 lg:h-[50px] lg:w-[50px]" /></p>
              <p className={`${ibmPlexMono.className} mt-2 text-[10px] text-[#1b88f2]/60`}>TECH STACK</p>
            </div>

            <div className="absolute -left-1 -top-1 h-2 w-2 border-l border-t border-[#1b88f2]" />
            <div className="absolute -right-1 -top-1 h-2 w-2 border-r border-t border-[#1b88f2]" />
            <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-[#1b88f2]" />
            <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-[#1b88f2]" />

          </div>

          <OrbitingCircles radius={screenSize === "small" ? 110 : screenSize === "medium" ? 160 : 210} duration={24} iconSize={screenSize === "small" ? 60 : screenSize === "medium" ? 80 : 100} path pathSpeed={50}>
            {innerTechnologies.map((technology) => (
              <TechnologyIcon key={technology.name} technology={technology} />
            ))}
          </OrbitingCircles>

          <OrbitingCircles radius={screenSize === "small" ? 175 : screenSize === "medium" ? 260 : 350} duration={38} iconSize={screenSize === "small" ? 60 : screenSize === "medium" ? 80 : 100} reverse path pathSpeed={50}>
            {outerTechnologies.map((technology) => (
              <TechnologyIcon key={technology.name} technology={technology} />
            ))}
          </OrbitingCircles>

        </div>
      </div>
    </div>
  );
}

export default TechnologiesSection;