import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DreamSection } from "@/components/DreamSection";
import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { CallToAction } from "@/components/CallToAction";

export default function Page() {
  return (
    <SmoothScroll>
      <>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex flex-col gap-section px-gutter pb-gutter pt-nav-gap">
          <Hero />
          <DreamSection />
          <Testimonials />
          <Services />
          <CallToAction />
        </main>
      </>
    </SmoothScroll>
  );
}
