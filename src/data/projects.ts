export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  coverImage: string;
  featured?: boolean;
  order: number;
}

export const projects: Project[] = [
  {
    slug: "myagent",
    title: "MyAgent",
    tagline: "Open-source coding agent with Plan/Act/Reflect loop",
    description: `MyAgent is an open-source coding agent designed to autonomously develop complete projects using local 8B/9B language models. Inspired by Claude Code's architecture, it provides an interactive CLI where users simply describe tasks, and the agent handles planning, execution, testing, and version control.

Key features:
- Claude Code-style interaction — natural language task descriptions
- External memory mode — persistent logs, Git integration, and progress tracking
- Modular tool system — file operations, code execution, search, and Git operations
- Multi-provider support — works with Ollama and OpenAI-compatible APIs
- Plan/Act/Reflect loop — task planning, execution, reflection, and error recovery
- LLM-powered reflection — automatic error classification and recovery suggestions`,
    tags: ["TypeScript", "MCP", "LLM", "Agentic AI"],
    githubUrl: "https://github.com/dyu55/My-Agent",
    coverImage: "/images/screenshot1.png",
    featured: true,
    order: 1,
  },
  {
    slug: "rag-assistant",
    title: "RAG Assistant",
    tagline: "Production RAG with grounding verification",
    description: `A production-ready Retrieval Augmented Generation system with 140+ tests ensuring answer quality through grounding verification.

Key features:
- Semantic search with vector embeddings
- Grounding verification against source documents
- Citation tracking
- Confidence scoring`,
    tags: ["Python", "LangChain", "Vector DB", "RAG"],
    githubUrl: "https://github.com/dyu55/rag-assistant",
    demoUrl: "https://rag.demo.dev",
    coverImage: "/images/screenshot2.png",
    order: 2,
  },
  {
    slug: "budget-smart",
    title: "Budget Smart",
    tagline: "Full-stack finance app with high concurrent users",
    description: `A full-stack personal finance app with receipt tracking and budget management. Deployed on AWS EC2 with load testing using JMeter to validate performance under production traffic.

Key features:
- Receipt OCR scanning with AWS Textract
- LLM-powered spending insights with AWS Bedrock (Claude)
- Real-time transaction updates via polling
- Budget tracking with spending alerts
- JWT authentication with AWS Cognito
- Async processing pipeline with AWS SQS

Tech stack:
- Mobile: React Native (Expo) for iOS/Android
- Backend: Spring Boot (Java 21) with Flyway migrations
- Database: PostgreSQL
- Cache: Redis (Upstash in production)
- Infrastructure: AWS EC2, S3, Cognito, SQS, Bedrock`,
    tags: ["React Native", "Expo", "Spring Boot", "Java 21", "PostgreSQL", "Redis", "AWS"],
    coverImage: "/images/screenshot3.png",
    order: 3,
  },
  {
    slug: "sneaker-store",
    title: "SoleMate",
    tagline: "Full-stack e-commerce platform for sneaker enthusiasts",
    description: `SoleMate is a full-stack e-commerce platform for sneaker enthusiasts, built as an EECS 4413 project at York University.

Key features:
- Product catalog with detailed descriptions, prices, and images
- Secure user authentication (sign-up/login)
- Real-time shopping cart management
- Simulated checkout process
- Admin dashboard for inventory management
- Advanced search and filtering
- Mobile-friendly responsive design`,
    tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
    githubUrl: "https://github.com/dyu55/eecs4413_sneaker_store",
    coverImage: "/images/sneaker_store.png",
    order: 4,
  },
];