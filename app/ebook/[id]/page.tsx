import Link from "next/link";
import { notFound } from "next/navigation";
import { ebooks } from "@/features/ebook";
import {
  getEbookById,
  getRelatedEbooks,
  formatReadingTime,
} from "@/features/ebook/utils";
import { Download, BookOpen, Calendar, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContentRenderer } from "@/shared/components";
import Image from "next/image";

export async function generateStaticParams() {
  return ebooks.map((ebook) => ({
    id: ebook.id,
  }));
}

export default async function EbookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ebook = getEbookById(id, ebooks);

  if (!ebook) {
    notFound();
  }

  const relatedEbooks = getRelatedEbooks(ebook, ebooks);

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Left Column - Cover and Actions */}
          <div className="lg:col-span-1">
            <Card className="lg:sticky lg:top-24 overflow-hidden border-border bg-card">
              <div className="relative h-64 md:h-96 bg-muted">
                <Image
                  fill
                  src={ebook.cover}
                  alt={ebook.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-base md:text-lg">
                      {ebook.rating}
                    </span>
                    <span className="text-muted-foreground text-xs md:text-sm ml-1">
                      / 5.0
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Download className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="text-xs md:text-sm">
                      {ebook.downloads.toLocaleString()}
                    </span>
                  </div>
                </div>

                <Button className="w-full mb-2 md:mb-3 h-10 md:h-11" size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  Download Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-10 md:h-11"
                  size="lg"
                >
                  Add to Library
                </Button>

                {/* Meta Info */}
                <div className="mt-4 md:mt-6 space-y-2 md:space-y-3 text-xs md:text-sm border-t border-border pt-4 md:pt-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen className="h-3 w-3 md:h-4 md:w-4" />
                    <span>{ebook.pages} pages</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="hidden sm:inline">
                      Published{" "}
                      {new Date(ebook.publishedDate).toLocaleDateString(
                        "en-US",
                        { month: "long", year: "numeric" },
                      )}
                    </span>
                    <span className="sm:hidden">
                      Published{" "}
                      {new Date(ebook.publishedDate).toLocaleDateString(
                        "en-US",
                        { month: "short", year: "numeric" },
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-3 w-3 md:h-4 md:w-4" />
                    <span>{formatReadingTime(ebook.pages)}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2">
            <div className="mb-3 md:mb-4">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium">
                {ebook.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground">
              {ebook.title}
            </h1>

            <p className="text-base md:text-xl text-muted-foreground mb-4 md:mb-6">
              by{" "}
              <span className="text-foreground font-medium">
                {ebook.author}
              </span>
            </p>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                About This Ebook
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                {ebook.description}
              </p>

              {/* Content Preview */}
              <div className="bg-muted/50 border border-border rounded-lg p-4 md:p-6 lg:p-8 my-6 md:my-8">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
                  Content Preview
                </h3>
                <ContentRenderer content={ebook.content} />
              </div>

              {/* Key Takeaways */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 md:p-6 my-6 md:my-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                  What You&apos;ll Learn
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li>✓ Master the fundamentals and advanced concepts</li>
                  <li>✓ Implement real-world best practices</li>
                  <li>✓ Avoid common pitfalls and mistakes</li>
                  <li>✓ Gain insights from industry experts</li>
                  <li>✓ Apply knowledge to your projects immediately</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Ebooks */}
        {relatedEbooks.length > 0 && (
          <div className="mt-12 md:mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
              More in <span className="text-primary">{ebook.category}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {relatedEbooks.map((related) => (
                <Link key={related.id} href={`/ebook/${related.id}`}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-border bg-card">
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <Image
                        fill
                        src={related.cover}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        by {related.author}
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-medium">
                            {related.rating}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">
                          {related.pages} pages
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
