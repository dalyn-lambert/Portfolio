import ArrowIcon from '@/app/Icons/Arrow';
import GitHubIcon from '@/app/Icons/GitHub';
import InternetIcon from '@/app/Icons/Internet';
import Link from 'next/link';

const ProjectLocalLegends = () => {
  return (
    <div className='bg-slate-200 text-black p-2 rounded-md flex flex-col gap-2'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
          <span className='text-sm italic'>Project in Progress</span>
          <span className='font-bold text-lg'>Local Legends</span>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <a target='_blank' href='https://toukei-time.vercel.app/home' rel='noopener noreferrer'>
            <InternetIcon />
          </a>
          <a target='_blank' href='https://github.com/Dalyn-Boyd/Toukei-Time' rel='noopener noreferrer'>
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className='flex flex-col gap-0'>
        <span>Super Smash Brothers Melee locals</span>
        <span>Next.js - TypeScript - Postgres</span>
      </div>
      <Link href={'/local-legends'}>
        <div className='flex flex-row gap-2'>
          <span>Read more</span>
          <ArrowIcon />
        </div>
      </Link>
    </div>
  );
};
export default ProjectLocalLegends;
