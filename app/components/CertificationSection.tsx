import { bebasNeue } from "../fonts";
import CertificationCard from "./CertificationCard";

function CertificationSection() {
  return (
    <div id="certification-section" className="mt-10 scroll-mt-30">
      <div className="mx-auto w-full max-w-[1400px] px-6">

        <p className={`${bebasNeue.className} blueprint-text-white text-[75px] leading-[0.82] tracking-[0.015em] text-white/90`}>CERTIFICATIONS</p>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">

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