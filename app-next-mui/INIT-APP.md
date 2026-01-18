# App Initialization Steps: app-next-mui (Material-UI)

This document outlines the steps taken to create this Next.js app with Material-UI (MUI).

## 1. Create Next.js App

```bash
pnpm create next-app@latest app-next-mui \
  --ts \
  --eslint \
  --app \
  --no-tailwind \
  --import-alias "@/*" \
  --turbopack \
  --no-src-dir \
  --yes
```

## 2. Install Material-UI Dependencies

```bash
cd app-next-mui
pnpm add @mui/material @mui/icons-material @emotion/react @emotion/styled
```

## 3. Install Development Dependencies

```bash
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
Created a button component using MUI's `Button` and `Modal` components with:
- `useState` hook for modal state
- Material-UI styling
- Props interface for customization

### app/mytest/page.tsx
Created a page component that:
- Uses 'use client' directive
- Renders the HelloButton component
- Centers the button using MUI's Container and Box

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
app-next-mui/
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

- **UI Library**: Material-UI (MUI) v7
- **Styling**: Emotion CSS-in-JS
- **Component**: Button that opens a modal with "hello!" message
- **Testing**: Jest + Testing Library + Playwright
- **Documentation**: Storybook
- **Code Quality**: ESLint + Prettier

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
