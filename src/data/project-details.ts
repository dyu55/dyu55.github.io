export interface ProjectScreen {
  src: string;
  caption: string;
  alt: string;
}
export interface ProjectDetail {
  category: string;
  summary: string;
  role: string;
  sections: { title: string; body: string; bullets?: string[] }[];
  screens?: ProjectScreen[];
  screenNote?: string;
}
export const deferredProjects = new Set(["myagent", "rag-assistant"]);
export const projectDetails: Record<string, ProjectDetail> = {
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
