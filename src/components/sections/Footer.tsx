import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='highlight-border border-t-[1px] bg-black'>
      <div className='flex justify-between px-24 pb-12 pt-4'>
        <p className='font-[family-name:--font-oswald] text-lg'>Copyright © 2025 Kylan Duncan. All rights reserved.</p>
        <div className='flex gap-24'>
          <div className='flex flex-col gap-2'>
            <label className='font-[family-name:--font-oswald] text-lg'>Explore</label>
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
            <label className='font-[family-name:--font-oswald] text-lg'>Socials</label>
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
