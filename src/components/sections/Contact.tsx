import Link from 'next/link';
import Heading from '@/components/Heading';
import * as Svg from '@/components/svg';

export default function Contact() {
  return (
    <section id='contact' className='flex flex-col items-center px-32 py-[200px]'>
      <Heading className='mb-10'>GET IN TOUCH</Heading>
      <p className='mb-10 text-center text-[20px]'>
        Want to get in touch?
        <br />
        The quickest way to get in contact with me is through email or setting up a meeting.
        <br />
        I&apos;m always open to discussing new opportunities!
      </p>
      <ul className='flex flex-col gap-4'>
        {/* foreach contact method */}
        <li className='flex items-center justify-center'>
          <Link href='mailto:kyland03.biz@gmail.com'>
            <div className='hover:glow-sm lifted-sm flex items-center justify-center gap-1 rounded-lg bg-white px-5 py-1 transition-all duration-300 hover:scale-105'>
              <div className='relative top-[1px] flex h-[30px] w-[30px] items-center justify-center'>
                <Svg.Envelope className='size-full fill-black' />
              </div>
              <p className='font-[family-name:--font-oswald] text-[24px] font-bold text-black'>EMAIL ME</p>
            </div>
          </Link>
        </li>
        <li className='flex items-center justify-center'>
          <Link href='https://linkedin.com/in/kylan-duncan' target='_blank'>
            <div className='hover:glow-sm lifted-sm flex items-center justify-center gap-1 rounded-lg bg-white px-5 py-1 transition-all duration-300 hover:scale-105'>
              <div className='relative top-[1px] flex h-[30px] w-[30px] items-center justify-center'>
                <Svg.LinkedIn className='size-full fill-black' />
              </div>
              <p className='font-[family-name:--font-oswald] text-[24px] font-bold text-black'>CONNECT WITH ME</p>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}
