import { Dot } from 'lucide-react';

function ProjectSection() {
  return (
    <div className="bg-[#1b1d1f] flex gap-2 mx-5 min-h-[350px] border-[#222325] border-2 rounded-md">
      <p className="ml-3 mt-5 text-[#e4822d]">//</p>
      <p className="mt-5 text-white">featured projects</p>
      <Dot className='mt-5 text-[#e4822d]' />
    </div>
  );
}

export default ProjectSection 