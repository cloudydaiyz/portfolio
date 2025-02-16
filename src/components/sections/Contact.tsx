import Link from 'next/link';
import Heading from '@/components/Heading';
import * as Svg from '@/components/svg';
import { useHeaderNavContext } from '@/hooks/header';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Contact() {
  const headerNav = useHeaderNavContext();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    headerNav.setContactMeVisible(inView);
  }, [headerNav, inView]);

  return (
    <section ref={ref} id='contact' className='flex max-w-[100vw] flex-col items-center px-10 py-[200px] md:px-32'>
      <Heading className='mb-10'>GET IN TOUCH</Heading>
      <p className='mb-10 text-center text-[20px]'>
        Want to get in touch? I&apos;m always open to discussing new opportunities!
      </p>
      <ul className='flex flex-col gap-4'>
        {/* foreach contact method */}
        <li className='flex items-center justify-center'>
          <Link href='mailto:kyland03.biz@gmail.com'>
            <div className='hover:glow-sm lifted-sm flex items-center justify-center gap-1 rounded-lg bg-white px-5 py-1 transition-all duration-300 hover:scale-105'>
              <div className='relative top-[1px] flex h-[30px] w-[30px] items-center justify-center'>
                <Svg.Envelope className='size-full fill-black' />
              </div>
              <p className='whitespace-nowrap font-[family-name:--font-oswald] text-[24px] font-bold text-black'>
                EMAIL ME
              </p>
            </div>
          </Link>
        </li>
        <li className='flex items-center justify-center'>
          <Link href='https://linkedin.com/in/kylan-duncan' target='_blank'>
            <div className='hover:glow-sm lifted-sm flex items-center justify-center gap-1 rounded-lg bg-white px-5 py-1 transition-all duration-300 hover:scale-105'>
              <div className='relative top-[1px] flex h-[30px] w-[30px] items-center justify-center'>
                <Svg.LinkedIn className='size-full fill-black' />
              </div>
              <p className='whitespace-nowrap font-[family-name:--font-oswald] text-[24px] font-bold text-black'>
                CONNECT WITH ME
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}
