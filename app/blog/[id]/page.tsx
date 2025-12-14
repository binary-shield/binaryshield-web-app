import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/features/blog";
import {
  getBlogById,
  getRelatedBlogs,
  formatPublishDate,
} from "@/features/blog/utils";
import { Clock, Calendar, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContentRenderer } from "@/shared/components";
import Image from "next/image";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = getBlogById(id, blogs);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs(blog, blogs);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-background overflow-hidden">
        <div className="absolute inset-0">
          <Image
            fill
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/60" />

        <div className="absolute bottom-0 left-0 right-0 container max-w-4xl mx-auto px-4 md:px-6 pb-6 md:pb-8">
          <div className="mb-3 md:mb-4">
            <span className="inline-block bg-primary text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
              {blog.category}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Image
                fill
                src={blog.authorImage}
                alt={blog.author}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-border"
              />
              <div>
                <p className="font-medium text-foreground">by {blog.author}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">
                {formatPublishDate(blog.publishedDate, "full")}
              </span>
              <span className="sm:hidden">
                {formatPublishDate(blog.publishedDate, "short")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3 md:h-4 md:w-4" />
              <span>{blog.readTime} min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-6 md:mb-8 pb-6 md:pb-8 border-b border-border flex-wrap gap-3">
          <div className="flex gap-2 flex-wrap">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 md:px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs md:text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 md:h-10 md:w-10"
            >
              <Share2 className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 md:h-10 md:w-10"
            >
              <Bookmark className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-sm md:prose-lg dark:prose-invert max-w-none mb-8 md:mb-12">
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8">
            {blog.excerpt}
          </p>

          <ContentRenderer content={blog.content} />
        </article>

        {/* Author Bio */}
        <Card className="p-4 md:p-6 mb-8 md:mb-12 border-border bg-card">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Image
              fill
              src={blog.authorImage}
              alt={blog.author}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full"
            />
            <div className="flex-1">
              <h3 className="text-base md:text-lg font-bold mb-2">
                About {blog.author}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
                {blog.author} is a technology expert specializing in{" "}
                {blog.category}. With years of experience in the industry, they
                share insights and best practices to help businesses succeed in
                the digital age.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="text-xs md:text-sm"
              >
                Follow
              </Button>
            </div>
          </div>
        </Card>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="mt-12 md:mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {relatedBlogs.map((related) => (
                <Link key={related.id} href={`/blog/${related.id}`}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-border bg-card">
                    <div className="relative h-40 overflow-hidden bg-muted">
                      <Image
                        fill
                        src={related.coverImage}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium mb-2">
                        {related.category}
                      </span>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>
                          {new Date(related.publishedDate).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric" },
                          )}
                        </span>
                        <span>•</span>
                        <span>{related.readTime} min</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-12 md:mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl md:rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
            Enjoyed this article?
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 px-4">
            Subscribe to get more insights like this delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 md:py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
            />
            <Button className="rounded-full px-5 md:px-6 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
