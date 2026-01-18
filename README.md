# Next.js UI Library Comparison Apps

This repository contains four Next.js applications, each using a different UI library for comparison purposes.

## Apps Overview

### 1. app-next-mui
- **UI Library**: Google's Material-UI (MUI)
- **Port**: 3000 (default)
- **Path**: `/mytest`

### 2. app-next-mt
- **UI Library**: Material Tailwind
- **Port**: 3000 (default)
- **Path**: `/mytest`

### 3. app-next-tg
- **UI Library**: TailGrids (Pure Tailwind CSS components)
- **Port**: 3000 (default)
- **Path**: `/mytest`

### 4. app-next-fb
- **UI Library**: Flowbite (Vercel)
- **Port**: 3000 (default)
- **Path**: `/mytest`

## Common Features

Each app includes:
- A `/mytest` route with a styled button
- Modal dialog that displays "hello!" when button is clicked
- Storybook integration for the button component
- ESLint and Prettier configuration
- Jest unit tests
- Playwright E2E tests

## Getting Started

### Running an App

Navigate to any app directory and run:

```bash
cd app-next-[mui|mt|tg|fb]
pnpm install  # If needed
pnpm dev
```

Then visit `http://localhost:3000/mytest`

### Running Storybook

```bash
cd app-next-[mui|mt|tg|fb]
pnpm storybook
```

Storybook will be available at `http://localhost:6006`

### Running Tests

**Unit Tests (Jest):**
```bash
pnpm test
```

**E2E Tests (Playwright):**
```bash
pnpm test:e2e
```

### Code Quality

**Linting:**
```bash
pnpm lint
```

**Formatting:**
```bash
pnpm format
```

## Project Structure

Each app follows the Next.js 16 app directory structure:

```
app-next-*/
├── app/
│   ├── components/
│   │   ├── HelloButton.tsx       # Button component with modal
│   │   ├── HelloButton.stories.tsx  # Storybook stories
│   │   └── HelloButton.test.tsx  # Jest unit tests
│   ├── mytest/
│   │   └── page.tsx              # /mytest route
│   └── globals.css
├── e2e/
│   └── mytest.spec.ts            # Playwright E2E tests
├── .storybook/                   # Storybook configuration
├── jest.config.js                # Jest configuration
├── playwright.config.ts          # Playwright configuration
├── .prettierrc                   # Prettier configuration
└── package.json
```

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Testing**: Jest + Testing Library + Playwright
- **Documentation**: Storybook
- **Code Quality**: ESLint + Prettier

## UI Libraries Comparison

### MUI (app-next-mui)
- Comprehensive component library
- Material Design implementation
- Emotion for styling
- Large bundle size but feature-rich

### Material Tailwind (app-next-mt)
- Tailwind CSS-based components
- Material Design aesthetic
- Lighter than MUI
- Note: Has peer dependency warnings with React 19

### TailGrids (app-next-tg)
- Pure Tailwind CSS components
- Highly customizable
- Minimal dependencies
- Lightweight

### Flowbite (app-next-fb)
- Tailwind CSS-based components
- Clean, modern design
- Good documentation
- Official Vercel integration
