import Image from 'next/image';
import { projects, ProjectCardData } from '@/lib/project-data';

interface ProjectCardProps {
  data: ProjectCardData;
  selectedLink?: keyof ProjectCardData['links'];
}

function ProjectCard({ data, selectedLink }: ProjectCardProps) {
  const techUsed = data.techUsed.map(skill => <li key={skill}>{skill}</li>);
  if (selectedLink) {
  }

  return (
    <article>
      <div>
        <Image src={data.img} alt={data.title} />
        <ul>{techUsed}</ul>
      </div>
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <label>Documentation</label>
        <p>Click again to visit the page.</p>
        <div>
          {/* foreach data.links */}
          <button>
            <a href='#'>
              <Image src={''} alt={data.title} />
            </a>
          </button>
        </div>
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
