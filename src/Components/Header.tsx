import EnvelopeIcon from '@/app/Icons/Envelope';
import HomeIcon from '@/app/Icons/Home';
import ResumeIcon from '@/app/Icons/Resume';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-slate-200 text-black p-2 rounded-md flex flex-row justify-between'>
      <div className='flex flex-col'>
        <span className='text-2xl font-bold'>Dalyn Lambert</span>
        <span className='text-sm'>Web Developer</span>
      </div>
      <div className='flex flex-row gap-2 items-center'>
        <Link href='/'>
          <HomeIcon />
        </Link>
        <a href='/contact' target='_blank'>
          <EnvelopeIcon />
        </a>
        <a href='/dalyn-lambert-resume.pdf' target='_blank'>
          <ResumeIcon />
        </a>
      </div>
    </div>
  );
};
export default Header;
