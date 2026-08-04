import { Dot } from 'lucide-react';
import { bebasNeue } from "../fonts";

function Navbar() {

  return (
    <div className="relative h-25 flex justify-between items-center bg-[#001432] border-b-1 border-[#1684ff]/30">
      <div className="ml-5">
        <div className="text-white text-5xl font-medium flex">
          <p className={`${bebasNeue.className} blueprint-text-white text-[70px]`}>J</p>
          <p className={`${bebasNeue.className} blueprint-text-white text-[70px]`}>P</p>
        </div>
        <div className="w-[30px] h-[3px] bg-[#1684ff]" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4 cursor-pointer">
        <div className="group flex flex-col items-center py-3 hover:border-b-1 hover:border-[#1684ff] transition duration-500 ease-in-out">
          <a href="#home-section" className="text-white/80 cursor-pointer group-hover:text-[#1684ff] transition duration-500 ease-in-out" >HOME</a>
        </div>

        <div className="group flex flex-col items-center py-3 hover:border-b-2 hover:border-[#1684ff] transition duration-500 ease-in-out">
          <a href="#about-section" className="text-white/80 cursor-pointer group-hover:text-[#1684ff] transition duration-500 ease-in-out" >ABOUT</a>
        </div>

        <div className="group flex flex-col items-center py-3 hover:border-b-2 hover:border-[#1684ff] transition duration-500 ease-in-out">
          <a href="#project-section" className="text-white/80 cursor-pointer group-hover:text-[#1684ff] transition duration-500 ease-in-out" >PROJECTS</a>
        </div>

        <div className="group flex flex-col items-center py-3 hover:border-b-2 hover:border-[#1684ff] transition duration-500 ease-in-out">
          <a href="#experience-section" className="text-white/80 cursor-pointer group-hover:text-[#1684ff] transition duration-500 ease-in-out" >EXPERIENCE</a>
        </div>

        <div className="group flex flex-col items-center py-3 hover:border-b-2 hover:border-[#1684ff] transition duration-500 ease-in-out">
          <a href="#homelab-section" className="text-white/80 cursor-pointer group-hover:text-[#1684ff] transition duration-500 ease-in-out" >HOMELAB</a>
        </div>

        <a href="#contact-section" className="text-[#1684ff] cursor-pointer group-hover:text-[#1684ff] transition duration-500 ease-in-out" >
          <div className="group flex flex-col items-center py-3 hover:border-b-2 hover:border-[#1684ff] transition duration-500 ease-in-out">
            <p className='text-white/80 cursor-pointer group-hover:text-[#1684ff] transition duration-500 ease-in-out'>CONTACT</p>
          </div>
        </a>

      </div>

      <div className='flex justify-center items-center'>
        <p className='text-2xl'>[</p>
        <p className='flex mx-2 text-[#1684ff]'>SYSTEM ONLINE</p>
        <p className='text-2xl'>]</p>
        <Dot width={40} height={40} className='text-[#1684ff]' />
      </div>
    </div >
  )
}

export default Navbar