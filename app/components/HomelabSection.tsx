import { Dot, Server, Network } from "lucide-react"
import { bebasNeue, ibmPlexMono } from "../fonts";

function HomeLabSection() {

  return (

    <div className="mx-auto w-fit">
      <p className={`${bebasNeue.className} flex justify-start blueprint-text-white text-[75px] leading-[0.82] text-white/90 tracking-[0.015em] mb-10 mt-5 ml-2`}>HOMELAB</p>
      <div className="">
        <div className="flex flex-col">
          <p className="">System Details</p>
          <div />
          <div className="flex gap-5 mt-5">
            <p className="border-1 border-[#1b88f2] flex items-center justify-center px-5"><Server color="#1b88f2" size={40} /></p>
            <div>
              <p className="text-[#1b88f2]">HOST</p>
              <p>Dell Precision 5820</p>
              <p>32 GB RAM</p>
            </div>
          </div>


          <div className="flex gap-5 mt-5">
            <p className="border-1 border-[#1b88f2] flex items-center justify-center px-5"><Server color="#1b88f2" size={40} /></p>
            <div>
              <p className="text-[#1b88f2]">HYPERVISOR</p>
              <p>Proxmox VE</p>
            </div>
          </div>

          <div className="flex gap-5 mt-5">
            <p className="border-1 border-[#1b88f2] flex items-center justify-center px-5"><Server color="#1b88f2" size={40} /></p>
            <div>
              <p className="text-[#1b88f2] ">OPERATING SYSTEM</p>
              <p>Ubuntu Server 24.04 LTS</p>
            </div>
          </div>


          <div className="flex gap-5 mt-5">
            <p className="border-1 border-[#1b88f2] flex items-center justify-center px-5"><Server color="#1b88f2" size={40} /></p>
            <div>
              <p className="text-[#1b88f2]">DATABASE</p>
              <p>PostgreSQL</p>
            </div>
          </div>


          <div className="flex gap-5 mt-5">
            <p className="border-1 border-[#1b88f2] flex items-center justify-center px-5"><Server color="#1b88f2" size={40} /></p>
            <div>
              <p className="text-[#1b88f2]">CONTAINERS</p>
              <p>Docker</p>
            </div>
          </div>



        </div>





      </div>

    </div>
  )
}

export default HomeLabSection