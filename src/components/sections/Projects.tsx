import Image from 'next/image';
import { projects, ProjectCardData, ProjectLinkToImageMap } from '@/lib/project-data';
import Link from 'next/link';
import Heading from '@/components/Heading';

interface ProjectCardProps {
  data: ProjectCardData;
  selectedLink?: keyof ProjectCardData['links'];
}

function ProjectCard({ data, selectedLink }: ProjectCardProps) {
  const techUsed = data.techUsed.map(skill => (
    <li key={skill} className='gap-1 rounded-lg bg-white bg-opacity-10 px-3 text-base'>
      {skill}
    </li>
  ));

  if (selectedLink) {
    console.log('link selected: ', data.title, selectedLink);
  }

  const links = Object.keys(data.links).map(link => {
    const validLink = link as keyof typeof data.links;
    if (!data.links[validLink]) return null;
    return (
      <div key={link} className='relative flex size-[64px] items-center justify-center'>
        <div className='size-[40px]'>
          <Link href={data.links[validLink]} target='_blank' className='relative z-0'>
            <Image src={ProjectLinkToImageMap[validLink]} alt={data.title} className='size-full fill-white' />
          </Link>
        </div>
        <button className='absolute left-0 top-0 z-10 size-full'>&nbsp;</button>
      </div>
    );
  });

  return (
    <article className='mb-10 flex gap-20 rounded-[64px] bg-[#101217] px-32 py-20 even:flex-row-reverse'>
      <div>
        <div className='mb-4 w-[500px]'>
          <Image src={data.img} alt={data.title} className='rounded-2xl' />
        </div>
        <ul className='flex justify-center gap-4'>{techUsed}</ul>
      </div>
      <div className='flex w-[500px] max-w-[500px] flex-col items-center justify-center gap-2 text-center'>
        <h3 className='relative z-10 font-[family-name:--font-oswald] text-[30px] font-bold leading-none tracking-tight'>
          {data.title}
        </h3>
        <p>{data.description}</p>
        <label className='text-lg font-bold opacity-0'>Documentation</label>
        <p className='opacity-0'>Click again to visit the page.</p>
        <div className='flex gap-4'>{links}</div>
      </div>
    </article>
  );
}

export default function Projects() {
  const cards = projects.map((data, i) => <ProjectCard key={i} data={data} />);

  return (
    <section id='projects' className='flex flex-col items-center px-32'>
      <Heading className='mb-10'>PROJECTS</Heading>
      <div className='flex flex-col items-center'>{cards}</div>
    </section>
  );
}
