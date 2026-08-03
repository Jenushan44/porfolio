import { Dot, Monitor, Server, Network } from "lucide-react"

function HomeLabSection() {

  return (

    <div className="bg-[#1b1d1f] mx-5 mt-2 mb-2 min-h-[350px] w-[50%] border-[#222325] border-2 rounded-md">
      <div className='flex gap-2'>
        <p className="ml-3 mt-5 text-[#e4822d]">//</p>
        <p className="mt-5 text-white">homelab</p>
        <Dot className='mt-5 text-[#e4822d]' />
      </div>

      <div className="flex gap-4 ml-2 mt-5">
        <Monitor width={45} height={45} className="text-[#e4822d]" />
        <div className="flex flex-col">
          <p className="text-white/60">HARDWARE</p>
          <p className="text-white">Dell Precision 5820</p>
        </div>
      </div>
      <hr className="text-white mx-2 mt-1 text-white/10 w-[20%]" />

      <div className="flex gap-4 ml-2 mt-5">
        <Server width={45} height={45} className="text-[#e4822d]" />
        <div className="flex flex-col">
          <p className="text-white/60">HYPERVISOR</p>
          <p className="text-white">Proxmox VE</p>
        </div>
        <img width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/proxmox/proxmox-plain-wordmark.svg" />
      </div>
      <hr className="text-white mx-2 mt-1 text-white/10 w-[20%]" />

      <div className="flex gap-4 ml-2 mt-5">
        <Network width={45} height={45} className="text-[#e4822d]" />
        <div className="flex flex-col">
          <p className="text-white/60">Lab Topology</p>
        </div>
      </div>

      <div className="flex border-2 border-[#1f2229] bg-[#0f1216] py-3 rounded-md mx-5">
        <img width={40} height={40} className="ml-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
        <div className="flex flex-col text-white">
          <p className="ml-2">Ubuntu Server</p>
          <p className="ml-2">VM</p>
        </div>
        <Dot width={50} height={50} className="text-[#29a84e]" />
      </div>


    </div>
  )
}

export default HomeLabSection