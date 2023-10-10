import EnvelopeIcon from '@/app/Icons/Envelope';
import ResumeIcon from '@/app/Icons/Resume';

const Header = () => {
  return (
    <div className='bg-slate-200 text-black p-2 rounded-md flex flex-row justify-between'>
      <div className='flex flex-col'>
        <span className='text-2xl font-bold'>Dalyn Boyd</span>
        <span className='text-sm'>Web Developer</span>
      </div>
      <div className='flex flex-row gap-2 items-center'>
        <EnvelopeIcon />
        <ResumeIcon />
      </div>
    </div>
  );
};
export default Header;
