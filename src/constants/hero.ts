interface HeroContent {
  name: string;
  currentRole: string;
  education: {
    degree: string;
    university: string;
    graduation: string;
  };
  techStack: {
    categories: string;
    technologies: string;
  };
  featuredProject: {
    name: string;
    description: string;
    link: string;
  };
}

export const heroContent: HeroContent = {
  name: "Ojash Gurung",
  currentRole: "Founding Engineer & Acting CTO @ VeraAI",
  education: {
    degree: "MS in Computer Science",
    university: "Monroe University",
    graduation: "May 2026",
  },
  techStack: {
    categories: "AI/ML · RAG · Computer Vision · Full-Stack",
    technologies: "Python · FastAPI · Next.js · Docker · PostgreSQL",
  },
  featuredProject: {
    name: "SelfAI",
    description:
      "building intelligent, shareable AI profiles powered by RAG pipelines",
    link: "https://www.selfai.tech",
  },
};
