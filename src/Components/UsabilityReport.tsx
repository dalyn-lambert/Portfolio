import ArrowIcon from '@/app/Icons/Arrow';

const UsabilityReport = () => {
  return (
    <div className='bg-slate-200 text-black p-2 rounded-md flex flex-col'>
      <span className='font-bold text-lg'>Open Source Contribution</span>
      <span>Rikaikun Extension Usability Report</span>
      <span>Date</span>
      <div className='flex flex-row gap-2'>
        <span>Read more</span>
        <ArrowIcon />
      </div>
    </div>
  );
};
export default UsabilityReport;
