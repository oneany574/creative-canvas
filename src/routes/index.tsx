import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/site/Preloader";
import { Navigation } from "@/components/site/Navigation";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Statement } from "@/components/site/Statement";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { CustomCursor } from "@/components/site/CustomCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ostium — Independent design studio for brands that move" },
      {
        name: "description",
        content:
          "Ostium is an independent studio crafting identity, digital, and product experiences for ambitious founders. Selected work, method, and studio.",
      },
      { property: "og:title", content: "Ostium — Independent design studio" },
      {
        property: "og:description",
        content:
          "Brand strategy, identity, digital experience, and creative technology, from Lisbon and New York.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative">
      <Preloader />
      <SmoothScroll />
      <CustomCursor />
      <Navigation />
      <Hero />
      <Marquee />
      <Statement />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
