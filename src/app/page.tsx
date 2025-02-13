import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Background from '@/components/Background';

export default function Home() {
  return (
    <>
      <div>
        <Background top />
        <Header />
      </div>
      <main className='flex w-[100vw] flex-col items-center gap-20'>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <div>
        <Background />
        <Footer />
      </div>
    </>
  );
}
