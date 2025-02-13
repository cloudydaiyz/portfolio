import Image from 'next/image';
import { projects, ProjectCardData, ProjectLinkToImageMap } from '@/lib/project-data';
import Link from 'next/link';

interface ProjectCardProps {
  data: ProjectCardData;
  selectedLink?: keyof ProjectCardData['links'];
}

function ProjectCard({ data, selectedLink }: ProjectCardProps) {
  const techUsed = data.techUsed.map(skill => <li key={skill}>{skill}</li>);
  if (selectedLink) {
    console.log('link selected: ', data.title, selectedLink);
  }

  const links = Object.keys(data.links).map(link => {
    const validLink = link as keyof typeof data.links;
    if (!data.links[validLink]) return null;
    return (
      <button key={link}>
        <Link href={data.links[validLink]} target='_blank'>
          <Image src={ProjectLinkToImageMap[validLink]} alt={data.title} />
        </Link>
      </button>
    );
  });

  return (
    <article>
      <div>
        <Image src={data.img} alt={data.title} className='w-[500px] rounded-2xl' />
        <ul>{techUsed}</ul>
      </div>
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <label>Documentation</label>
        <p>Click again to visit the page.</p>
        <div>{links}</div>
      </div>
    </article>
  );
}

export default function Projects() {
  const cards = projects.map((data, i) => <ProjectCard key={i} data={data} />);

  return (
    <section id='projects'>
      <h2>PROJECTS</h2>
      <div>{cards}</div>
    </section>
  );
}
