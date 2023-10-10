import About from '@/Components/About';
import Header from '@/Components/Header';

export default function Home() {
  return (
    <main className='p-3'>
      <div className='min-w-full bg-violet-400 p-4 flex flex-col gap-2 rounded-md'>
        <Header />
        <About />
      </div>
    </main>
  );
}
