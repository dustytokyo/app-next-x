# App Initialization Steps: app-next-tg (TailGrids)

This document outlines the steps taken to create this Next.js app with TailGrids (Pure Tailwind CSS components).

## 1. Create Next.js App

```bash
pnpm create next-app@latest app-next-tg \
  --ts \
  --eslint \
  --app \
  --tailwind \
  --import-alias "@/*" \
  --turbopack \
  --no-src-dir \
  --yes
```

## 2. No Additional UI Library Installation

TailGrids uses pure Tailwind CSS, so no additional UI library packages are needed. Components are built using Tailwind utility classes directly.

## 3. Install Development Dependencies

```bash
cd app-next-tg
pnpm add -D \
  prettier \
  eslint-config-prettier \
  @testing-library/react \
  @testing-library/jest-dom \
  jest \
  jest-environment-jsdom \
  @storybook/react \
  @storybook/nextjs \
  storybook \
  @playwright/test
```

## 4. Initialize Storybook

```bash
pnpm dlx storybook@latest init --skip-install --yes
```

## 5. Create Configuration Files

### .prettierrc
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

### jest.config.js
```javascript
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
```

### jest.setup.js
```javascript
import '@testing-library/jest-dom';
```

## 6. Create Component Structure

### app/components/HelloButton.tsx
Created a fully custom button and modal component using:
- Pure Tailwind CSS utility classes
- TailGrids design patterns
- Custom modal with backdrop
- SVG close button icon
- `useState` hook for modal state
- Click handlers for open/close functionality

Key styling features:
- Primary blue color (#3056D3) for button
- Fixed overlay backdrop with opacity
- Centered modal with shadow
- Responsive width (max-w-md)
- Hover and transition effects

### app/mytest/page.tsx
Created a page component that:
- Uses 'use client' directive
- Renders the HelloButton component
- Centers content using Tailwind flexbox utilities
- Light gray background

## 7. Create Storybook Stories

### app/components/HelloButton.stories.tsx
- Default story with default label
- CustomLabel story demonstrating prop customization

## 8. Create Tests

### app/components/HelloButton.test.tsx
Jest unit tests covering:
- Default label rendering
- Custom label rendering
- Modal opening on button click
- Modal closing when clicking backdrop

### e2e/mytest.spec.ts
Playwright E2E test verifying:
- Button visibility and text
- Modal appearance on click

### playwright.config.ts
Configuration for Playwright with:
- Test directory: ./e2e
- Base URL: http://localhost:3000
- Web server auto-start

## 9. Update package.json Scripts

Added scripts:
- `"format": "prettier --write ."`
- `"test": "jest"`
- `"test:watch": "jest --watch"`
- `"test:e2e": "playwright test"`

## 10. File Structure

```
app-next-tg/
├── app/
│   ├── components/
│   │   ├── HelloButton.tsx
│   │   ├── HelloButton.stories.tsx
│   │   └── HelloButton.test.tsx
│   └── mytest/
│       └── page.tsx
├── e2e/
│   └── mytest.spec.ts
├── .storybook/
├── .prettierrc
├── jest.config.js
├── jest.setup.js
├── playwright.config.ts
└── package.json
```

## Key Features

- **UI Library**: None (Pure Tailwind CSS)
- **Styling**: Tailwind CSS v4
- **Component**: Custom button with custom modal using Tailwind classes
- **Design Pattern**: TailGrids-inspired styling
- **Testing**: Jest + Testing Library + Playwright
- **Documentation**: Storybook
- **Code Quality**: ESLint + Prettier

## Advantages of This Approach

- **Lightweight**: No additional UI library dependencies
- **Fully Customizable**: Complete control over styling
- **Minimal Bundle Size**: Only Tailwind CSS utilities used
- **No Compatibility Issues**: Pure CSS, no JavaScript library conflicts

## Running the App

```bash
# Development
pnpm dev

# Storybook
pnpm storybook

# Tests
pnpm test          # Unit tests
pnpm test:e2e      # E2E tests

# Code quality
pnpm lint
pnpm format
```
