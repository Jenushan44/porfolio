"use client";

import { OrbitingCircles } from "@/app/components/ui/orbiting-circles";
import { bebasNeue, ibmPlexMono } from "../fonts";
import { Code2 } from "lucide-react"

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
    <div className="group/tech relative flex h-[100px] w-[100px] items-center justify-center">


      <div className="absolute h-[72px] w-[72px] translate-x-[4px] translate-y-[4px] border border-[#1b88f2]/20 bg-[#0a4f93]/20 transition-all duration-300 group-hover/tech:translate-x-[7px] group-hover/tech:translate-y-[7px]" />


      <div className="absolute h-[72px] w-[72px] border border-[#1b88f2]/40 bg-[#001432] transition-all duration-300 group-hover/tech:-translate-x-[2px] group-hover/tech:-translate-y-[2px] group-hover/tech:border-[#1b88f2] group-hover/tech:shadow-[0_0_20px_rgba(27,136,242,0.15)]" />

      <img src={technology.icon} alt={technology.name} className="relative z-10 h-12 w-12 transition-all duration-300 group-hover/tech:-translate-x-[2px] group-hover/tech:-translate-y-[2px]" />

      <p className={`${ibmPlexMono.className} absolute -bottom-8 z-20 bg-[#001127] px-3 py-1.5 text-sm text-[#1b88f2] opacity-0 transition-all duration-300 group-hover/tech:-translate-y-1 group-hover/tech:opacity-100`}>{technology.name}</p>

    </div>
  );
}

function TechnologiesSection() {
  return (
    <div id="technology-section" className="relative py-28 scroll-mt-5">
      <div className="mx-auto w-full max-w-[1400px] px-6">

        <p className={`${bebasNeue.className} blueprint-text-white text-[75px] leading-[0.82] tracking-[0.015em] text-white/90`}>TECHNOLOGIES</p>

        <div className="relative mt-12 flex h-[800px] items-center justify-center">


          <div className="absolute h-[600px] w-[600px] rounded-full bg-[#1b88f2]/[0.04] blur-[90px]" />
          <div className="absolute bottom-20 top-20 left-1/2 w-[1px] bg-[#1b88f2]/10" />
          <div className="absolute left-[18%] right-[18%] top-1/2 h-[1px] bg-[#1b88f2]/10" />

          <div className="absolute h-[145px] w-[145px] translate-x-[7px] translate-y-[7px] border border-[#1b88f2]/20 bg-[#0a4f93]/10" />

          <div className="group/core absolute z-20 flex h-[145px] w-[145px] items-center justify-center border border-[#1b88f2]/70 bg-[#001127] transition-all duration-300 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:border-[#1b88f2] hover:shadow-[0_0_30px_rgba(27,136,242,0.15)]">

            <div className="absolute top-2 right-2 bottom-2 left-2 border border-[#1b88f2]/15 transition-all duration-300 group-hover/core:top-1 group-hover/core:right-1 group-hover/core:bottom-1 group-hover/core:left-1" />

            <div className="relative text-center">
              <p className={`${ibmPlexMono.className} text-4xl text-white/90 transition-all duration-300 group-hover/core:text-[#1b88f2]`}><Code2 size={50} className="text-white/90 transition-all duration-300 group-hover/core:text-[#1b88f2] w-50" /></p>
              <p className={`${ibmPlexMono.className} mt-2 text-[10px] text-[#1b88f2]/60`}>TECH STACK</p>
            </div>

            <div className="absolute -left-1 -top-1 h-2 w-2 border-l border-t border-[#1b88f2]" />
            <div className="absolute -right-1 -top-1 h-2 w-2 border-r border-t border-[#1b88f2]" />
            <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-[#1b88f2]" />
            <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-[#1b88f2]" />

          </div>

          <OrbitingCircles radius={210} duration={24} iconSize={100} path>
            {innerTechnologies.map((technology) => (
              <TechnologyIcon key={technology.name} technology={technology} />
            ))}
          </OrbitingCircles>

          <OrbitingCircles radius={350} duration={38} iconSize={100} reverse path>
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