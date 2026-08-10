import { ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { ibmPlexMono, barlowCondensed } from "../fonts";

function ProjectSection() {
  return (
    <div id="project-section" className="relative py-28 scroll-mt-5">
      <div className="mx-auto w-full max-w-[1400px] px-6">

        <div className="group relative mb-10">
          <p className={`${barlowCondensed.className} pointer-events-none absolute -right-2 -top-8 text-[150px] font-semibold leading-none text-[#1b88f2] opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.4]`}>03</p>

          <div className="relative">
            <p className={`${barlowCondensed.className} text-[90px] font-semibold leading-[0.8] text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#dbeeff] group-hover:drop-shadow-[0_0_10px_rgba(27,136,242,0.35)]`}>Projects</p>
            <p className={`${ibmPlexMono.className} mt-4 text-sm text-white/40`}>Some of the software projects I’ve worked on in my own time.</p>
            <div className="mt-5 h-[1px] w-20 bg-[#1b88f2] transition-all duration-500 group-hover:w-48" />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">

          <ProjectCard
            name="API Security Analyzer"
            image="/images/api-security-analyzer.png"
            description="Full-stack web application that scans REST APIs for common security vulnerabilities and misconfigurations. Generates risk scores, detailed findings, and remediation recommendations through an interactive dashboard. Includes user authentication, scan history, and report management."
            skills={["Next.js", "TypeScript", "FastAPI", "PostgreSQL"]}
            project_url="https://api-security-analyzer.vercel.app/"
            github_url="https://github.com/Jenushan44/api-security-analyzer"
          />

          <ProjectCard
            name="Soul Eater API"
            image="/images/soul-eater-api.png"
            description="Full-stack REST API and web application built around the Soul Eater anime and manga universe. Browse characters, weapons, abilities, organizations, and story arcs with search and filtering. Features a responsive interface backed by a custom FastAPI backend."
            skills={["Next.js", "TypeScript", "FastAPI", "SQLAlchemy"]}
            project_url="https://soul-eater-api.vercel.app/"
            github_url="https://github.com/Jenushan44/soul-eater-api"
          />

          <ProjectCard
            name="Olympic Performance Analyzer"
            image="/images/olympic-performance-analyzer.png"
            description="Interactive data analytics dashboard exploring more than a century of Olympic history. Analyze medal trends, country performance, and sport specialization through visualizations. Built with Python and modern data analysis libraries to transform large datasets into insights."
            skills={["Python", "Pandas", "Streamlit", "Plotly"]}
            project_url="https://olympic-performance-analyzer.streamlit.app/"
            github_url="https://github.com/Jenushan44/olympic-performance-analyzer"
          />

          <ProjectCard
            name="Credit Card Fraud Detection"
            image="/images/credit-card-fraud-detection.png"
            description="Machine learning project that detects fraudulent credit card transactions in a highly imbalanced dataset. Compared Logistic Regression and Random Forest using precision, recall, F1-score, confusion matrices, ROC curves, and ROC-AUC."
            skills={["Python", "Pandas", "scikit-learn", "Matplotlib"]}
            project_url="https://github.com/Jenushan44/credit-fraud-detection/blob/main/01_fraud_detection.ipynb"
            github_url="https://github.com/Jenushan44/credit-fraud-detection"
          />



        </div>
        <div className="flex justify-center">
          <a href="https://github.com/Jenushan44?tab=repositories" target="_blank" className="bg-[#001432] group/all flex mt-10 justify-center items-center w-80 gap-3 border border-[#1b88f2] px-5 py-5 text-[#d8ecff] text-lg shadow-[0_4px_0_#1b88f2] transition-all duration-150 hover:translate-y-[4px] hover:shadow-none">
            View All Projects<ChevronRight size={25} className="transition-all duration-300 group-hover/all:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;