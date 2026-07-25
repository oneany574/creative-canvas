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
    id: "meridian",
    n: "01",
    name: "Meridian",
    cat: "Brand · Web",
    year: "2026",
    client: "Meridian Longevity",
    location: "Zürich, CH",
    desc: "Rebranding a longevity clinic into a quiet, editorial institution.",
    narrative: [
      "Meridian arrived with the ambition of turning a boutique longevity practice into a category-defining institution. The existing identity was clinical, cold, and indistinguishable from a dozen competitors.",
      "We rebuilt the brand from the ground up — a serif-led wordmark, a warm off-white palette, and a photographic language that treats the body as landscape. The website reads like a periodical: long-form essays, quiet transitions, and a considered pace.",
      "In the six months after launch, direct inquiries tripled and the average consultation package doubled in value.",
    ],
    services: ["Brand Strategy", "Identity", "Art Direction", "Website"],
    img: work1,
    gallery: [work1, hero, work3],
    span: "col-span-12 md:col-span-8 aspect-[4/5]",
  },
  {
    id: "fluoro",
    n: "02",
    name: "Fluoro",
    cat: "Product · Motion",
    year: "2025",
    client: "Fluoro Audio",
    location: "Berlin, DE",
    desc: "A design system and motion language for a category-defining audio app.",
    narrative: [
      "Fluoro is a spatial-audio workstation for a new generation of producers. The team came to us with a functional beta and a hunch that the interface was the reason retention was flat.",
      "We designed a modular system of nodes, timelines, and mixers — plus a motion language that makes every interaction feel like it has weight. Sliders decelerate. Panels breathe. Nothing snaps.",
      "The rebuilt product now anchors a paid tier that converts at nearly 4× the previous rate.",
    ],
    services: ["Product Design", "Design System", "Motion", "Prototyping"],
    img: work2,
    gallery: [work2, work4, hero],
    span: "col-span-12 md:col-span-4 md:mt-32 aspect-[3/4]",
  },
  {
    id: "north-grove",
    n: "03",
    name: "North Grove",
    cat: "Identity · Packaging",
    year: "2025",
    client: "North Grove Apothecary",
    location: "Copenhagen, DK",
    desc: "Warm typographic identity for an independent apothecary in Copenhagen.",
    narrative: [
      "North Grove is a two-person apothecary making tinctures, salves, and teas in small batches. They needed an identity that could sit on a shelf next to century-old brands without feeling costumed.",
      "The wordmark borrows from Danish apothecary signage of the 1920s. The packaging system uses only three inks and unbleached paper — every SKU legible from across a shop, every detail rewarding a closer look.",
      "The line is now stocked in twenty-two independents across Northern Europe.",
    ],
    services: ["Identity", "Packaging", "Print", "Signage"],
    img: work3,
    gallery: [work3, portrait, work1],
    span: "col-span-12 md:col-span-5 aspect-[4/5]",
  },
  {
    id: "lumen-os",
    n: "04",
    name: "Lumen OS",
    cat: "Product · WebGL",
    year: "2024",
    client: "Lumen",
    location: "New York, US",
    desc: "A creative-tools platform with real-time canvas and node-based motion.",
    narrative: [
      "Lumen wanted to challenge the incumbents in creative software with a browser-native tool that treats motion as a first-class primitive. We led design and creative technology across a fourteen-month engagement.",
      "The canvas runs on WebGL and streams collaboratively at 120fps. The node graph is expressive without being intimidating — every node has a plain-English name and a live preview.",
      "Lumen closed a Series A on the back of the launch and now serves more than 40,000 designers weekly.",
    ],
    services: ["Product Design", "Creative Technology", "WebGL", "Brand"],
    img: work4,
    gallery: [work4, work2, hero],
    span: "col-span-12 md:col-span-7 md:mt-40 aspect-[4/3]",
  },
];

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}
