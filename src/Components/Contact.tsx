import EnvelopeIcon from '@/app/Icons/Envelope';
import Link from 'next/link';

const Contact = () => {
  return (
    <Link href='/contact'>
      <div className='bg-slate-200 text-black p-2 rounded-md flex flex-row justify-between'>
        <span className='text-lg font-bold'>Contact Me</span>
        <EnvelopeIcon />
      </div>
    </Link>
  );
};
export default Contact;
