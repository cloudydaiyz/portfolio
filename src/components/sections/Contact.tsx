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
        <li>
          <Link href='mailto:kyland03.biz@gmail.com'>
            <div className='flex items-center justify-center gap-1 rounded-lg bg-white px-5 py-1'>
              <div className='flex h-[30px] w-[30px] items-center justify-center'>
                <Svg.Envelope className='size-full fill-black' />
              </div>
              <p className='text-[20px] font-bold text-black'>Email me</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href='https://linkedin.com/in/kylan-duncan' target='_blank'>
            <div className='flex items-center justify-center gap-1 rounded-lg bg-white px-5 py-1'>
              <div className='flex h-[30px] w-[30px] items-center justify-center'>
                <Svg.LinkedIn className='size-full fill-black' />
              </div>
              <p className='text-[20px] font-bold text-black'>Connect with me</p>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}
