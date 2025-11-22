/**
 * Expo SecureStore adapter for Supabase Auth
 * This file should only be imported in React Native/Expo apps
 */

/**
 * Create a storage adapter for Supabase Auth using Expo SecureStore
 *
 * Usage in your Expo app:
 * ```typescript
 * import * as SecureStore from 'expo-secure-store';
 * import { createExpoStorageAdapter } from '@trading-platform/db/expo-storage';
 *
 * const storage = createExpoStorageAdapter(SecureStore);
 * ```
 */
export function createExpoStorageAdapter(SecureStore: any) {
  return {
    getItem: async (key: string) => {
      try {
        return await SecureStore.getItemAsync(key);
      } catch (error) {
        console.error("Error getting item from SecureStore:", error);
        return null;
      }
    },
    setItem: async (key: string, value: string) => {
      try {
        await SecureStore.setItemAsync(key, value);
      } catch (error) {
        console.error("Error setting item in SecureStore:", error);
      }
    },
    removeItem: async (key: string) => {
      try {
        await SecureStore.deleteItemAsync(key);
      } catch (error) {
        console.error("Error removing item from SecureStore:", error);
      }
    },
  };
}
