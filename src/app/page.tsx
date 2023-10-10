import About from '@/Components/About';
import Header from '@/Components/Header';

export default function Home() {
  return (
    <main className='p-3'>
      <div className='min-w-full bg-violet-400 p-4 flex flex-col gap-2 rounded-md'>
        <Header />
        <span>Featured Project</span>
        <About />
        <span>Professional Experience</span>
        <span>Usability Report</span>
        <span>Skills</span>
        <span>Education</span>
        <span>Contact</span>
        <span>Download my resume</span>
      </div>
    </main>
  );
}
