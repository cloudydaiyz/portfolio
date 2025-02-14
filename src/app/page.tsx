'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Background from '@/components/Background';
import { HeaderNavProvider } from '@/hooks/header';

export default function Home() {
  return (
    <HeaderNavProvider>
      <div className='relative'>
        <Background top />
        <Header />
      </div>
      <main className='flex w-[100vw] flex-col items-center'>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <div className='relative'>
        <Background />
        <Footer />
      </div>
    </HeaderNavProvider>
  );
}
