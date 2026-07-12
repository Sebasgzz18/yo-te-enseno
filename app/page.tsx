import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Benefits } from "@/components/benefits";
import { WhyUs } from "@/components/why-us";
import { Packages } from "@/components/packages";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { Gallery } from "@/components/gallery";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <WhyUs />
      <Packages />
      <HowItWorks />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
