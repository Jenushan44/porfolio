import { Dot } from "lucide-react"

function CurrentlyLearning() {

  return (
    <div className="bg-[#1b1d1f] mx-5 mt-2 mb-2 min-h-[350px] w-1/2 border-[#222325] border-2 rounded-md">
      <div className='flex gap-2'>
        <p className="ml-3 mt-5 text-[#e4822d]">//</p>
        <p className="mt-5 text-white">currently learning</p>
        <Dot className='mt-5 text-[#e4822d]' />
      </div>
      <div className="text-white">
        <div>
          <p>Docker & Containers</p>
          <div className="h-2 w-10 bg-white overflow-hidden">
            <div className="h-full w-4 bg-[#e4822d]" />
          </div>
        </div>

        <div>
          <p>Linux Administration</p>
        </div>

        <div>
          <p>Machine Learning</p>
        </div>

        <div>
          <p>Networking</p>
        </div>

      </div>

    </div>
  )
}

export default CurrentlyLearning