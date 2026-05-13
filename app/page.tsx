import Image from "next/image";
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <h1 className="text-white mt-[20px] ml-[20px]">Home Section</h1>
      </main>

    </>
  );
}
