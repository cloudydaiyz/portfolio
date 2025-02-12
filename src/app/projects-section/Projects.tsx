import Image from "next/image"

interface ProjectCardProps {
  data: ProjectCardData;
  selectedLink?: keyof ProjectCardData["links"];
}

function ProjectCard({ data, selectedLink }: ProjectCardProps) {
  const techUsed = data.techUsed.map(skill => (<li key={skill}>{skill}</li>));

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
            <a href="#">
              <img src={undefined} alt="" />
            </a>
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      Projects
    </section>
  )
}