export interface ProjectScreen {
  src: string;
  caption: string;
  alt: string;
  width?: number;
  height?: number;
  format?: "desktop" | "mobile";
}
export interface ProjectDetail {
  category: string;
  summary: string;
  role: string;
  sections: { title: string; body: string; bullets?: string[] }[];
  screens?: ProjectScreen[];
  screenNote?: string;
  galleryLayout?: "workbench";
}
export const deferredProjects = new Set<string>();
export const projectDetails: Record<string, ProjectDetail> = {
  myagent: {
    category: "Developer tools · Local coding agent",
    summary:
      "From a task to verified code. A local coding agent that keeps its plan, tool actions, test results and file changes open for review.",
    role: "Personal project · Python runtime, CLI and Run Studio viewer",
    galleryLayout: "workbench",
    sections: [
      {
        title: "The idea",
        body: "An agent's completion message should have something behind it. MyAgent connects planning and tool execution to explicit verification, then records enough context to inspect the work or resume an interrupted task.",
      },
      {
        title: "The execution loop",
        body: "A validated dependency graph guides a Plan–Act–Reflect loop. The runtime accepts one structured action at a time, enforces call and time budgets, and requires tests after code or command mutations before reporting success.",
        bullets: [
          "Typed tools for workspace inspection, AST repository maps, file edits, commands, pytest and Git diff.",
          "Separate permissions for file writes and process execution, with a pause when a required permission is missing.",
          "Real exit codes, bounded output and JUnit parsing that rejects empty or failing test runs.",
          "SQLite checkpoints, ordered events and workspace-scoped memory of completed tasks.",
        ],
      },
      {
        title: "Review and recovery",
        body: "Run Studio is a read-only local browser viewer for plans, test counts, diffs and events. File-tool edits record original bytes and current-content hashes, so undo can refuse to overwrite later user changes. An interrupted action requires review before the runtime continues.",
        bullets: [
          "Workspace containment, protected paths and syntax checks before Python file writes.",
          "A lock prevents concurrent resumes of the same run.",
          "Undo covers file-tool changes; arbitrary shell-command effects are not automatically reversible.",
        ],
      },
      {
        title: "The demo and its boundaries",
        body: "The pictured demo creates a temperature-conversion module, executes ten tests and exposes the resulting file changes. Model decisions in this demo are a deterministic replay; file operations, tests and persistence are real. Ollama and OpenAI-compatible providers can supply model decisions for other tasks. Live model task success has not been benchmarked, and command execution is not an operating-system sandbox.",
      },
    ],
    screens: [
      {
        src: "/images/myagent/myagent-overview.png",
        caption: "See the plan, the changes and the verification together.",
        alt: "MyAgent Run Studio showing three completed plan steps, two changed files and ten passing demo tests.",
        width: 1440,
        height: 1050,
        format: "desktop",
      },
      {
        src: "/images/myagent/myagent-diff.png",
        caption: "Review the actual code behind the outcome.",
        alt: "MyAgent file diff showing the temperature-conversion module created during the demo run.",
        width: 1440,
        height: 1050,
        format: "desktop",
      },
      {
        src: "/images/myagent/myagent-events.png",
        caption: "Follow the execution through its recorded events.",
        alt: "MyAgent event timeline with the ordered actions and results of a completed demo run.",
        width: 1440,
        height: 1871,
        format: "desktop",
      },
      {
        src: "/images/myagent/myagent-mobile.png",
        caption: "Inspect a run from a smaller screen.",
        alt: "MyAgent Run Studio in its responsive mobile layout.",
        width: 390,
        height: 1755,
        format: "mobile",
      },
    ],
    screenNote:
      "Actual Run Studio captures. Deterministic model replay; real file operations and test execution. Select a screen to inspect the original image.",
  },
  "rag-assistant": {
    category: "AI tools · Document retrieval",
    summary:
      "Answers with a paper trail. A local document workbench that makes the source passages behind an answer as easy to inspect as the answer itself.",
    role: "Personal project · Retrieval engine, CLI and Evidence Desk browser interface",
    galleryLayout: "workbench",
    sections: [
      {
        title: "The idea",
        body: "RAG Assistant brings document import, retrieval and source inspection into one workbench. Questions stay connected to the passages used to answer them, including their document, page or character location, and retrieval method.",
      },
      {
        title: "The workbench",
        body: "Import PDF, Markdown, text or HTML documents; choose a retrieval mode; then read the evidence beside the response. The same local library supports document filtering, graph exploration, saved questions and JSON answer export.",
        bullets: [
          "Overlapping passages preserve page and character provenance.",
          "Content deduplication, atomic document replacement and deletion keep the library consistent.",
          "Claims refer to retrieved source IDs and exact quoted spans.",
          "Invalid citations or insufficient textual support produce an abstention rather than an unsupported answer.",
        ],
      },
      {
        title: "The retrieval system",
        body: "BM25 keyword ranking, normalized vector similarity and bounded two-hop entity-graph traversal contribute candidates. Reciprocal rank fusion combines their rankings, then overlapping passages are deduplicated. A transactional SQLite index holds documents, vectors and question history; revision-aware caching preserves answer evidence and invalidates it when the library changes.",
      },
      {
        title: "Local by default",
        body: "The default mode needs no API key or downloaded model: it uses token-hash vectors and extractive answers. These vectors are lexical features, not learned semantic embeddings. Optional Ollama and OpenAI-compatible providers support model generation and embeddings. The graph shows passage co-occurrence, not proven factual relationships; quotation checks do not establish factual truth. The workbench is intended for a single user's local document collection.",
      },
    ],
    screens: [
      {
        src: "/images/rag-assistant/rag-answer.png",
        caption: "Read the answer beside the passages that support it.",
        alt: "RAG Assistant answering a Redis outage question with quoted source passages from the fictional Atlas document library.",
        width: 1440,
        height: 1050,
        format: "desktop",
      },
      {
        src: "/images/rag-assistant/rag-graph.png",
        caption: "Explore the connections inside your document library.",
        alt: "RAG Assistant entity co-occurrence graph with Atlas selected and connections to terms in its source passages.",
        width: 1440,
        height: 1050,
        format: "desktop",
      },
      {
        src: "/images/rag-assistant/rag-library.png",
        caption: "Keep documents and questions in one workspace.",
        alt: "RAG Assistant document library and question workspace.",
        width: 1440,
        height: 1050,
        format: "desktop",
      },
      {
        src: "/images/rag-assistant/rag-abstention.png",
        caption: "Make missing evidence explicit.",
        alt: "RAG Assistant declining to answer a question without sufficient supporting document evidence.",
        width: 1440,
        height: 1050,
        format: "desktop",
      },
      {
        src: "/images/rag-assistant/rag-mobile.png",
        caption: "Follow the evidence on mobile, too.",
        alt: "RAG Assistant answer and source inspection in its responsive mobile layout.",
        width: 390,
        height: 2437,
        format: "mobile",
      },
    ],
    screenNote:
      "Actual Evidence Desk captures in offline extractive mode, using fictional Atlas example documents. Select a screen to inspect the original image.",
  },
  "budget-smart": {
    category: "Native iOS · Personal finance",
    summary:
      "A calmer way to manage everyday money. Track expenses, plan a month and understand spending — with your ledger always available offline.",
    role: "Personal project · iOS app and optional cloud backend",
    sections: [
      {
        title: "The idea",
        body: "Budget Smart brings the essentials of personal budgeting into one native iOS app. The home screen starts with what is left to spend, the ledger makes individual transactions easy to find, and insights turn those records into a clear picture of the month.",
      },
      {
        title: "The experience",
        body: "Three main destinations — Home, Ledger and Insights — keep the daily flow focused. A persistent quick-add action opens an amount-first editor, with receipt capture close at hand.",
        bullets: [
          "Monthly budgets, daily allowance and income / expense totals.",
          "Searchable transactions, category filters and a daily calendar.",
          "On-device receipt recognition with editable fields before saving.",
          "Category breakdowns, spending trends and custom date ranges.",
          "Separate CAD, USD and CNY ledgers, plus light and dark appearance.",
        ],
      },
      {
        title: "The engineering",
        body: "Built with SwiftUI and a local ledger, so core budgeting does not depend on a server connection. Apple Vision handles receipt text recognition on the device. A small TypeScript backend on Cloudflare Workers and D1 provides optional encrypted snapshot backup.",
        bullets: [
          "Atomic local storage and recoverable import / restore flows.",
          "Client-side AES-GCM encryption and keys stored in the iOS Keychain.",
          "Explicit stale-version rejection for manual cloud backups.",
          "JSON backup and spreadsheet-safe CSV export; original receipt photos stay on the device.",
        ],
      },
      {
        title: "What was verified",
        body: "The project includes Swift business-logic tests, backend integration tests and iOS interface tests. These screens were captured from the actual app on an iPhone 17 Pro Simulator. Cloud backup is a manual snapshot workflow; it does not automatically merge edits across devices. App Store distribution and physical-camera testing are separate from the simulator validation.",
      },
    ],
    screens: [
      {
        src: "/images/budget-smart/01-home.png",
        caption: "A clear view of what’s left to spend.",
        alt: "Budget Smart dashboard showing monthly budget remaining, daily allowance, income and expenses.",
      },
      {
        src: "/images/budget-smart/02-insights.png",
        caption: "Understand where your money goes.",
        alt: "Spending insights with net cash flow, a category donut chart and category totals.",
      },
      {
        src: "/images/budget-smart/03-ledger.png",
        caption: "Every transaction, easy to find.",
        alt: "A searchable transaction ledger with income and expenses grouped by date.",
      },
      {
        src: "/images/budget-smart/04-calendar.png",
        caption: "See your spending day by day.",
        alt: "Monthly calendar view of the transaction ledger.",
      },
      {
        src: "/images/budget-smart/05-new-transaction.png",
        caption: "Capture expenses in a few taps.",
        alt: "Native transaction editor with amount, merchant, category and receipt options.",
      },
      {
        src: "/images/budget-smart/06-home-dark.png",
        caption: "Designed for light and dark.",
        alt: "Budget Smart dashboard in dark appearance with a lime budget card.",
      },
      {
        src: "/images/budget-smart/07-settings.png",
        caption: "Your data, under your control.",
        alt: "Settings with currency selection, encrypted cloud backup, export and recovery options.",
      },
    ],
    screenNote:
      "Actual SwiftUI app captures · iPhone 17 Pro Simulator · Fictional demo data. Select a screen to view the full-resolution image.",
  },
  "sneaker-store": {
    category: "Full-stack web · E-commerce",
    summary:
      "A complete storefront for sneaker enthusiasts, connecting product discovery, a shopping cart and simulated checkout with inventory administration.",
    role: "Team project · EECS 4413, York University",
    sections: [
      {
        title: "The project",
        body: "SoleMate is a full-stack e-commerce platform developed as a team project at York University. The storefront is built with React and Tailwind CSS, backed by a Java 21 / Spring Boot API and PostgreSQL.",
      },
      {
        title: "The shopping flow",
        body: "Customers can browse a searchable product catalog, create an account and manage their shopping cart before placing a simulated order.",
        bullets: [
          "Product descriptions, prices, images, search and filtering.",
          "Account registration and login.",
          "Cart quantity updates, item removal and simulated checkout.",
          "An administration dashboard for product and inventory management.",
        ],
      },
      {
        title: "The stack",
        body: "The application separates the React frontend from the Spring Boot backend and PostgreSQL data layer. The repository includes local setup instructions, database schema and seed data, plus deployment configuration. Checkout is simulated; the project does not claim live payment processing.",
      },
    ],
  },
};
