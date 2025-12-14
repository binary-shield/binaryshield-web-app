# IT Services Landing Page

A professional, modern landing page built with Next.js 15, TypeScript, and Tailwind CSS featuring ebooks, blog, and company information.

## 🏗️ Project Structure

```
ca-landing/
├── app/                          # Next.js App Router
│   ├── (routes)/
│   │   ├── about/               # About page
│   │   ├── blog/                # Blog routes
│   │   │   ├── [id]/           # Blog detail page
│   │   │   └── page.tsx        # Blog list page
│   │   └── ebook/              # Ebook routes
│   │       ├── [id]/           # Ebook detail page
│   │       └── page.tsx        # Ebook list page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles
│
├── features/                    # Feature-based modules
│   ├── blog/
│   │   ├── components/         # Blog-specific components
│   │   ├── utils/              # Blog utility functions
│   │   ├── blogs.ts            # Blog data
│   │   └── index.ts            # Feature exports
│   ├── ebook/
│   │   ├── components/         # Ebook-specific components
│   │   ├── utils/              # Ebook utility functions
│   │   ├── ebooks.ts           # Ebook data
│   │   └── index.ts            # Feature exports
│   └── about/
│       └── components/         # About page components
│
├── shared/                      # Shared across features
│   ├── components/             # Reusable components
│   │   ├── content-renderer.tsx
│   │   ├── mode-toggle.tsx
│   │   └── index.ts
│   ├── types/                  # TypeScript types
│   │   └── index.ts
│   ├── constants/              # App constants
│   │   └── index.ts
│   └── hooks/                  # Custom React hooks
│
├── core/                        # Core functionality
│   ├── providers/              # React providers
│   │   ├── theme-provider.tsx
│   │   └── index.ts
│   └── config/                 # App configuration
│
├── components/                  # UI Components
│   ├── ui/                     # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── sheet.tsx
│   └── sections/               # Page sections
│       ├── hero.tsx
│       └── testimonials.tsx
│
├── lib/                         # Utility libraries
│   └── utils.ts                # Helper functions
│
├── public/                      # Static assets
└── package.json
```

## 🎯 Architecture Principles

### Feature-Based Organization
- Each feature (blog, ebook, about) is self-contained
- Features have their own components, utils, and data
- Easy to scale and maintain

### Separation of Concerns
- **app/**: Routing and page components
- **features/**: Business logic and feature-specific code
- **shared/**: Reusable code across features
- **core/**: Fundamental app configuration
- **components/**: Presentational UI components

### Import Conventions
```typescript
// Feature imports
import { blogs, getBlogById } from "@/features/blog";

// Shared imports
import { ContentRenderer } from "@/shared/components";
import type { BlogPost } from "@/shared/types";

// Core imports
import { ThemeProvider } from "@/core/providers";

// UI components
import { Button } from "@/components/ui/button";
```

## 🚀 Features

### ✅ Ebook Library
- Grid view with cover images
- Detailed ebook pages with content preview
- Category filtering
- Related ebooks suggestions
- Download functionality (UI)

### ✅ Blog
- Featured post highlight
- Category-based filtering
- Author information
- Reading time estimation
- Related articles
- Newsletter subscription (UI)

### ✅ About Page
- Company story
- Team members showcase
- Core values
- Statistics
- Awards & recognition

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized for all device sizes

### ✅ Dark/Light Mode
- Smooth theme transitions
- System preference detection
- Persistent theme selection

### ✅ Performance
- Static Site Generation (SSG)
- Optimized images
- Code splitting
- Fast page loads

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Fonts**: Geist Sans & Geist Mono

## 📦 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

```bash
# Install dependencies
npm install
# or
bun install

# Run development server
npm run dev
# or
bun dev

# Build for production
npm run build
# or
bun run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Adding New Content

### Adding an Ebook
Edit `features/ebook/ebooks.ts`:
```typescript
{
  id: "7",
  title: "Your Ebook Title",
  description: "Ebook description",
  author: "Author Name",
  cover: "image-url",
  category: "Category",
  pages: 300,
  publishedDate: "2024-01-01",
  rating: 4.5,
  downloads: 1000,
  content: `Markdown content here...`
}
```

### Adding a Blog Post
Edit `features/blog/blogs.ts`:
```typescript
{
  id: "7",
  title: "Blog Post Title",
  excerpt: "Short excerpt",
  author: "Author Name",
  authorImage: "author-image-url",
  coverImage: "cover-image-url",
  category: "Category",
  publishedDate: "2024-01-01",
  readTime: 10,
  tags: ["tag1", "tag2"],
  content: `Markdown content here...`
}
```

## 🎨 Customization

### Theme Colors
Edit `app/globals.css` for custom theme colors:
```css
:root {
  --primary: #2563eb;    /* Primary color */
  --secondary: #db2777;  /* Secondary color */
  /* ... */
}
```

### Site Configuration
Edit `shared/constants/index.ts`:
```typescript
export const SITE_CONFIG = {
  name: "Your Company",
  description: "Your description",
  url: "https://yoursite.com",
};
```

### Navigation
Modify `shared/constants/index.ts`:
```typescript
export const NAVIGATION_LINKS = [
  { href: "/ebook", label: "Ebook" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/new-page", label: "New Page" }, // Add new
];
```

## 🧪 Code Quality

### Type Safety
- Full TypeScript coverage
- Strict type checking
- Shared types in `shared/types/`

### Code Organization
- Feature-based modules
- Single Responsibility Principle
- DRY (Don't Repeat Yourself)

### Best Practices
- Server Components by default
- Client Components when needed ('use client')
- Async/await for data fetching
- Proper error handling

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Wide**: > 1280px

## 🔧 Utility Functions

### Ebook Utils (`features/ebook/utils/`)
- `getEbookById()` - Find ebook by ID
- `getRelatedEbooks()` - Get related ebooks
- `getEbookCategories()` - Extract categories
- `formatReadingTime()` - Format reading time

### Blog Utils (`features/blog/utils/`)
- `getBlogById()` - Find blog by ID
- `getRelatedBlogs()` - Get related blogs
- `getBlogCategories()` - Extract categories
- `formatPublishDate()` - Format dates

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please follow the existing code structure and conventions.

## 📧 Contact

For questions or support, please contact: your-email@example.com
