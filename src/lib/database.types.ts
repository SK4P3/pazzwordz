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
      PasswordEntry: {
        Row: {
          description: string
          encryptedKey: string
          name: string
          userId: string
        }
        Insert: {
          description: string
          encryptedKey: string
          name: string
          userId: string
        }
        Update: {
          description?: string
          encryptedKey?: string
          name?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "PasswordEntry_userId_fkey"
            columns: ["userId"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      VaultKey: {
        Row: {
          id: string
          vaultKeyHash: string
        }
        Insert: {
          id: string
          vaultKeyHash: string
        }
        Update: {
          id?: string
          vaultKeyHash?: string
        }
        Relationships: [
          {
            foreignKeyName: "VaultKey_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
