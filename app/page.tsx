import { Hero } from "@/features/landing/sections/Hero";
import { Testimonials } from "@/features/landing/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Testimonials />
    </main>
  );
}
