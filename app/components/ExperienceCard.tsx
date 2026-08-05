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

    <div className="w-full max-w-[560px] border-2 border-[#1b88f2]/40 bg-[#061a33]/90 p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#1b88f2] group-hover:bg-[#08203d] group-hover:shadow-[0_0_24px_rgba(27,136,242,0.2)]">
      <p className="mt-4 text-[#1b88f2] ml-5">{date}</p>
      <div className="flex flex-col">
        <p className="text-white mt-4 ml-5 text-2xl">{title}</p>
        <p className="text-[#1b88f2] ml-5">{company_name}</p>
        <p className="text-white/80 mx-5">{description}</p>
        <div className="flex gap-2 mb-5 ml-3">
          {skills.map((skill) => (
            <p key={skill} className="bg-[#1b88f2]/10 px-2 py-1 text-[#1b88f2] font-semibold mt-2 ml-2 gap-2 text-xs border-1 rounded-md border-[#1b88f2]">{skill}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard