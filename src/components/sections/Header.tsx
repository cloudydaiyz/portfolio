import { useHeaderNavContext } from '@/hooks/header';
import Link from 'next/link';

export default function Header() {
  const headerNav = useHeaderNavContext();

  const hiddenNavCls = 'text-[#969696] hover:text-white whitespace-nowrap';
  const visibleNavCls = 'text-white whitespace-nowrap';

  let aboutMeCls = hiddenNavCls;
  let projectsCls = hiddenNavCls;
  let contactCls = hiddenNavCls;

  if (headerNav.heroVisible || headerNav.techStackVisible) aboutMeCls = visibleNavCls;
  else if (headerNav.projectsVisible) projectsCls = visibleNavCls;
  else if (headerNav.contactMeVisible) contactCls = visibleNavCls;

  const headerPos = headerNav.heroVisible ? 'top-[-4rem]' : 'top-0';

  return (
    <header
      className={`${headerPos} highlight-border fixed z-[100] flex w-full items-center justify-center border-b-[1px] bg-gradient-to-t from-black/50 to-black px-32 py-2 font-[family-name:--font-oswald] text-[18px] backdrop-blur-md transition-all duration-300 lg:justify-between`}
    >
      <h2 className='text-[20px]'>
        <Link href='/' target='_self' className='hidden lg:inline'>
          cloudydaiyz
        </Link>
      </h2>
      <nav>
        <ul className='z-[110] flex gap-5'>
          <li>
            <Link href='/#about-me' target='_self' className={aboutMeCls}>
              About Me
            </Link>
          </li>
          <li>
            <Link href='/#projects' target='_self' className={projectsCls}>
              Projects
            </Link>
          </li>
          <li>
            <Link href='/#contact' target='_self' className={contactCls}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <nav className='highlight-border-dark absolute left-0 top-0 z-[105] hidden w-full border-b-2 bg-white backdrop-blur-md'>
        <ul className='flex flex-col items-center'>
          <Link
            href='#about-me'
            target='_self'
            className='w-full py-4 text-center text-[#888888] hover:bg-[#EEEEEE] hover:text-black'
          >
            <li>About Me</li>
          </Link>
          <Link
            href='#projects'
            target='_self'
            className='w-full py-4 text-center text-[#888888] hover:bg-[#EEEEEE] hover:text-black'
          >
            <li>Projects</li>
          </Link>
          <Link
            href='#contact'
            target='_self'
            className='w-full py-4 text-center text-[#888888] hover:bg-[#EEEEEE] hover:text-black'
          >
            <li>Contact</li>
          </Link>
          <button className='w-full py-4 text-center text-[#888888] hover:bg-[#EEEEEE] hover:text-black'>
            <li>Close</li>
          </button>
        </ul>
      </nav>
    </header>
  );
}
