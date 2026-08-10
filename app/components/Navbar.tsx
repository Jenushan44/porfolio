"use client";

import { useState } from "react";
import { ibmPlexMono } from "../fonts";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed left-1/2 top-5 z-50 w-[90%] max-w-[1150px] -translate-x-1/2">
      <div className="relative flex items-center justify-between border-y border-[#1b88f2]/30 bg-[#001432]/90 px-6 py-4 backdrop-blur-sm">
        <div>
          <a href="#home-section" className={`${ibmPlexMono.className} text-lg font-semibold text-[#1b88f2]`}>JP</a>
        </div>


        <div className="hidden lg:flex items-center gap-4 xl:gap-8">

          <div className="group relative">
            <a href="#about-section" className={`${ibmPlexMono.className} text-xs lg:text-sm text-white/70 transition-all duration-300 group-hover:text-[#1b88f2]`}>ABOUT</a>
            <div className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#1b88f2] transition-all duration-300 group-hover:w-full" />
          </div>



          <div className="group relative">
            <a href="#experience-section" className={`${ibmPlexMono.className} text-xs lg:text-sm text-white/70 transition-all duration-300 group-hover:text-[#1b88f2]`}>EXPERIENCE</a>

            <div className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#1b88f2] transition-all duration-300 group-hover:w-full" />
          </div>

          <div className="group relative">
            <a href="#project-section" className={`${ibmPlexMono.className} text-xs lg:text-sm text-white/70 transition-all duration-300 group-hover:text-[#1b88f2]`}>PROJECTS</a>
            <div className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#1b88f2] transition-all duration-300 group-hover:w-full" />
          </div>


          <div className="group relative">
            <a href="#technology-section" className={`${ibmPlexMono.className} text-xs lg:text-sm text-white/70 transition-all duration-300 group-hover:text-[#1b88f2]`}>TECHNOLOGIES</a>
            <div className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#1b88f2] transition-all duration-300 group-hover:w-full" />

          </div>

          <div className="group relative">
            <a href="#homelab-section" className={`${ibmPlexMono.className} text-xs lg:text-sm text-white/70 transition-all duration-300 group-hover:text-[#1b88f2]`}>HOMELAB</a>
            <div className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#1b88f2] transition-all duration-300 group-hover:w-full" />
          </div>

          <div className="group relative">
            <a href="#certification-section" className={`${ibmPlexMono.className} text-xs lg:text-sm text-white/70 transition-all duration-300 group-hover:text-[#1b88f2]`}>CERTIFICATIONS</a>
            <div className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#1b88f2] transition-all duration-300 group-hover:w-full" />
          </div>

          <div className="group relative">
            <a href="#contact-section" className={`${ibmPlexMono.className} text-xs lg:text-sm text-white/70 transition-all duration-300 group-hover:text-[#1b88f2]`}>CONTACT</a>
            <div className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#1b88f2] transition-all duration-300 group-hover:w-full" />
          </div>
        </div>

        <div className={`${ibmPlexMono.className} hidden lg:flex items-center gap-2 text-[12px] text-[#1b88f2]/60`}>
          <p>SYSTEM ONLINE</p>

          <div className="h-[5px] w-[5px] animate-pulse rounded-full bg-[#00d18a] shadow-[0_0_8px_rgba(0,209,138,0.8)]" />
        </div>



        <button onClick={() => setMenuOpen(!menuOpen)} className={`${ibmPlexMono.className} text-sm text-[#1b88f2] lg:hidden`}>{menuOpen ? "CLOSE" : "MENU"}</button>


        <div className="absolute -left-1 -top-1 h-3 w-3 border-l border-t border-[#1b88f2]" />
        <div className="absolute -right-1 -top-1 h-3 w-3 border-r border-t border-[#1b88f2]" />
        <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b border-l border-[#1b88f2]" />
        <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-[#1b88f2]" />

      </div>

      {menuOpen && (
        <div className="border-t border-[#1b88f2]/30 bg-[#001432] px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-5">

            <a href="#about-section" onClick={() => setMenuOpen(false)} className={`${ibmPlexMono.className} text-sm text-white/70 hover:text-[#1b88f2]`}>ABOUT</a>
            <a href="#experience-section" onClick={() => setMenuOpen(false)} className={`${ibmPlexMono.className} text-sm text-white/70 hover:text-[#1b88f2]`}>EXPERIENCE</a>
            <a href="#project-section" onClick={() => setMenuOpen(false)} className={`${ibmPlexMono.className} text-sm text-white/70 hover:text-[#1b88f2]`}> PROJECTS</a>
            <a href="#technology-section" onClick={() => setMenuOpen(false)} className={`${ibmPlexMono.className} text-sm text-white/70 hover:text-[#1b88f2]`}>TECHNOLOGIES=</a>
            <a href="#homelab-section" onClick={() => setMenuOpen(false)} className={`${ibmPlexMono.className} text-sm text-white/70 hover:text-[#1b88f2]`}>HOMELAB</a>
            <a href="#certification-section" onClick={() => setMenuOpen(false)} className={`${ibmPlexMono.className} text-sm text-white/70 hover:text-[#1b88f2]`}>CERTIFICATIONS</a>
            <a href="#contact-section" onClick={() => setMenuOpen(false)} className={`${ibmPlexMono.className} text-sm text-white/70 hover:text-[#1b88f2]`}> CONTACT</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;