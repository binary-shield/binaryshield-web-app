// Blog utility functions
import { BlogPost } from "@/shared/types";

export function getBlogById(id: string, blogs: BlogPost[]): BlogPost | undefined {
  return blogs.find((blog) => blog.id === id);
}

export function getRelatedBlogs(blog: BlogPost, allBlogs: BlogPost[], limit = 3): BlogPost[] {
  return allBlogs
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, limit);
}

export function getBlogCategories(blogs: BlogPost[]): string[] {
  return Array.from(new Set(blogs.map((blog) => blog.category)));
}

export function formatPublishDate(dateString: string, format: 'full' | 'short' = 'full'): string {
  const date = new Date(dateString);
  
  if (format === 'short') {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
  
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
