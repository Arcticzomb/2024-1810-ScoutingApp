export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]


// TODO: add the definitions for the database here
export interface Database {
  public: {
    Tables: {
      "ppg-data": {
        Row: {
          matchesPlayed: number
          meanAuto: number
          meanEndgame: number
          meanTeleop: number
          pointTotal: number
          teamid: number
          totalAuto: number
          totalEndgame: number
          totalTeleop: number
        }
        Insert: {
          matchesPlayed?: number
          meanAuto?: number
          meanEndgame?: number
          meanTeleop?: number
          pointTotal?: number
          teamid: number
          totalAuto?: number
          totalEndgame?: number
          totalTeleop?: number
        }
        Update: {
          matchesPlayed?: number
          meanAuto?: number
          meanEndgame?: number
          meanTeleop?: number
          pointTotal?: number
          teamid?: number
          totalAuto?: number
          totalEndgame?: number
          totalTeleop?: number
        }
        Relationships: []
      }
      "scouting-data": {
        // these are the required rows
        Row: {
          allianceColor: number
          id: number
          matchid: number
          teamid: number
        }
        Insert: {
          allianceColor?: number
          id?: number
          matchid?: number
          teamid?: number
        }
        Update: {
          allianceColor?: number
          id?: number
          matchid?: number
          teamid?: number
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
