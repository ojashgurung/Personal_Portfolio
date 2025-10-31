interface experienceItems {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  highlights: string[];
  techUsed: string[];
  logo?: string;
  link?: string;
}

export const experience: experienceItems[] = [
  {
    role: "Founding Engineer | Acting CTO",
    company: "VeraAI Technologies Inc.",
    location: "Remote",
    duration: "Sep 2025 – Present",
    description:
      "Leading technical direction and managing a 16-person engineering team (3 Frontend, 5 Backend, 5 AI, 3 Marketing/Design) building AI-powered platforms for the $527B remodeling industry. Making strategic architecture decisions with CEO and founders.",
    highlights: [
      "Architected unified FastAPI backend with Next.js frontend in containerized Docker environment, reducing developer onboarding time by 90% from 30+ minutes to 2 minutes",
      "Implemented RAG system using Weaviate vector database with 600+ catalog products, achieving 90%+ semantic search accuracy for product recommendations",
      "Trained AI model on 1,400+ NKBA guidelines to generate code-compliant room layouts output as structured JSON",
      "Built object detection pipeline achieving 80%+ accuracy using OwlVIT with bounding box detection for room analysis",
      "Conduct 10+ individual 1-on-1 meetings monthly for mentorship and 4-8 code reviews weekly",
      "Implemented Agile methodology with daily standups, weekly retrospectives, and leadership sync meetings across 3 engineering teams",
    ],
    techUsed: [
      "FastAPI",
      "Next.js",
      "Docker",
      "Weaviate",
      "OpenAI GPT-4",
      "OwlVIT",
      "YOLOv8",
      "PostgreSQL",
      "Firebase",
      "Redis",
      "Three.js",
      "AWS",
      "GCP",
      "Kubernetes",
    ],
    logo: "/images/logos/veraaitech_logo.jpeg",
    link: "https://veraai.co",
  },
  {
    role: "Software Engineer Intern",
    company: "VeraAI Technologies Inc.",
    location: "Remote",
    duration: "Jun 2025 – Sep 2025",
    description:
      "Full-stack development role building core features for AI-powered remodeling platform. Worked across frontend, backend, and DevOps, contributing to the product foundation.",
    highlights: [
      "Developed 13+ pages including 3-step onboarding flow and 5+ dialog components for team management using Next.js and TailwindCSS",
      "Built 20+ Firebase Cloud Functions handling Stripe payment processing, email verification, and Mailchimp marketing automation",
      "Migrated Firebase hosting from static to server-side rendering, enabling dynamic slug generation for 600+ catalog product pages",
      "Architected CI/CD pipelines using GitHub Actions for 3 environments, completing 60+ deployments with 14-minute average build time",
      "Achieved 80% test coverage across codebase with automated testing gates before production deployment",
    ],
    techUsed: [
      "Next.js",
      "React",
      "Firebase",
      "Stripe",
      "Mailchimp",
      "GitHub Actions",
      "FastAPI",
      "TailwindCSS",
      "Docker",
      "GCP",
    ],
    logo: "/images/logos/veraaitech_logo.jpeg",
    link: "https://veraai.co",
  },
  {
    role: "Founder / Full-Stack Developer",
    company: "SelfAI",
    location: "New York, NY",
    duration: "Jan 2025 – Present",
    description:
      "Founded and developed SelfAI, a RAG-based chatbot platform where users train personalized AI assistants on their documents and embed them as widgets on any website.",
    highlights: [
      "Architected and deployed full-stack RAG chatbot serving 20+ users at selfai.tech",
      "Reduced average query response time by 87% from 15+ seconds to 2 seconds by optimizing RAG pipeline",
      "Built 20+ FastAPI endpoints handling document processing, vector embeddings, and real-time chat using OpenAI GPT-4 and Pinecone",
      "Developed embeddable widget system with OAuth authentication and JWT-based session management deployable via script tags",
      "Implemented document ingestion pipeline generating OpenAI embeddings stored in Pinecone for semantic search",
      "Secured platform with OAuth 2.0 and PostgreSQL for user data, document metadata, and conversation history",
    ],
    techUsed: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "OpenAI GPT-4",
      "Pinecone",
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "JWT",
      "OAuth",
      "Docker",
    ],
    logo: "/images/logos/selfai.png",
    link: "https://selfai.tech",
  },
  {
    role: "Computer Lab Assistant",
    company: "Troy University",
    location: "Troy, AL",
    duration: "Mar 2024 – May 2024",
    description:
      "Provided technical support and lab management for Computer Science department, assisting students with programming coursework and maintaining lab infrastructure.",
    highlights: [
      "Assembled and configured 50+ Linux-based lab computers, installing essential software for CS students",
      "Provided drop-in technical support to 20+ students weekly, assisting with Python debugging and data structures",
      "Troubleshot hardware and software issues to maintain 95%+ lab computer uptime",
      "Performed ongoing maintenance across 50+ workstations, resolving Linux system issues and hardware failures",
    ],
    techUsed: ["Linux", "Python", "Hardware Troubleshooting", "Lab Management"],
    logo: "/images/logos/troy.png",
    link: "https://www.troy.edu",
  },
  {
    role: "Software Engineer Intern",
    company: "SimplySoft Tech",
    location: "Kathmandu, Nepal",
    duration: "Feb 2023 – Sep 2023",
    description:
      "Backend development role building secure banking APIs and microservices for financial institutions and government clients in a 4-person agile team.",
    highlights: [
      "Developed 20+ RESTful APIs for banking application including authentication, account management, transactions, and OTP verification using Spring Boot and PostgreSQL",
      "Optimized banking API query performance by 15% through strategic indexing on frequently queried PostgreSQL data fields",
      "Offloaded 70% of login and token validation requests to dedicated auth services, improving system scalability",
      "Migrated from client-side cookie storage to secure server-side session management, mitigating XSS and session hijacking risks",
      "Automated backend deployment pipeline using GitHub Actions and Jenkins, reducing deployment time to 8-12 minutes",
      "Implemented unit and integration tests achieving 100% code coverage before feature deployment",
    ],
    techUsed: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Apache Kafka",
      "Docker",
      "AWS ECS",
      "GitHub Actions",
      "Jenkins",
      "Swagger",
    ],
    logo: "/images/logos/simplysoft.png",
    link: "https://simplysofttech.com",
  },
];
