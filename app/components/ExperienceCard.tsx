import { ibmPlexMono } from "../fonts";
import { Dot } from "lucide-react"

type CardProps = { date: string; title: string; company_name: string; bullets: string[]; skills: string[]; };

function ExperienceCard({ date, title, company_name, bullets, skills, }: CardProps) {

  return (
    <div className="group/experience relative w-full max-w-[560px]">

      <div className="absolute top-0 bottom-0 right-0 left-0 translate-x-[6px] translate-y-[6px] border border-[#1b88f2]/15 bg-[#0a4f93]/10 transition-all duration-300 group-hover/experience:translate-x-[9px] group-hover/experience:translate-y-[9px]" />
      <div className="relative border-l-2 border-b border-[#1b88f2]/40 bg-[#061a33]/90 p-7 transition-all duration-300 group-hover/experience:-translate-x-[2px] group-hover/experience:-translate-y-[2px] group-hover/experience:border-[#1b88f2]">

        <p className={`${ibmPlexMono.className} text-sm text-[#1b88f2]`}>{date}</p>
        <p className="mt-5 text-2xl text-white transition-all duration-300 group-hover/experience:translate-x-2">{title}</p>
        <p className={`${ibmPlexMono.className} mt-1 text-sm text-[#1b88f2]/80`}>{company_name}</p>

        <div className="mt-5 h-[1px] w-[40%] bg-[#1b88f2]/25 transition-all duration-500 group-hover/experience:w-full group-hover/experience:bg-[#1b88f2]/60" />


        <div className="mt-5 text-white/75">
          {bullets.map((bullet) => (
            <p key={bullet} className={`${ibmPlexMono.className} flex items-start gap-1`}><Dot size={50} className="-mt-[11px]" />{bullet}</p>

          ))}
        </div>


        <div className="mt-6 flex gap-2">
          {skills.map((skill) => (
            <p key={skill} className={`${ibmPlexMono.className} border border-[#1b88f2]/40 bg-[#1b88f2]/5 px-3 py-1.5 text-xs text-[#1b88f2] transition-all duration-300 hover:border-[#1b88f2] hover:bg-[#1b88f2]/10`}>{skill}</p>
          ))}
        </div>


        <div className="absolute right-0 top-0 h-6 w-6 border-r border-t border-[#1b88f2]" />

      </div>
    </div>
  );
}

export default ExperienceCard;