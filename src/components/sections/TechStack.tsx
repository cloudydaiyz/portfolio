import Heading from '@/components/Heading';
import * as Svg from '@/components/svg';

interface TechSkillData {
  title: string;
  asset: React.ReactNode;
}

const techStackData: TechSkillData[] = [
  { title: 'Node.js', asset: <Svg.Nodejs className='size-full fill-current' /> },
  { title: 'Bash', asset: <Svg.Bash className='size-full fill-current' /> },
  { title: 'HTML5', asset: <Svg.Html5 className='size-full fill-current' /> },
  { title: 'CSS3', asset: <Svg.Css3 className='size-full fill-current' /> },
  { title: 'JavaScript', asset: <Svg.Javascript className='size-full fill-current' /> },
  { title: 'React.js', asset: <Svg.React className='size-full fill-current' /> },
  { title: 'Next.js', asset: <Svg.Nextjs className='size-full fill-current' /> },
  { title: 'MongoDB', asset: <Svg.Mongodb className='size-full fill-current' /> },
  { title: 'Terraform', asset: <Svg.Terraform className='size-full fill-current' /> },
  { title: 'Docker', asset: <Svg.Docker className='size-full fill-current' /> },
  { title: 'AWS', asset: <Svg.Aws className='size-full fill-current' /> },
];

export default function TechStack() {
  const skills = techStackData.map(skill => (
    <span
      key={skill.title}
      className='flex flex-col items-center self-center text-[#888888] transition-all duration-300 hover:scale-110 hover:text-white'
    >
      <div className='mb-2 h-[80px] w-[80px]'>{skill.asset}</div>
      <label className='text-base'>{skill.title}</label>
    </span>
  ));

  return (
    <section id='tech-stack' className='flex flex-col items-center px-32 py-20'>
      <Heading className='mb-10'>TECH STACK</Heading>
      <div className='flex max-w-[calc(80px*6+4rem*6)] flex-wrap justify-center gap-x-16 gap-y-4'>{skills}</div>
    </section>
  );
}
