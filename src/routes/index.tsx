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
      { title: "Aarav Mehta — Full-stack software engineer" },
      {
        name: "description",
        content:
          "Full-stack software engineer building fast, reliable products with TypeScript, React, Node.js, Go, and cloud infrastructure. Selected projects, process, and writing.",
      },
      { property: "og:title", content: "Aarav Mehta — Software engineer" },
      {
        property: "og:description",
        content:
          "Product engineering across frontend, backend, and infrastructure — remote from Bengaluru.",
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
