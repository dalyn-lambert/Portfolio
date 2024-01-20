import ArrowIcon from '@/app/Icons/Arrow';
import Link from 'next/link';

const OpenSourceContribution = () => {
  return (
    <div className='bg-slate-200 text-black p-2 rounded-md flex flex-col'>
      <span className='font-bold text-lg'>Open Source Contribution</span>
      <span>Rikaikun Extension Usability Report</span>
      <span>Date</span>
      <Link href={'/usability-report'}>
        <div className='flex flex-row gap-2'>
          <span>Read more</span>
          <ArrowIcon />
        </div>
      </Link>
    </div>
  );
};
export default OpenSourceContribution;
