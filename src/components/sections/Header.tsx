import Link from 'next/link';

export default function Header() {
  // top-0 top-[-4rem]
  return (
    <header className='highlight-border fixed top-0 z-[100] flex w-full items-center justify-between border-b-[1px] bg-gradient-to-t from-black/50 to-black px-32 py-2 font-[family-name:--font-oswald] text-[18px] backdrop-blur-md'>
      <h2 className='text-[20px]'>
        <Link href='/' target='_self'>
          cloudydaiyz
        </Link>
      </h2>
      <nav>
        <ul className='flex gap-5'>
          <li>
            <Link href='#about-me' target='_self' className='text-[#969696] hover:text-white'>
              About Me
            </Link>
          </li>
          <li>
            <Link href='#projects' target='_self' className='text-[#969696] hover:text-white'>
              Projects
            </Link>
          </li>
          <li>
            <Link href='#contact' target='_self' className='text-[#969696] hover:text-white'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
