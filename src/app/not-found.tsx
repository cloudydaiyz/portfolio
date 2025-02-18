import Footer from '@/components/sections/Footer';
import Background from '@/components/Background';
import Link from 'next/link';
import Heading from '@/components/Heading';

export default function Home() {
  return (
    <>
      <div className='relative'>
        <Background top />
      </div>
      <main className='flex h-full w-[100vw] flex-grow flex-col items-center'>
        <div className='flex h-[80px] w-full items-center justify-center px-10 font-[family-name:--font-oswald] sm:justify-between md:px-32'>
          <h2 className='hidden text-[28px] sm:block'>
            <Link href='/' target='_self'>
              cloudydaiyz
            </Link>
          </h2>
          <nav>
            <ul className='flex gap-5 text-[20px]'>
              <li>
                <Link href='/#about-me' target='_self' className='hover:text-[#E8D2AA]'>
                  About Me
                </Link>
              </li>
              <li>
                <Link href='/#projects' target='_self' className='hover:text-[#E8D2AA]'>
                  Projects
                </Link>
              </li>
              <li>
                <Link href='/#contact' target='_self' className='hover:text-[#E8D2AA]'>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex flex-grow flex-col items-center justify-center gap-4 px-10 text-center'>
          <Heading className=''>PAGE NOT FOUND</Heading>
          <p className='fade-in-anim anim-delay-1 text-xl'>
            You&apos;re in uncharted territory now! Not sure if this&apos;ll turn into something later.
          </p>
        </div>
      </main>
      <div className='relative'>
        <Footer />
      </div>
    </>
  );
}
