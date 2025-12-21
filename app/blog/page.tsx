/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { blogs } from "@/features/blog";
import { getBlogCategories } from "@/features/blog/utils";
import { Clock, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const categories = getBlogCategories(blogs);

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-primary">Blog</span> Kami
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Tetap update dengan wawasan terbaru, tutorial, dan praktik terbaik
            dalam teknologi dan bisnis.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-6 md:mb-8 flex flex-wrap gap-2 md:gap-3">
          <Button
            variant="default"
            size="sm"
            className="rounded-full transition-all duration-300 text-xs md:text-sm"
          >
            Semua Postingan
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="rounded-full transition-all duration-300 text-xs md:text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {blogs[0] && (
          <Link href={`/blog/${blogs[0].id}`}>
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out mb-12 border-border bg-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-56 md:h-auto overflow-hidden bg-muted">
                  <img
                    src={blogs[0].coverImage}
                    alt={blogs[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1.5 rounded-full text-xs font-medium">
                    Unggulan
                  </div>
                </div>
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-3 md:mb-4">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                      {blogs[0].category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors">
                    {blogs[0].title}
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 line-clamp-3">
                    {blogs[0].excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <img
                        src={blogs[0].authorImage}
                        alt={blogs[0].author}
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{blogs[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(blogs[0].publishedDate).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric", year: "numeric" },
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{blogs[0].readTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {blogs.slice(1).map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.id}`}>
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out h-full border-border bg-card">
                {/* Cover Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    {blog.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                    {blog.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="border-t border-border pt-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={blog.authorImage}
                        alt={blog.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm font-medium">{blog.author}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(blog.publishedDate).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric" },
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{blog.readTime} min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 md:mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl md:rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Jangan Lewatkan Update
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto px-4">
            Berlangganan newsletter kami dan dapatkan artikel terbaru langsung
            ke inbox Anda setiap minggu.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-2.5 md:py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
            />
            <Button
              size="lg"
              className="rounded-full px-6 md:px-8 whitespace-nowrap"
            >
              Berlangganan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
