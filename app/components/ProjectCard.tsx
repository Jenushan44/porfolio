import Image from "next/image"

type CardProps = {
  image: string;
  name: string;
  description: string;
  skills: string[];
}

function ProjectCard({ name, image, description, skills }: CardProps) {

  return (
    <div className="border-2 border-[#222325] rounded-xl overflow-hidden w-[350px] pb-3">
      <Image src={image} alt="Project screenshot" width={350} height={350} />
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