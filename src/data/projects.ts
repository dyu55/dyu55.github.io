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
    tagline: "Plan, execute and verify — with a record of every step",
    description:
      "A local coding agent with a typed tool runtime, durable checkpoints and explicit test verification. Run Studio makes task progress, file changes and execution history inspectable.",
    tags: ["Python", "FastAPI", "SQLite", "Pydantic", "pytest"],
    githubUrl: "https://github.com/dyu55/My-Agent",
    coverImage: "/images/myagent/myagent-overview.png",
    order: 1,
  },
  {
    slug: "rag-assistant",
    title: "RAG Assistant",
    tagline: "Answers with a paper trail",
    description:
      "A local document workbench combining keyword, vector and graph retrieval with inspectable source passages. Import documents, ask questions and trace each answer back to its evidence.",
    tags: ["Python", "FastAPI", "SQLite", "BM25", "RAG"],
    githubUrl: "https://github.com/dyu55/RAG-assistant",
    coverImage: "/images/rag-assistant/rag-answer.png",
    order: 2,
  },
  {
    slug: "budget-smart",
    title: "Budget Smart",
    tagline: "Native iOS budgeting, built around your everyday life",
    description:
      "Budget Smart is a native iOS budgeting app built with SwiftUI. It combines offline expense tracking, monthly budgets, spending insights and on-device receipt recognition, with optional encrypted cloud backup powered by Cloudflare Workers and D1.",
    tags: [
      "SwiftUI",
      "Swift",
      "Apple Vision",
      "TypeScript",
      "Cloudflare",
      "D1",
    ],
    coverImage: "/images/budget-smart/01-home.png",
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
    coverImage: "",
    order: 4,
  },
];
