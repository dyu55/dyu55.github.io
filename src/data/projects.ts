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
    tagline: "Coding agent with Plan/Act/Reflect loop",
    description: `MyAgent is a coding agent built with the Plan/Act/Reflect loop architecture. It uses the Model Context Protocol (MCP) for tool integration and has a skills system that extends its capabilities.

Key features:
- Multi-step task decomposition
- Tool use via MCP servers
- Skill loading and execution
- Self-correction via reflection`,
    tags: ["TypeScript", "MCP", "LLM", "Agentic AI"],
    githubUrl: "https://github.com/dyu55/myagent",
    demoUrl: "https://myagent.demo.dev",
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
    tagline: "Full-stack finance platform, 7000+ concurrent users",
    description: `A full-stack personal finance platform that scaled to 7000+ concurrent users. Built with performance and reliability as core requirements.

Key features:
- Real-time transaction updates
- Budget tracking and alerts
- Multi-currency support
- Historical analytics`,
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Redis"],
    demoUrl: "https://budgetsmart.app",
    coverImage: "/images/screenshot3.png",
    order: 3,
  },
  {
    slug: "sneaker-store",
    title: "Sneaker Store",
    tagline: "E-commerce platform with inventory management",
    description: `An e-commerce platform for sneaker sales with built-in inventory management, size tracking, and order fulfillment.

Key features:
- Product catalog with filtering
- Shopping cart and checkout
- Admin dashboard
- Order management`,
    tags: ["TypeScript", "React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/dyu55/sneaker-store",
    coverImage: "/images/sneaker_store.png",
    order: 4,
  },
];