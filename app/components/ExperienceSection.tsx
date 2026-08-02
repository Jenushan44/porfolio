import { Dot } from "lucide-react"
import ExperienceCard from "./ExperienceCard"

function ExperienceSection() {

  return (
    <div className="bg-[#1b1d1f] mx-5 min-h-[350px] border-[#222325] border-2 rounded-md mb-2">
      <div className='flex gap-2'>
        <p className="ml-3 mt-5 text-[#e4822d]">//</p>
        <p className="mt-5 text-white">experience</p>
        <Dot className='mt-5 text-[#e4822d]' />
      </div>
      <div>
        <ExperienceCard date="Mar 2026 - May 2026" title="Web Development Intern" company_name="ATJ Consulting Inc." description="Developed and improved responsive features for a production web application using React and Next.js. Worked closely with stakeholders to implement UI enhancements, fix bugs, and improve the user experience across desktop and mobile devices." skills={["React", "Next.js", "JavaScript", "Git"]} />
        <ExperienceCard date="Aug 2025 - Nov 2025" title="Software Engineer Intern" company_name="Meritrium Omniventures" description="Built backend functionality and optimized SQL queries for financial reporting and transaction workflows. Designed relational database schemas and tested backend systems to improve reliability and data integrity." skills={["Python", "React", "PostgreSQL",]} />
        <ExperienceCard date="Oct 2025 - Nov 2025" title="Undergraduate Research Assistant" company_name="Toronto Metropolitan University" description="Assisted with research on programming language architecture by reviewing academic literature and documenting technical findings. Contributed research summaries and discussions supporting the ZAG architecture project." skills={["Technical Research", "Documentation", "System Design"]} />
        <ExperienceCard date="Aug 2025 - Aug 2025" title="IT Intern" company_name="Flowealth Academy" description="Provided technical support and assisted with maintaining internal systems while supporting student recruitment initiatives. Helped troubleshoot technical issues and improve technology-driven workflows in a remote team environment." skills={["Technical Support", "IT Troubleshooting", "Documentation"]} />
      </div>
    </div>
  )
}

export default ExperienceSection