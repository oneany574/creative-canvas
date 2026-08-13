import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";

export type Post = {
  slug: string;
  n: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  author: string;
  authorRole: string;
  cover: string;
  tags: string[];
  body: { heading?: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "shipping-fast-without-breaking-things",
    n: "01",
    title: "Shipping fast without breaking things",
    excerpt:
      "Velocity is not the opposite of stability. It is what you get when the boring parts are automated and the risky parts are reversible.",
    category: "Engineering",
    date: "12 June 2026",
    readingTime: "6 min",
    author: "Aarav Mehta",
    authorRole: "Software Engineer",
    cover: hero,
    tags: ["Engineering", "CI/CD", "Testing"],
    body: [
      {
        paragraphs: [
          "Every team I have joined wanted to move faster, and almost every one of them tried to get there by skipping steps. It never works for long. The teams that actually ship daily do it because a deploy is the least interesting event of their week.",
          "Speed is a property of the system, not of the people typing. If a release requires four humans, a spreadsheet, and a prayer, no amount of urgency will fix it.",
        ],
      },
      {
        heading: "Make rollback cheaper than debate",
        paragraphs: [
          "The single highest-leverage investment I have made on any team is a one-command rollback that anyone on call can run without reading a runbook. Once reverting takes ninety seconds, the conversation shifts from \"is this safe?\" to \"let's find out.\"",
          "Feature flags do the same thing at a finer grain. Deploy the code dark, turn it on for internal users, then widen the blast radius on your own schedule instead of the release train's.",
        ],
      },
      {
        heading: "Test the seams, not the syntax",
        paragraphs: [
          "I care much more about a handful of integration tests around the payment path than about 100% unit coverage of pure functions. Bugs live where systems meet: serialisation, retries, clock skew, partial failure.",
          "A good suite runs in under five minutes and fails for exactly one reason. Anything slower gets skipped, and anything flaky gets ignored — which is worse than having no test at all.",
        ],
      },
    ],
  },
  {
    slug: "typescript-types-that-earn-their-keep",
    n: "02",
    title: "TypeScript types that earn their keep",
    excerpt:
      "Type gymnastics are fun in a blog post and expensive in a codebase. Here is where the complexity is actually worth it.",
    category: "TypeScript",
    date: "28 May 2026",
    readingTime: "8 min",
    author: "Aarav Mehta",
    authorRole: "Software Engineer",
    cover: work1,
    tags: ["TypeScript", "API design", "DX"],
    body: [
      {
        paragraphs: [
          "There is a version of TypeScript where every helper is a conditional type and no junior engineer can change a line without pairing. I have written that codebase. I would not do it again.",
          "The useful question is not \"can I express this in the type system?\" but \"what class of bug does this prevent, and who pays the maintenance cost?\"",
        ],
      },
      {
        heading: "Model states, not booleans",
        paragraphs: [
          "Most runtime bugs I fix in React apps come from impossible states that the types happily allowed: loading and error at once, data present while status is idle.",
          "A discriminated union collapses all of that. `{ status: 'loading' } | { status: 'error', error: Error } | { status: 'ready', data: T }` costs three lines and deletes an entire category of defect.",
        ],
      },
      {
        heading: "Validate at the boundary",
        paragraphs: [
          "Types vanish at runtime, so anything crossing a boundary — HTTP responses, env vars, form input, webhook payloads — needs a schema. I parse with Zod at the edge and treat everything inside as trusted.",
          "The reward is that inference flows outward from one source of truth: parse once, and the rest of the app gets accurate types for free.",
        ],
      },
    ],
  },
  {
    slug: "reading-a-production-incident",
    n: "03",
    title: "How to read a production incident",
    excerpt:
      "The graph that woke you up is rarely the graph that explains the outage. A practical order of operations for the first ten minutes.",
    category: "Reliability",
    date: "09 May 2026",
    readingTime: "5 min",
    author: "Aarav Mehta",
    authorRole: "Software Engineer",
    cover: work3,
    tags: ["Observability", "On-call", "Postmortems"],
    body: [
      {
        paragraphs: [
          "At 03:12 the pager says error rate is up. Everything after that is a search problem, and the goal of the first ten minutes is not a root cause — it is a stopped bleed.",
        ],
      },
      {
        heading: "Mitigate before you understand",
        paragraphs: [
          "Roll back, shed load, or flip the flag. Curiosity is a daytime activity. I have watched hour-long outages caused entirely by an engineer wanting to know why before making it stop.",
        ],
      },
      {
        heading: "Three questions, in order",
        paragraphs: [
          "What changed? Deploys, flags, config, and migrations explain the large majority of incidents I have handled. Check them before you suspect the database.",
          "Where does the latency go? A single trace beats twenty dashboards. Then: is it one dependency, one region, one tenant? Scope narrows fast once you stop looking at aggregates.",
        ],
      },
      {
        heading: "Write it down while it hurts",
        paragraphs: [
          "The postmortem written the same day is honest and specific. The one written a week later is a summary of what everyone already agreed to believe.",
        ],
      },
    ],
  },
  {
    slug: "how-i-review-code",
    n: "04",
    title: "How I actually review code",
    excerpt:
      "Reviews are the cheapest teaching moment a team gets, and the easiest one to waste on formatting nits.",
    category: "Craft",
    date: "21 April 2026",
    readingTime: "7 min",
    author: "Aarav Mehta",
    authorRole: "Software Engineer",
    cover: work4,
    tags: ["Code review", "Teams", "Craft"],
    body: [
      {
        paragraphs: [
          "A linter should catch anything I could catch by squinting. What is left is the interesting part: is this the right shape, and will the next person understand it?",
        ],
      },
      {
        heading: "Read the diff twice",
        paragraphs: [
          "First pass, no comments — just build a model of what the change is trying to do. Second pass, line by line. Most of my worst review comments came from commenting during pass one.",
        ],
      },
      {
        heading: "Separate blocking from opinion",
        paragraphs: [
          "I label every comment: `blocking`, `suggestion`, or `nit`. It removes the guesswork about whether an author is allowed to disagree, and it makes me honest about how much a preference is really worth.",
          "If I have three blocking comments, that is usually a signal to stop typing and get on a call.",
        ],
      },
    ],
  },
  {
    slug: "frontend-performance-that-users-feel",
    n: "05",
    title: "Frontend performance that users actually feel",
    excerpt:
      "Lighthouse scores are a proxy. Perceived speed comes from doing less work at the moment someone is watching.",
    category: "Performance",
    date: "02 April 2026",
    readingTime: "6 min",
    author: "Aarav Mehta",
    authorRole: "Software Engineer",
    cover: work2,
    tags: ["React", "Performance", "Web"],
    body: [
      {
        paragraphs: [
          "I have shipped a 98 Lighthouse score that felt sluggish and an 82 that felt instant. The score measures a lab load; users measure the gap between an intention and a response.",
        ],
      },
      {
        heading: "Ship less JavaScript, later",
        paragraphs: [
          "Route-level code splitting, server-rendered first paint, and dynamic imports for anything below the fold. On the Northbeam dashboard, deferring the charting bundle alone cut time-to-interactive by 1.4 seconds.",
        ],
      },
      {
        heading: "Optimistic by default",
        paragraphs: [
          "For any mutation the user initiated, update the UI immediately and reconcile in the background. The network is not the user's problem to watch.",
          "Pair it with a real error path. Optimism without rollback is just lying to people politely.",
        ],
      },
    ],
  },
  {
    slug: "notes-on-working-remotely",
    n: "06",
    title: "Notes on eight years of remote engineering",
    excerpt:
      "Written communication is not a soft skill in a distributed team. It is the interface everything else runs on.",
    category: "Career",
    date: "15 March 2026",
    readingTime: "5 min",
    author: "Aarav Mehta",
    authorRole: "Software Engineer",
    cover: portrait,
    tags: ["Career", "Remote", "Collaboration"],
    body: [
      {
        paragraphs: [
          "I have worked with teams across nine time zones and shipped more in those years than in any office I have sat in. Not because remote is magic, but because it forces everything important into writing.",
        ],
      },
      {
        heading: "Design docs over meetings",
        paragraphs: [
          "A two-page doc with a problem statement, two rejected options, and a recommendation resolves more disagreement than an hour of synchronous discussion — and it is still readable six months later when someone asks why.",
        ],
      },
      {
        heading: "Be interruptible in one place",
        paragraphs: [
          "One channel for questions, a visible calendar, and a hard rule that nothing urgent lives in a DM. Predictability is the remote equivalent of walking over to someone's desk.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const categories = Array.from(new Set(posts.map((p) => p.category)));
