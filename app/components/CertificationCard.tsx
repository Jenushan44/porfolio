import Image from "next/image";
import { CalendarDays, ExternalLink } from "lucide-react";
import { ibmPlexMono } from "../fonts";

type Card = { image_url: string; pdf_url: string; name: string; issuer: string; year: string; };

function CertificationCard({ image_url, pdf_url, name, issuer, year, }: Card) {
  return (
    <div className="group/cert relative h-full">
      <div className="absolute top-0 bottom-0 right-0 left-0 translate-x-[7px] translate-y-[7px] border border-[#1b88f2]/20 bg-[#0a4f93]/10 transition-all duration-300 group-hover/cert:translate-x-[10px] group-hover/cert:translate-y-[10px]" />
      <div className="relative flex h-full flex-col border border-[#1b88f2]/50 bg-[#001432] transition-all duration-300 group-hover/cert:-translate-x-[2px] group-hover/cert:-translate-y-[2px] group-hover/cert:border-[#1b88f2]">

        <div className="relative bg-[#001127] p-3">

          <Image className="h-[280px] w-full object-contain transition-all duration-300 group-hover/cert:brightness-110" src={image_url} alt={`${name} certification`} width={600} height={350} />


          <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-[#1b88f2]" />
          <div className="absolute right-3 top-3 h-5 w-5 border-r border-t border-[#1b88f2]" />
          <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-[#1b88f2]" />
          <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#1b88f2]" />

        </div>


        <div className="flex flex-1 flex-col p-6">

          <p className="text-xl font-semibold leading-7 text-white">{name}</p>
          <p className={`${ibmPlexMono.className} mt-2 text-[#1b88f2]`}>{issuer}</p>

          <p className="mt-5 flex items-center gap-2 text-white/70"><CalendarDays className="text-[#1b88f2]" size={20} />Issued {year}</p>


          <div className="mt-auto pt-6">
            <div className="h-[1px] w-full bg-[#1b88f2]/30" />

            <a href={pdf_url} target="_blank" className="mx-auto mb-3 mt-6 flex w-fit items-center gap-2 border border-[#1b88f2] bg-[#001432] px-6 py-3 text-sm font-semibold tracking-wider text-[#d8ecff] shadow-[0_5px_0_#0a4f93] transition-all duration-150 hover:translate-y-[3px] hover:shadow-[0_2px_0_#0a4f93]">
              View Certificate<ExternalLink size={18} />
            </a>

          </div>

        </div>


        <div className="absolute right-0 top-0 h-7 w-7 border-r-2 border-t-2 border-[#1b88f2]" />

      </div>
    </div>
  );
}

export default CertificationCard;