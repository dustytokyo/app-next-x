# Next.js App Directory Structure Guide

A comprehensive guide for organizing a production-ready e-commerce Next.js application with features like authentication, products, shopping cart, search, and state management.

## Table of Contents

1. [Overview](#overview)
2. [Complete Directory Tree](#complete-directory-tree)
3. [Folder Naming Conventions](#folder-naming-conventions)
4. [Detailed Breakdown](#detailed-breakdown)
5. [Best Practices](#best-practices)

---

## Overview

This guide demonstrates how to structure a Next.js 14+ application using the App Router with:
- Authentication (login/signup)
- Product listing and details
- Search functionality
- Shopping cart
- State management (Zustand)
- Shared components and utilities

---

## Complete Directory Tree

```
app-ecommerce/
├── app/
│   ├── (auth)/                          # Route group - not in URL
│   │   ├── login/
│   │   │   └── page.tsx                 # /login
│   │   ├── signup/
│   │   │   └── page.tsx                 # /signup
│   │   ├── forgot-password/
│   │   │   └── page.tsx                 # /forgot-password
│   │   └── layout.tsx                   # Layout for auth pages
│   │
│   ├── (shop)/                          # Route group - not in URL
│   │   ├── products/
│   │   │   ├── page.tsx                 # /products (list)
│   │   │   └── [id]/
│   │   │       └── page.tsx             # /products/[id] (detail)
│   │   ├── search/
│   │   │   └── page.tsx                 # /search
│   │   ├── cart/
│   │   │   └── page.tsx                 # /cart
│   │   ├── checkout/
│   │   │   └── page.tsx                 # /checkout
│   │   └── layout.tsx                   # Layout for shop pages
│   │
│   ├── (account)/                       # Route group - user account
│   │   ├── profile/
│   │   │   └── page.tsx                 # /profile
│   │   ├── orders/
│   │   │   ├── page.tsx                 # /orders
│   │   │   └── [id]/
│   │   │       └── page.tsx             # /orders/[id]
│   │   └── layout.tsx                   # Layout for account pages
│   │
│   ├── api/                             # API routes
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── route.ts
│   │   │   └── logout/
│   │   │       └── route.ts
│   │   ├── products/
│   │   │   ├── route.ts                 # GET /api/products
│   │   │   └── [id]/
│   │   │       └── route.ts             # GET /api/products/[id]
│   │   └── cart/
│   │       └── route.ts
│   │
│   ├── _components/                     # Private: Shared components
│   │   ├── ui/                          # UI primitives
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.test.tsx
│   │   │   │   └── Button.stories.tsx
│   │   │   ├── Input/
│   │   │   ├── Modal/
│   │   │   ├── Card/
│   │   │   └── index.ts                 # Barrel export
│   │   │
│   │   ├── layout/                      # Layout components
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Header.test.tsx
│   │   │   │   └── Navigation.tsx
│   │   │   ├── Footer/
│   │   │   └── Sidebar/
│   │   │
│   │   ├── features/                    # Feature-specific components
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   ├── SignupForm.tsx
│   │   │   │   └── AuthGuard.tsx
│   │   │   ├── products/
│   │   │   │   ├── ProductCard.tsx
│   │   │   │   ├── ProductGrid.tsx
│   │   │   │   ├── ProductFilters.tsx
│   │   │   │   └── ProductDetails.tsx
│   │   │   ├── cart/
│   │   │   │   ├── CartItem.tsx
│   │   │   │   ├── CartSummary.tsx
│   │   │   │   └── CartDrawer.tsx
│   │   │   └── search/
│   │   │       ├── SearchBar.tsx
│   │   │       ├── SearchResults.tsx
│   │   │       └── SearchFilters.tsx
│   │   │
│   │   └── shared/                      # Truly shared components
│   │       ├── LoadingSpinner.tsx
│   │       ├── EmptyState.tsx
│   │       └── ErrorBoundary.tsx
│   │
│   ├── _lib/                            # Private: Utility functions
│   │   ├── utils/
│   │   │   ├── format.ts                # formatCurrency, formatDate
│   │   │   ├── validation.ts            # Form validators
│   │   │   └── cn.ts                    # className utility
│   │   ├── api/
│   │   │   ├── client.ts                # API client setup
│   │   │   ├── products.ts              # Product API calls
│   │   │   ├── auth.ts                  # Auth API calls
│   │   │   └── cart.ts                  # Cart API calls
│   │   ├── hooks/                       # Custom React hooks
│   │   │   ├── useAuth.ts
│   │   │   ├── useCart.ts
│   │   │   ├── useProducts.ts
│   │   │   ├── useDebounce.ts
│   │   │   └── useLocalStorage.ts
│   │   └── constants/
│   │       ├── routes.ts                # Route constants
│   │       ├── config.ts                # App config
│   │       └── messages.ts              # UI messages
│   │
│   ├── _store/                          # Private: State management
│   │   ├── index.ts                     # Root store setup
│   │   ├── slices/
│   │   │   ├── authSlice.ts             # Auth state (Zustand)
│   │   │   ├── cartSlice.ts             # Cart state (Zustand)
│   │   │   ├── productsSlice.ts         # Products state (Zustand)
│   │   │   └── uiSlice.ts               # UI state (modals, etc.)
│   │   └── types.ts                     # Store type definitions
│   │
│   ├── _types/                          # Private: TypeScript types
│   │   ├── product.ts
│   │   ├── user.ts
│   │   ├── cart.ts
│   │   ├── order.ts
│   │   └── api.ts
│   │
│   ├── _actions/                        # Private: Server actions
│   │   ├── auth.ts                      # Authentication actions
│   │   ├── products.ts                  # Product actions
│   │   └── cart.ts                      # Cart actions
│   │
│   ├── layout.tsx                       # Root layout
│   ├── page.tsx                         # Home page (/)
│   ├── globals.css                      # Global styles
│   ├── error.tsx                        # Error boundary
│   ├── loading.tsx                      # Loading UI
│   └── not-found.tsx                    # 404 page
│
├── public/
│   ├── images/
│   │   ├── products/
│   │   ├── logos/
│   │   └── placeholders/
│   ├── icons/
│   └── fonts/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│       ├── auth.spec.ts
│       ├── products.spec.ts
│       └── cart.spec.ts
│
├── docs/
│   ├── api.md
│   ├── components.md
│   └── architecture.md
│
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   └── manager.ts
│
├── scripts/
│   ├── seed-db.ts
│   └── generate-types.ts
│
├── .env.local                           # Environment variables
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── jest.config.js
├── playwright.config.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Folder Naming Conventions

### 1. **Underscore Prefix (`_folder`)**

**Purpose**: Marks folders as **private** - excluded from Next.js routing system.

**When to use**:
- ✅ Shared components that aren't pages: `_components/`
- ✅ Utilities and helpers: `_lib/`, `_utils/`
- ✅ State management: `_store/`
- ✅ Type definitions: `_types/`
- ✅ Server actions: `_actions/`
- ✅ Any folder that should NOT become a route

**Example**:
```
app/
├── _components/       # ✅ Private - not a route
├── _lib/             # ✅ Private - not a route
├── products/         # ❌ Public - becomes /products route
```

### 2. **Parentheses `(folder)`**

**Purpose**: **Route Groups** - organizes routes without affecting URL structure.

**When to use**:
- ✅ Grouping related pages: `(auth)/`, `(shop)/`, `(account)/`
- ✅ Applying different layouts to route groups
- ✅ Organizing pages logically without changing URLs

**Example**:
```
app/
├── (auth)/
│   ├── login/
│   │   └── page.tsx      # URL: /login (not /auth/login)
│   └── signup/
│       └── page.tsx      # URL: /signup (not /auth/signup)
```

### 3. **Brackets `[folder]`**

**Purpose**: **Dynamic Routes** - creates dynamic path segments.

**When to use**:
- ✅ Dynamic IDs: `[id]/`, `[slug]/`
- ✅ Catch-all routes: `[...slug]/`
- ✅ Optional catch-all: `[[...slug]]/`

**Example**:
```
app/
├── products/
│   └── [id]/
│       └── page.tsx      # URL: /products/123, /products/456
```

### 4. **No Prefix (Regular Folders)**

**Purpose**: **Public Routes** - become part of the URL.

**When to use**:
- ✅ Actual page routes: `products/`, `cart/`, `search/`
- ✅ API routes: `api/`

---

## Detailed Breakdown

### `_components/` - Component Organization

```
_components/
├── ui/                    # Reusable UI primitives (design system)
│   ├── Button/           # Atomic components
│   ├── Input/
│   └── Modal/
│
├── layout/               # Layout-specific components
│   ├── Header/
│   └── Footer/
│
├── features/             # Feature-specific components
│   ├── auth/            # Auth-related components only
│   ├── products/        # Product-related components only
│   └── cart/            # Cart-related components only
│
└── shared/              # Truly shared across features
    └── LoadingSpinner.tsx
```

**Rationale**:
- **ui/**: Pure UI components, no business logic
- **layout/**: Components for page structure
- **features/**: Domain-specific components (co-located with their domain)
- **shared/**: Generic components used everywhere

### `_lib/` - Libraries and Utilities

```
_lib/
├── utils/               # Pure utility functions
│   ├── format.ts       # formatCurrency, formatDate
│   ├── validation.ts   # Email, password validators
│   └── cn.ts          # className merger (clsx + tailwind-merge)
│
├── api/                # API client functions
│   ├── client.ts      # Axios/fetch setup with interceptors
│   ├── products.ts    # getProducts, getProduct, etc.
│   └── auth.ts        # login, logout, refresh
│
├── hooks/              # Custom React hooks
│   ├── useAuth.ts     # const { user, login, logout } = useAuth()
│   ├── useCart.ts     # const { items, addItem } = useCart()
│   └── useDebounce.ts # const debouncedValue = useDebounce(value, 500)
│
└── constants/          # App-wide constants
    ├── routes.ts      # export const ROUTES = { HOME: '/', ... }
    └── config.ts      # export const APP_NAME = 'My Shop'
```

**Rationale**:
- Clear separation between utilities, API calls, hooks, and constants
- Easy to find and import: `import { formatCurrency } from '@/_lib/utils/format'`

### `_store/` - State Management (Zustand Example)

```
_store/
├── index.ts            # Root store combining all slices
├── slices/
│   ├── authSlice.ts   # Authentication state
│   ├── cartSlice.ts   # Shopping cart state
│   └── uiSlice.ts     # UI state (modals, sidebars)
└── types.ts           # Store type definitions
```

**authSlice.ts** (Example):
```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: async (email, password) => {
        // Login logic
      },
      logout: () => set({ user: null, token: null }),
    }),
    { name: 'auth-storage' }
  )
);
```

**cartSlice.ts** (Example):
```typescript
import { create } from 'zustand';

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (product) => {
    // Add logic
  },
  removeItem: (id) => {
    // Remove logic
  },
  updateQuantity: (id, quantity) => {
    // Update logic
  },
  clearCart: () => set({ items: [] }),
  total: 0, // computed value
}));
```

### `_types/` - TypeScript Definitions

```
_types/
├── product.ts          # Product, Category, Review types
├── user.ts            # User, Profile types
├── cart.ts            # CartItem, Cart types
├── order.ts           # Order, OrderItem types
└── api.ts             # API response/request types
```

**product.ts** (Example):
```typescript
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: Category;
  stock: number;
  rating: number;
  reviews: Review[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}
```

### `_actions/` - Server Actions

```
_actions/
├── auth.ts            # 'use server' auth actions
├── products.ts        # 'use server' product actions
└── cart.ts           # 'use server' cart actions
```

**auth.ts** (Example):
```typescript
'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Authentication logic
  const token = await authenticate(email, password);

  cookies().set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });

  redirect('/');
}

export async function logout() {
  cookies().delete('auth-token');
  redirect('/login');
}
```

### Route Groups - `(auth)`, `(shop)`, `(account)`

**Benefits**:
1. **Logical organization** without affecting URLs
2. **Different layouts** per group
3. **Shared loading/error states** per group

**Example Layout Structure**:

```typescript
// app/(auth)/layout.tsx
export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        {children}
      </div>
    </div>
  );
}

// app/(shop)/layout.tsx
export default function ShopLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

---

## Best Practices

### 1. **Co-location**
Place files close to where they're used:
```
_components/
└── features/
    └── products/
        ├── ProductCard.tsx
        ├── ProductCard.test.tsx      # Test next to component
        └── ProductCard.stories.tsx   # Story next to component
```

### 2. **Barrel Exports**
Use `index.ts` for cleaner imports:

```typescript
// _components/ui/index.ts
export { Button } from './Button/Button';
export { Input } from './Input/Input';
export { Modal } from './Modal/Modal';

// Usage
import { Button, Input, Modal } from '@/_components/ui';
```

### 3. **Path Aliases**
Configure in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./app/*"],
      "@/components/*": ["./app/_components/*"],
      "@/lib/*": ["./app/_lib/*"],
      "@/store/*": ["./app/_store/*"],
      "@/types/*": ["./app/_types/*"]
    }
  }
}
```

**Usage**:
```typescript
import { ProductCard } from '@/components/features/products/ProductCard';
import { useCartStore } from '@/store/slices/cartSlice';
import { formatCurrency } from '@/lib/utils/format';
import type { Product } from '@/types/product';
```

### 4. **Feature-based vs Layer-based**

**Bad** (Layer-based - hard to scale):
```
_components/
├── buttons/
├── forms/
├── cards/
└── modals/
```

**Good** (Feature-based - scalable):
```
_components/
├── ui/              # Generic UI
└── features/
    ├── auth/        # All auth components
    ├── products/    # All product components
    └── cart/        # All cart components
```

### 5. **Environment Variables**

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_STRIPE_KEY=pk_test_...
DATABASE_URL=postgresql://...
AUTH_SECRET=your-secret-key
```

### 6. **API Route Organization**

```
app/api/
├── auth/
│   ├── login/route.ts          # POST /api/auth/login
│   ├── logout/route.ts         # POST /api/auth/logout
│   └── me/route.ts             # GET /api/auth/me
├── products/
│   ├── route.ts                # GET /api/products
│   ├── [id]/route.ts           # GET /api/products/[id]
│   └── search/route.ts         # GET /api/products/search
└── cart/
    ├── route.ts                # GET /api/cart
    └── items/route.ts          # POST /api/cart/items
```

---

## Summary: When to Use What

| Pattern | Purpose | Example | URL Result |
|---------|---------|---------|------------|
| `_folder` | Private, not a route | `_components/` | N/A (not routed) |
| `(folder)` | Route group | `(auth)/login` | `/login` |
| `[folder]` | Dynamic route | `products/[id]` | `/products/123` |
| `folder` | Public route | `products/` | `/products` |

**Quick Decision Tree**:

1. **Is it a page/route?**
   - No → Use `_folder` (e.g., `_components/`, `_lib/`)
   - Yes → Continue

2. **Does the folder name appear in the URL?**
   - No → Use `(folder)` for grouping (e.g., `(auth)/`)
   - Yes → Continue

3. **Is it a dynamic segment?**
   - Yes → Use `[folder]` (e.g., `[id]/`)
   - No → Use regular `folder`

---

## Additional Tips

### Testing Organization

```
tests/
├── unit/
│   ├── components/
│   └── utils/
├── integration/
│   └── api/
└── e2e/
    ├── auth.spec.ts
    ├── shopping.spec.ts
    └── checkout.spec.ts
```

### Documentation

```
docs/
├── api.md              # API documentation
├── components.md       # Component library docs
├── state.md           # State management guide
└── deployment.md      # Deployment guide
```

### Scripts

```
scripts/
├── seed-db.ts         # Seed database with test data
├── generate-types.ts  # Generate types from API
└── cleanup.ts         # Cleanup old files
```

---

## Example Implementation

Here's how you might use this structure in a real component:

```typescript
// app/(shop)/products/page.tsx
'use client';

import { ProductGrid } from '@/components/features/products/ProductGrid';
import { SearchBar } from '@/components/features/search/SearchBar';
import { useProducts } from '@/lib/hooks/useProducts';
import { useCartStore } from '@/store/slices/cartSlice';
import type { Product } from '@/types/product';

export default function ProductsPage() {
  const { products, loading } = useProducts();
  const addToCart = useCartStore((state) => state.addItem);

  return (
    <div>
      <SearchBar />
      <ProductGrid
        products={products}
        onAddToCart={addToCart}
        loading={loading}
      />
    </div>
  );
}
```

This structure scales well from small projects to large enterprise applications while maintaining clarity and organization.
