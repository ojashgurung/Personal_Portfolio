interface AboutContent {
  quote: string;
  intro: string;
  selfaiDescription: string;
  currentGoal: string;
  highlights: {
    icon: string;
    text: string;
  }[];
}

export const aboutContent: AboutContent = {
  quote:
    "If it solves a real problem, I want to build it. If it scales, I want to architect it.",
  intro:
    "I'm Ojash Gurung, Founding Engineer & Acting CTO at VeraAI, leading a 16-person engineering team building AI-powered platforms for the $527B remodeling industry. I specialize in RAG systems, Computer Vision, and production-ready full-stack applications.",
  selfaiDescription:
    "I built SelfAI, a full-stack RAG chatbot platform where users train personalized AI assistants on their documents and embed them as widgets on any website. Reduced query latency by 87% (15s to 2s) using FastAPI, OpenAI GPT-4, Pinecone, and PostgreSQL. Currently serving 20+ users at selfai.tech.",
  currentGoal:
    "I'm finishing my Master's in Computer Science at Monroe University (May 2026) and looking for New Grad 2026 full-time opportunities where I can build production AI systems, lead technical initiatives, or architect scalable platforms.",
  highlights: [
    {
      icon: "🎓",
      text: "MS in Computer Science @ Monroe University (Expected May 2026)",
    },
    {
      icon: "💼",
      text: "Founding Engineer & Acting CTO @ VeraAI Technologies",
    },
    {
      icon: "🚀",
      text: "Built SelfAI serving 20+ users with 87% latency reduction",
    },
    {
      icon: "🤖",
      text: "Trained AI models on 1,400+ NKBA guidelines (80-90%+ accuracy)",
    },
    {
      icon: "🏦",
      text: "Developed 20+ banking APIs at SimplySoft Tech",
    },
    {
      icon: "🎯",
      text: "Open to AI/ML Engineer, Backend Engineer, or Full-Stack roles",
    },
  ],
};
