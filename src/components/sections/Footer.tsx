import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='highlight-border border-t-[1px] bg-black'>
      <div className='flex flex-col justify-between gap-8 px-10 pb-12 pt-4 sm:flex-row lg:px-24'>
        <p className='text-md text-center font-[family-name:--font-oswald] lg:text-lg'>
          Copyright © 2025 Kylan Duncan. All rights reserved.
        </p>
        <div className='flex justify-center gap-12 text-sm md:gap-24'>
          <div className='flex flex-col gap-2'>
            <label className='text-md font-[family-name:--font-oswald] lg:text-lg'>Explore</label>
            <nav>
              <ul>
                <li>
                  <Link href={'/'} target='_self' className='text-[#969696] hover:text-white'>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <a
                    href='https://cloudydaiyz.hashnode.dev/'
                    target='_blank'
                    className='text-[#969696] hover:text-white'
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-md font-[family-name:--font-oswald] lg:text-lg'>Socials</label>
            <nav>
              <ul>
                <li>
                  <a
                    href='https://linkedin.com/in/kylan-duncan'
                    target='_blank'
                    className='text-[#969696] hover:text-white'
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href='https://github.com/cloudydaiyz' target='_blank' className='text-[#969696] hover:text-white'>
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
