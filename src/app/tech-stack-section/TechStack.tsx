import Image from "next/image"

export default function TechStack() {
  return (
    <section id="tech-stack">
      <h2>TECH STACK</h2>
      <div>
        {/* foreach skill in tech stack */}
        <span>
          <Image src={""} alt="" />
          <label>Node.js</label>
        </span>
      </div>
    </section>
  )
}