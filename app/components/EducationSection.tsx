import { bebasNeue, ibmPlexMono } from "../fonts";
import Image from "next/image";
import { CalendarDays, MapPin, Star } from "lucide-react"

function EducationSection() {

  return (
    <div className="mx-5 min-h-[350px] rounded-md w-full flex">
      <div>
        <div className='flex gap-2'>
          <p className={`${bebasNeue.className} blueprint-text-white text-[75px] leading-[0.82] text-white/90 tracking-[0.015em]`}>EDUCATION</p>
        </div>
        <div className="border-1 border-[#1b88f2] w-full mr-5 flex items-center">
          <div className="">
            <p className="mt-5 ml-5 text-[#1b88f2] text-lg">UNIVERSITY</p>
            <Image className="ml-5 mt-5" width={200} height={200} src="/images/tmu-logo.png" alt="TMU logo" />
          </div>
          <div className="ml-10 mb-10">
            <p className="text-2xl mt-10">Toronto Metropolitan University (TMU)</p>
            <p className="text-[#1b88f2] text-xl">Bachelor of Computer Science</p>
            <p className="mt-5">Building a strong foundation in computer science with coursework in algorithms, data strctures, software engineering, databases, operating systems and more.</p>
            <p className="flex gap-2 mt-3 items-center"><CalendarDays /> 2023 - 2027 (Expected)</p>
            <p className="flex gap-2 mt-3 items-center"><MapPin /> Toronto, Ontario, Canada</p>
            <p className="flex gap-2 mt-3 items-center"><Star /> Dean's List: Fall 2024, Fall 2025 - Winter 2026</p>
          </div>
        </div>
      </div>

      <div>
        <p className="mt-5 ml-5 text-[#1b88f2] text-lg">RELEVANT COURSEWORK</p>
      </div>
    </div>
  );
}

export default EducationSection