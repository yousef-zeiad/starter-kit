import type { Database } from "@trading-platform/db/types";
import * as SecureStore from "expo-secure-store";
import { createClient } from "@supabase/supabase-js";
import { createExpoStorageAdapter } from "@trading-platform/db/expo-storage";

// Create storage adapter for Supabase
const storage = createExpoStorageAdapter(SecureStore);

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Please check your .env file.",
  );
}

// Create Supabase client for React Native/Expo
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
