import envelope from '@/assets/contact-section/envelope.svg';
// import calendar from '@/assets/contact-section/calendar.svg';

import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id='contact'>
      <h2>GET IN TOUCH</h2>
      <p>
        Want to get in touch? The quickest way to get in contact with me is through email or setting up a meeting. I am
        always open to discussing new opportunities!
      </p>
      <ul>
        {/* foreach contact method */}
        <li>
          <Link href='mailto:kyland03.biz@gmail.com'>
            <Image src={envelope} alt='' />
            <p>Email me</p>
          </Link>
        </li>
      </ul>
    </section>
  );
}
