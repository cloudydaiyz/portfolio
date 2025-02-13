import headshot from '@public/headshot.jpg';
import user from '@/assets/hero-section/user.svg';
import home from '@/assets/hero-section/home.svg';
import globe from '@/assets/hero-section/globe-america.svg';
import briefcase from '@/assets/hero-section/briefcase.svg';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id='about-me' className='min-w-screen min-h-screen'>
      <div className='flex justify-between'>
        <h2>cloudydaiyz</h2>
        <nav>
          <ul className='flex gap-5'>
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
      <h1 className='flex flex-col items-center'>
        <span className='text-[50px] leading-none font-[family-name:--font-oswald]'>Hello, I am</span>
        <span className='text-[100px] leading-none font-[family-name:--font-oswald]'>KYLAN DUNCAN</span>
      </h1>
      <div className='flex justify-center'>
        <Image
          src={headshot}
          alt='My headshot'
          className='w-[150px] md:w-[300px] lg:w-[400px] rounded-[30px]'
          priority
        />
        <div>
          <div>
            <Image src={user} alt='Person icon' className='w-[48px] h-[48px]' />
          </div>
          <h2>ABOUT ME</h2>
          <p>
            I am a full stack developer with a passion for web development, the cloud, and making modern software
            applications with a great user experience. On a journey of constant learning, I always aspire to find new
            ways to make my code robust, scalable, and easily maintainable.
          </p>
          <Link href={'#contact-me'} target='_self'>
            CONTACT ME
          </Link>
        </div>
      </div>
      <ul className='flex justify-center'>
        <li className='flex justify-center'>
          <Image src={home} alt='Hometown icon' className='w-[24px] h-[24px]' />
          <p>
            <strong>From: </strong>Houston, TX
          </p>
        </li>
        <li className='flex justify-center'>
          <Image src={globe} alt='Work location icon' className='w-[24px] h-[24px]' />
          <p>
            <strong>Work Location: </strong>Remote
          </p>
        </li>
        <li className='flex justify-center'>
          <Image src={briefcase} alt='Work availability icon' className='w-[24px] h-[24px]' />
          <p>Currently Available for Work</p>
        </li>
      </ul>
    </section>
  );
}
