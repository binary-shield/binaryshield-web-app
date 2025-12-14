import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/features/landing/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Testimonials />
    </main>
  );
}
