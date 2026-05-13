import Navbar from "./components/Navbar"
import Image from "next/image";
import Link from "next/link";
import githubLogo from "./assets/github-logo.png"
import linkedinLogo from "./assets/linkedin-logo.png"
import gmailLogo from "./assets/gmail-logo.png"
import gmailButtonLogo from "./assets/gmail-button-logo.png"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <div>
          <h1 className="text-white mt-[50px] ml-[50px]">Hi, I'm</h1>
          <div className="flex items-center gap-2 md:text-5xl lg:text-7xl ml-[50px]">
            <h1 className="text-white font-bold tracking-tight">Jenushan</h1>
            <h1 className="font-bold tracking-tight bg-gradient-to-r from-[#7C5CFF] to-[#3B82F6] bg-clip-text text-transparent ">Premkumar</h1>
          </div>
          <p className="ml-[50px] mt-[10px] text-white">Computer Science Student at Toronto Metropolitan University</p>
          <div className="flex items-center gap-2">
            <Link href="/projects" className="text-center text-white bg-gradient-to-r from-[#7C5CFF] to-[#3B82F6] p-[10px] w-[180px] ml-[50px] mt-[10px] rounded cursor-pointer">View Projects</Link>
            <button className="flex items-center justify-center text-white cursor-pointer w-[180px] p-[10px] mt-[10px] border-2 border-gray-700 rounded">Contact Me
              <Image
                className="w-[21px] ml-[15px] cursor-pointer"
                src={gmailButtonLogo}
                alt="Email Button Logo"
              />
            </button>

          </div>
          <div className="flex items-center mt-3">
            <Link href="https://github.com/Jenushan44">
              <Image className="w-[30px] ml-[50px] mt-[15px] cursor-pointer" src={githubLogo} alt="GitHub Logo" />
            </Link>
            <Link href="https://www.linkedin.com/in/jenushan-premkumar/">
              <Image className="w-[30px] ml-[30px] mt-[15px] cursor-pointer" src={linkedinLogo} alt="Linkedin Logo" />
            </Link>
            <Link href="mailto:jenushanpk@gmail.com">
              <Image className="w-[30px] ml-[30px] mt-[15px] cursor-pointer" src={gmailLogo} alt="Email Logo" />
            </Link>

          </div>


        </div>

      </main>

    </>
  );
}
