/**
 * Database types generated from Supabase
 *
 * To generate/update these types, run:
 * pnpm db:types
 *
 * This file will be auto-generated based on your Supabase database schema
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      early_access_waitlist: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          restaurant_name: string | null;
          number_of_locations: number | null;
          role: string | null;
          source: string | null;
          referrer_url: string | null;
          utm_source: string | null;
          utm_medium: string | null;
          utm_campaign: string | null;
          invited_at: string | null;
          onboarded_at: string | null;
          ip_address: string | null;
          user_agent: string | null;
          country_code: string | null;
          language_preference: string | null;
          notes: string | null;
          status: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          email: string;
          full_name?: string | null;
          phone?: string | null;
          restaurant_name?: string | null;
          number_of_locations?: number | null;
          role?: string | null;
          source?: string | null;
          referrer_url?: string | null;
          utm_source?: string | null;
          utm_medium?: string | null;
          utm_campaign?: string | null;
          invited_at?: string | null;
          onboarded_at?: string | null;
          ip_address?: string | null;
          user_agent?: string | null;
          country_code?: string | null;
          language_preference?: string | null;
          notes?: string | null;
          status?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          phone?: string | null;
          restaurant_name?: string | null;
          number_of_locations?: number | null;
          role?: string | null;
          source?: string | null;
          referrer_url?: string | null;
          utm_source?: string | null;
          utm_medium?: string | null;
          utm_campaign?: string | null;
          invited_at?: string | null;
          onboarded_at?: string | null;
          ip_address?: string | null;
          user_agent?: string | null;
          country_code?: string | null;
          language_preference?: string | null;
          notes?: string | null;
          status?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      users: {
        Row: {
          id: string;
          full_name: string | null;
          email: string | null;
          phone: string | null;
          country: string | null;
          subscription_tier: string | null;
          subscription_id: string | null;
          subscription_ends_at: string | null;
        };
        Insert: {
          id?: string;
          full_name?: string | null;
          email?: string | null;
          phone?: string | null;
          country?: string | null;
          subscription_tier?: string | null;
          subscription_id?: string | null;
          subscription_ends_at?: string | null;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          email?: string | null;
          phone?: string | null;
          country?: string | null;
          subscription_tier?: string | null;
          subscription_id?: string | null;
          subscription_ends_at?: string | null;
        };
        Relationships: [];
      };
      restaurants: {
        Row: {
          id: string;
          subscription_status: string | null;
          subscription_id: string | null;
          trial_ends_at: string | null;
          subscription_ends_at: string | null;
        };
        Insert: {
          id?: string;
          subscription_status?: string | null;
          subscription_id?: string | null;
          trial_ends_at?: string | null;
          subscription_ends_at?: string | null;
        };
        Update: {
          id?: string;
          subscription_status?: string | null;
          subscription_id?: string | null;
          trial_ends_at?: string | null;
          subscription_ends_at?: string | null;
        };
        Relationships: [];
      };
      payments: {
        Row: {
          id: string;
          user_id: string | null;
          payment_type: string;
          amount: number;
          stripe_payment_intent_id: string | null;
          status: string;
          metadata: Json | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          payment_type: string;
          amount: number;
          stripe_payment_intent_id?: string | null;
          status: string;
          metadata?: Json | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          payment_type?: string;
          amount?: number;
          stripe_payment_intent_id?: string | null;
          status?: string;
          metadata?: Json | null;
          created_at?: string | null;
        };
        Relationships: [];
      };
      customer_wallets: {
        Row: {
          id: string;
          user_id: string;
          stripe_customer_id: string | null;
          balance: number;
          available_balance: number;
          frozen_balance: number;
          currency: string;
          metadata: Json | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          stripe_customer_id?: string | null;
          balance?: number;
          available_balance?: number;
          frozen_balance?: number;
          currency?: string;
          metadata?: Json | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          stripe_customer_id?: string | null;
          balance?: number;
          available_balance?: number;
          frozen_balance?: number;
          currency?: string;
          metadata?: Json | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      wallet_transactions: {
        Row: {
          id: string;
          user_id: string;
          wallet_id: string;
          amount: number;
          type: string;
          status: string;
          description: string | null;
          stripe_payment_intent_id: string | null;
          related_reservation_id: string | null;
          balance_before: number | null;
          balance_after: number | null;
          metadata: Json | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          wallet_id: string;
          amount: number;
          type: string;
          status?: string;
          description?: string | null;
          stripe_payment_intent_id?: string | null;
          related_reservation_id?: string | null;
          balance_before?: number | null;
          balance_after?: number | null;
          metadata?: Json | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          wallet_id?: string;
          amount?: number;
          type?: string;
          status?: string;
          description?: string | null;
          stripe_payment_intent_id?: string | null;
          related_reservation_id?: string | null;
          balance_before?: number | null;
          balance_after?: number | null;
          metadata?: Json | null;
          created_at?: string | null;
        };
        Relationships: [];
      };
      reservations: {
        Row: {
          id: string;
          user_id: string;
          restaurant_id: string | null;
          deposit_amount: number | null;
          deposit_status: string | null;
          food_order_amount: number | null;
          food_order_status: string | null;
          status: string | null;
          checked_in_at: string | null;
          locations?: {
            stripe_account_id: string | null;
          } | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          restaurant_id?: string | null;
          deposit_amount?: number | null;
          deposit_status?: string | null;
          food_order_amount?: number | null;
          food_order_status?: string | null;
          status?: string | null;
          checked_in_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          restaurant_id?: string | null;
          deposit_amount?: number | null;
          deposit_status?: string | null;
          food_order_amount?: number | null;
          food_order_status?: string | null;
          status?: string | null;
          checked_in_at?: string | null;
        };
        Relationships: [];
      };
      locations: {
        Row: {
          id: string;
          restaurant_id: string;
          stripe_account_id: string | null;
        };
        Insert: {
          id?: string;
          restaurant_id: string;
          stripe_account_id?: string | null;
        };
        Update: {
          id?: string;
          restaurant_id?: string;
          stripe_account_id?: string | null;
        };
        Relationships: [];
      };
      customer_financial_accounts: {
        Row: {
          id: string;
          user_id: string;
          stripe_account_id: string | null;
          stripe_financial_account_id: string | null;
          stripe_customer_id: string | null;
          external_bank_account_id: string | null;
          balance: number;
          available_balance: number;
          frozen_balance: number;
          currency: string;
          status: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          stripe_account_id?: string | null;
          stripe_financial_account_id?: string | null;
          stripe_customer_id?: string | null;
          external_bank_account_id?: string | null;
          balance?: number;
          available_balance?: number;
          frozen_balance?: number;
          currency?: string;
          status?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          stripe_account_id?: string | null;
          stripe_financial_account_id?: string | null;
          stripe_customer_id?: string | null;
          external_bank_account_id?: string | null;
          balance?: number;
          available_balance?: number;
          frozen_balance?: number;
          currency?: string;
          status?: string;
        };
        Relationships: [];
      };
      financial_account_transactions: {
        Row: {
          id: string;
          user_id: string;
          financial_account_id: string;
          amount: number;
          type: string;
          status: string;
          description: string | null;
          stripe_payment_intent_id: string | null;
          stripe_transfer_id: string | null;
          related_reservation_id: string | null;
          balance_before: number | null;
          balance_after: number | null;
          metadata: Json | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          financial_account_id: string;
          amount: number;
          type: string;
          status?: string;
          description?: string | null;
          stripe_payment_intent_id?: string | null;
          stripe_transfer_id?: string | null;
          related_reservation_id?: string | null;
          balance_before?: number | null;
          balance_after?: number | null;
          metadata?: Json | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          financial_account_id?: string;
          amount?: number;
          type?: string;
          status?: string;
          description?: string | null;
          stripe_payment_intent_id?: string | null;
          stripe_transfer_id?: string | null;
          related_reservation_id?: string | null;
          balance_before?: number | null;
          balance_after?: number | null;
          metadata?: Json | null;
          created_at?: string | null;
        };
        Relationships: [];
      };
      customer_virtual_cards: {
        Row: {
          id: string;
          user_id: string;
          financial_account_id: string;
          stripe_card_id: string | null;
          stripe_cardholder_id: string | null;
          last4: string | null;
          exp_month: number | null;
          exp_year: number | null;
          brand: string | null;
          card_type: string | null;
          status: string | null;
          daily_spending_limit: number | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          financial_account_id: string;
          stripe_card_id?: string | null;
          stripe_cardholder_id?: string | null;
          last4?: string | null;
          exp_month?: number | null;
          exp_year?: number | null;
          brand?: string | null;
          card_type?: string | null;
          status?: string | null;
          daily_spending_limit?: number | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          financial_account_id?: string;
          stripe_card_id?: string | null;
          stripe_cardholder_id?: string | null;
          last4?: string | null;
          exp_month?: number | null;
          exp_year?: number | null;
          brand?: string | null;
          card_type?: string | null;
          status?: string | null;
          daily_spending_limit?: number | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      get_waitlist_stats: {
        Args: Record<string, never>;
        Returns: Array<{
          total_signups: number | null;
          pending_count: number | null;
          invited_count: number | null;
          onboarded_count: number | null;
          signups_last_7_days: number | null;
          signups_last_30_days: number | null;
          top_sources: Json | null;
        }>;
      };
      get_wallet_balance: {
        Args: {
          p_user_id: string;
        };
        Returns: Array<{
          total_balance: number | null;
          available_balance: number | null;
          frozen_balance: number | null;
        }>;
      };
      get_user_country: {
        Args: {
          p_user_id: string;
        };
        Returns: string | null;
      };
    };
    Enums: Record<string, never>;
  };
}
