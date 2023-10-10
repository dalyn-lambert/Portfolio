import GitHubIcon from '@/app/Icons/GitHub';
import InternetIcon from '@/app/Icons/Internet';

const FeaturedProject = () => {
  return (
    <div className='bg-slate-200 text-black p-2 rounded-md flex flex-col gap-2'>
      <div className='w-52 h-52 bg-red-100 '>Image</div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
          <span className='text-sm italic'>Featured Project</span>
          <span className='text-2xl font-bold'>Japanese Stats</span>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <InternetIcon />
          <GitHubIcon />
        </div>
      </div>
      <div>Next.js - TypeScript - Notion API</div>
    </div>
  );
};
export default FeaturedProject;
