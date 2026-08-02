import { Dot } from "lucide-react"

type CardProps = {
  date: string;
  title: string;
  company_name: string;
  description: string;
  skills: string[];
}

function ExperienceCard({ date, title, company_name, description, skills }: CardProps) {

  return (

    <div className="flex mt-3">
      <p className="mt-4 text-[#e4822d] ml-10">{date}</p>
      <div>
        <Dot width={50} height={50} className="m-0 p-0 text-[#e4822d]" />
        <div className="ml-6 mt-0 w-[3px] h-[100px] bg-[#e4822d]" />
      </div>
      <div className="flex flex-col">
        <p className="text-white mt-4">{title}</p>
        <p className="text-white/60">{company_name}</p>
        <p className="text-white/60">{description}</p>
        <div className="flex gap-2">
          {skills.map((skill) => (
            <p key={skill} className="bg-[#2b2d2f] px-2 py-1 text-white font-semibold mt-2 ml-2 gap-2 text-xs border-2 border-[#222325]">{skill}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard