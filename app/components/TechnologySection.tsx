import { Dot } from "lucide-react"

function TechnologySection() {

  return (
    <div className="bg-[#1b1d1f] mx-5 min-h-[340px] border-[#222325] border-2 rounded-md w-2/3">
      <div className='flex gap-2'>
        <p className="ml-3 mt-5 text-[#e4822d]">//</p>
        <p className="mt-5 text-white">technologies used</p>
        <Dot className='mt-5 text-[#e4822d]' />
      </div>

      <div className="text-white grid grid-cols-3 2xl:grid-cols-4 mt-2">
        <div className="flex flex-col items-center mb-2">
          <img width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
          <p>Python</p>
        </div>

        <div className="flex flex-col items-center mb-2">
          <img width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
          <p>TypeScript</p>
        </div>

        <div className="flex flex-col items-center mb-2">
          <img width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          <p>JavaScript</p>
        </div>

        <div className="flex flex-col items-center mb-2">
          <img width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          <p>React</p>
        </div>

        <div className="flex flex-col items-center mb-2">
          <img width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
          <p>Next.js</p>
        </div>

        <div className="flex flex-col items-center mb-2">
          <img width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />
          <p>FastAPI</p>
        </div>

        <div className="flex flex-col items-center mb-2">
          <img width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
          <p>PostgreSQL</p>
        </div>

        <div className="flex flex-col items-center mb-2">
          <img width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" />
          <p>Docker</p>
        </div>

        <div className="flex flex-col items-center mb-2">
          <img width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
          <p>Linux</p>
        </div>

        <div className="flex flex-col items-center mb-2">
          <img width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
          <p>Git</p>
        </div>

        <div className="flex flex-col items-center mb-2">
          <img width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
          <p>Tailwind</p>
        </div>

        <div className="flex flex-col items-center mb-2">
          <img width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
          <p>SQL</p>
        </div>



      </div>
    </div>
  )
}

export default TechnologySection