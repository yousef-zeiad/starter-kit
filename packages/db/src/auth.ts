/**
 * Authentication utilities for Supabase Auth
 */

import type { SupabaseClient, User, Session } from "@supabase/supabase-js";
import type { Database } from "./types";

export type SupabaseClientType = SupabaseClient<Database>;

/**
 * Auth helper functions
 */
export const auth = {
  /**
   * Sign up with email and password
   */
  signUp: async (
    client: SupabaseClientType,
    email: string,
    password: string,
    metadata?: {
      full_name?: string;
      phone?: string;
    },
  ) => {
    return await client.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
      },
    });
  },

  /**
   * Sign in with email and password
   */
  signIn: async (
    client: SupabaseClientType,
    email: string,
    password: string,
  ) => {
    return await client.auth.signInWithPassword({
      email,
      password,
    });
  },

  /**
   * Sign in with OAuth provider
   */
  signInWithOAuth: async (
    client: SupabaseClientType,
    provider: "google" | "apple" | "facebook" | "discord",
    redirectTo?: string,
  ) => {
    return await client.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo,
      },
    });
  },

  /**
   * Sign out
   */
  signOut: async (client: SupabaseClientType) => {
    return await client.auth.signOut();
  },

  /**
   * Get current session
   */
  getSession: async (client: SupabaseClientType) => {
    return await client.auth.getSession();
  },

  /**
   * Get current user
   */
  getUser: async (client: SupabaseClientType) => {
    return await client.auth.getUser();
  },

  /**
   * Send password reset email
   */
  resetPassword: async (client: SupabaseClientType, email: string) => {
    return await client.auth.resetPasswordForEmail(email);
  },

  /**
   * Update user password
   */
  updatePassword: async (client: SupabaseClientType, newPassword: string) => {
    return await client.auth.updateUser({
      password: newPassword,
    });
  },

  /**
   * Update user metadata
   */
  updateUser: async (
    client: SupabaseClientType,
    updates: {
      email?: string;
      password?: string;
      data?: Record<string, unknown>;
    },
  ) => {
    return await client.auth.updateUser(updates);
  },

  /**
   * Listen to auth state changes
   */
  onAuthStateChange: (
    client: SupabaseClientType,
    callback: (event: string, session: Session | null) => void,
  ) => {
    return client.auth.onAuthStateChange(callback);
  },
};

/**
 * Type guards and helpers
 */
export const isAuthenticated = (user: User | null): user is User => {
  return user !== null;
};

export const hasRole = (
  user: User | null,
  role: Database["public"]["Enums"]["user_role"],
): boolean => {
  if (!user) return false;
  return user.user_metadata?.role === role;
};

export const isSubscriber = (
  user: User | null,
  tier: Database["public"]["Enums"]["subscription_tier"],
): boolean => {
  if (!user) return false;
  return user.user_metadata?.subscription_tier === tier;
};
