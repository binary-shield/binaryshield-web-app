// Shared types across the application

export interface Ebook {
  id: string;
  title: string;
  description: string;
  author: string;
  cover: string;
  category: string;
  pages: number;
  publishedDate: string;
  content: string;
  rating: number;
  downloads: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  coverImage: string;
  category: string;
  publishedDate: string;
  readTime: number;
  content: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Award {
  year: string;
  title: string;
  org: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface CoreValue {
  icon: React.ComponentType<{ className?: string }>; // LucideIcon or similar icon component type
  title: string;
  description: string;
}
