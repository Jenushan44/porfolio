import { ChevronUp, ChevronDown } from "lucide-react";
import ExperienceCard from "./ExperienceCard";
import { bebasNeue } from "../fonts";

function ExperienceSection() {
  return (
    <div id="experience-section" className="relative py-28 scroll-mt-5">
      <div className="mx-auto w-full max-w-[1400px] px-6">

        <p className={`${bebasNeue.className} blueprint-text-white mb-10 ml-2 mt-5 text-[75px] leading-[0.82] tracking-[0.015em] text-white/90`}>EXPERIENCE</p>

        <div className="relative mt-20">
          <ChevronUp size={35} className="absolute left-1/2 top-[-78px] -translate-x-1/2 text-[#1b88f2]/70" />
          <div className="absolute left-1/2 top-[-60px] h-[calc(100%+120px)] w-[2px] -translate-x-1/2 bg-[#1b88f2]/30" />
          <ChevronDown size={35} className="absolute bottom-[-78px] left-1/2 -translate-x-1/2 text-[#1b88f2]/70" />

          <div className="relative z-10 flex flex-col gap-20">


            <div className="group/atj relative mr-auto flex w-1/2 justify-end pr-20">
              <div className="absolute right-0 top-1/2 h-[2px] w-20 -translate-y-1/2 bg-[#1b88f2]/35 transition-all duration-300 group-hover/atj:bg-[#1b88f2]" />
              <div className="absolute right-[-6px] top-1/2 z-20 h-3 w-3 -translate-y-1/2 rotate-45 border border-[#1b88f2] bg-[#061a33] transition-all duration-300 group-hover/atj:scale-125 group-hover/atj:bg-[#1b88f2] group-hover/atj:shadow-[0_0_12px_rgba(27,136,242,0.7)]" />
              <ExperienceCard date="Mar 2026 - May 2026" title="Web Development Intern" company_name="ATJ Consulting Inc." bullets={["Built responsive frontend features using React and Next.js, including maps, filters, deal cards, and data-driven UI components.", "Tested frontend changes, debugged user-facing issues, and made updates based on stakeholder feedback.", "Improved page layouts, component behavior, and mobile responsiveness for a smoother user experience.",]} skills={["React", "Next.js", "JavaScript", "Git"]} />
            </div>



            <div className="group/meritrium relative ml-auto flex w-1/2 justify-start pl-20">
              <div className="absolute left-0 top-1/2 h-[2px] w-20 -translate-y-1/2 bg-[#1b88f2]/35 transition-all duration-300 group-hover/meritrium:bg-[#1b88f2]" />
              <div className="absolute left-[-6px] top-1/2 z-20 h-3 w-3 -translate-y-1/2 rotate-45 border border-[#1b88f2] bg-[#061a33] transition-all duration-300 group-hover/meritrium:scale-125 group-hover/meritrium:bg-[#1b88f2] group-hover/meritrium:shadow-[0_0_12px_rgba(27,136,242,0.7)]" />
              <ExperienceCard date="Aug 2025 - Nov 2025" title="Software Engineer Intern" company_name="Meritrium Omniventures" bullets={["Developed backend services and optimized SQL queries for financial reporting, data validation, and transaction workflows.", "Designed normalized relational database schemas to improve data integrity, consistency, and query reliability.", "Traced backend execution flows and performed regression testing to improve platform stability and reduce recurring defects.",]} skills={["Python", "React", "PostgreSQL"]} />
            </div>



            <div className="group/flowealth relative mr-auto flex w-1/2 justify-end pr-20">
              <div className="absolute right-0 top-1/2 h-[2px] w-20 -translate-y-1/2 bg-[#1b88f2]/35 transition-all duration-300 group-hover/flowealth:bg-[#1b88f2]" />
              <div className="absolute right-[-6px] top-1/2 z-20 h-3 w-3 -translate-y-1/2 rotate-45 border border-[#1b88f2] bg-[#061a33] transition-all duration-300 group-hover/flowealth:scale-125 group-hover/flowealth:bg-[#1b88f2] group-hover/flowealth:shadow-[0_0_12px_rgba(27,136,242,0.7)]" />
              <ExperienceCard date="Aug 2025 - Aug 2025" title="IT Intern" company_name="Flowealth Academy" bullets={["Designed and structured online course modules using standardized templates to improve consistency and usability.", "Organized documentation and content workflows to support version control and team collaboration.", "Improved accessibility and layout of instructional materials through systematic formatting and design updates.",]} skills={["Technical Support", "IT Troubleshooting", "Documentation"]} />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ExperienceSection;