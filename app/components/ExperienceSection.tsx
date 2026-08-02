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
        <ExperienceCard date="Mar 2026 - May 2026" title="Web Development Intern" company_name="ATJ Consulting Inc." description="test" skills={["ex1", "ex2", "ex3"]} />
      </div>
    </div>
  )
}

export default ExperienceSection