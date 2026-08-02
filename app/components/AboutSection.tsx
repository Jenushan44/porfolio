import { Dot } from 'lucide-react';

function AboutSection() {

  return (
    <div className="bg-[#1b1d1f] mx-5 min-h-[350px] border-[#222325] border-2 rounded-md w-1/3">
      <div className='flex gap-2'>
        <p className="ml-3 mt-5 text-[#e4822d]">//</p>
        <p className="mt-5 text-white">about me</p>
        <Dot className='mt-5 text-[#e4822d]' />
      </div>
      <p className='text-white text-md mt-2 mx-3'>Fourth-year Computer Science student at Toronto Metropolitan University focused on building practical software and continuously improving my skills.</p>
      <p className='text-white text-md mt-2 mx-3'>- Interests: Software Development, Cybersecurity, AI/ML</p>
      <p className='text-white text-md mt-2 mx-3'>- Current Focus: React, Next.js, FastAPI, PostgreSQL</p>
      <p className='text-white text-md mt-2 mx-3'>- Learning: Docker, Linux, Homelab</p>
      <p className='text-white text-md mt-2 mx-3'>- Looking For: Software Engineering internships</p>

    </div>
  );
}

export default AboutSection;