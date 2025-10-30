interface skillItems {
  title: string;
  skills: string[];
}

export const skillList: skillItems[] = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "RAG (Retrieval-Augmented Generation)",
      "OpenAI GPT-4",
      "Computer Vision (OwlVIT, YOLOv8, DINO)",
      "NLP",
      "Weaviate",
      "Pinecone",
      "LangChain",
      "Trellis",
      "SlamR",
    ],
  },
  {
    title: "Backend Frameworks",
    skills: [
      "FastAPI",
      "Spring Boot",
      "Express.js",
      "Node.js",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TailwindCSS", "Three.js", "Konva.js"],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "Firebase Firestore",
      "Redis",
      "MongoDB",
      "MySQL",
      "Vector Databases",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS ECS",
      "GCP",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
      "MinIO",
    ],
  },
  {
    title: "Tools & Methodologies",
    skills: [
      "Git",
      "Apache Kafka",
      "Swagger/OpenAPI",
      "N8N",
      "Stripe",
      "Mailchimp",
      "Agile/Scrum",
      "OAuth",
      "JWT",
    ],
  },
];
