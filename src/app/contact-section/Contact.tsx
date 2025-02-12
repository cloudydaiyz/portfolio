import Image from "next/image"

export default function Contact() {
  return (
    <section id="contact">
      <h2>GET IN TOUCH</h2>
      <p>Want to get in touch? The quickest way to get in contact with me is through email or setting up a meeting. I am always open to discussing new opportunities!</p>
      <ul>
        {/* foreach contact method */}
        <li>
          <a href="">
            <Image src={""} alt="" />
            <p>Email me</p>
          </a>
        </li>
      </ul>
    </section>
  )
}