import { ibmPlexMono } from "../fonts";
import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <div className="border-t border-[#1b88f2]/25 bg-[#001432] px-8 py-7">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        <p className={`${ibmPlexMono.className} text-xs text-white/40`}>© 2026 Jenushan Premkumar</p>
        <p className={`${ibmPlexMono.className} hidden text-xs text-white/40 md:block`}>BUILT WITH NEXT.JS / TYPESCRIPT / TAILWIND CSS</p>

        <a href="#home-section" className={`${ibmPlexMono.className} group flex items-center gap-2 text-xs text-[#1b88f2]/70 transition-all duration-300 hover:text-[#1b88f2]`}>
          TOP<ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-1" />
        </a>
      </div>
    </div>
  );
}

export default Footer;