import ResumeIcon from '@/app/Icons/Resume';

const Resume = () => {
  return (
    <div className='bg-slate-200 text-black p-2 rounded-md flex flex-row justify-between'>
      <span className='text-lg font-bold'>Download my resume</span>
      <ResumeIcon />
    </div>
  );
};
export default Resume;
