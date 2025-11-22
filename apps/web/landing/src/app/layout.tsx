import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { cn } from "@trading-platform/ui";
import { ThemeProvider } from "@trading-platform/ui/theme";
import { Toaster } from "@trading-platform/ui/toast";

import { Providers } from "~/components/providers";
import { env } from "~/env";

import "~/app/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://example.com"
      : "http://localhost:3000",
  ),
  title: "Example",
  description: "Example",
  openGraph: {
    title: "Example",
    description: "Example",
    url: "https://example.com",
    siteName: "Example",
  },
  twitter: {
    card: "summary_large_image",
    site: "@example",
    creator: "@example",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "bg-background text-foreground min-h-screen font-sans antialiased",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <Providers>
          <ThemeProvider>
            {children}

            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
