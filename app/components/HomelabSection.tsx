import { Server, Box, Database, Container, Terminal, Cpu, HardDrive, ArrowRight, Circle, Globe } from "lucide-react";
import { bebasNeue, ibmPlexMono } from "../fonts";

function HomeLabSection() {
  return (
    <div id="homelab-section" className="mx-5 py-16 scroll-mt-20">
      <div className="mx-auto w-full max-w-[1400px]">

        <p className={`${bebasNeue.className} blueprint-text-white text-[75px] leading-[0.82] text-white/90 tracking-[0.015em]`}>HOMELAB</p>

        <p className={`${ibmPlexMono.className} mt-3 text-white/60`}>My personal lab for self-hosting, learning, and building.</p>


        <div className="mt-10 flex gap-5">



          <div className="group/architecture relative w-[40%]">

            <div className="absolute top-0 bottom-0 right-0 left-0 translate-x-[7px] translate-y-[7px] border border-[#1b88f2]/20 bg-[#0a4f93]/10 transition-all duration-300 group-hover/architecture:translate-x-[10px] group-hover/architecture:translate-y-[10px]" />

            <div className="relative h-full border-2 border-[#1b88f2] bg-[#001432] p-5 transition-all duration-300 group-hover/architecture:-translate-x-[2px] group-hover/architecture:-translate-y-[2px]">

              <p className="text-lg text-[#1b88f2]">LAB ARCHITECTURE</p>

              <div className="mt-8 flex flex-col items-center">
                <p className="text-white/50">INTERNET</p>

                <div className="border border-[#1b88f2] px-3 py-3 text-center rounded-full">
                  <Globe size={35} color="#1b88f2" />
                </div>

                <div className="h-8 w-[1px] bg-[#1b88f2]" />


                <div className="border-2 border-[#1b88f2] bg-[#001432] px-8 py-4 text-center shadow-[3px_3px_0_#0a4f93]">
                  <p className="text-[#1b88f2]">PROXMOX VE</p>
                  <p className="text-sm text-white/50">Hypervisor</p>
                </div>

                <div className="h-8 w-[1px] bg-[#1b88f2]" />

                <div className="border-2 border-[#1b88f2] bg-[#001432] px-8 py-4 text-center shadow-[3px_3px_0_#0a4f93]">
                  <p className="text-[#1b88f2]">UBUNTU SERVER VM</p>
                  <p className="text-sm text-white/50">24.04 LTS</p>
                </div>

                <div className="h-8 w-[1px] bg-[#1b88f2]" />

                <div className="h-[1px] w-[70%] bg-[#1b88f2]" />

                <div className="flex w-[70%] justify-between">
                  <div className="h-8 w-[1px] bg-[#1b88f2]" />
                  <div className="h-8 w-[1px] bg-[#1b88f2]" />
                  <div className="h-8 w-[1px] bg-[#1b88f2]" />
                </div>

                <div className="flex w-full justify-center gap-5">

                  <div className="w-[150px] border-2 border-[#1b88f2] bg-[#001432] p-4 text-center shadow-[3px_3px_0_#0a4f93]">
                    <p className="text-[#1b88f2]">DOCKER</p>
                    <p className="mt-1 text-xs text-white/50">Containers</p>
                  </div>

                  <div className="w-[150px] border-2 border-[#1b88f2] bg-[#001432] p-4 text-center shadow-[3px_3px_0_#0a4f93]">
                    <p className="text-[#1b88f2]">POSTGRESQL</p>
                    <p className="mt-1 text-xs text-white/50">Database</p>
                  </div>

                  <div className="w-[150px] border border-dashed border-white/30 p-4 text-center">
                    <p className="text-white/60">FUTURE</p>
                    <p className="mt-1 text-xs text-white/40">More Services</p>
                  </div>

                </div>

              </div>
            </div>

          </div>



          <div className="group/details relative w-[28%]">

            <div className="absolute top-0 bottom-0 right-0 left-0 translate-x-[7px] translate-y-[7px] border border-[#1b88f2]/20 bg-[#0a4f93]/10 transition-all duration-300 group-hover/details:translate-x-[10px] group-hover/details:translate-y-[10px]" />

            <div className="relative h-full border-2 border-[#1b88f2] bg-[#001432] p-5 transition-all duration-300 group-hover/details:-translate-x-[2px] group-hover/details:-translate-y-[2px]">
              <p className="text-lg text-[#1b88f2]">SYSTEM DETAILS</p>
              <div className="mt-5 h-[1px] w-full bg-[#1b88f2]/40" />



              <div className="mt-6 flex items-center gap-4">

                <div className="border border-[#1b88f2] p-3">
                  <Server className="text-[#1b88f2]" size={30} />
                </div>

                <div>
                  <p className="text-sm text-[#1b88f2]">HOST</p>
                  <p>Dell Precision 5820</p>
                  <p className="text-sm text-white/50">32 GB RAM</p>
                </div>

              </div>


              <div className="mt-6 flex items-center gap-4">

                <div className="border border-[#1b88f2] p-3">
                  <Cpu className="text-[#1b88f2]" size={30} />
                </div>

                <div>
                  <p className="text-sm text-[#1b88f2]">HYPERVISOR</p>
                  <p>Proxmox VE</p>
                </div>

              </div>


              <div className="mt-6 flex items-center gap-4">

                <div className="border border-[#1b88f2] p-3">
                  <Terminal className="text-[#1b88f2]" size={30} />
                </div>

                <div>
                  <p className="text-sm text-[#1b88f2]">OPERATING SYSTEM</p>
                  <p>Ubuntu Server 24.04 LTS</p>
                </div>

              </div>


              <div className="mt-6 flex items-center gap-4">

                <div className="border border-[#1b88f2] p-3">
                  <Container className="text-[#1b88f2]" size={30} />
                </div>

                <div>
                  <p className="text-sm text-[#1b88f2]">CONTAINERS</p>
                  <p>Docker + Docker Compose</p>
                </div>

              </div>


              <div className="mt-6 flex items-center gap-4">

                <div className="border border-[#1b88f2] p-3">
                  <Database className="text-[#1b88f2]" size={30} />
                </div>

                <div>
                  <p className="text-sm text-[#1b88f2]">DATABASE</p>
                  <p>PostgreSQL</p>
                </div>

              </div>
            </div>
          </div>



          <div className="group/terminal relative w-[32%]">
            <div className="absolute top-0 bottom-0 right-0 left-0 translate-x-[7px] translate-y-[7px] border border-[#1b88f2]/20 bg-[#0a4f93]/10 transition-all duration-300 group-hover/terminal:translate-x-[10px] group-hover/terminal:translate-y-[10px]" />

            <div className="relative h-full border-2 border-[#1b88f2] bg-[#001432] shadow-[inset_0_0_30px_rgba(27,136,242,0.05)] transition-all duration-300 group-hover/terminal:-translate-x-[2px] group-hover/terminal:-translate-y-[2px]">

              <div className="flex items-center gap-2 border-b border-[#1b88f2]/30 px-5 py-3">
                <Circle size={9} className="text-[#1b88f2]" />
                <Circle size={9} className="text-[#1b88f2]" />
                <Circle size={9} className="text-[#1b88f2]" />
                <p className="ml-3 text-sm text-[#1b88f2]">HOMELAB TERMINAL</p>
              </div>


              <div className={`${ibmPlexMono.className} p-6 text-sm`}>

                <div className="flex">
                  <p className="text-[#1b88f2]">root@homelab</p>
                  <p className="text-white/40">:~$ system-info </p>
                </div>

                <div className="mt-8 space-y-3">

                  <div className="flex gap-1">
                    <p className="text-[#1b88f2]">Host:</p>
                    <p className="text-white">Dell Precision 5820</p>
                  </div>

                  <div className="flex gap-1">
                    <p className="text-[#1b88f2]">Hypervisor:</p>
                    <p className="text-white">Proxmox VE</p>
                  </div>

                  <div className="flex gap-1">
                    <p className="text-[#1b88f2]">VM:</p>
                    <p className="text-white">Ubuntu Server 24.04</p>
                  </div>

                  <div className="flex gap-1">
                    <p className="text-[#1b88f2]">Containers:</p>
                    <p className="text-white">Docker</p>
                  </div>

                  <div className="flex gap-1">
                    <p className="text-[#1b88f2]">Database:</p>
                    <p className="text-white">PostgreSQL</p>
                  </div>

                  <div className="flex gap-1">
                    <p className="text-[#1b88f2]">Status:</p>
                    <p className="text-[#00d18a]">ONLINE</p>
                  </div>

                </div>

                <div className="mt-10 flex">
                  <p className="text-[#1b88f2]">root@homelab</p>
                  <p className="text-white/40">:~$</p>
                  <p className="ml-2 animate-pulse text-[#1b88f2]">█</p>
                </div>

              </div>

            </div>
          </div>
        </div>


        <div className="group/services relative mt-8">
          <div className="absolute top-0 bottom-0 right-0 left-0 translate-x-[7px] translate-y-[7px] border border-[#1b88f2]/20 bg-[#0a4f93]/10 transition-all duration-300 group-hover/services:translate-x-[10px] group-hover/services:translate-y-[10px]" />
          <div className="relative border-2 border-[#1b88f2] bg-[#001432] p-5 transition-all duration-300 group-hover/services:-translate-x-[2px] group-hover/services:-translate-y-[2px]">

            <p className="text-lg text-[#1b88f2]">SERVICES & INFRASTRUCTURE</p>
            <div className="mt-5 flex gap-4 text-white/80">


              <div className="flex-1 border border-[#1b88f2]/40 bg-[#001432] p-5 transition-all duration-200 hover:-translate-y-[5px] hover:border-[#1b88f2] hover:shadow-[5px_5px_0_#0a4f93]">
                <Box className="text-[#1b88f2]" size={30} />
                <p className="mt-4 font-semibold">Proxmox VE</p>
                <p className="mt-1 text-sm text-white/50">Virtualization</p>
                <p className="mt-5 flex items-center animate-pulse gap-2 text-xs text-[#00d18a]"><Circle size={8} fill="#00d18a" />RUNNING</p>
              </div>


              <div className="flex-1 border border-[#1b88f2]/40 bg-[#001432] p-5 transition-all duration-200 hover:-translate-y-[5px] hover:border-[#1b88f2] hover:shadow-[5px_5px_0_#0a4f93]">
                <Terminal className="text-[#1b88f2]" size={30} />
                <p className="mt-4 font-semibold">Ubuntu Server</p>
                <p className="mt-1 text-sm text-white/50">Virtual Machine</p>
                <p className="mt-5 flex items-center gap-2 animate-pulse text-xs text-[#00d18a]"><Circle size={8} fill="#00d18a" />RUNNING</p>
              </div>


              <div className="flex-1 border border-[#1b88f2]/40 bg-[#001432] p-5 transition-all duration-200 hover:-translate-y-[5px] hover:border-[#1b88f2] hover:shadow-[5px_5px_0_#0a4f93]">

                <Container className="text-[#1b88f2]" size={30} />
                <p className="mt-4 font-semibold">Docker</p>
                <p className="mt-1 text-sm text-white/50">Container Platform</p>

                <p className="mt-5 flex items-center gap-2 animate-pulse text-xs text-[#00d18a]"><Circle size={8} fill="#00d18a" />RUNNING</p>

              </div>


              <div className="flex-1 border border-[#1b88f2]/40 bg-[#001432] p-5 transition-all duration-200 hover:-translate-y-[5px] hover:border-[#1b88f2] hover:shadow-[5px_5px_0_#0a4f93]">
                <Database className="text-[#1b88f2]" size={30} />
                <p className="mt-4 font-semibold">PostgreSQL</p>
                <p className="mt-1 text-sm text-white/50">Database</p>
                <p className="mt-5 flex items-center gap-2 animate-pulse text-xs text-[#00d18a]"><Circle size={8} fill="#00d18a" />RUNNING</p>
              </div>


              <div className="flex-1 border border-dashed border-[#1b88f2]/30 p-5 transition-all duration-200 hover:-translate-y-[5px] hover:border-[#1b88f2]/70">
                <HardDrive className="text-white/40" size={30} />
                <p className="mt-4 font-semibold">More Coming</p>
                <p className="mt-1 text-sm text-white/50">Future services</p>
                <p className="mt-5 flex items-center gap-2 text-xs text-[#1b88f2]"><Circle size={8} fill="#1b88f2" />PLANNED</p>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default HomeLabSection;