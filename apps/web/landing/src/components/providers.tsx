"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create QueryClient outside component to ensure singleton pattern
// This prevents creating multiple instances on re-renders
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000, // Consider data fresh for 30 seconds
      refetchOnWindowFocus: false, // Don't refetch on window focus for this use case
      retry: 1, // Retry once on failure
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
