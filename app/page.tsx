import { Cta } from "@/components/Cta";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";


export default function Home() {
  return (
    <div className="bg-background overflow-hidden">
      <Hero />
      <Features />
      <Cta />
    </div>
  );
}
