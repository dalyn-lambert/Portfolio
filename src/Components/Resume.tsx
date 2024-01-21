import ResumeIcon from '@/app/Icons/Resume';

const Resume = () => {
  return (
    <a href='/dalyn-lambert-resume.pdf' download='dalyn-lambert-resume'>
      <div className='bg-slate-200 text-black p-2 rounded-md flex flex-row justify-between'>
        <span className='text-lg font-bold'>Download Resume</span>
        <ResumeIcon />
      </div>
    </a>
  );
};
export default Resume;
