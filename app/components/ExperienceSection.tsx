import { ChevronUp, ChevronDown } from "lucide-react";
import ExperienceCard from "./ExperienceCard";
import { ibmPlexMono, barlowCondensed } from "../fonts";

function ExperienceSection() {
  return (
    <div id="experience-section" className="relative py-16 sm:py-20 lg:py-28 scroll-mt-5">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">

        <div className="group relative mb-10">
          <p className={`${barlowCondensed.className} pointer-events-none absolute -right-2 -top-8 text-[100px] sm:text-[120px] lg:text-[150px] font-semibold leading-none text-[#1b88f2] opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.4]`}>02</p>

          <div className="relative">
            <p className={`${barlowCondensed.className} text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] font-semibold leading-[0.8] text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#dbeeff] group-hover:drop-shadow-[0_0_10px_rgba(27,136,242,0.35)]`}>Experience</p>
            <p className={`${ibmPlexMono.className} mt-4 text-sm text-white/40`}>My previous internships and work experience in tech.</p>
            <div className="mt-5 h-[1px] w-20 bg-[#1b88f2] transition-all duration-500 group-hover:w-48" />
          </div>
        </div>

        <div className="relative mt-16 lg:mt-20">
          <ChevronUp size={35} className="absolute left-4 top-[-58px] -translate-x-1/2 text-[#1b88f2]/70 lg:left-1/2 lg:top-[-78px]" />
          <div className="absolute left-4 top-[-40px] h-[calc(100%+80px)] w-[2px] bg-[#1b88f2]/30 lg:left-1/2 lg:top-[-60px] lg:h-[calc(100%+120px)] lg:-translate-x-1/2" />
          <ChevronDown size={35} className="absolute bottom-[-58px] left-4 -translate-x-1/2 text-[#1b88f2]/70 lg:bottom-[-78px] lg:left-1/2" />

          <div className="relative z-10 flex flex-col gap-20">

            <div className="group/atj relative ml-10 flex w-[calc(100%-2.5rem)] justify-start lg:ml-0 lg:mr-auto lg:w-1/2 lg:justify-end lg:pr-20">
              <div className="absolute right-0 top-1/2 hidden h-[2px] w-20 -translate-y-1/2 bg-[#1b88f2]/35 transition-all duration-300 group-hover/atj:bg-[#1b88f2] lg:block" />
              <div className="absolute left-[-31px] top-1/2 z-20 h-3 w-3 -translate-y-1/2 rotate-45 border border-[#1b88f2] bg-[#061a33] transition-all duration-300 group-hover/atj:scale-125 group-hover/atj:bg-[#1b88f2] group-hover/atj:shadow-[0_0_12px_rgba(27,136,242,0.7)] lg:left-auto lg:right-[-6px]" />
              <ExperienceCard date="Mar 2026 - May 2026" title="Web Development Intern" company_name="ATJ Consulting Inc." bullets={["Built responsive frontend features using React and Next.js, including maps, filters, deal cards, and data-driven UI components.", "Tested frontend changes, debugged user-facing issues, and made updates based on stakeholder feedback.", "Improved page layouts, component behavior, and mobile responsiveness for a smoother user experience.",]} skills={["React", "Next.js", "JavaScript", "Git"]} />
            </div>



            <div className="group/meritrium relative ml-10 flex w-[calc(100%-2.5rem)] justify-start lg:ml-auto lg:w-1/2 lg:pl-20">
              <div className="absolute left-0 top-1/2 hidden h-[2px] w-20 -translate-y-1/2 bg-[#1b88f2]/35 transition-all duration-300 group-hover/meritrium:bg-[#1b88f2] lg:block" />
              <div className="absolute left-[-31px] top-1/2 z-20 h-3 w-3 -translate-y-1/2 rotate-45 border border-[#1b88f2] bg-[#061a33] transition-all duration-300 group-hover/meritrium:scale-125 group-hover/meritrium:bg-[#1b88f2] group-hover/meritrium:shadow-[0_0_12px_rgba(27,136,242,0.7)] lg:left-[-6px]" />
              <ExperienceCard date="Aug 2025 - Nov 2025" title="Software Engineer Intern" company_name="Meritrium Omniventures" bullets={["Developed backend services and optimized SQL queries for financial reporting, data validation, and transaction workflows.", "Designed normalized relational database schemas to improve data integrity, consistency, and query reliability.", "Traced backend execution flows and performed regression testing to improve platform stability and reduce recurring defects.",]} skills={["Python", "React", "PostgreSQL"]} />
            </div>



            <div className="group/flowealth relative ml-10 flex w-[calc(100%-2.5rem)] justify-start lg:ml-0 lg:mr-auto lg:w-1/2 lg:justify-end lg:pr-20">
              <div className="absolute right-0 top-1/2 hidden h-[2px] w-20 -translate-y-1/2 bg-[#1b88f2]/35 transition-all duration-300 group-hover/flowealth:bg-[#1b88f2] lg:block" />
              <div className="absolute left-[-31px] top-1/2 z-20 h-3 w-3 -translate-y-1/2 rotate-45 border border-[#1b88f2] bg-[#061a33] transition-all duration-300 group-hover/flowealth:scale-125 group-hover/flowealth:bg-[#1b88f2] group-hover/flowealth:shadow-[0_0_12px_rgba(27,136,242,0.7)] lg:left-auto lg:right-[-6px]" />
              <ExperienceCard date="Aug 2025 - Aug 2025" title="IT Intern" company_name="Flowealth Academy" bullets={["Designed and structured online course modules using standardized templates to improve consistency and usability.", "Organized documentation and content workflows to support version control and team collaboration.", "Improved accessibility and layout of instructional materials through systematic formatting and design updates.",]} skills={["Technical Support", "IT Troubleshooting", "Documentation"]} />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ExperienceSection;