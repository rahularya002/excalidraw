import { Cta } from "@/components/Cta";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";


export default function Home() {
  return (
    <div className="bg-background overflow-hidden">
      <Hero />
      <Features />
      <Cta />
      <Testimonials />
    </div>
  );
}
