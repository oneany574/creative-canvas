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
    slug: "the-case-for-slowness",
    n: "01",
    title: "The case for slowness in digital design",
    excerpt:
      "Speed became the only metric anyone talked about. We think the more interesting question is pace — and who controls it.",
    category: "Craft",
    date: "12 June 2026",
    readingTime: "6 min",
    author: "Amélie Reis",
    authorRole: "Creative Director",
    cover: hero,
    tags: ["Craft", "Motion", "Interface"],
    body: [
      {
        paragraphs: [
          "Every brief we receive asks for something faster. Faster load, faster onboarding, faster path to purchase. And yet the products people describe as beautiful are almost never the fastest ones — they are the ones with the best pace.",
          "Pace is not the absence of speed. It is the deliberate distribution of it: what resolves instantly, what takes a breath, what asks you to wait because the waiting is part of the meaning.",
        ],
      },
      {
        heading: "Latency you choose",
        paragraphs: [
          "A door with a good hinge does not slam. It closes with a weight that tells you the door is real. Interfaces have hinges too — easing curves, staggered reveals, the small deceleration at the end of a drag.",
          "When we design a motion language, we start by deciding which moments deserve time. A price update should be instant. A transition into a case study should not be. One is information, the other is arrival.",
        ],
      },
      {
        heading: "The metric nobody tracks",
        paragraphs: [
          "There is no dashboard for composure. But you can feel its absence: the flicker, the jump, the layout that settles a half-second after you have already started reading.",
          "Our rule is simple. Nothing should move without a reason, and nothing with a reason should move abruptly.",
        ],
      },
    ],
  },
  {
    slug: "identity-is-not-a-logo",
    n: "02",
    title: "Identity is not a logo, it is a set of decisions",
    excerpt:
      "The mark is the smallest part of the work. What holds a brand together is the argument underneath it.",
    category: "Brand",
    date: "28 May 2026",
    readingTime: "8 min",
    author: "Tomas Lindqvist",
    authorRole: "Brand Strategy Lead",
    cover: work1,
    tags: ["Brand", "Strategy", "Systems"],
    body: [
      {
        paragraphs: [
          "Clients often arrive with a logo problem. Two weeks in, it is almost never a logo problem. It is a decision problem — nobody has agreed what the company refuses to do.",
          "A brand is the accumulated evidence of consistent choices. The mark is a receipt for those choices, not a substitute for them.",
        ],
      },
      {
        heading: "Write the refusals first",
        paragraphs: [
          "Before we draw anything, we write a list of refusals. No stock photography of people laughing at laptops. No exclamation marks. No gradient that has not earned its place.",
          "Refusals are more useful than aspirations because they are testable. Anyone can check whether a page violates them.",
        ],
      },
      {
        heading: "Systems outlive taste",
        paragraphs: [
          "Taste changes every four years. Systems — a type scale, a grid, a photographic rule — survive because they encode judgement rather than fashion.",
          "The brands we admire most look like they were designed once and maintained ever since. That is not conservatism. It is compound interest.",
        ],
      },
    ],
  },
  {
    slug: "designing-with-scroll",
    n: "03",
    title: "Designing with scroll as a narrative device",
    excerpt:
      "Scroll is the only input every visitor already knows how to use. Most sites waste it on nothing but travel.",
    category: "Interaction",
    date: "09 May 2026",
    readingTime: "5 min",
    author: "Noor Haddad",
    authorRole: "Interaction Designer",
    cover: work2,
    tags: ["Interaction", "Motion", "Web"],
    body: [
      {
        paragraphs: [
          "Cinema has the cut. Books have the page turn. The web has the scroll, and for twenty years we mostly used it as an elevator.",
          "Treated as a timeline instead, scroll becomes the cheapest narrative device available: you control the pace of a story with the same gesture you use to read it.",
        ],
      },
      {
        heading: "Anchoring, not hijacking",
        paragraphs: [
          "Scroll-jacking earned its bad reputation honestly. The fix is not to abandon scroll-driven work, it is to never take the wheel away.",
          "Anchor animation progress to scroll position, keep the mapping linear, and make sure that stopping means the composition stops in a state that still reads.",
        ],
      },
      {
        heading: "One idea per screen",
        paragraphs: [
          "The strongest scroll sequences hold a single idea at a time and hand it off cleanly. Anything more and the reader is negotiating two things at once.",
        ],
      },
    ],
  },
  {
    slug: "how-we-run-a-project",
    n: "04",
    title: "How we actually run a project",
    excerpt:
      "Six weeks, three checkpoints, one decision-maker. An unglamorous look at studio process.",
    category: "Studio",
    date: "21 April 2026",
    readingTime: "7 min",
    author: "Amélie Reis",
    authorRole: "Creative Director",
    cover: work3,
    tags: ["Studio", "Process"],
    body: [
      {
        paragraphs: [
          "Process is the least romantic part of creative work and the reason good work ships. Ours is deliberately small: six weeks, three checkpoints, one decision-maker on the client side.",
        ],
      },
      {
        heading: "Week one is reading",
        paragraphs: [
          "We read everything — support tickets, sales calls, the internal deck nobody liked. The insight that unlocks a project is usually already inside the company, unstated.",
        ],
      },
      {
        heading: "One decision-maker",
        paragraphs: [
          "Committees average work toward the middle. We ask for a single named person who can say yes, and we make it easy for them by never presenting more than two credible directions.",
          "Two directions force a real choice. Five directions invite a collage.",
        ],
      },
    ],
  },
  {
    slug: "typography-that-behaves",
    n: "05",
    title: "Typography that behaves at every width",
    excerpt:
      "Responsive type is not a font-size problem. It is a rhythm problem across six or seven very different canvases.",
    category: "Craft",
    date: "02 April 2026",
    readingTime: "6 min",
    author: "Tomas Lindqvist",
    authorRole: "Brand Strategy Lead",
    cover: work4,
    tags: ["Typography", "Systems", "Web"],
    body: [
      {
        paragraphs: [
          "A type scale that sings at 1440px often collapses at 390px — not because the sizes are wrong, but because the relationships between them are.",
        ],
      },
      {
        heading: "Measure before size",
        paragraphs: [
          "Set the measure first: 60 to 75 characters for body copy, far tighter for display. Then let the size follow from the measure rather than the other way around.",
        ],
      },
      {
        heading: "Display type is an image",
        paragraphs: [
          "Above a certain size, headlines stop being text and start being composition. Track them tighter, break the lines by hand, and never let an orphan survive a review.",
        ],
      },
    ],
  },
  {
    slug: "notes-on-working-remote",
    n: "06",
    title: "Notes on running a studio across two cities",
    excerpt:
      "Lisbon and New York, five hours apart. What we changed after two years of getting it wrong.",
    category: "Studio",
    date: "15 March 2026",
    readingTime: "5 min",
    author: "Noor Haddad",
    authorRole: "Interaction Designer",
    cover: portrait,
    tags: ["Studio", "Culture"],
    body: [
      {
        paragraphs: [
          "Five hours of offset is either a handicap or a relay, depending entirely on how you write things down.",
        ],
      },
      {
        heading: "Write the handoff",
        paragraphs: [
          "Every day ends with a written handoff: what moved, what is blocked, what the other city should pick up. It takes ten minutes and saves a morning.",
        ],
      },
      {
        heading: "Protect the overlap",
        paragraphs: [
          "The three hours both studios are awake are for conversation only — critique, decisions, arguments. Nobody does production work in the overlap.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const postCategories = Array.from(new Set(posts.map((p) => p.category)));
