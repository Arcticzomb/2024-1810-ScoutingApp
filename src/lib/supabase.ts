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
          autoTaxi?: boolean
          autoSpeaker?: number
          autoAmp?: number
          teleSpeaker?: number
          teleAmp?: number
          endClimb?: boolean
          endHarmony?: boolean
          endTrap?: boolean
          gameOutcome?: number
          endNotes?: string
          endPark?: boolean
          endHighNote?: boolean
          endSpotlight?: boolean
          intakeStyle?: number
        }
        Insert: {
          allianceColor?: number
          id?: number
          matchid?: number
          teamid?: number
          autoTaxi?: boolean
          autoSpeaker?: number
          autoAmp?: number
          teleSpeaker?: number
          teleAmp?: number
          endClimb?: boolean
          endHarmony?: boolean
          endTrap?: boolean
          gameOutcome?: number
          endNotes?: string
          endPark?: boolean
          endHighNote?: boolean
          endSpotlight?: boolean
          intakeStyle?: number
        }
        Update: {
          allianceColor?: number
          id?: number
          matchid?: number
          teamid?: number
          autoTaxi?: boolean
          autoSpeaker?: number
          autoAmp?: number
          teleSpeaker?: number
          teleAmp?: number
          endClimb?: boolean
          endHarmony?: boolean
          endTrap?: boolean
          gameOutcome?: number
          endNotes?: string
          endPark?: boolean
          endHighNote?: boolean
          endSpotlight?: boolean
          intakeStyle?: number
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
