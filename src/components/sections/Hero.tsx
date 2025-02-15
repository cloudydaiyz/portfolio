import headshot from '@public/headshot.jpg';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Heading from '@/components/Heading';
import * as Svg from '@/components/svg';
import { useInView } from 'react-intersection-observer';
import { useHeaderNavContext } from '@/hooks/header';

function AboutBadge({ children }: { children: React.ReactNode }) {
  return (
    <li className='flex items-center justify-center gap-1 rounded-lg bg-white bg-opacity-10 px-5 py-1'>{children}</li>
  );
}

export default function Hero() {
  const headerNav = useHeaderNavContext();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  useEffect(() => {
    headerNav.setHeroVisible(inView);
  }, [headerNav, inView]);

  return (
    <section
      ref={ref}
      id='about-me'
      className='flex h-screen max-h-[1000px] min-h-fit w-screen max-w-screen-2xl flex-col px-10 md:px-32'
    >
      <div className='flex h-[80px] items-center justify-center font-[family-name:--font-oswald] sm:justify-between'>
        <h2 className='hidden text-[28px] sm:block'>
          <Link href='/' target='_self'>
            cloudydaiyz
          </Link>
        </h2>
        <nav>
          <ul className='flex gap-5 text-[20px]'>
            <li>
              <Link href='#about-me' target='_self' className='hover:text-[#E8D2AA]'>
                About Me
              </Link>
            </li>
            <li>
              <Link href='#projects' target='_self' className='hover:text-[#E8D2AA]'>
                Projects
              </Link>
            </li>
            <li>
              <Link href='#contact' target='_self' className='hover:text-[#E8D2AA]'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex flex-grow flex-col items-center sm:mt-8 md:mt-0'>
        <h1 className='mb-8 mt-4 flex flex-col items-center font-[family-name:--font-oswald] leading-none tracking-tighter md:mt-8 lg:mb-20 lg:mt-10'>
          <span className='text-[30px] sm:text-[40px] lg:text-[50px]'>Hello, I am</span>
          <span className='hover:glow-lg glow bg-gradient-to-b from-[#FFFFFF] to-[#E8D2AA] bg-clip-text text-center text-[50px] font-bold text-transparent transition-all duration-500 sm:text-[75px] lg:text-[100px]'>
            KYLAN DUNCAN
          </span>
        </h1>
        <div className='mb-8 flex flex-col items-center justify-center gap-8 md:flex-row lg:mb-20 lg:gap-32'>
          <Image
            src={headshot}
            alt='My headshot'
            className='block aspect-square w-[150px] rounded-[30px] md:w-[200px] lg:w-[300px]'
            priority
          />
          <div className='flex max-w-[600px] flex-col items-center justify-center gap-4'>
            <div className='flex flex-col items-center gap-4'>
              <div className='hover:glow glow-sm relative z-0 hidden size-fit rounded-xl bg-gradient-to-b from-[#E8D2AA] to-[#8D7E63] p-1 transition-all duration-500 md:block'>
                <Svg.User className='size-[48px] fill-white' />
              </div>
              <Heading>ABOUT ME</Heading>
            </div>
            <p className='text-center text-base leading-[1.1] sm:text-[20px]'>
              I am a full stack engineer with a passion for web development, the cloud, and making modern software
              applications with a great user experience. On a journey of constant learning, I always aspire to find new
              ways to make my code robust, scalable, and easily maintainable.
            </p>
            <Link
              href={'#contact'}
              target='_self'
              className='hover:glow-sm lifted-sm rounded-xl bg-white px-8 py-2 font-[family-name:--font-oswald] text-[24px] font-extrabold leading-[1.1] text-black transition-all duration-300 hover:scale-105'
            >
              CONTACT ME
            </Link>
          </div>
        </div>
        <ul className='flex flex-wrap justify-center gap-4'>
          <AboutBadge>
            <div className='h-[24px] w-[24px]'>
              <Svg.Home className='size-full fill-white' />
            </div>
            <p className='whitespace-nowrap'>
              <strong>From: </strong>Houston, TX
            </p>
          </AboutBadge>
          <AboutBadge>
            <div className='h-[24px] w-[24px]'>
              <Svg.GlobeAmerica className='size-full fill-white' />
            </div>
            <p className='whitespace-nowrap'>
              <strong>Work Location: </strong>Remote
            </p>
          </AboutBadge>
          <AboutBadge>
            <div className='h-[24px] w-[24px]'>
              <Svg.Briefcase className='size-full fill-white' />
            </div>
            <p className='whitespace-nowrap'>Currently Available for Work</p>
          </AboutBadge>
        </ul>
      </div>
    </section>
  );
}
