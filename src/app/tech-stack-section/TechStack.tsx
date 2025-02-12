import Image from 'next/image';

// Node.js, Bash, HTML5, CSS3, JavaScript, React.js, Next.js, MongoDB, Terraform, Docker, AWS

export default function TechStack() {
  return (
    <section id='tech-stack'>
      <h2>TECH STACK</h2>
      <div>
        {/* foreach skill in tech stack */}
        <span>
          <Image src={''} alt='' />
          <label>Node.js</label>
        </span>
      </div>
    </section>
  );
}
