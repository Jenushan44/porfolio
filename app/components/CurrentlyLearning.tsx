import { Dot } from "lucide-react"

function CurrentlyLearning() {

  return (
    <div className="bg-[#1b1d1f] mx-5 mt-2 mb-2 min-h-[350px] w-1/2 border-[#222325] border-2 rounded-md">
      <div className='flex gap-2'>
        <p className="ml-3 mt-5 text-[#e4822d]">//</p>
        <p className="mt-5 text-white">currently learning</p>
        <Dot className='mt-5 text-[#e4822d]' />
      </div>
      <div className="text-white mx-5 mt-5">
        <div className="flex items-center gap-5 w-full">
          <p>Docker & Containers</p>
          <p className="ml-auto text-white/60">40%</p>
        </div>
        <div className="h-1 border-[#323334] rounded-md w-full bg-[#323334] overflow-hidden mb-3">
          <div className="h-full w-[40%] bg-[#e4822d]" />
        </div>

        <div className="flex items-center gap-5">
          <p>Linux Administration</p>
          <p className="ml-auto text-white/60">55%</p>
        </div>
        <div className="h-1 border-[#323334] rounded-md w-full bg-[#323334] overflow-hidden mb-3">
          <div className="h-full w-[55%] bg-[#e4822d]" />
        </div>

        <div className="flex items-center gap-5">
          <p>Machine Learning</p>
          <p className="ml-auto text-white/60">20%</p>
        </div>
        <div className="h-1 border-[#323334] rounded-md w-full bg-[#323334] overflow-hidden mb-3">
          <div className="h-full w-[20%] bg-[#e4822d]" />
        </div>


        <div className="flex items-center gap-5">
          <p>Networking</p>
          <p className="ml-auto text-white/60">50%</p>
        </div>
        <div className="h-1 border-[#323334] rounded-md w-full bg-[#323334] overflow-hidden mb-3">
          <div className="h-full w-[50%] bg-[#e4822d]" />
        </div>


      </div>

    </div>
  )
}

export default CurrentlyLearning