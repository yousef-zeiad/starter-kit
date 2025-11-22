# trading-platform

A modern restaurant management platform built with a full-stack monorepo architecture.

## Overview

trading-platform is a comprehensive restaurant management system featuring web applications for landing pages, dashboards, and admin panels, as well as mobile applications for reservations and staff management. Built with [Turborepo](https://turborepo.org) for optimal development workflow and code sharing.

## Tech Stack

- **Framework**: Next.js 15 & Expo (React Native)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & NativeWind
- **UI Components**: shadcn/ui
- **State Management**: TanStack Query
- **Monorepo**: Turborepo + pnpm workspaces

## Project Structure

```text
.github
  └─ workflows
      └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ mobile
  │
  │   └─ trading-app        # trading management app
  │       └─ Similar stack to reservation-app
  └─ web
      ├─ landing          # Marketing landing page
      ├─ dashboard        # Restaurant dashboard
      └─ admin            # Admin panel
          └─ All using Next.js 15 + React 19 + Tailwind CSS
packages
  ├─ mobile-ui            # Shared mobile UI components
  ├─ mobile-utils         # Shared mobile utilities
  ├─ ui                   # Shared web UI components (shadcn/ui)
  └─ validators           # Shared validation schemas (Zod)
tooling
  ├─ eslint               # Shared ESLint configurations
  ├─ github               # GitHub Actions workflows
  ├─ prettier             # Shared Prettier configuration
  ├─ tailwind             # Shared Tailwind configuration
  └─ typescript           # Shared TypeScript configurations
```

## Quick Start

### Prerequisites

- Node.js >= 22.14.0
- pnpm >= 9.6.0

### 1. Install Dependencies

```bash
# Install dependencies
pnpm install

# Configure environment variables
# There is an `.env.example` in the root directory you can use for reference
cp .env.example .env
```

### 2. Development

#### Start All Apps

```bash
# Run all apps in watch mode
pnpm dev
```

#### Start Web Apps Only

```bash
# Run only Next.js apps
pnpm dev:next
```

#### Start Mobile Apps

For **iOS Simulator**:

1. Make sure you have XCode and XCode Command Line Tools installed ([Expo iOS setup guide](https://docs.expo.dev/workflow/ios-simulator))
2. Navigate to the mobile app directory:

   ```bash
   cd apps/mobile/reservation-app
   # or
   cd apps/mobile/trading-app
   ```

3. Start the development server:

   ```bash
   pnpm dev:ios
   ```

For **Android Emulator**:

1. Install Android Studio tools ([Expo Android setup guide](https://docs.expo.dev/workflow/android-studio-emulator))
2. Navigate to the mobile app directory:

   ```bash
   cd apps/mobile/reservation-app
   # or
   cd apps/mobile/trading-app
   ```

3. Start the development server:

   ```bash
   pnpm dev:android
   ```

## Available Scripts

- `pnpm dev` - Start all apps in watch mode
- `pnpm dev:next` - Start only Next.js web apps
- `pnpm build` - Build all apps and packages
- `pnpm lint` - Lint all packages
- `pnpm lint:fix` - Lint and auto-fix all packages
- `pnpm format` - Check formatting across all packages
- `pnpm format:fix` - Format all packages
- `pnpm typecheck` - Type check all packages
- `pnpm clean` - Clean root node_modules
- `pnpm clean:workspaces` - Clean all workspace node_modules
- `pnpm ui-add` - Add shadcn/ui components interactively

## Adding Components and Packages

### Adding UI Components

Use the interactive shadcn/ui CLI to add new UI components to the web apps:

```bash
pnpm ui-add
```

This will install the selected component(s) to the appropriate UI package.

### Creating New Packages

To create a new package in the monorepo:

```bash
pnpm turbo gen init
```

This generator will:

- Prompt you for a package name
- Set up `package.json`, `tsconfig.json`, and `index.ts`
- Configure ESLint, Prettier, and TypeScript
- Allow you to install initial dependencies

## Architecture

### Shared Code Strategy

The monorepo architecture enables efficient code sharing:

- **`@trading-platform/validators`** - Shared validation schemas (Zod) used across all apps
- **`@trading-platform/ui`** - Web UI components (shadcn/ui) for Next.js apps
- **`@trading-platform/mobile-ui`** - Mobile UI components for React Native apps
- **`@trading-platform/mobile-utils`** - Shared utilities for mobile apps

### Type Safety

The project maintains full type safety across the stack:

- TypeScript configurations shared via `@trading-platform/tsconfig`
- Validated inputs/outputs with Zod schemas
- Shared types between client and server

### Code Sharing Best Practices

- **Runtime code** (validation schemas, utilities) goes in shared packages
- **Type definitions** can be shared without exposing implementation details
- Each app imports only what it needs, keeping bundles optimized

## Deployment

### Web Apps (Next.js)

The Next.js applications can be deployed to [Vercel](https://vercel.com) with zero configuration:

1. **Create a Vercel project** for each app:
   - Landing: `apps/web/landing`
   - Dashboard: `apps/web/dashboard`
   - Admin: `apps/web/admin`

2. **Configure environment variables** in Vercel dashboard (refer to `.env.example`)

3. **Deploy** - Vercel will automatically detect the Next.js configuration and deploy

For detailed Turborepo deployment instructions, see the [official Turborepo + Vercel guide](https://vercel.com/docs/concepts/monorepos/turborepo).

### Mobile Apps (Expo)

Mobile apps are distributed through app stores rather than traditional web deployment. Both `reservation-app` and `trading-app` follow the same deployment process.

#### Initial Setup with EAS

1. **Install EAS CLI**:

   ```bash
   pnpm add -g eas-cli
   eas login
   ```

2. **Configure EAS Build** (from the app directory):

   ```bash
   cd apps/mobile/reservation-app  # or trading-app
   eas build:configure
   ```

#### Building for Production

Create production builds for iOS and Android:

```bash
# Build for iOS
eas build --platform ios --profile production

# Build for Android
eas build --platform android --profile production
```

#### Submitting to App Stores

Submit builds directly to app stores:

```bash
# Submit to Apple App Store
eas submit --platform ios --latest

# Submit to Google Play Store
eas submit --platform android --latest

# Or combine build + submit
eas build --platform ios --profile production --auto-submit
```

#### Over-The-Air (OTA) Updates

For quick bug fixes and minor updates without app store review:

1. **Setup EAS Update**:

   ```bash
   cd apps/mobile/reservation-app  # or trading-app
   pnpm expo install expo-updates
   eas update:configure
   ```

2. **Publish updates**:

   ```bash
   eas update --auto
   ```

   > **Note**: OTA updates work for JavaScript changes only. Native code changes require a new build and app store submission.

For more details, see:

- [Expo Distribution Guide](https://docs.expo.dev/distribution/introduction)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction)
- [EAS Update Documentation](https://docs.expo.dev/eas-update/introduction)

## Contributing

This is a monorepo project using Turborepo. When contributing:

1. Follow the existing code style (enforced by ESLint and Prettier)
2. Run `pnpm typecheck` before committing
3. Ensure all tests pass with `pnpm test` (when implemented)
4. Keep packages focused and composable

## License

This project is private and proprietary.

## Acknowledgments

This stack is inspired by and built upon [create-t3-turbo](https://github.com/t3-oss/create-t3-turbo).
# starter-kit
