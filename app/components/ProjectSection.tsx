import { Dot } from 'lucide-react';
import ProjectCard from './ProjectCard';

function ProjectSection() {
  return (
    <div className="bg-[#1b1d1f] mx-5 min-h-[350px] border-[#222325] border-2 rounded-md">
      <div className='flex gap-2'>
        <p className="ml-3 mt-5 text-[#e4822d]">//</p>
        <p className="mt-5 text-white">featured projects</p>
        <Dot className='mt-5 text-[#e4822d]' />

      </div>

      <div className='mt-2 mb-2 ml-2'>
        <ProjectCard name='API Security Analyzer' image='/images/api-security-analyzer.png' description='Scans APIs for security vulnerabilities and misconfiguration. Generates detailed reports with risk scoring' skills={["Next.js", "TypeScript", "FastAPI", "PostgreSQL",]} />
      </div>
    </div>
  );
}

export default ProjectSection 