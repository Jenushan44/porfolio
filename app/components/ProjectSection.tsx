import { Dot } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { bebasNeue, ibmPlexMono } from "../fonts";

function ProjectSection() {
  return (
    <div className="mx-5">
      <div className='mx-auto w-fit'>
        <p className={`${bebasNeue.className} flex justify-start blueprint-text-white text-[75px] leading-[0.82] text-white/90 tracking-[0.015em] mb-10 mt-5 ml-2`}>PROJECTS</p>
        <div className='mt-2 mb-2 ml-2 flex gap-10 justify-center'>
          <ProjectCard name='API Security Analyzer' image='/images/api-security-analyzer.png' description='Full-stack web application that scans REST APIs for common security vulnerabilities and misconfigurations. Generates risk scores, detailed findings, and remediation recommendations through an interactive dashboard. Includes user authentication, scan history, and report management.' skills={["Next.js", "TypeScript", "FastAPI", "PostgreSQL",]} project_url='https://api-security-analyzer.vercel.app/' github_url='https://github.com/Jenushan44/api-security-analyzer' />
          <ProjectCard name='Soul Eater API' image='/images/soul-eater-api.png' description='Full-stack REST API and web application built around the Soul Eater anime and manga universe. Browse characters, weapons, abilities, organizations, and story arcs with search and filtering. Features a responsive interface backed by a custom FastAPI backend.' skills={["Next.js", "TypeScript", "FastAPI", "SQLAlchemy",]} project_url='https://soul-eater-api.vercel.app/' github_url='https://github.com/Jenushan44/soul-eater-api' />
          <ProjectCard name='Olympic Performance Analyzer' image='/images/olympic-performance-analyzer.png' description='Interactive data analytics dashboard exploring more than a century of Olympic history. Analyze medal trends, country performance, and sport specialization through visualizations. Built with Python and modern data analysis libraries to transform large datasets into insights.' skills={["Python", "Pandas", "Streamlit", "Plotly",]} project_url='https://olympic-performance-analyzer.streamlit.app/' github_url='https://github.com/Jenushan44/olympic-performance-analyzer' />
        </div>
      </div>
    </div>
  );
}

export default ProjectSection 