export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      communication: {
        Row: {
          address: string | null
          created_at: string | null
          email: string | null
          id: number
          phone: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          phone?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          phone?: string | null
        }
        Relationships: []
      }
      companies: {
        Row: {
          company_id: number
          comunication_id: number | null
          created_at: string
          id: number
          name: string
        }
        Insert: {
          company_id: number
          comunication_id?: number | null
          created_at?: string
          id?: number
          name?: string
        }
        Update: {
          company_id?: number
          comunication_id?: number | null
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: 'companies_company_id_fkey'
            columns: ['company_id']
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'companies_comunication_id_fkey'
            columns: ['comunication_id']
            referencedRelation: 'communication'
            referencedColumns: ['id']
          },
        ]
      }
      tenants: {
        Row: {
          api_key: string
          id: number
          inserted_at: string
          name: string
          updated_at: string
        }
        Insert: {
          api_key: string
          id?: number
          inserted_at?: string
          name: string
          updated_at?: string
        }
        Update: {
          api_key?: string
          id?: number
          inserted_at?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
