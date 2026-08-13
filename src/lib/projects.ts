import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";

export type Project = {
  id: string;
  n: string;
  name: string;
  cat: string;
  year: string;
  client: string;
  location: string;
  desc: string;
  narrative: string[];
  services: string[];
  img: string;
  gallery: string[];
  span: string;
};

export const projects: Project[] = [
  {
    id: "northbeam-analytics",
    n: "01",
    name: "Northbeam",
    cat: "Full-stack · Data",
    year: "2026",
    client: "Northbeam (Series B SaaS)",
    location: "Remote · Berlin, DE",
    desc: "A real-time revenue analytics platform serving 40M events a day.",
    narrative: [
      "Northbeam's attribution product was built on nightly batch jobs — customers were making media decisions on data that was up to eighteen hours stale. I joined as lead engineer to move the pipeline to streaming and rebuild the dashboard on top of it.",
      "The ingestion path is a Node/TypeScript service writing to Kafka, with a ClickHouse rollup layer that keeps p95 query latency under 180ms across 40M events per day. The frontend is React + TanStack Query with virtualised tables and incremental chart hydration, so a 90-day cohort view paints in under a second.",
      "Query costs dropped 62% after the rollup redesign, and time-to-insight went from overnight to roughly four seconds. The platform now backs the company's highest-margin tier.",
    ],
    services: ["TypeScript", "React", "Node.js", "Kafka", "ClickHouse", "AWS"],
    img: work1,
    gallery: [work1, work4, hero],
    span: "col-span-12 md:col-span-8 aspect-[4/5]",
  },
  {
    id: "fluoro-payments",
    n: "02",
    name: "Fluoro Pay",
    cat: "Mobile · Fintech",
    year: "2025",
    client: "Fluoro Financial",
    location: "Singapore, SG",
    desc: "A cross-border payments app with offline-first ledger sync.",
    narrative: [
      "Fluoro needed a consumer wallet that stayed usable on unreliable mobile networks across Southeast Asia. I owned the client architecture and the sync protocol between device and ledger.",
      "The app is React Native with a local SQLite ledger, an append-only event log, and a conflict-resolution layer that reconciles against a Go payments service. Every transaction is idempotent end to end, so a retry on a dropped connection can never double-charge.",
      "Post-launch, failed-transaction support tickets fell 71% and the app holds a 4.8 rating across 120k installs. I also wrote the load-testing harness that gates every release at 3,000 TPS.",
    ],
    services: ["React Native", "Go", "SQLite", "gRPC", "Stripe", "Detox"],
    img: work2,
    gallery: [work2, work4, work1],
    span: "col-span-12 md:col-span-4 md:mt-32 aspect-[3/4]",
  },
  {
    id: "atlas-platform",
    n: "03",
    name: "Atlas Platform",
    cat: "Infrastructure · DevEx",
    year: "2025",
    client: "Atlas Health",
    location: "Amsterdam, NL",
    desc: "Internal developer platform that cut deploy time from 40 minutes to 6.",
    narrative: [
      "Atlas Health had 14 product teams sharing one hand-rolled deploy script and a Jenkins box nobody wanted to touch. I led the platform work that replaced it.",
      "We shipped a Kubernetes-based platform on EKS with Terraform modules, Argo CD for GitOps, and a small internal CLI that scaffolds a production-ready service — observability, secrets, autoscaling, and alerting wired in by default.",
      "Median deploy time dropped from 40 minutes to 6, change-failure rate halved, and onboarding a new backend service went from a two-week project to an afternoon.",
    ],
    services: ["Kubernetes", "Terraform", "Argo CD", "Go", "Prometheus", "AWS"],
    img: work3,
    gallery: [work3, hero, work4],
    span: "col-span-12 md:col-span-5 aspect-[4/5]",
  },
  {
    id: "zephyr-oss",
    n: "04",
    name: "Zephyr",
    cat: "Open source · Tooling",
    year: "2024",
    client: "Open source (4.1k stars)",
    location: "Everywhere",
    desc: "A typed data-fetching toolkit for React with zero-config caching.",
    narrative: [
      "Zephyr started as a weekend fix for the same fetching boilerplate I kept rewriting on client projects, and grew into a library with 4.1k GitHub stars and roughly 90k weekly downloads.",
      "It ships end-to-end inferred types from schema to component, a request deduplication cache, and a streaming SSR adapter — all in under 6kB gzipped with no runtime dependencies. Test coverage sits at 98% with property-based tests around the cache invalidation logic.",
      "Maintaining it in public taught me more about API design than any internal project: every ergonomic shortcut eventually shows up as a support thread.",
    ],
    services: ["TypeScript", "React", "Vitest", "Rollup", "DX", "Docs"],
    img: work4,
    gallery: [work4, work1, portrait],
    span: "col-span-12 md:col-span-7 md:mt-40 aspect-[4/3]",
  },
];

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}
