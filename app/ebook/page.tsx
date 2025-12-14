import { ebooks } from "@/features/ebook";
import EbookCard from "@/features/ebook/components/EbookCard";
import EbookCTA from "@/features/ebook/components/EbookCTA";

export default function EbookPage() {
  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-primary">Ebook</span> Digital
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Jelajahi koleksi ebook komprehensif kami yang mencakup terbaru
            dalam teknologi, cloud computing, dan inovasi bisnis.
          </p>
        </div>

        {/* Ebook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {ebooks.map((ebook) => (
            <EbookCard ebook={ebook} key={ebook.id} />
          ))}
        </div>

        {/* CTA Section */}
        <EbookCTA />
      </div>
    </div>
  );
}
