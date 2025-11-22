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
    };
    Enums: Record<string, never>;
  };
}
