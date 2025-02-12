import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>Copywright © 2025 Kylan Duncan. All rights reserved.</p>
        <div>
          <div>
            <label>Explore</label>
            <nav>
              <ul>
                <li><Link href={"/"}>Portfolio</Link></li>
                <li><a href="https://cloudydaiyz.hashnode.dev/">Blog</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <label>Socials</label>
            <nav>
              <ul>
                <li><a href="https://linkedin.com/in/kylan-duncan">LinkedIn</a></li>
                <li><a href="https://github.com/cloudydaiyz">GitHub</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}