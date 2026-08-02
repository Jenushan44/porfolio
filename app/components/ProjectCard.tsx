import Image from "next/image"

type CardProps = {
  image: string;
  name: string;
  description: string;
  skills: string[];
}

function ProjectCard({ name, image, description, skills }: CardProps) {

  return (
    <div className="border-2 border-[#222325] rounded-xl overflow-hidden w-[360px] pb-3">
      <Image className="h-[200px] overflow-hidden" src={image} alt="Project screenshot" width={360} height={360} />
      <p className="text-white font-semibold mt-2 ml-2">{name}</p>
      <p className="text-white/60 text-sm ml-2">{description}</p>
      <div className="flex">
        {skills.map((skill) => (
          <p key={skill} className=" bg-[#2b2d2f] px-2 py-1 text-white font-semibold mt-2 ml-2 gap-2 text-xs border-2 border-[#222325]">{skill}</p>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard