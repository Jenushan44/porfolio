import { Dot } from 'lucide-react';
import { bebasNeue, ibmPlexMono } from "../fonts";


function AboutSection() {

  return (
    <div className="mx-5 min-h-[350px] rounded-md w-full">
      <div className='flex gap-2'>
        <p className={`${bebasNeue.className} blueprint-text-white text-[75px] leading-[0.82] text-white/90 tracking-[0.015em]`}>ABOUT ME</p>
      </div>

      <div className='border-1 border-[#1b88f2] w-1/2 mt-2'>
        <p className={`${ibmPlexMono.className} text-[#1b88f2] ml-2 text-xl`}>WHO I AM</p>
        <div className='ml-2 flex gap-2'>
          <p>I'm Jenushan Premkumar, a fourth-year Computer Science student at Toronto Metropolitan University.
            I enjoy building software and learning how systems work behind the scenes. I'm currently focused on full stack development, cybersecurity, AI, and self-hosted infrastructure while building projects that help me become a better engineer.</p>
        </div>
      </div>

    </div>
  );
}

export default AboutSection;