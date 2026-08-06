"use client";

import { OrbitingCircles } from "@/app/components/ui/orbiting-circles";
import { bebasNeue, ibmPlexMono } from "../fonts";

type Technology = {
  name: string;
  icon: string;
};

const innerTechnologies: Technology[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", },
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
    <div className="group relative flex h-20 w-20 items-center justify-center rounded-full border border-[#1b88f2]/60 bg-[#001432] shadow-[0_0_18px_rgba(27,136,242,0.18)] transition-all duration-300 hover:scale-110 hover:border-[#55aaff] hover:shadow-[0_0_25px_rgba(27,136,242,0.45)]">
      <img src={technology.icon} alt={technology.name} className="h-12 w-12 object-contain" />
      <p className="pointer-events-none absolute top-[90px] whitespace-nowrap border border-[#1b88f2]/40 px-2 py-1 text-[10px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">{technology.name}</p>
    </div>
  );
}

function TechnologiesSection() {
  return (
    <div className="mx-5 py-20">
      <div className="mx-auto w-full max-w-[1400px]">
        <p className={`${bebasNeue.className} blueprint-text-white text-[75px] leading-[0.82] tracking-[0.015em] text-white/90`}>TECHNOLOGIES</p>
        <div className="mt-14 flex justify-center">
          <div className="relative flex min-h-[850px] items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,136,242,0.12),transparent_62%)]" />
            <div className="relative flex h-[800px] w-[800px] items-center justify-center">
              <div className="z-10 flex h-32 w-32 items-center justify-center rounded-full border-2 border-[#1b88f2] bg-[#001432] text-3xl text-[#d8ecff] shadow-[0_0_35px_rgba(27,136,242,0.35)]">
                &lt;/&gt;
              </div>

              <OrbitingCircles radius={200} duration={24} iconSize={80} path>
                {innerTechnologies.map((technology) => (
                  <TechnologyIcon key={technology.name} technology={technology} />
                ))}
              </OrbitingCircles>

              <OrbitingCircles radius={340} duration={38} iconSize={80} reverse path>
                {outerTechnologies.map((technology) => (
                  <TechnologyIcon key={technology.name} technology={technology} />
                ))}
              </OrbitingCircles>
            </div>
          </div>
        </div>
      </div>

      <div className={`${ibmPlexMono.className} mx-auto mt-6 w-full max-w-[900px] border border-[#1b88f2]/40 bg-[#001432]/60 px-8 py-6`}>
        <p className="text-xs uppercase tracking-[0.18em] text-[#1b88f2]">Technology Stack</p>
        <div className="mt-5 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <p className="text-sm text-white">Languages</p>
            <div className="mt-2 text-xs leading-5 text-white/50">
              <p>- Python</p>
              <p>- TypeScript</p>
              <p>- JavaScript</p>
              <p>- SQL</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-white">Frameworks</p>
            <div className="mt-2 text-xs leading-5 text-white/50">
              <p>- React</p>
              <p>- Next.js</p>
              <p>- FastAPI</p>
              <p>- Tailwind CSS</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-white">Data</p>
            <div className="mt-2 text-xs leading-5 text-white/50">
              <p>- PostgreSQL</p>
              <p>- SQLite</p>
              <p>- Pandas</p>
              <p>- NumPy</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-white">Tools</p>
            <div className="mt-2 text-xs leading-5 text-white/50">
              <p>- Docker</p>
              <p>- Git</p>
              <p>- Linux</p>
              <p>- Proxmox</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologiesSection;