
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ngaomiaiuctbnwzmihks.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nYW9taWFpdWN0Ym53em1paGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2NTc4MDgsImV4cCI6MjA2ODIzMzgwOH0.h6CXSYP-PbJ1_t4w5FQG6uOvrIiY1tvQSo6_PnP--j0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      contact_messages: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          course_interest: string | null
          message: string
          created_at: string | null
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          phone: string
          course_interest?: string | null
          message: string
          created_at?: string | null
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          course_interest?: string | null
          message?: string
          created_at?: string | null
        }
      }
      course_applications: {
        Row: {
          id: string
          full_name: string
          email: string
          phone: string
          course_name: string
          experience_level: string
          interest_message: string
          created_at: string | null
        }
        Insert: {
          id?: string
          full_name: string
          email: string
          phone: string
          course_name: string
          experience_level: string
          interest_message: string
          created_at?: string | null
        }
        Update: {
          id?: string
          full_name?: string
          email?: string
          phone?: string
          course_name?: string
          experience_level?: string
          interest_message?: string
          created_at?: string | null
        }
      }
      demo_applications: {
        Row: {
          id: string
          name: string
          phone: string
          email: string
          course_for_demo: string
          available_time: string
          preferred_date: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          phone: string
          email: string
          course_for_demo: string
          available_time: string
          preferred_date?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          phone?: string
          email?: string
          course_for_demo?: string
          available_time?: string
          preferred_date?: string | null
          created_at?: string | null
        }
      }
      newsletter_subscriptions: {
        Row: {
          email: string
          created_at: string | null
        }
        Insert: {
          email: string
          created_at?: string | null
        }
        Update: {
          email?: string
          created_at?: string | null
        }
      }
      event_registrations: {
        Row: {
          id: string
          name: string
          degree: string
          year: string
          college_name: string
          university_name: string
          contact_number: string
          alternate_number: string | null
          email_id: string
          certificate_code: string
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          degree: string
          year: string
          college_name: string
          university_name: string
          contact_number: string
          alternate_number?: string | null
          email_id: string
          certificate_code: string
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          degree?: string
          year?: string
          college_name?: string
          university_name?: string
          contact_number?: string
          alternate_number?: string | null
          email_id?: string
          certificate_code?: string
          created_at?: string | null
        }
      }
    }
  }
}
