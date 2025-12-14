import { Button } from "@/components/ui/button";

export default function EbookCTA() {
  return (
    <div className="mt-12 md:mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl md:rounded-2xl p-8 md:p-12">
      {" "}
      <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
        {" "}
        Can&apos;t Find What You&apos;re Looking For?{" "}
      </h2>
      <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto px-4">
        We&apos;re constantly adding new ebooks to our library. Subscribe to our
        newsletter to get notified about new releases.
      </p>
      <Button size="lg" className="rounded-full px-6 md:px-8">
        Subscribe Now
      </Button>
    </div>
  );
}
