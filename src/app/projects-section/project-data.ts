interface ProjectCardData {
  title: string;
  img: string;
  description: string;
  techUsed: string[];
  links: {
    live?: string;
    github?: string;
    newsletter?: string;
    documentation?: string;
  }
}