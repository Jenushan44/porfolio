import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ibmPlexMono } from "../fonts";

type CardProps = { image: string; name: string; description: string; skills: string[]; project_url: string; github_url: string; };

function ProjectCard({ name, image, description, skills, project_url, github_url, }: CardProps) {
  return (
    <div className="group/project relative h-full">


      <div className="absolute top-0 bottom-0 right-0 left-0 translate-x-[7px] translate-y-[7px] border border-[#1b88f2]/20 bg-[#0a4f93]/10 transition-all duration-300 group-hover/project:translate-x-[10px] group-hover/project:translate-y-[10px]" />
      <div className="relative flex h-full flex-col border border-[#1b88f2]/50 bg-[#061a33]/95 transition-all duration-300 group-hover/project:-translate-x-[2px] group-hover/project:-translate-y-[2px] group-hover/project:border-[#1b88f2]">


        <div className="relative overflow-hidden">

          <Image className="h-[280px] w-full transition-all duration-500 group-hover/project:scale-[1.01] group-hover/project:brightness-110" src={image} alt={`${name} screenshot`} width={700} height={400} />


          <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-[#1b88f2]" />
          <div className="absolute right-3 top-3 h-5 w-5 border-r border-t border-[#1b88f2]" />
          <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-[#1b88f2]" />
          <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#1b88f2]" />

        </div>


        <div className="flex flex-1 flex-col p-6">
          <div className="w-fit">

            <p className="text-2xl font-semibold text-white transition-all duration-300 group-hover/project:translate-x-2">{name}</p>
            <div className="mt-2 h-[2px] w-[0px] bg-[#1b88f2] transition-all duration-500 group-hover/project:w-full" />

          </div>


          <p className="mt-5 flex-1 leading-7 text-white/70">{description}</p>


          <div className="mt-6 flex flex-wrap gap-2">

            {skills.map((skill) => (
              <p key={skill} className={`${ibmPlexMono.className} border border-[#1b88f2]/40 bg-[#1b88f2]/5 px-3 py-1.5 text-xs text-[#1b88f2] transition-all duration-300 hover:border-[#1b88f2] hover:bg-[#1b88f2]/10`}>{skill}</p>
            ))}

          </div>


          <div className="mt-6 h-[1px] w-full bg-[#1b88f2]/30" />
          <div className="mt-5 flex items-center gap-4">

            <a href={project_url} target="_blank" className="flex items-center gap-2 border border-[#1b88f2] px-8 py-3 text-md text-[#d8ecff] shadow-[3px_3px_0_#1b88f2] transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
              View Project<ExternalLink size={20} />
            </a>

            <a href={github_url} target="_blank" className="flex items-center gap-2 border border-[#1b88f2] px-5 py-3 text-md text-[#d8ecff] shadow-[3px_3px_0_#1b88f2] transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
              GitHub<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="h-6 w-6 invert" />
            </a>

          </div>

        </div>
        <div className="absolute right-0 top-0 h-7 w-7 border-r-2 border-t-2 border-[#1b88f2]" />

      </div>
    </div>
  );
}

export default ProjectCard;