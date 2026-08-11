import { ibmPlexMono, barlowCondensed } from "../fonts";
import CertificationCard from "./CertificationCard";

function CertificationSection() {
  return (
    <div id="certification-section" className="mt-10 py-16 sm:py-20 lg:py-28 scroll-mt-30">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">

        <div className="group relative mb-10">
          <p className={`${barlowCondensed.className} pointer-events-none absolute -right-2 -top-8 text-[100px] sm:text-[120px] lg:text-[150px] font-semibold leading-none text-[#1b88f2] opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.4]`}>06</p>

          <div className="relative">
            <p className={`${barlowCondensed.className} text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] font-semibold leading-[0.8] text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#dbeeff] group-hover:drop-shadow-[0_0_10px_rgba(27,136,242,0.35)]`}>Certifications</p>
            <p className={`${ibmPlexMono.className} mt-4 text-sm text-white/40`}>Certifications that I have completed outside of my university courses.</p>
            <div className="mt-5 h-[1px] w-20 bg-[#1b88f2] transition-all duration-500 group-hover:w-48" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">

          <CertificationCard
            image_url="/images/python-for-everybody-certification.png"
            pdf_url="/images/python-for-everybody.pdf"
            name="Python for Everybody"
            issuer="University of Michigan"
            year="Jul 15, 2025"
          />

          <CertificationCard
            image_url="/images/data-structures-and-algorithms-analysis-certification.png"
            pdf_url="/images/data-structures-and-algorithm-analysis-certification.pdf"
            name="Foundations of Data Structures and Algorithm Analysis"
            issuer="Packt"
            year="Aug 12, 2025"
          />

          <CertificationCard
            image_url="/images/databases-and-sql-for-data-science-certification.png"
            pdf_url="/images/databases-and-sql-for-data-science-with-python.pdf"
            name="Databases and SQL for Data Science with Python"
            issuer="IBM"
            year="Jul 29, 2025"
          />

          <CertificationCard
            image_url="/images/prompt-engineering-certification.png"
            pdf_url="/images/prompt-engineering-certification.pdf"
            name="Prompt Engineering Certification"
            issuer="IBM"
            year="Aug 14, 2025"
          />

        </div>
      </div>
    </div>
  );
}

export default CertificationSection;