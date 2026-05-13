import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

function Navbar() {

  return (
    <nav className="h-[80px] flex items-center justify-between bg-[#070f1b]">
      <Image className="ml-[10px] flex items-right w-[75px] mt-[5px]" src={logo} alt="Logo" />
      <div className="flex items-left gap-4">
        <Link href="/" className="text-white cursor-pointer" >Home</Link>
        <Link href="/projects" className="text-white cursor-pointer">Projects</Link>
        <Link href=" /about" className="text-white cursor-pointer"  >About</Link>
        <Link href="/contact" className="text-white cursor-pointer">Contact</Link>
        <button className="mr-[10px] text-white cursor-pointer">Resume</button>
      </div>
    </nav >
  )
}

export default Navbar