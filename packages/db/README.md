# @trading-platform/db

Shared database utilities and Supabase client for the trading-platform monorepo.

## Usage

### Server-side (Admin Client)

For use in Next.js API routes, server components, or any server-side code that needs full database access:

```typescript
import { supabaseAdmin } from "@trading-platform/db";

// This client bypasses Row Level Security and has full access
const { data, error } = await supabaseAdmin.from("restaurants").select("*");
```

### Client-side (Browser)

For use in Next.js client components or browser-based code:

```typescript
import { createBrowserClient } from "@trading-platform/db/client";

const supabase = createBrowserClient();

// This client respects Row Level Security policies
const { data, error } = await supabase.from("restaurants").select("*");
```

### Mobile (React Native/Expo)

For use in React Native/Expo mobile apps:

```typescript
import { createMobileClient } from "@trading-platform/db/client";

const supabase = createMobileClient();

// Don't forget to set up expo-secure-store for session persistence
const { data, error } = await supabase.from("restaurants").select("*");
```

## Type Generation

To generate TypeScript types from your Supabase database schema:

```bash
pnpm db:types
```

This will update `src/types.ts` with your current database schema.

## Environment Variables

Required environment variables (add to your `.env` file):

```env
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
```
