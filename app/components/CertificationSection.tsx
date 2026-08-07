import { bebasNeue, ibmPlexMono } from "../fonts";
import CertificationCard from "./CertificationCard";


function CertificationSection() {

  return (

    <div className="mt-10">
      <div className="mx-auto w-fit">
        <p className={`${bebasNeue.className} blueprint-text-white text-[75px] leading-[0.82] text-white/90 tracking-[0.015em]`}>CERTIFICATIONS</p>
        <div className="flex justify-center gap-10 mt-10">
          <CertificationCard image_url="/images/python-for-everybody-certification.png" pdf_url="/images/python-for-everybody.pdf" name="Python for everybody" issuer="University of Michigan" year="Jul 15, 2025" />
          <CertificationCard image_url="/images/data-structures-and-algorithms-analysis-certification.png" pdf_url="/images/data-structures-and-algorithm-analysis-certification.pdf" name="Foundations of Data Structures and Algorithm Analysis" issuer="packt" year="Aug 12, 2025" />
          <CertificationCard image_url="/images/databases-and-sql-for-data-science-certification.png" pdf_url="/images/databases-and-sql-for-data-science-with-python.pdf" name="Databases and SQL for Data Science with Python" issuer="IBM" year="Jul 29, 2025" />
          <CertificationCard image_url="/images/prompt-engineering-certification.png" pdf_url="/images/prompt-engineering-certification.pdf" name="Prompt Engineering Certification" issuer="IBM" year="Aug 14, 2025" />
        </div>
      </div>
    </div>
  )
}

export default CertificationSection