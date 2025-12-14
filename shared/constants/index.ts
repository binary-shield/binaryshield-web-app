// Shared constants across the application

export const SITE_CONFIG = {
  name: "Logo",
  description: "Expert IT Services for your business",
  url: "https://example.com",
} as const;

export const NAVIGATION_LINKS = [
  { href: "/ebook", label: "Ebook" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
] as const;

export const ROUTES = {
  HOME: "/",
  EBOOK: "/ebook",
  EBOOK_DETAIL: (id: string) => `/ebook/${id}`,
  BLOG: "/blog",
  BLOG_DETAIL: (id: string) => `/blog/${id}`,
  ABOUT: "/about",
} as const;

export const ANIMATION_DURATIONS = {
  FAST: 300,
  NORMAL: 500,
  SLOW: 700,
} as const;
