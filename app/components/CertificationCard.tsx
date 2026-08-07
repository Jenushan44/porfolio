import Image from "next/image";
import { CalendarDays, ExternalLink } from "lucide-react"

type Card = {
  image_url: string;
  pdf_url: string;
  name: string;
  issuer: string;
  year: string;
}

function CertificationCard({ image_url, pdf_url, name, issuer, year }: Card) {

  return (

    <div className="group flex w-[500px] flex-col overflow-hidden rounded-xl border-4 border-[#1b88f2]/40 hover:border-[#1b88f2] bg-[#001432] pb-3 shadow-[5px_5px_0_#0a4f93] transition-all duration-300 ease-out hover:-translate-x-[10px] hover:-translate-y-[10px] hover:shadow-[20px_20px_0_#0a4f93]">

      <div className="flex justify-center">
        <Image className="h-[250px] w-full border-b border-[#1b88f2] transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.02]" src={image_url} alt={`${name} certifcation`} width={400} height={200} />
      </div>
      <div className="ml-3">
        <p className="text-xl mt-2 font-semibold truncate pt-2">{name}</p>
        <div className="flex flex-col">
          <p className="text-[#1b88f2] text-lg">{issuer}</p>
          <p className="flex items-center gap-1 mt-5"><CalendarDays className="text-[#1b88f2]" />Issued {year}</p>
        </div>
        <div className="w-[95%] h-[0.5px] bg-[#1b88f2] mt-5" />
        <a href={pdf_url} target="_blank" rel="noopener noreferrer" className="gap-2 mx-auto mt-5 mb-5 flex w-fit items-center border-2 border-[#1b88f2] bg-[#001432] px-20 py-2 font-semibold uppercase tracking-wider text-sm text-[#d8ecff] shadow-[0_8px_0_#0a4f93] transition-all duration-150 hover:translate-y-[3px] hover:shadow-[0_5px_0_#0a4f93] active:translate-y-[8px] active:shadow-none">
          View Certificate<ExternalLink size={20} />
        </a>

      </div>

    </div>

  )
}

export default CertificationCard