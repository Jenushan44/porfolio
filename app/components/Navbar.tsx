import { House, User, FolderClosed, BriefcaseBusiness, Server, Mail, FileText, BookOpen } from 'lucide-react';

function Navbar() {

  return (
    <nav className="w-[150px] h-screen flex flex-col items-center bg-[#0c0e10] border-r-2 border-[#181a1c]">
      <div className="mb-10">
        <div className="text-white text-5xl font-medium mt-10 flex">
          <p>J</p>
          <p>P</p>
        </div>
        <div className="w-[30px] h-[3px] bg-[#e4822d]" />
      </div>

      <div className="flex flex-col gap-4 w-full cursor-pointer">
        <div className="group flex flex-col items-center py-3 hover:bg-[#e4822d]/10 hover:border-l-2 hover:border-[#e4822d]">
          <House className="text-[#9c9ea0] group-hover:text-[#e4822d]" />
          <a href="#home-section" className="text-[#9c9ea0] cursor-pointer group-hover:text-[#e4822d]" >HOME</a>
        </div>

        <div className="group flex flex-col items-center py-3 hover:bg-[#e4822d]/10 hover:border-l-2 hover:border-[#e4822d]">
          <User className="text-[#9c9ea0] group-hover:text-[#e4822d]" />
          <a href="#about-section" className="text-[#9c9ea0] cursor-pointer group-hover:text-[#e4822d]" >ABOUT</a>
        </div>

        <div className="group flex flex-col items-center py-3 hover:bg-[#e4822d]/10 hover:border-l-2 hover:border-[#e4822d]">
          <FolderClosed className="text-[#9c9ea0] group-hover:text-[#e4822d]" />
          <a href="#project-section" className="text-[#9c9ea0] cursor-pointer group-hover:text-[#e4822d]" >PROJECTS</a>
        </div>

        <div className="group flex flex-col items-center py-3 hover:bg-[#e4822d]/10 hover:border-l-2 hover:border-[#e4822d]">
          <BriefcaseBusiness className="text-[#9c9ea0] group-hover:text-[#e4822d]" />
          <a href="#experience-section" className="text-[#9c9ea0] cursor-pointer group-hover:text-[#e4822d]" >EXPERIENCE</a>
        </div>

        <div className="group flex flex-col items-center py-3 hover:bg-[#e4822d]/10 hover:border-l-2 hover:border-[#e4822d]">
          <Server className="text-[#9c9ea0] group-hover:text-[#e4822d]" />
          <a href="#homelab-section" className="text-[#9c9ea0] cursor-pointer group-hover:text-[#e4822d]" >HOMELAB</a>
        </div>

        <div className="group flex flex-col items-center py-3 hover:bg-[#e4822d]/10 hover:border-l-2 hover:border-[#e4822d]">
          <BookOpen className="text-[#9c9ea0] group-hover:text-[#e4822d]" />
          <a href="#coursework-section" className="text-[#9c9ea0] cursor-pointer group-hover:text-[#e4822d]" >COURSEWORK</a>
        </div>

        <div className="group flex flex-col items-center py-3 hover:bg-[#e4822d]/10 hover:border-l-2 hover:border-[#e4822d]">
          <FileText className="text-[#9c9ea0] group-hover:text-[#e4822d]" />
          <a href="#resume-section" className="text-[#9c9ea0] cursor-pointer group-hover:text-[#e4822d]" >RESUME</a>
        </div>

        <a href="#contact-section" className="text-[#9c9ea0] cursor-pointer group-hover:text-[#e4822d]" >
          <div className="group flex flex-col items-center py-3 hover:bg-[#e4822d]/10 hover:border-l-2 hover:border-[#e4822d]">
            <Mail className="text-[#9c9ea0] group-hover:text-[#e4822d]" />
            <p className='text-[#9c9ea0] cursor-pointer group-hover:text-[#e4822d]'>CONTACT</p>
          </div>
        </a>

      </div>
    </nav >
  )
}

export default Navbar