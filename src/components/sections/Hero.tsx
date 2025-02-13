import headshot from '@public/headshot.jpg';
import user from '@/assets/hero-section/user.svg';
import home from '@/assets/hero-section/home.svg';
import globe from '@/assets/hero-section/globe-america.svg';
import briefcase from '@/assets/hero-section/briefcase.svg';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Heading from '@/components/Heading';

function AboutBadge({ children }: { children: React.ReactNode }) {
  return (
    <li className='flex items-center justify-center gap-1 rounded-lg bg-white bg-opacity-10 px-5 py-1'>{children}</li>
  );
}

export default function Hero() {
  return (
    <section id='about-me' className='min-w-screen flex min-h-screen w-full flex-col px-32'>
      <div className='flex h-[80px] items-center justify-between font-[family-name:--font-oswald]'>
        <h2 className='text-[28px]'>
          <Link href='/' target='_self'>
            cloudydaiyz
          </Link>
        </h2>
        <nav>
          <ul className='flex gap-5 text-[20px]'>
            <li>
              <Link href='#about-me' target='_self'>
                About Me
              </Link>
            </li>
            <li>
              <Link href='#projects' target='_self'>
                Projects
              </Link>
            </li>
            <li>
              <Link href='#contact' target='_self'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex flex-grow flex-col items-center'>
        <h1 className='mb-20 mt-10 flex flex-col items-center font-[family-name:--font-oswald] leading-none tracking-tighter'>
          <span className='text-[50px]'>Hello, I am</span>
          {/* #484848 */}
          <span className='glow bg-gradient-to-b from-[#FFFFFF] to-[#E8D2AA] bg-clip-text text-[100px] font-bold text-transparent'>
            KYLAN DUNCAN
          </span>
        </h1>
        <div className='mb-20 flex items-center justify-center gap-32'>
          <Image
            src={headshot}
            alt='My headshot'
            className='aspect-square w-[150px] rounded-[30px] md:w-[200px] lg:w-[300px]'
            priority
          />
          <div className='flex max-w-[600px] flex-col items-center justify-center gap-4'>
            <div className='glow relative z-0 rounded-xl bg-gradient-to-b from-[#E8D2AA] to-[#8D7E63] p-1'>
              <Image src={user} alt='Person icon' className='h-[48px] w-[48px]' />
            </div>
            <Heading>ABOUT ME</Heading>
            <p className='text-center text-[20px] leading-[1.1]'>
              I am a full stack developer with a passion for web development, the cloud, and making modern software
              applications with a great user experience. On a journey of constant learning, I always aspire to find new
              ways to make my code robust, scalable, and easily maintainable.
            </p>
            <Link
              href={'#contact'}
              target='_self'
              className='rounded-2xl bg-white px-8 py-4 font-[family-name:--font-oswald] text-[20px] font-bold leading-[1.1] text-black'
            >
              CONTACT ME
            </Link>
          </div>
        </div>
        <ul className='flex justify-center gap-4'>
          <AboutBadge>
            <div className='h-[24px] w-[24px]'>
              <Image src={home} alt='Hometown icon' />
            </div>
            <p>
              <strong>From: </strong>Houston, TX
            </p>
          </AboutBadge>
          <AboutBadge>
            <div className='h-[24px] w-[24px]'>
              <Image src={globe} alt='Work location icon' />
            </div>
            <p>
              <strong>Work Location: </strong>Remote
            </p>
          </AboutBadge>
          <AboutBadge>
            <div className='h-[24px] w-[24px]'>
              <Image src={briefcase} alt='Work availability icon' />
            </div>
            <p>Currently Available for Work</p>
          </AboutBadge>
        </ul>
      </div>
    </section>
  );
}
