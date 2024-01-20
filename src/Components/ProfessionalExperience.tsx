import ArrowIcon from '@/app/Icons/Arrow';
import Link from 'next/link';

const ProfessionalExperience = () => {
  return (
    <div className='bg-slate-200 text-black p-2 rounded-md flex flex-col'>
      <span className='font-bold text-lg'>Professional Experience</span>
      <span>Full-Stack Engineering Intern</span>
      <div>
        <span>NativShark,</span>
        <span className='italic text-sm'> May - December 2023</span>
      </div>
      <Link href={'/professional-experience'}>
        <div className='flex flex-row gap-2'>
          <span>Read more</span>
          <ArrowIcon />
        </div>
      </Link>
    </div>
  );
};
export default ProfessionalExperience;
