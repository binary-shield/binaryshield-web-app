# Development Guide

## Project Architecture

This project follows a **feature-based architecture** for better scalability and maintainability.

## Folder Descriptions

### `/app` - Next.js App Router
Contains all routes and page components. Each route is a separate folder with a `page.tsx` file.

### `/features` - Business Logic
Each feature is self-contained with its own:
- `components/` - Feature-specific React components
- `utils/` - Utility functions for the feature
- `types/` (optional) - Feature-specific TypeScript types
- Data files (e.g., `blogs.ts`, `ebooks.ts`)
- `index.ts` - Exports all public APIs

**Example:**
```typescript
// features/blog/index.ts
export { blogs } from "./blogs";
export * from "./components";
export * from "./utils";
```

### `/shared` - Shared Resources
Code that is used across multiple features:
- `components/` - Reusable UI components
- `types/` - Shared TypeScript interfaces and types
- `constants/` - Application-wide constants
- `hooks/` - Custom React hooks

### `/core` - Core Functionality
Fundamental app configuration:
- `providers/` - React Context providers (Theme, Auth, etc.)
- `config/` - App configuration files

### `/components` - UI Components
- `ui/` - shadcn/ui components (Button, Card, Input, etc.)
- `sections/` - Larger page sections (Hero, Testimonials, etc.)

### `/lib` - Utility Libraries
Helper functions and utilities used throughout the app.

## Import Patterns

### Absolute Imports
Use `@/` prefix for absolute imports:
```typescript
import { blogs } from "@/features/blog";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/shared/types";
```

### Feature Exports
Import from feature index files:
```typescript
// ✅ Good
import { blogs, getBlogById } from "@/features/blog";

// ❌ Avoid
import { blogs } from "@/features/blog/blogs";
import { getBlogById } from "@/features/blog/utils";
```

## Component Guidelines

### Server vs Client Components

**Server Components (default):**
- Data fetching
- Static content
- SEO-important content

```typescript
// No 'use client' directive
export default function BlogPage() {
  // Server component
}
```

**Client Components:**
- Interactivity (onClick, onChange)
- Hooks (useState, useEffect)
- Browser APIs

```typescript
'use client'

export function ModeToggle() {
  const [theme, setTheme] = useState('light')
  // Client component
}
```

### Component Structure
```typescript
// Imports
import { type FC } from "react";

// Types
interface ComponentProps {
  title: string;
  description?: string;
}

// Component
export const Component: FC<ComponentProps> = ({ 
  title, 
  description 
}) => {
  return (
    <div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};
```

## Styling Guidelines

### Tailwind CSS
Use Tailwind utility classes:
```tsx
<div className="flex items-center gap-4 p-6 rounded-lg">
```

### Responsive Design
Mobile-first approach:
```tsx
<div className="text-sm md:text-base lg:text-lg">
  {/* Small by default, medium on md, large on lg */}
</div>
```

### Component Variants
Use `cn()` utility for conditional classes:
```typescript
import { cn } from "@/lib/utils";

<button 
  className={cn(
    "px-4 py-2 rounded-lg",
    isActive && "bg-primary text-white",
    disabled && "opacity-50 cursor-not-allowed"
  )}
/>
```

## Type Safety

### Shared Types
Define types in `shared/types/index.ts`:
```typescript
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  // ...
}
```

### Feature-Specific Types
For types only used in one feature, define in feature folder:
```typescript
// features/blog/types/index.ts
export interface BlogFilter {
  category?: string;
  author?: string;
}
```

## Data Management

### Static Data
Store in feature folders:
- `features/blog/blogs.ts`
- `features/ebook/ebooks.ts`

### API Routes (Future)
```
app/api/
  ├── blog/
  │   └── route.ts
  └── ebook/
      └── route.ts
```

## Performance Optimization

### Image Optimization
Use Next.js Image component:
```tsx
import Image from "next/image";

<Image 
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // For above-fold images
/>
```

### Dynamic Imports
For heavy components:
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### Metadata for SEO
```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};
```

## Testing (Recommended Structure)

```
__tests__/
  ├── features/
  │   ├── blog/
  │   └── ebook/
  ├── components/
  └── utils/
```

## Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://api.example.com
```

Access in code:
```typescript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
```

## Git Workflow

### Branch Naming
- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `refactor/what-refactored` - Code refactoring
- `docs/what-documented` - Documentation

### Commit Messages
```
feat: add blog filtering functionality
fix: resolve navbar mobile menu issue
refactor: restructure ebook components
docs: update README with new structure
```

## Common Tasks

### Adding a New Feature
1. Create folder in `features/`
2. Add components, utils, data
3. Create `index.ts` for exports
4. Add types to `shared/types/` if needed
5. Create route in `app/`

### Adding a New Page
1. Create folder in `app/`
2. Add `page.tsx`
3. Add to navigation in `shared/constants/`
4. Update navbar component

### Adding Utility Function
1. Identify if feature-specific or shared
2. Add to appropriate `utils/` folder
3. Export from `index.ts`
4. Add TypeScript types

## Debugging

### Next.js Debug Mode
```bash
NODE_OPTIONS='--inspect' npm run dev
```

### TypeScript Checking
```bash
npx tsc --noEmit
```

### Lint and Format
```bash
npm run lint
npm run format
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [shadcn/ui](https://ui.shadcn.com/)
