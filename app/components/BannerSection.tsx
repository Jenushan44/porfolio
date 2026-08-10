import { bebasNeue, ibmPlexMono } from "../fonts";
import { ChevronRight, Download, Plus, ShieldCheck, MonitorCloud, BrainCog, CodeXml } from "lucide-react"

function BannerSection() {
  return (
    <div id="home-section" className="flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="relative text-center">
        <div className="group/name">
          <p className={`${bebasNeue.className} blueprint-text-white text-[200px] leading-[0.82] tracking-[0.015em] transition-all duration-500 group-hover/name:translate-x-2`}>JENUSHAN</p>
          <p className={`${bebasNeue.className} blueprint-text-blue text-[200px] leading-[0.82] tracking-[0.015em] transition-all duration-500 group-hover/name:-translate-x-2`}>PREMKUMAR</p>
        </div>
        <p className="text-2xl tracking-[5px] text-white">COMPUTER SCIENCE STUDENT</p>
      </div>

      <div className="flex gap-5 mt-10">
        <a href="#contact-section" className={`${ibmPlexMono.className} cursor-pointer flex items-center gap-2 border border-blue-400/60 bg-blue-950/40 px-7 py-3 text-blue-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-white hover:shadow-[0_0_18px_rgba(59,130,246,0.65)]`}><ChevronRight />GET IN TOUCH</a>
        <button className={`${ibmPlexMono.className} cursor-pointer flex items-center gap-2 border border-slate-400/50 bg-transparent px-5 py-3 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-300 hover:shadow-[0_0_18px_rgba(59,130,246,0.65)]`}><Download />DOWNLOAD RESUME</button>
      </div>
      <div className="mt-10">
        <p className={`${ibmPlexMono.className} flex justify-center mb-5 text-[20px] text-[#0671fb]`}>CURRENT FOCUS</p>
        <div className={`${ibmPlexMono.className} flex gap-10 text-white/60`}>
          <p className="flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:text-[#1b88f2] cursor-default"><CodeXml />FULL STACK</p>
          <Plus className="text-[#0671fb]" />
          <p className="flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:text-[#1b88f2] cursor-default"><BrainCog />AI & DATA</p>
          <Plus className="text-[#0671fb]" />
          <p className="flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:text-[#1b88f2] cursor-default"><ShieldCheck />CYBERSECURITY</p>
          <Plus className="text-[#0671fb]" />
          <p className="flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:text-[#1b88f2] cursor-default"><MonitorCloud />INFRASTRUCTURE</p>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;