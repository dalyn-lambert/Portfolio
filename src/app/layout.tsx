import Header from '@/Components/Header';
import type { Metadata } from 'next';
import 'src/app/globals.css';

export const metadata: Metadata = {
  title: "Dalyn's Portfolio",
  description: "Dalyn Lambert's web development portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-black p-3'>
        <div className='p-3 flex flex-col gap-2 bg-violet-400'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
