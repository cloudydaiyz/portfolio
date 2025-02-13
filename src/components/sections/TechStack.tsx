import Image from 'next/image';

import node from '@/assets/tech-stack-section/nodejs.svg';
import bash from '@/assets/tech-stack-section/bash.svg';
import html5 from '@/assets/tech-stack-section/html5.svg';
import css3 from '@/assets/tech-stack-section/css3.svg';
import javascript from '@/assets/tech-stack-section/javascript.svg';
import react from '@/assets/tech-stack-section/react.svg';
import next from '@/assets/tech-stack-section/nextjs.svg';
import mongodb from '@/assets/tech-stack-section/mongodb.svg';
import terraform from '@/assets/tech-stack-section/terraform.svg';
import docker from '@/assets/tech-stack-section/docker.svg';
import aws from '@/assets/tech-stack-section/aws.svg';

interface TechSkillData {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  asset: any;
}

const techStackData: TechSkillData[] = [
  { title: 'Node.js', asset: node },
  { title: 'Bash', asset: bash },
  { title: 'HTML5', asset: html5 },
  { title: 'CSS3', asset: css3 },
  { title: 'JavaScript', asset: javascript },
  { title: 'React.js', asset: react },
  { title: 'Next.js', asset: next },
  { title: 'MongoDB', asset: mongodb },
  { title: 'Terraform', asset: terraform },
  { title: 'Docker', asset: docker },
  { title: 'AWS', asset: aws },
];

export default function TechStack() {
  const skills = techStackData.map(skill => (
    <span key={skill.title} className='flex flex-col items-center'>
      <Image src={skill.asset} alt={skill.title} className='w-[100px] h-[100px]' />
      <label>{skill.title}</label>
    </span>
  ));

  return (
    <section id='tech-stack' className='flex flex-col items-center'>
      <h2>TECH STACK</h2>
      <div className='flex'>{skills}</div>
    </section>
  );
}
