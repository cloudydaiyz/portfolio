import envelope from '@/assets/contact-section/envelope.svg';
// import calendar from '@/assets/contact-section/calendar.svg';

import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Heading';

export default function Contact() {
  return (
    <section id='contact' className='flex flex-col items-center px-32 py-[200px]'>
      <Heading className='mb-10'>GET IN TOUCH</Heading>
      <p className='mb-10 text-center text-[20px]'>
        Want to get in touch? The quickest way to get in contact with me is through email or setting up a meeting.
        <br />
        I&apos;m always open to discussing new opportunities!
      </p>
      <ul>
        {/* foreach contact method */}
        <li>
          <Link href='mailto:kyland03.biz@gmail.com'>
            <div className='flex items-center justify-center gap-1 rounded-lg bg-white bg-opacity-10 px-5 py-1'>
              <div className='flex h-[30px] w-[30px] items-center justify-center'>
                <Image src={envelope} alt='Email icon' className='size-full' />
              </div>
              <p className='text-[20px]'>Email me</p>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}
