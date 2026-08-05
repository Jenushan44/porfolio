import { Dot } from "lucide-react"
import ExperienceCard from "./ExperienceCard"
import { bebasNeue, ibmPlexMono } from "../fonts";

function ExperienceSection() {

  return (
    <div className="mx-5 py-12">
      <div className="mx-auto w-full max-w-[1400px]">
        <p className={`${bebasNeue.className} blueprint-text-white text-[75px] leading-[0.82] text-white/90 tracking-[0.015em] mb-10 mt-5 ml-2`}>EXPERIENCE</p>
        <div className="relative mt-25 mb-25">
          <div className="relative">
            <div className="absolute left-1/2 top-[-60px] h-[calc(100%+120px)] w-[3px] -translate-x-1/2">
              <div className="h-full w-full bg-[#1b88f2]/40" />
              <div className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-[#1b88f2]" />
              <div className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-[#1b88f2]" />
            </div>

            <div className="relative z-10 flex flex-col gap-16">
              <div className="group relative mr-auto flex w-1/2 justify-end pr-20">
                <div className="absolute right-0 top-1/2 h-[3px] w-20 -translate-y-1/2 bg-[#1b88f2]/40 transition-all duration-300 group-hover:bg-[#1b88f2]" />
                <div className="absolute right-[-7px] top-1/2 z-20 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#1b88f2] bg-[#061a33] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#1b88f2] group-hover:shadow-[0_0_12px_rgba(27,136,242,0.8)]" />
                <ExperienceCard date="Mar 2026 - May 2026" title="Web Development Intern" company_name="ATJ Consulting Inc." description="Developed and improved responsive features for a production web application using React and Next.js. Worked closely with stakeholders to implement UI enhancements, fix bugs, and improve the user experience across desktop and mobile devices." skills={["React", "Next.js", "JavaScript", "Git"]} />
              </div>

              <div className="group relative ml-auto flex w-1/2 justify-start pl-20">
                <div className="absolute left-0 top-1/2 h-[3px] w-20 -translate-y-1/2 bg-[#1b88f2]/40 transition-all duration-300 group-hover:bg-[#1b88f2]" />
                <div className="absolute left-[-7px] top-1/2 z-20 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#1b88f2] bg-[#061a33] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#1b88f2] group-hover:shadow-[0_0_12px_rgba(27,136,242,0.8)]" />
                <ExperienceCard date="Aug 2025 - Nov 2025" title="Software Engineer Intern" company_name="Meritrium Omniventures" description="Built backend functionality and optimized SQL queries for financial reporting and transaction workflows. Designed relational database schemas and tested backend systems to improve reliability and data integrity." skills={["Python", "React", "PostgreSQL",]} />
              </div>


              <div className="group relative mr-auto flex w-1/2 justify-end pr-20">
                <div className="absolute right-0 top-1/2 h-[3px] w-20 -translate-y-1/2 bg-[#1b88f2]/40 transition-all duration-300 group-hover:bg-[#1b88f2]" />
                <div className="absolute right-[-7px] top-1/2 z-20 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#1b88f2] bg-[#061a33] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#1b88f2] group-hover:shadow-[0_0_12px_rgba(27,136,242,0.8)]" />
                <ExperienceCard date="Aug 2025 - Aug 2025" title="IT Intern" company_name="Flowealth Academy" description="Provided technical support and assisted with maintaining internal systems while supporting student recruitment initiatives. Helped troubleshoot technical issues and improve technology-driven workflows in a remote team environment." skills={["Technical Support", "IT Troubleshooting", "Documentation"]} />
              </div>
            </div>

          </div>

        </div>
      </div >
    </div>
  )
}

export default ExperienceSection