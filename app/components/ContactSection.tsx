import { Dot, Send, UserRound } from "lucide-react"
import { bebasNeue, ibmPlexMono } from "../fonts";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";

function ContactSection() {

  return (

    <div className="mx-5 py-12">
      <div className="flex justify-center mb-10">
        <p className={`${bebasNeue.className} mx-auto blueprint-text-white text-[75px] leading-[0.82] text-white/90 tracking-[0.015em]`}>CONTACT</p>
      </div>

      <div className="mx-auto border-2 border-[#1b88f2] bg-[#001432] max-w-[1300px] flex">

        <div className="mx-5 mt-5">
          <p className="text-[#1b88f2] font-semibold text-lg">GET IN TOUCH</p>
          <div className="w-[60%] h-[0.5px] bg-[#1b88f2] mb-5" />
          <div className="mb-5">
            <p>I'm always open to discussing new opportunities,</p>
            <p>interesting projects or just connecting.</p>
            <p>Feel free to reach out!</p>
          </div>

          <div className="flex gap-2 items-center mb-5">
            <div className="border-1 p-2 border-[#1b88f2]">
              <BiLogoGmail className="text-[#1b88f2]" size={35} />
            </div>
            <div className="flex flex-col">
              <p className="text-[#1b88f2] font-semibold text-lg">EMAIL</p>
              <p>jenushanpk@gmail.com</p>
            </div>
          </div>

          <a href="https://www.linkedin.com/in/jenushan-premkumar/" target="_blank" className="mb-5 flex items-center gap-2 cursor-pointer">
            <div className="border border-[#1b88f2] p-2">
              <FaLinkedin className="text-[#1b88f2]" size={35} />
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-semibold text-[#1b88f2]">LINKEDIN</p>
              <p>linkedin.com/in/jenushan-premkumar/</p>
            </div>
          </a>


          <a href="https://github.com/Jenushan44" target="_blank" className="mb-5 flex items-center gap-2 cursor-pointer">
            <div className="border border-[#1b88f2] p-2">
              <FaGithub className="text-[#1b88f2]" size={35} />
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-semibold text-[#1b88f2]">GITHUB</p>
              <p>github.com/Jenushan44</p>
            </div>
          </a>

          <div className="flex gap-2 items-center mb-5">
            <div className="border-1 p-2 border-[#1b88f2]">
              <MdLocationPin className="text-[#1b88f2]" size={35} />
            </div>
            <div className="flex flex-col">
              <p className="text-[#1b88f2] font-semibold text-lg">Location</p>
              <p>Toronto, Ontario, Canada</p>
            </div>
          </div>

          <div className="border-2 border-[#1b88f2] mb-5">
            <p className="flex mt-2 items-center text-[#00d18a] font-semibold"><Dot size={40} />AVAILABILITY</p>
            <p className="flex gap-2 mx-4">Open to Work</p>
            <p className="mx-4 mt-1 pb-4">Internship | Full-time | Part-time</p>
          </div>


        </div>

        <div className="w-[1px] self-stretch my-5 bg-[#1b88f2]" />


        <div className="flex-1">
          <p className="text-[#1b88f2] mx-5 mt-5 text-lg font-semibold">SEND A MESSAGE</p>
          <div className="w-[35%] h-[0.5px] bg-[#1b88f2] mx-5 mb-5" />

          <div className="w-full">
            <div className="px-5">
              <div className="w-full flex gap-10 mt-5">
                <div className="w-1/2">
                  <p>YOUR NAME</p>
                  <input placeholder="John Doe" className="w-full p-2 border-1 border-zinc-800 mt-2" />
                </div>

                <div className="w-1/2">
                  <p>YOUR EMAIL</p>
                  <input placeholder="john@example.com" className="w-full p-2 border-1 border-zinc-800 mt-2" />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="px-5">
                <p className="mt-5">SUBJECT</p>
                <input placeholder="Quick question" className="w-full p-2 border-1 border-zinc-800 mt-2" />
              </div>
            </div>

            <div className="w-full">
              <p className="mx-5 mt-5">MESSAGE</p>
              <div className="px-5">
                <textarea placeholder="Hi, I'd like to talk about ..." className="w-full p-2 border border-zinc-800 w-full h-[200px] mt-2 p-1" />
              </div>
            </div>

            <a target="_blank" className="cursor-pointer gap-2 mx-auto mt-5 mb-5 flex w-fit items-center border-2 border-[#1b88f2] bg-[#001432] px-20 py-2 font-semibold uppercase tracking-wider text-sm text-[#d8ecff] shadow-[0_8px_0_#0a4f93] transition-all duration-150 hover:translate-y-[3px] hover:shadow-[0_5px_0_#0a4f93] active:translate-y-[8px] active:shadow-none py-2"><Send size={20} />Send Message</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection