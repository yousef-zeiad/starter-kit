/**
 * @trading-platform/db
 *
 * Shared database utilities and Supabase client for the trading-platform monorepo
 */

export {
  supabaseAdmin,
  createBrowserClient,
  createMobileClient,
} from "./client";
export type { Database, Json } from "./types";
export { auth, isAuthenticated, hasRole, isSubscriber } from "./auth";
export type { SupabaseClientType } from "./auth";

// Stripe Financial Accounts + Issuing
export {
  stripe,
  calculateProcessingFee,
  createCustomerFinancialAccount,
  issueVirtualCard,
  addMoneyToFinancialAccount,
  freezeFunds,
  unfreezeDeposit,
  handleNoShow,
  withdrawToBank,
  getCustomerBalance,
  getCustomerTransactions,
  handleStripeWebhook,
  // Multi-provider support
  isCardAvailable,
  getCardProviderForCountry,
  getSupportedCountries,
  canUserGetCard,
} from "./stripe";
