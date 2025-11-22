import type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";

import type { Database } from "./types";

/**
 * Get environment variables with proper validation
 */
function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

let supabaseAdminClient: SupabaseClient<Database> | null = null;

function initSupabaseAdmin(): SupabaseClient<Database> {
  if (supabaseAdminClient) {
    return supabaseAdminClient;
  }

  supabaseAdminClient = createClient<Database>(
    getEnvVar("NEXT_PUBLIC_SUPABASE_URL"),
    getEnvVar("SUPABASE_SERVICE_ROLE_KEY"),
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );

  return supabaseAdminClient;
}

/**
 * Supabase client for server-side usage (Next.js API routes, server components, etc.)
 * Uses the service role key for admin operations.
 *
 * Lazily instantiated to avoid requiring the service role key during build time
 * for applications that don't need it.
 */
export const supabaseAdmin = new Proxy({} as SupabaseClient<Database>, {
  get(_target, prop, receiver) {
    const client = initSupabaseAdmin() as SupabaseClient<Database>;
    const value = Reflect.get(client, prop, receiver);
    if (typeof value === "function") {
      return value.bind(client);
    }
    return value;
  },
}) as SupabaseClient<Database>;

export function getSupabaseAdminClient(): SupabaseClient<Database> {
  return initSupabaseAdmin();
}

/**
 * Supabase client for client-side usage (browser, React Native)
 * Uses the anon key which respects Row Level Security policies
 */
export function createBrowserClient() {
  return createClient<Database>(
    getEnvVar("NEXT_PUBLIC_SUPABASE_URL"),
    getEnvVar("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    },
  );
}

/**
 * Create a Supabase client for React Native/Expo
 * This should be used in mobile apps with expo-secure-store for session persistence
 */
export function createMobileClient() {
  return createClient<Database>(
    getEnvVar("NEXT_PUBLIC_SUPABASE_URL"),
    getEnvVar("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        // Note: You'll need to implement custom storage using expo-secure-store
        // storage: customExpoSecureStoreAdapter,
      },
    },
  );
}
