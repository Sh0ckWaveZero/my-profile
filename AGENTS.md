# AGENTS.md - Development Guide for AI Coding Agents

This guide provides essential information for AI coding agents working on this Next.js project.

## Project Overview

- **Framework**: Next.js (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Package Manager**: Bun (preferred) or npm
- **Runtime**: Node.js with ES2017 target

## Build, Lint & Test Commands

### Development
```bash
bun dev              # Start development server (http://localhost:3000)
npm run dev          # Alternative with npm
```

### Production Build
```bash
bun run build        # Create production build
bun start            # Start production server
```

### Linting
```bash
bun run lint         # Run ESLint with Next.js config
```

### Running Tests
**Note**: Currently no test framework is configured. If tests are needed, consider:
- **Jest + React Testing Library**: For unit/integration tests
- **Playwright/Cypress**: For E2E tests

To run a single test file (once testing is set up):
```bash
# Jest example
npm test -- path/to/test.test.tsx

# Vitest example
npm test path/to/test.test.tsx
```

## Project Structure

```
my-profile/
├── src/
│   └── app/              # Next.js App Router pages
│       ├── layout.tsx    # Root layout with metadata
│       ├── page.tsx      # Home page
│       └── globals.css   # Global styles with Tailwind
├── public/               # Static assets
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Code Style Guidelines

### TypeScript Configuration

- **Strict mode**: Enabled (`strict: true`)
- **Target**: ES2017
- **Module**: ESNext with bundler resolution
- **JSX**: React JSX transform
- **Path aliases**: `@/*` maps to `./src/*`

### Import Conventions

1. **Order of imports**:
   ```typescript
   // 1. Type imports (if needed separately)
   import type { Metadata } from 'next';
   
   // 2. External dependencies
   import Image from 'next/image';
   import { Geist, Geist_Mono } from 'next/font/google';
   
   // 3. Internal imports (use path aliases)
   import './globals.css';
   import { Component } from '@/components/Component';
   ```

2. **Use type imports for types**:
   ```typescript
   import type { Metadata } from 'next';
   ```

3. **Use path aliases**: Prefer `@/` over relative paths
   ```typescript
   // Good
   import { Button } from '@/components/ui/Button';
   
   // Avoid
   import { Button } from '../../components/ui/Button';
   ```

### Naming Conventions

- **Files**: Use kebab-case for regular files, PascalCase for React components
  - `page.tsx`, `layout.tsx`, `globals.css`
  - `UserProfile.tsx`, `NavBar.tsx`
  
- **Components**: PascalCase
  ```typescript
  export default function HomePage() { }
  export function UserProfile() { }
  ```

- **Variables/Functions**: camelCase
  ```typescript
  const geistSans = Geist({ ... });
  const userName = 'John';
  ```

- **Constants**: UPPER_SNAKE_CASE for true constants
  ```typescript
  const MAX_RETRIES = 3;
  const API_BASE_URL = 'https://api.example.com';
  ```

- **Types/Interfaces**: PascalCase
  ```typescript
  type UserProps = { ... };
  interface ProfileData { ... }
  ```

### React/Next.js Patterns

1. **Use App Router conventions**:
   - Server Components by default
   - Add `'use client'` only when needed (for hooks, event handlers)
   - Export metadata from layout/page files

2. **Metadata export pattern**:
   ```typescript
   export const metadata: Metadata = {
     title: 'Page Title',
     description: 'Page description',
     openGraph: { ... },
   };
   ```

3. **Component structure**:
   ```typescript
   export default function ComponentName({
     prop1,
     prop2,
   }: {
     prop1: string;
     prop2: number;
   }) {
     return (
       <div>
         {/* JSX */}
       </div>
     );
   }
   ```

4. **Use Readonly for props when appropriate**:
   ```typescript
   Readonly<{ children: React.ReactNode }>
   ```

### Tailwind CSS Guidelines

1. **Use utility classes**: Prefer Tailwind utilities over custom CSS
   ```tsx
   <div className="flex flex-col gap-4 items-center">
   ```

2. **Responsive design**: Use responsive prefixes
   ```tsx
   <div className="text-center sm:text-left p-4 sm:p-8">
   ```

3. **Use CSS variables for theme colors**:
   ```tsx
   className="bg-background text-foreground"
   ```

4. **Template literals for dynamic classes**:
   ```tsx
   className={`${geistSans.variable} antialiased`}
   ```

### Error Handling

- Use try-catch for async operations
- Provide meaningful error messages
- Consider error boundaries for React components
- Use TypeScript's strict null checks

```typescript
try {
  const data = await fetchData();
  return data;
} catch (error) {
  console.error('Failed to fetch data:', error);
  throw new Error('Unable to load user data');
}
```

### Type Safety

- **Avoid `any`**: Use proper types or `unknown`
- **Use type inference**: Let TypeScript infer when obvious
- **Define prop types**: Always type component props
- **Use generics**: For reusable components/functions

```typescript
// Good
function getUserById<T extends User>(id: string): T | null { }

// Avoid
function getUserById(id: any): any { }
```

## Performance Best Practices

1. **Use Next.js Image component**: For optimized images
   ```tsx
   import Image from 'next/image';
   <Image src="/photo.jpg" alt="Description" width={500} height={300} />
   ```

2. **Dynamic imports**: For code splitting
   ```tsx
   const DynamicComponent = dynamic(() => import('@/components/Heavy'));
   ```

3. **Server Components**: Keep components server-side when possible

4. **Font optimization**: Use `next/font` (already configured with Geist fonts)

## Git Workflow

- Write clear, descriptive commit messages
- Follow conventional commits format: `feat:`, `fix:`, `docs:`, `refactor:`, etc.
- Keep commits focused and atomic
- Review changes before committing

## Environment Variables

- Store sensitive data in `.env.local` (git-ignored)
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Never commit `.env*.local` files

## SEO Considerations

This project uses SEO Master optimization. Always:
- Define metadata in layout/page files
- Use semantic HTML
- Include alt text for images
- Configure OpenGraph data for social sharing

## Additional Notes

- **Bun is preferred** over npm for faster installs
- **Strict TypeScript** is enabled - ensure type safety
- **No testing framework** currently configured
- **ESLint** uses Next.js config (`eslint-config-next`)
- **CSS**: Tailwind v4+ with native `@import` syntax

---

**Last Updated**: Jan 31, 2026  
**Project**: my-profile v0.1.0
