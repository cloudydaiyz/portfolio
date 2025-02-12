import Image from 'next/image';

export default function Hero() {
  return (
    // className='bg-[url(/bg-pattern.svg)] bg-repeat'
    <section id='about-me' className=''>
      <h1>
        <span>Hello, I am</span>
        <span>KYLAN DUNCAN</span>
      </h1>
      <div>
        {/* My photo */}
        <Image src={''} alt='' />
        <div>
          {/* Person icon */}
          <div>
            <Image src={''} alt='' />
          </div>
          <h2>ABOUT ME</h2>
          <p>
            I am a full stack developer with a passion for web development, the cloud, and making modern software
            applications with a great user experience. On a journey of constant learning, I always aspire to find new
            ways to make my code robust, scalable, and easily maintainable.
          </p>
          <button>CONTACT ME</button>
        </div>
        <ul>
          <li>
            <Image src={''} alt='' />
            <p>
              <strong>From: </strong>Houston, TX
            </p>
          </li>
          <li>
            <Image src={''} alt='' />
            <p>
              <strong>Work Location: </strong>Remote
            </p>
          </li>
          <li>
            <Image src={''} alt='' />
            <p>Currently Available for Work</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
