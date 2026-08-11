import { bebasNeue, ibmPlexMono } from "../fonts";
import { ChevronRight, Download, Plus, ShieldCheck, MonitorCloud, BrainCog, CodeXml } from "lucide-react"


function BannerSection() {
  return (
    <div id="home-section" className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4">
      <div className="relative text-center mt-10">
        <div className="group/name">
          <p className={`${bebasNeue.className} blueprint-text-white text-[80px] sm:text-[110px] md:text-[140px] lg:text-[170px] xl:text-[180px] 2xl:text-[200px] leading-[0.82] tracking-[0.015em] transition-all duration-500 group-hover/name:translate-x-2`}>JENUSHAN</p>
          <p className={`${bebasNeue.className} blueprint-text-blue text-[80px] sm:text-[110px] md:text-[140px] lg:text-[170px] xl:text-[180px] 2xl:text-[200px] leading-[0.82] tracking-[0.015em] transition-all duration-500 group-hover/name:-translate-x-2`}>PREMKUMAR</p>
        </div>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[3px] sm:tracking-[4px] lg:tracking-[5px] text-white">COMPUTER SCIENCE STUDENT</p>
      </div>


      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10">
        <a href="#contact-section" className={`${ibmPlexMono.className} cursor-pointer flex items-center justify-center gap-2 border border-blue-400/60 bg-blue-950/40 px-5 sm:px-7 py-3 text-sm sm:text-base text-blue-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-white hover:shadow-[0_0_18px_rgba(59,130,246,0.65)]`}><ChevronRight />GET IN TOUCH</a>
        <a href="/resume/Resume-JenushanPremkumar.pdf" download className={`${ibmPlexMono.className} cursor-pointer flex items-center gap-2 border border-slate-400/50 bg-transparent px-5 py-3 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-300 hover:shadow-[0_0_18px_rgba(59,130,246,0.65)]`}>
          <Download />DOWNLOAD RESUME
        </a>
      </div>
      <div className="mt-10">
        <p className={`${ibmPlexMono.className} flex justify-center mb-5 text-[16px] sm:text-[18px] lg:text-[20px] text-[#0671fb]`}>CURRENT FOCUS</p>
        <div className={`${ibmPlexMono.className} flex flex-wrap justify-center gap-x-5 gap-y-4 sm:gap-x-7 lg:gap-10 text-xs sm:text-sm lg:text-base text-white/60`}>
          <p className="flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:-translate-y-1 hover:text-[#1b88f2] cursor-default"><CodeXml size={20} />FULL STACK</p>
          <Plus className="hidden sm:block text-[#0671fb]" />
          <p className="flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:-translate-y-1 hover:text-[#1b88f2] cursor-default"><BrainCog size={20} />AI & DATA</p>
          <Plus className="hidden sm:block text-[#0671fb]" />
          <p className="flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:-translate-y-1 hover:text-[#1b88f2] cursor-default"><ShieldCheck size={20} />CYBERSECURITY</p>
          <Plus className="hidden sm:block text-[#0671fb]" />
          <p className="flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:-translate-y-1 hover:text-[#1b88f2] cursor-default"><MonitorCloud size={20} />INFRASTRUCTURE</p>
        </div>
      </div>
    </div>
  );
}


export default BannerSection;