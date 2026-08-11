import { GraduationCap, MapPin, Star, Code2, Shield, Brain, Server, } from "lucide-react";
import { bebasNeue, ibmPlexMono, barlowCondensed } from "../fonts";

function AboutSection() {

  return (
    <div id="about-section" className="relative py-16 sm:py-20 lg:py-28 scroll-mt-5">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">

        <div className="group relative mb-10">
          <p className={`${barlowCondensed.className} pointer-events-none absolute -right-2 -top-8 text-[100px] sm:text-[120px] lg:text-[150px] font-semibold leading-none text-[#1b88f2] opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.4]`}>01</p>

          <div className="relative">
            <p className={`${barlowCondensed.className} text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] font-semibold leading-[0.8] text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#dbeeff] group-hover:drop-shadow-[0_0_10px_rgba(27,136,242,0.35)]`}>ABOUT ME</p>
            <p className={`${ibmPlexMono.className} mt-4 text-sm text-white/40`}>Computer Science student with interests in software development, AI, and cybersecurity.</p>
            <div className="mt-5 h-[1px] w-20 bg-[#1b88f2] transition-all duration-500 group-hover:w-48" />
          </div>
        </div>

        {/*Named group so that hover effects only apply to the About card */}
        <div className="group/about relative mt-12 border border-[#1b88f2]/70 bg-[#001127] shadow-[9px_9px_0_rgba(10,79,147,0.6)] transition-all duration-300 hover:border-[#1b88f2] hover:shadow-[13px_13px_0_rgba(10,79,147,0.72)]">

          {/*Corner brackets: top-left, top-right, bottom-left, bottom-right */}
          <div className="absolute -left-3 -top-3 h-8 w-8 border-l-2 border-t-2 border-[#1b88f2] transition-all duration-300 group-hover/about:-left-5 group-hover/about:-top-5" />
          <div className="absolute -right-3 -top-3 h-8 w-8 border-r-2 border-t-2 border-[#1b88f2] transition-all duration-300 group-hover/about:-right-5 group-hover/about:-top-5" />
          <div className="absolute -bottom-3 -left-3 h-8 w-8 border-b-2 border-l-2 border-[#1b88f2] transition-all duration-300 group-hover/about:-bottom-5 group-hover/about:-left-5" />
          <div className="absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-[#1b88f2] transition-all duration-300 group-hover/about:-bottom-5 group-hover/about:-right-5" />

          <div className="relative m-[5px] border border-[#1b88f2]/15">

            <div className="grid grid-cols-1 lg:grid-cols-2">

              <div className="group/who relative border-b border-[#1b88f2]/30 p-5 sm:p-6 lg:p-8 lg:border-b-0 lg:border-r">
                <p className={`${bebasNeue.className} absolute right-8 top-3 text-[110px] sm:text-[140px] lg:text-[170px] text-[#1b88f2]/0 transition-all duration-500 group-hover/who:-translate-x-3 group-hover/who:text-[#1b88f2]/[0.05]`}>JP</p>

                <div className="relative flex items-center gap-3">
                  <p className={`${ibmPlexMono.className} text-[12px] text-[#1b88f2]/45`}>01</p>

                  <p className={`${ibmPlexMono.className} text-lg text-[#1b88f2]`}>// WHO I AM</p>

                  {/*Line grows from 0 to full width on hover which creates a line drawing effect*/}
                  <div className="relative h-[1px] flex-1 bg-[#1b88f2]/20">
                    <div className="absolute left-0 top-0 h-full w-[0px] bg-[#1b88f2] transition-all duration-700 group-hover/who:w-full" />
                  </div>
                </div>

                <div className="relative mt-10">
                  <p className="text-2xl sm:text-3xl font-semibold text-white transition-all duration-300 group-hover/who:translate-x-2">Jenushan Premkumar</p>

                  <p className={`${ibmPlexMono.className} mt-2 text-sm text-[#1b88f2]`}>COMPUTER SCIENCE / TMU</p>

                  <p className="mt-8 leading-7 text-white/75">I am a fourth year computer science student at Toronto Metropolitan University. I enjoy building software and learning how systems work behind the scenes.</p>
                  <p className="mt-4 leading-7 text-white/75">I am currently focused on full-stack development, cybersecurity, AI, and self-hosted infrastructure. I use personal projects to explore new technologies and improve my development skills.</p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
                    <div className="flex items-center gap-2">
                      <MapPin size={17} className="text-[#1b88f2] transition-all duration-300 group-hover/who:-translate-y-1" />
                      <p className="text-sm text-white/60">Toronto, Ontario, Canada</p>
                    </div>

                    <p className={`${ibmPlexMono.className} text-sm text-white/45`}>EXPECTED GRADUATION / 2027</p>

                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[0px] w-[1px] bg-[#1b88f2] transition-all duration-500 group-hover/who:h-16" />
                <div className="absolute bottom-0 left-0 h-[1px] w-[0px] bg-[#1b88f2] transition-all duration-500 group-hover/who:w-16" />
              </div>


              <div className="p-5 sm:p-6 lg:p-8">


                <div className="flex items-center gap-3">
                  <p className={`${ibmPlexMono.className} text-[12px] text-[#1b88f2]/45`}>02</p>
                  <p className={`${ibmPlexMono.className} text-lg text-[#1b88f2]`}>// CURRENT FOCUS</p>
                  <div className="h-[1px] flex-1 bg-[#1b88f2]/20" />
                </div>

                <div className="mt-10 flex flex-col items-stretch sm:flex-row sm:items-center">
                  <div className="group/jp relative flex h-[90px] mx-auto sm:mx-0 w-[90px] sm:h-[115px] sm:w-[115px] items-center justify-center border border-[#1b88f2]/60 bg-[#001432] transition-all duration-300 hover:-translate-y-1 hover:border-[#1b88f2] hover:shadow-[0_0_25px_rgba(27,136,242,0.15)]">

                    <div className="absolute top-2 right-2 bottom-2 left-2 border border-[#1b88f2]/10 transition-all duration-300 group-hover/jp:top-1 group-hover/jp:bottom-1 group-hover/jp:right-1 group-hover/jp:left-1 group-hover/jp:border-[#1b88f2]/30" />

                    <p className={`${bebasNeue.className} relative text-5xl text-white/80 transition-all duration-300 group-hover/jp:text-[#1b88f2]`}>JP</p>

                    <div className="absolute -left-1 -top-1 h-2 w-2 border-l border-t border-[#1b88f2]" />
                    <div className="absolute -right-1 -top-1 h-2 w-2 border-r border-t border-[#1b88f2]" />
                    <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-[#1b88f2]" />
                    <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-[#1b88f2]" />
                  </div>

                  <div className="relative hidden h-[280px] w-[65px] sm:block">
                    <div className="absolute left-0 top-1/2 h-px w-full bg-[#1b88f2]/40" />

                    <div className="absolute right-0 top-[10%] h-[80%] w-[1px] bg-[#1b88f2]/30" />

                    <div className="absolute right-0 top-[10%] h-[1px] w-5 bg-[#1b88f2]/40" />
                    <div className="absolute right-0 top-[36.5%] h-[1px] w-5 bg-[#1b88f2]/40" />
                    <div className="absolute right-0 top-[63.5%] h-[1px] w-5 bg-[#1b88f2]/40" />
                    <div className="absolute right-0 top-[90%] h-[1px] w-5 bg-[#1b88f2]/40" />
                  </div>


                  <div className="mt-6 flex flex-1 flex-col sm:mt-0">


                    <div className="group/development relative flex min-h-[70px] items-center justify-between border-b border-[#1b88f2]/20 px-3 sm:px-5 transition-all duration-300 hover:bg-[#1b88f2]/[0.04]">

                      <div className="flex items-center gap-3 sm:gap-4 transition-all duration-300 group-hover/development:translate-x-3">
                        <Code2 size={22} className="text-[#1b88f2] transition-all duration-300 group-hover/development:scale-110" />

                        <div>
                          <p className={`${ibmPlexMono.className} text-sm text-[#1b88f2]`}>DEVELOPMENT</p>
                          <p className="mt-1 text-sm text-white/50 transition-all duration-300 group-hover/development:text-white/75">Full-stack</p>
                        </div>
                      </div>

                      <div className="h-1.5 w-1.5 border border-[#1b88f2]/40 transition-all duration-300 group-hover/development:scale-125 group-hover/development:bg-[#1b88f2]" />

                      <div className="absolute bottom-0 left-0 h-[1px] w-[0px] bg-[#1b88f2] transition-all duration-500 group-hover/development:w-full" />
                    </div>

                    <div className="group/security relative flex min-h-[70px] items-center justify-between border-b border-[#1b88f2]/20 px-3 sm:px-5 transition-all duration-300 hover:bg-[#1b88f2]/[0.04]">

                      <div className="flex items-center gap-3 sm:gap-4 transition-all duration-300 group-hover/security:translate-x-3">
                        <Shield size={22} className="text-[#1b88f2] transition-all duration-300 group-hover/security:scale-110" />

                        <div>
                          <p className={`${ibmPlexMono.className} text-sm text-[#1b88f2]`}>CYBERSECURITY</p>
                          <p className="mt-1 text-sm text-white/50 transition-all duration-300 group-hover/security:text-white/75">Security</p>
                        </div>
                      </div>

                      <div className="h-1.5 w-1.5 border border-[#1b88f2]/40 transition-all duration-300 group-hover/security:scale-125 group-hover/security:bg-[#1b88f2]" />

                      <div className="absolute bottom-0 left-0 h-px w-[0px] bg-[#1b88f2] transition-all duration-500 group-hover/security:w-full" />
                    </div>


                    <div className="group/ai relative flex min-h-[70px] items-center justify-between border-b border-[#1b88f2]/20 px-3 sm:px-5 transition-all duration-300 hover:bg-[#1b88f2]/[0.04]">

                      <div className="flex items-center gap-3 sm:gap-4 transition-all duration-300 group-hover/ai:translate-x-3">
                        <Brain size={22} className="text-[#1b88f2] transition-all duration-300 group-hover/ai:scale-110" />

                        <div>
                          <p className={`${ibmPlexMono.className} text-sm text-[#1b88f2]`}>AI / ML</p>
                          <p className="mt-1 text-sm text-white/50 transition-all duration-300 group-hover/ai:text-white/75">Machine Learning</p>
                        </div>
                      </div>


                      <div className="h-1.5 w-1.5 border border-[#1b88f2]/40 transition-all duration-300 group-hover/ai:scale-125 group-hover/ai:bg-[#1b88f2]" />

                      <div className="absolute bottom-0 left-0 h-[1px] w-[0px] bg-[#1b88f2] transition-all duration-500 group-hover/ai:w-full" />
                    </div>

                    <div className="group/infrastructure relative flex min-h-[70px] items-center justify-between border-b border-[#1b88f2]/20 px-3 sm:px-5 transition-all duration-300 hover:bg-[#1b88f2]/[0.04]">

                      <div className="flex items-center gap-3 sm:gap-4 transition-all duration-300 group-hover/infrastructure:translate-x-3">
                        <Server size={22} className="text-[#1b88f2] transition-all duration-300 group-hover/infrastructure:scale-110" />

                        <div>
                          <p className={`${ibmPlexMono.className} text-sm text-[#1b88f2]`}>INFRASTRUCTURE</p>

                          <p className="mt-1 text-sm text-white/50 transition-all duration-300 group-hover/infrastructure:text-white/75">Homelab</p>
                        </div>
                      </div>

                      <div className="h-1.5 w-1.5 border border-[#1b88f2]/40 transition-all duration-300 group-hover/infrastructure:scale-125 group-hover/infrastructure:bg-[#1b88f2]" />

                      <div className="absolute bottom-0 left-0 h-px w-[0px] bg-[#1b88f2] transition-all duration-500 group-hover/infrastructure:w-full" />
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#1b88f2]/40 px-5 py-7 sm:px-8 sm:py-9">

              <div className="flex items-center gap-3">
                <p className={`${ibmPlexMono.className} text-[12px] text-[#1b88f2]/45`}>03</p>

                <p className={`${ibmPlexMono.className} text-lg text-[#1b88f2]`}>// EDUCATION</p>

                <div className="h-[1px] flex-1 bg-[#1b88f2]/20" />

                <p className={`${ibmPlexMono.className} hidden text-xs text-[#1b88f2]/50 sm:block`}>2023 - 2027</p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_0.65fr]">

                <div className="group/school flex flex-col items-start gap-4 sm:flex-row sm:gap-6">

                  <div className="flex h-16 w-16 items-center justify-center border border-[#1b88f2]/50 bg-[#001432] transition-all duration-300 group-hover/school:border-[#1b88f2] group-hover/school:shadow-[4px_4px_0_#0a4f93]">
                    <GraduationCap size={32} className="text-[#1b88f2] transition-all duration-300 group-hover/school:scale-110" />
                  </div>

                  <div className="flex-1">

                    <p className="text-xl sm:text-2xl font-semibold text-white transition-all duration-300 group-hover/school:translate-x-2">Toronto Metropolitan University</p>
                    <p className="mt-2 text-[#1b88f2]">Bachelor of Science in Computer Science</p>

                    <div className="mt-4 flex items-center gap-2">
                      <MapPin size={16} className="text-[#1b88f2]" />

                      <p className="text-sm text-white/55">Toronto, Ontario, Canada</p>
                    </div>

                    <div className="mt-5 border-t border-[#1b88f2]/0 pt-4 opacity-100 md:opacity-0 transition-all duration-500 group-hover/school:border-[#1b88f2]/20 group-hover/school:opacity-100">

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">

                        <div>
                          <p className={`${ibmPlexMono.className} text-[9px] text-[#1b88f2]/55`}>DEGREE</p>
                          <p className="mt-1 text-xs text-white/65">BSc Computer Science</p>
                        </div>

                        <div>
                          <p className={`${ibmPlexMono.className} text-[9px] text-[#1b88f2]/55`}>PERIOD</p>

                          <p className="mt-1 text-xs text-white/65">2023 — 2027</p>
                        </div>

                        <div>
                          <p className={`${ibmPlexMono.className} text-[9px] text-[#1b88f2]/55`}>STATUS</p>

                          <p className="mt-1 text-xs text-white/65">In Progress</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="group/award border-t border-[#1b88f2]/30 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">

                  <div className="flex items-center gap-3">
                    <Star size={21} className="text-[#1b88f2] transition-all duration-300 group-hover/award:scale-125" />

                    <p className={`${ibmPlexMono.className} text-sm text-[#1b88f2]`}>ACADEMIC RECOGNITION</p>
                  </div>

                  <p className="mt-5 text-lg font-semibold text-white">Dean's List</p>
                  <p className="mt-2 text-sm text-white/60">Fall 2024</p>
                  <p className="text-sm text-white/60">2025–2026 Academic Year</p>

                  <div className="mt-5 h-[1px] w-[0px] bg-[#1b88f2] transition-all duration-500 group-hover/award:w-full" />
                </div>

              </div>
            </div>

            <div className="border-t border-[#1b88f2]/40 px-5 py-7 sm:px-8 sm:py-9">

              <div className="flex items-center gap-3">
                <p className={`${ibmPlexMono.className} text-[12px] text-[#1b88f2]/45`}>04</p>

                <p className={`${ibmPlexMono.className} text-lg text-[#1b88f2]`}>// RELEVANT COURSEWORK</p>
                <div className="h-[1px] flex-1 bg-[#1b88f2]/20" />
              </div>


              <div className="mt-7 grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2 md:grid-cols-4">


                <div className="group/data relative border-l border-[#1b88f2]/25 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b88f2] hover:bg-[#1b88f2]/[0.04]">

                  <p className="text-sm text-white/65 transition-all duration-300 group-hover/data:translate-x-2 group-hover/data:text-white">Data Structures</p>
                  <div className="absolute bottom-0 left-0 h-[1px] w-[0px] bg-[#1b88f2] transition-all duration-500 group-hover/data:w-full" />

                  <div className="absolute right-0 top-0 h-3 w-3 border-r border-t border-[#1b88f2] opacity-0 transition-all duration-300 group-hover/data:opacity-100" />
                </div>


                <div className="group/algorithms relative border-l border-[#1b88f2]/25 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b88f2] hover:bg-[#1b88f2]/[0.04]">
                  <p className="text-sm text-white/65 transition-all duration-300 group-hover/algorithms:translate-x-2 group-hover/algorithms:text-white">Algorithms</p>
                  <div className="absolute bottom-0 left-0 h-[1px] w-[0px] bg-[#1b88f2] transition-all duration-500 group-hover/algorithms:w-full" />
                  <div className="absolute right-0 top-0 h-3 w-3 border-r border-t border-[#1b88f2] opacity-0 transition-all duration-300 group-hover/algorithms:opacity-100" />
                </div>


                <div className="group/software relative border-l border-[#1b88f2]/25 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b88f2] hover:bg-[#1b88f2]/[0.04]">

                  <p className="text-sm text-white/65 transition-all duration-300 group-hover/software:translate-x-2 group-hover/software:text-white">Software Engineering</p>
                  <div className="absolute bottom-0 left-0 h-[1px] w-[0px] bg-[#1b88f2] transition-all duration-500 group-hover/software:w-full" />
                  <div className="absolute right-0 top-0 h-3 w-3 border-r border-t border-[#1b88f2] opacity-0 transition-all duration-300 group-hover/software:opacity-100" />
                </div>


                <div className="group/database relative border-l border-[#1b88f2]/25 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b88f2] hover:bg-[#1b88f2]/[0.04]">
                  <p className="text-sm text-white/65 transition-all duration-300 group-hover/database:translate-x-2 group-hover/database:text-white">Database Systems</p>
                  <div className="absolute bottom-0 left-0 h-[1px] w-[0px] bg-[#1b88f2] transition-all duration-500 group-hover/database:w-full" />
                  <div className="absolute right-0 top-0 h-3 w-3 border-r border-t border-[#1b88f2] opacity-0 transition-all duration-300 group-hover/database:opacity-100" />
                </div>


                <div className="group/os relative cursor-default overflow-hidden border-l border-[#1b88f2]/25 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b88f2] hover:bg-[#1b88f2]/[0.04]">
                  <p className="text-sm text-white/65 transition-all duration-300 group-hover/os:translate-x-2 group-hover/os:text-white">Operating Systems</p>
                  <div className="absolute bottom-0 left-0 h-[1px] w-[0px] bg-[#1b88f2] transition-all duration-500 group-hover/os:w-full" />
                  <div className="absolute right-0 top-0 h-3 w-3 border-r border-t border-[#1b88f2] opacity-0 transition-all duration-300 group-hover/os:opacity-100" />
                </div>



                <div className="group/networks relative border-l border-[#1b88f2]/25 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b88f2] hover:bg-[#1b88f2]/[0.04]">

                  <p className="text-sm text-white/65 transition-all duration-300 group-hover/networks:translate-x-2 group-hover/networks:text-white">Computer Networks</p>
                  <div className="absolute bottom-0 left-0 h-px w-[0px] bg-[#1b88f2] transition-all duration-500 group-hover/networks:w-full" />

                  <div className="absolute right-0 top-0 h-3 w-3 border-r border-t border-[#1b88f2] opacity-0 transition-all duration-300 group-hover/networks:opacity-100" />
                </div>

                <div className="group/securitycourse relative border-l border-[#1b88f2]/25 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b88f2] hover:bg-[#1b88f2]/[0.04]">
                  <p className="text-sm text-white/65 transition-all duration-300 group-hover/securitycourse:translate-x-2 group-hover/securitycourse:text-white">Computer Security</p>
                  <div className="absolute bottom-0 left-0 h-[1px] w-[0px] bg-[#1b88f2] transition-all duration-500 group-hover/securitycourse:w-full" />
                  <div className="absolute right-0 top-0 h-3 w-3 border-r border-t border-[#1b88f2] opacity-0 transition-all duration-300 group-hover/securitycourse:opacity-100" />
                </div>


                <div className="group/ml relative border-l border-[#1b88f2]/25 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b88f2] hover:bg-[#1b88f2]/[0.04]">
                  <p className="text-sm text-white/65 transition-all duration-300 group-hover/ml:translate-x-2 group-hover/ml:text-white">Web Systems Development</p>
                  <div className="absolute bottom-0 left-0 h-[1px] w-[0px] bg-[#1b88f2] transition-all duration-500 group-hover/ml:w-full" />
                  <div className="absolute right-0 top-0 h-3 w-3 border-r border-t border-[#1b88f2] opacity-0 transition-all duration-300 group-hover/ml:opacity-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;