import About from '@/Components/About';
import FeaturedProject from '@/Components/FeaturedProject';
import Header from '@/Components/Header';
import ProfessionalExperience from '@/Components/ProfessionalExperience';
import Skills from '@/Components/Skills';
import UsabilityReport from '@/Components/UsabilityReport';

export default function Home() {
  return (
    <main className='p-3'>
      <div className='min-w-full bg-violet-400 p-4 flex flex-col gap-2 rounded-md'>
        <Header />
        <FeaturedProject />
        <About />
        <ProfessionalExperience />
        <UsabilityReport />
        <Skills />
        <span>Education</span>
        <span>Contact</span>
        <span>Download my resume</span>
      </div>
    </main>
  );
}
