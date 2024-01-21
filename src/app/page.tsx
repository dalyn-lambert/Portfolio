import About from '@/Components/About';
import Contact from '@/Components/Contact';
import Education from '@/Components/Education';
import OpenSourceContribution from '@/Components/OpenSourceContribution';
import ProfessionalExperience from '@/Components/ProfessionalExperience';
import ProjectFeatured from '@/Components/ProjectFeatured';
import ProjectJapaneseStatsDash from '@/Components/ProjectJapaneseStatsDash';
import ProjectLocalLegends from '@/Components/ProjectLocalLegends';
import Resume from '@/Components/Resume';
import Skills from '@/Components/Skills';

export default function Home() {
  return (
    <main className=''>
      <div className=' flex flex-col gap-2 rounded-md'>
        <ProjectFeatured />
        <About />
        <ProfessionalExperience />
        <ProjectJapaneseStatsDash />
        <ProjectLocalLegends />
        <OpenSourceContribution />
        <Skills />
        <Education />
        <Contact />
        <Resume />
      </div>
    </main>
  );
}
