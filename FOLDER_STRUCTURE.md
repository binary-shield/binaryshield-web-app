# 📁 Project Structure Overview

```
ca-landing/
│
├── 📱 app/                              # Next.js 15 App Router
│   ├── about/                          # About page route
│   │   └── page.tsx                    # About page component
│   ├── blog/                           # Blog routes
│   │   ├── [id]/                       # Dynamic blog detail route
│   │   │   └── page.tsx                # Blog detail page
│   │   └── page.tsx                    # Blog list page
│   ├── ebook/                          # Ebook routes
│   │   ├── [id]/                       # Dynamic ebook detail route
│   │   │   └── page.tsx                # Ebook detail page
│   │   └── page.tsx                    # Ebook list page
│   ├── layout.tsx                      # Root layout with providers
│   ├── page.tsx                        # Homepage
│   └── globals.css                     # Global styles & theme
│
├── 🎯 features/                         # Feature-based modules (Business Logic)
│   ├── blog/                           
│   │   ├── components/                 # Blog-specific components
│   │   ├── utils/                      
│   │   │   └── index.ts                # Blog utility functions
│   │   ├── blogs.ts                    # Blog data (mock/real)
│   │   └── index.ts                    # Public API exports
│   ├── ebook/
│   │   ├── components/                 # Ebook-specific components
│   │   ├── utils/
│   │   │   └── index.ts                # Ebook utility functions
│   │   ├── ebooks.ts                   # Ebook data (mock/real)
│   │   └── index.ts                    # Public API exports
│   └── about/
│       └── components/                 # About page components
│
├── 🔧 shared/                           # Shared across all features
│   ├── components/                     # Reusable UI components
│   │   ├── content-renderer.tsx        # Markdown content renderer
│   │   ├── mode-toggle.tsx             # Dark/Light theme toggle
│   │   └── index.ts                    # Component exports
│   ├── types/                          # TypeScript type definitions
│   │   └── index.ts                    # Shared interfaces & types
│   ├── constants/                      # Application constants
│   │   └── index.ts                    # Config, routes, etc.
│   └── hooks/                          # Custom React hooks
│
├── ⚙️ core/                             # Core application functionality
│   ├── providers/                      # React context providers
│   │   ├── theme-provider.tsx          # Theme context
│   │   └── index.ts
│   └── config/                         # App configuration
│
├── 🎨 components/                       # Presentational UI components
│   ├── ui/                             # shadcn/ui component library
│   │   ├── button.tsx                  # Button component
│   │   ├── card.tsx                    # Card component
│   │   ├── input.tsx                   # Input component
│   │   ├── navbar.tsx                  # Navigation bar
│   │   ├── footer.tsx                  # Footer
│   │   └── sheet.tsx                   # Mobile menu sheet
│   └── sections/                       # Page section components
│       ├── hero.tsx                    # Hero section
│       └── testimonials.tsx            # Testimonials section
│
├── 🛠️ lib/                              # Utility libraries
│   └── utils.ts                        # Helper functions (cn, etc.)
│
├── 📦 public/                           # Static assets
│   ├── favicon.ico
│   └── images/
│
├── 📝 Documentation
│   ├── PROJECT_STRUCTURE.md            # This file
│   ├── DEVELOPMENT.md                  # Development guide
│   ├── CHANGELOG.md                    # Change log
│   └── README.md                       # Main README
│
└── ⚙️ Configuration Files
    ├── package.json                    # Dependencies & scripts
    ├── tsconfig.json                   # TypeScript config
    ├── tailwind.config.js              # Tailwind CSS config
    ├── next.config.ts                  # Next.js config
    └── .eslintrc.json                  # ESLint config
```

## 📊 Architecture Layers

```
┌─────────────────────────────────────────────────────┐
│                   🌐 App Router (app/)              │
│                 (Routes & Pages)                     │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│             🎯 Features (features/)                 │
│          (Business Logic & Data)                    │
└─────────────────────────────────────────────────────┘
                          ↓
┌──────────────────┬──────────────────┬───────────────┐
│  🔧 Shared       │  ⚙️ Core         │  🎨 Components│
│  (Utilities)     │  (Config)        │  (UI Library) │
└──────────────────┴──────────────────┴───────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│              🛠️ Lib (Helper Functions)              │
└─────────────────────────────────────────────────────┘
```

## 🔄 Data Flow

```
User Request
     ↓
App Router (page.tsx)
     ↓
Feature Module (features/*/index.ts)
     ↓
Feature Utils (features/*/utils/)
     ↓
Shared Types (shared/types/)
     ↓
UI Components (components/ui/)
     ↓
Response to User
```

## 📝 Import Path Examples

```typescript
// ✅ Feature imports
import { blogs, getBlogById } from "@/features/blog";
import { ebooks, getEbookById } from "@/features/ebook";

// ✅ Shared components
import { ContentRenderer, ModeToggle } from "@/shared/components";

// ✅ Shared types
import type { BlogPost, Ebook } from "@/shared/types";

// ✅ Constants
import { ROUTES, SITE_CONFIG } from "@/shared/constants";

// ✅ Core providers
import { ThemeProvider } from "@/core/providers";

// ✅ UI components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// ✅ Utilities
import { cn } from "@/lib/utils";
```

## 🎯 Key Benefits

### 1. **Scalability**
- Easy to add new features
- Each feature is independent
- Clear boundaries between modules

### 2. **Maintainability**
- Code is organized by feature
- Easy to locate and update code
- Reduced coupling

### 3. **Reusability**
- Shared components in one place
- Common utilities accessible everywhere
- Consistent types across app

### 4. **Type Safety**
- Full TypeScript coverage
- Shared type definitions
- Compile-time error checking

### 5. **Developer Experience**
- Clear folder structure
- Intuitive imports
- Self-documenting code

## 🚀 Quick Navigation

| Need to... | Go to... |
|-----------|----------|
| Add a new page | `app/` |
| Add business logic | `features/*/` |
| Create reusable component | `shared/components/` |
| Add UI component | `components/ui/` |
| Define types | `shared/types/` |
| Add utility function | Feature-specific: `features/*/utils/`<br>Global: `lib/utils.ts` |
| Configure app | `core/config/` or `shared/constants/` |
| Update theme | `app/globals.css` |

## 📚 Related Documentation

- [Development Guide](./DEVELOPMENT.md) - Detailed development practices
- [README](./README.md) - Getting started guide
- [Changelog](./CHANGELOG.md) - Version history
