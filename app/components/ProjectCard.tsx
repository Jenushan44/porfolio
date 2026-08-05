import Image from "next/image"
import { Dot, ExternalLink } from "lucide-react"

type CardProps = {
  image: string;
  name: string;
  description: string;
  skills: string[];
  project_url: string;
  github_url: string;
}

function ProjectCard({ name, image, description, skills, project_url, github_url }: CardProps) {

  return (
    <div className="group flex w-[540px] flex-col overflow-hidden rounded-xl border-2 border-[#1b88f2] bg-[#001432] pb-3 shadow-[10px_10px_0_#0a4f93] transition-all duration-300 ease-out hover:-translate-x-[10px] hover:-translate-y-[10px] hover:shadow-[20px_20px_0_#0a4f93]">
      <div className="flex justify-center">
        <Image className="h-[240px] w-full border-b border-[#1b88f2] transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.02]" src={image} alt={`${name} screenshot`} width={500} height={300} />
      </div>

      <div>
        <div className="ml-5 mt-3 w-fit overflow-hidden">
          <p className="text-2xl font-semibold text-white">{name}</p>
          <div className="mt-1 h-[2px] w-full -translate-x-full bg-[#1b88f2] transition-transform duration-300 group-hover:translate-x-0" />
        </div>
        <p className="text-white/60 text-md mx-5 mt-3 mb-2">{description}</p>
        <div className="flex">
          {skills.map((skill) => (
            <p key={skill} className="px-2 py-1 text-[#1b88f2] bg-[#1b88f2]/10 font-semibold mt-2 ml-5 gap-2 text-sm border-1 border-[#1b88f2] rounded-sm">{skill}</p>
          ))}
        </div>
      </div>
      <div className="mx-auto h-[0.5px] w-[95%] bg-[#1b88f2] mt-4" />

      <div className="mt-2 flex items-center justify-center mr-5 gap-3">
        <div className="mx-auto py-5">
          <a href={project_url} target="_blank" className=" flex w-fit items-center justify-center gap-3 border border-[#1b88f2] px-3 py-2 text-white shadow-[3px_3px_0_#1b88f2] transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
            View Project<ExternalLink />
          </a>
        </div>
        <div className="mx-auto h-[95%] w-[0.5px] bg-[#1b88f2]" />
        <div className="mx-auto py-5">
          <a href={github_url} target="_blank" className=" flex w-fit items-center justify-center gap-3 border border-[#1b88f2] px-3 py-2 text-white shadow-[3px_3px_0_#1b88f2] transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
            GitHub <img className="w-6 h-6 invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          </a>
        </div>
      </div>
    </div >
  )
}

export default ProjectCard