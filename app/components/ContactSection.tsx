"use client";

import { Dot, Send } from "lucide-react";
import { bebasNeue } from "../fonts";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { useForm } from "@formspree/react";
import { useEffect, useRef } from "react";

function ContactSection() {
  const [state, handleSubmit, reset] = useForm("xbgrdzve");

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();

      const timer = setTimeout(() => { reset(); }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  return (
    <div id="contact-section" className="mx-5 py-12 scroll-mt-5">

      <div className="mb-10 flex justify-center">
        <p className={`${bebasNeue.className} blueprint-text-white mx-auto text-[75px] leading-[0.82] tracking-[0.015em] text-white/90`}>CONTACT</p>
      </div>

      <div className="group/contact relative mx-auto max-w-[1300px]">
        <div className="absolute top-0 bottom-0 right-0 left-0 translate-x-[7px] translate-y-[7px] border border-[#1b88f2]/20 bg-[#0a4f93]/10 transition-all duration-300 group-hover/contact:translate-x-[10px] group-hover/contact:translate-y-[10px]" />
        <div className="relative flex border-2 border-[#1b88f2] bg-[#001432] pb-5 transition-all duration-300 group-hover/contact:-translate-x-[2px] group-hover/contact:-translate-y-[2px]">

          <div className="flex w-full">
            <div className="mx-5 mt-5 w-1/3">

              <p className="text-lg font-semibold text-[#1b88f2]">GET IN TOUCH</p>

              <div className="mb-5 h-[1px] w-[50%] bg-[#1b88f2]" />

              <div className="mb-7 text-white/70">
                <p>I'm always open to discussing new opportunities,</p>
                <p>interesting projects or just connecting.</p>
                <p>Feel free to reach out!</p>
              </div>


              <div className="group/email mb-5 flex items-center gap-3 transition-all duration-300 hover:translate-x-2">

                <div className="border border-[#1b88f2] p-2 transition-all duration-300 group-hover/email:bg-[#1b88f2]/10">
                  <BiLogoGmail className="text-[#1b88f2]" size={35} />
                </div>

                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-[#1b88f2]">EMAIL</p>
                  <p className="text-white/70">jenushanpk@gmail.com</p>
                </div>

              </div>



              <a href="https://www.linkedin.com/in/jenushan-premkumar/" target="_blank" className="group/linkedin mb-5 flex cursor-pointer items-center gap-3 transition-all duration-300 hover:translate-x-2">

                <div className="border border-[#1b88f2] p-2 transition-all duration-300 group-hover/linkedin:bg-[#1b88f2]/10">
                  <FaLinkedin className="text-[#1b88f2]" size={35} />
                </div>

                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-[#1b88f2]">LINKEDIN</p>
                  <p className="text-white/70">linkedin.com/in/jenushan-premkumar/</p>
                </div>

              </a>



              <a href="https://github.com/Jenushan44" target="_blank" className="group/github mb-5 flex cursor-pointer items-center gap-3 transition-all duration-300 hover:translate-x-2">
                <div className="border border-[#1b88f2] p-2 transition-all duration-300 group-hover/github:bg-[#1b88f2]/10">
                  <FaGithub className="text-[#1b88f2]" size={35} />
                </div>

                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-[#1b88f2]">GITHUB</p>
                  <p className="text-white/70">github.com/Jenushan44</p>
                </div>

              </a>


              <div className="group/location mb-5 flex items-center gap-3 transition-all duration-300 hover:translate-x-2">

                <div className="border border-[#1b88f2] p-2 transition-all duration-300 group-hover/location:bg-[#1b88f2]/10">
                  <MdLocationPin className="text-[#1b88f2]" size={35} />
                </div>

                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-[#1b88f2]">LOCATION</p>
                  <p className="text-white/70">Toronto, Ontario, Canada</p>
                </div>

              </div>



              <div className="group/availability mb-5 border border-[#1b88f2]/40 bg-[#001127] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b88f2]">

                <p className="flex items-center font-semibold text-[#00d18a]"><Dot size={36} />AVAILABILITY</p>
                <p className="mt-2 text-white/80">Open to Work</p>
                <p className="mt-1 text-sm text-white/50">Internship | Full-time | Part-time</p>
              </div>

            </div>



            <div className="my-2 mt-5 w-[1px] self-stretch bg-[#1b88f2]/60" />


            <form ref={formRef} onSubmit={handleSubmit} className="w-2/3">

              <div className="flex-1">

                <p className="mx-5 mt-5 text-lg font-semibold text-[#1b88f2]">SEND A MESSAGE</p>
                <div className="mx-5 mb-5 h-[1px] w-[35%] bg-[#1b88f2]" />


                <div className="w-full">
                  <div className="px-5">
                    <div className="mt-5 flex w-full gap-10">
                      <div className="w-1/2 text-white">
                        <p>YOUR NAME</p>
                        <input type="text" name="name" required placeholder="John Doe" className="mt-2 w-full border border-[#1b88f2]/30 bg-[#001127] p-3 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#1b88f2] focus:bg-[#001432]" />
                      </div>


                      <div className="w-1/2 text-white">
                        <p>YOUR EMAIL</p>
                        <input type="email" name="email" required placeholder="john@example.com" className="mt-2 w-full border border-[#1b88f2]/30 bg-[#001127] p-3 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#1b88f2] focus:bg-[#001432]" />

                      </div>
                    </div>
                  </div>


                  <div className="w-full">
                    <div className="px-5 text-white">
                      <p className="mt-5">SUBJECT</p>

                      <input type="text" name="subject" required placeholder="Quick question" className="mt-2 w-full border border-[#1b88f2]/30 bg-[#001127] p-3 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#1b88f2] focus:bg-[#001432]" />
                    </div>
                  </div>



                  <div className="w-full text-white">
                    <p className="mx-5 mt-5">MESSAGE</p>

                    <div className="px-5">
                      <textarea name="message" required placeholder="Hi, I'd like to talk about ..." className="mt-2 h-[200px] w-full resize-none border border-[#1b88f2]/30 bg-[#001127] p-3 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#1b88f2] focus:bg-[#001432]" />
                    </div>
                  </div>

                  <button type="submit" disabled={state.submitting} className="mx-auto mb-5 mt-5 flex w-fit cursor-pointer items-center gap-2 border-2 border-[#1b88f2] bg-[#001432] px-20 py-2 text-sm font-semibold uppercase tracking-wider text-[#d8ecff] shadow-[0_8px_0_#0a4f93] transition-all duration-150 hover:translate-y-[3px] hover:shadow-[0_5px_0_#0a4f93] active:translate-y-[8px] active:shadow-none disabled:cursor-not-allowed disabled:opacity-50">
                    <Send size={20} />{state.submitting ? "Sending" : "Send Message"}
                  </button>


                  <div className="mt-2 h-6">
                    {state.succeeded && (<p className="text-center font-semibold text-[#00d18a]">Message sent successfully!</p>)}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;