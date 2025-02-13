import Link from 'next/link';

export default function Header() {
  return (
    <header className='hidden'>
      <h2>cloudydaiyz</h2>
      <nav>
        <ul>
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
    </header>
  );
}
