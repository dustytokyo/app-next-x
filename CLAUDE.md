# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **UI library comparison repository** containing four identical Next.js applications, each implementing the same features using different UI libraries. The purpose is to compare and evaluate different UI libraries in a real Next.js environment.

### The Four Apps

1. **app-next-mui** - Material-UI (MUI) with Emotion styling
2. **app-next-mt** - Material Tailwind (Tailwind-based Material Design)
3. **app-next-tg** - TailGrids (Pure Tailwind CSS components)
4. **app-next-fb** - Flowbite (Vercel's Tailwind component library)

Each app implements:
- A `/mytest` route with a button that opens a modal displaying "hello!"
- Storybook for component documentation
- Jest unit tests
- Playwright E2E tests
- ESLint and Prettier configuration

## Common Commands

All apps share the same command structure. Navigate to any app directory first:

```bash
cd app-next-[mui|mt|tg|fb]
```

### Development
```bash
pnpm dev              # Start dev server on localhost:3000
pnpm build            # Production build
pnpm start            # Start production server
```

### Testing
```bash
pnpm test             # Run Jest unit tests
pnpm test:watch       # Run Jest in watch mode
pnpm test:e2e         # Run Playwright E2E tests
```

### Code Quality
```bash
pnpm lint             # Run ESLint
pnpm format           # Format code with Prettier
```

### Storybook
```bash
pnpm storybook        # Start Storybook on localhost:6006
pnpm build-storybook  # Build static Storybook
```

## Architecture

### Technology Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Package Manager**: pnpm (workspace-aware)
- **Styling**: Varies by app (MUI/Emotion, Tailwind CSS v4)
- **Testing**: Jest + React Testing Library + Playwright
- **Documentation**: Storybook 10
- **Code Quality**: ESLint 9 + Prettier 3

### Common Directory Structure

Each app follows this structure:

```
app-next-*/
├── app/
│   ├── components/
│   │   ├── HelloButton.tsx          # Main button component
│   │   ├── HelloButton.stories.tsx  # Storybook stories
│   │   └── HelloButton.test.tsx     # Jest unit tests
│   ├── mytest/
│   │   └── page.tsx                 # /mytest route
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Home page (/)
│   └── globals.css                  # Global styles
├── e2e/
│   └── mytest.spec.ts               # Playwright E2E tests
├── .storybook/                      # Storybook configuration
├── jest.config.js                   # Jest configuration
├── jest.setup.js                    # Jest setup file
├── playwright.config.ts             # Playwright configuration
├── .prettierrc                      # Prettier configuration
├── INIT-APP.md                      # Detailed setup instructions
└── package.json
```

### Key Implementation Details

#### HelloButton Component Pattern
All apps follow the same component pattern:
- Client component (`'use client'` directive)
- Uses `useState` for modal open/close state
- Accepts optional `label` prop (default: "Open Modal")
- Modal displays "hello!" message
- Includes `data-testid` attributes for testing

#### Testing Strategy
- **Unit Tests**: Test button rendering, props, and modal opening
- **E2E Tests**: Navigate to `/mytest`, click button, verify modal appears
- Both use `data-testid` attributes for reliable element selection

#### Storybook Integration
Each component has stories demonstrating:
- Default state
- Custom label prop
- Auto-generated docs via `tags: ['autodocs']`

## UI Library-Specific Notes

### app-next-mui (Material-UI)
- Uses `@mui/material` v7 with `@emotion/react` and `@emotion/styled`
- Components: `Button`, `Modal`, `Box`, `Typography`, `Container`
- Styling via `sx` prop and `style` object
- No Tailwind CSS

### app-next-mt (Material Tailwind)
- Uses `@material-tailwind/react` v2
- **Important**: Has peer dependency warnings with React 19 (expects 16-18)
  - Works fine despite warnings
- Components: `Button`, `Dialog`, `DialogBody`
- Tailwind CSS v4 for utilities
- Styling via Tailwind classes and component props

### app-next-tg (TailGrids)
- **No additional UI library** - pure Tailwind CSS
- Fully custom components built with Tailwind utilities
- Modal implementation uses fixed overlay with conditional rendering
- Most lightweight option
- Custom SVG close button icon
- Color scheme: Primary blue `#3056D3`

### app-next-fb (Flowbite)
- Uses `flowbite` and `flowbite-react`
- Components: `Button`, `Modal`, `Modal.Body`
- Tailwind CSS v4 for utilities
- Official Vercel integration
- Clean, modern design out of the box

## Development Workflow

### Adding New Components
1. Create component in `app/components/[ComponentName].tsx`
2. Add tests in `app/components/[ComponentName].test.tsx`
3. Add Storybook story in `app/components/[ComponentName].stories.tsx`
4. Follow the UI library's specific patterns for the app you're working in

### Running Multiple Apps
Each app runs on port 3000 by default. To run multiple simultaneously:
```bash
# Terminal 1
cd app-next-mui && pnpm dev

# Terminal 2
cd app-next-mt && pnpm dev --port 3001

# Terminal 3
cd app-next-tg && pnpm dev --port 3002

# Terminal 4
cd app-next-fb && pnpm dev --port 3003
```

### Running All Storybooks
Storybook runs on port 6006 by default:
```bash
# Specify different ports for each
cd app-next-mui && pnpm storybook          # 6006
cd app-next-mt && pnpm storybook -p 6007
cd app-next-tg && pnpm storybook -p 6008
cd app-next-fb && pnpm storybook -p 6009
```

## Important Files

### Root Level Documentation
- **OVERVIEW.md**: Original project specification and requirements
- **README.md**: High-level overview of all four apps
- **DIRECTORY-STRUCTURE-GUIDE.md**: Comprehensive guide for structuring larger Next.js apps with features like auth, products, cart, state management (Zustand)

### Per-App Documentation
- **INIT-APP.md**: Step-by-step recreation instructions for each app
  - Exact commands used to create the app
  - All dependencies installed
  - Configuration files with full content
  - Component structure explanation

## Configuration Files

### TypeScript (tsconfig.json)
All apps use standard Next.js TypeScript config with strict mode enabled.

### ESLint (eslint.config.mjs)
Uses Next.js ESLint config with Storybook plugin.

### Prettier (.prettierrc)
Standard configuration:
- Single quotes
- Semicolons
- 80 character line width
- 2 space indentation
- ES5 trailing commas

### Jest (jest.config.js)
- Uses `next/jest` for Next.js integration
- `jsdom` test environment
- Path alias support (`@/*`)
- Setup file imports `@testing-library/jest-dom`

### Playwright (playwright.config.ts)
- Tests in `./e2e` directory
- Base URL: `http://localhost:3000`
- Auto-starts dev server for testing
- Chromium only (can add more browsers)

## Testing Considerations

### Unit Tests
- Run individual app tests: `cd app-next-* && pnpm test`
- Watch mode helpful during development: `pnpm test:watch`
- Tests use Testing Library queries and `fireEvent`

### E2E Tests
- Playwright tests require dev server to be running
- Config auto-starts server, but can use existing: `reuseExistingServer: true`
- Tests use `data-testid` attributes for reliability
- Headless by default; use `pnpm dlx playwright test --headed` to watch

### Running All Tests Across Apps
From root directory:
```bash
# Run all unit tests
for app in app-next-*; do (cd $app && pnpm test); done

# Run all E2E tests
for app in app-next-*; do (cd $app && pnpm test:e2e); done
```

## Package Manager Notes

### pnpm Workspaces
While this repository has a `pnpm-workspace.yaml` in each app (auto-generated by create-next-app), this is NOT a monorepo setup. Each app is independent.

### Dependency Installation
Always run `pnpm install` from within the app directory, not the root.

### Lock Files
Each app has its own `pnpm-lock.yaml`. Keep these in sync with package.json.

## Common Issues and Solutions

### Port Already in Use
If port 3000 is busy:
```bash
pnpm dev --port 3001
```

### Material Tailwind Peer Dependency Warnings
The warnings about React 19 compatibility can be safely ignored. Material Tailwind works correctly with React 19 despite the warning.

### Storybook Build Warnings
Storybook may show warnings about ignored build scripts (`esbuild`, `core-js-pure`). These can be safely ignored or resolved with `pnpm approve-builds` if needed.

### Test Failures After Changes
If tests fail after modifying components:
1. Check `data-testid` attributes are still present
2. Verify modal/dialog still renders with expected structure
3. Update tests to match new component behavior

## Extending These Apps

### Adding New Pages
1. Create new folder in `app/` directory: `app/newpage/`
2. Add `page.tsx` in that folder
3. Route automatically becomes `/newpage`

### Adding State Management
See **DIRECTORY-STRUCTURE-GUIDE.md** for comprehensive examples using Zustand, including:
- Store organization (`_store/slices/`)
- Authentication state
- Shopping cart state
- UI state management

### Adding More UI Components
Follow the existing pattern:
1. Component file with TypeScript interface for props
2. Test file with unit tests
3. Storybook story file with examples
4. Use the appropriate UI library's components for the app

### Converting to Full E-commerce App
Refer to **DIRECTORY-STRUCTURE-GUIDE.md** which includes:
- Complete directory structure for auth, products, cart, checkout
- Route group patterns `(auth)`, `(shop)`, `(account)`
- Private folder patterns `_components/`, `_lib/`, `_store/`
- Server actions in `_actions/`
- Type definitions in `_types/`

## Performance Considerations

### Bundle Size Comparison
The apps have different bundle sizes due to UI library overhead:
- **app-next-tg**: Smallest (Tailwind CSS only)
- **app-next-fb**: Small-medium (Flowbite + Tailwind)
- **app-next-mt**: Medium (Material Tailwind + Tailwind)
- **app-next-mui**: Largest (MUI + Emotion)

Use Next.js bundle analyzer to compare:
```bash
pnpm add -D @next/bundle-analyzer
# Configure in next.config.ts
pnpm build
```

### Tree Shaking
All UI libraries support tree shaking. Always import specific components:
```typescript
// Good
import { Button } from '@mui/material';

// Bad
import * as MUI from '@mui/material';
```

## Version Information

As of creation (January 2026):
- Next.js: 16.1.3
- React: 19.2.3
- TypeScript: 5.9.3
- Tailwind CSS: 4.1.18 (where applicable)
- Material-UI: 7.3.7 (app-next-mui)
- Material Tailwind: 2.1.10 (app-next-mt)
- Flowbite: 4.0.1 (app-next-fb)
- Storybook: 10.1.11
- Jest: 30.2.0
- Playwright: 1.57.0

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/)
- [Material Tailwind Documentation](https://www.material-tailwind.com/)
- [TailGrids Components](https://tailgrids.com/)
- [Flowbite Documentation](https://flowbite.com/)
- [Storybook Documentation](https://storybook.js.org/)
