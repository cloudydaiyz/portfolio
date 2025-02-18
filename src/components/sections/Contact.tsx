import Link from 'next/link';
import Heading from '@/components/Heading';
import * as Svg from '@/components/svg';
import { useHeaderNavContext } from '@/hooks/header';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useEnterAnim } from '@/hooks/anim';

export default function Contact() {
  const headerNav = useHeaderNavContext();

  const { ref, inView } = useInView({ threshold: 0.5 });
  const enter1 = useEnterAnim();
  const enter2 = useEnterAnim();
  const enter3 = useEnterAnim();

  useEffect(() => {
    headerNav.setContactMeVisible(inView);
  }, [headerNav, inView]);

  return (
    <section ref={ref} id='contact' className='flex max-w-[100vw] flex-col items-center px-10 py-[200px] md:px-32'>
      <Heading ref={enter1.ref} className={`${enter1.animClasses} mb-10`}>
        GET IN TOUCH
      </Heading>
      <ul className='flex flex-col gap-4'>
        {/* foreach contact method */}
        <li ref={enter2.ref} className={`${enter2.animClasses} flex items-center justify-center`}>
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
        <li ref={enter3.ref} className={`${enter3.animClasses} flex items-center justify-center`}>
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
