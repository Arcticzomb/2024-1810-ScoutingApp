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
          autoTaxi?: number
          autoSpeaker?: number
          autoAmp?: number
          teleSpeaker?: number
          teleAmp?: number
          endClimb?: number
          endHarmony?: number
          endTrap?: number
          winState?: number
          endNotes?: string
          endHighNote?: number
          endSpotlight?: number
          intakeStyle?: number
          coopertition?: number
        }
        Insert: {
          allianceColor?: number
          id?: number
          matchid?: number
          teamid?: number
          autoTaxi?: number
          autoSpeaker?: number
          autoAmp?: number
          teleSpeaker?: number
          teleAmp?: number
          endClimb?: number
          endHarmony?: number
          endTrap?: number
          winState?: number
          endNotes?: string
          endHighNote?: number
          endSpotlight?: number
          intakeStyle?: number
          coopertition?: number
        }
        Update: {
          allianceColor?: number
          id?: number
          matchid?: number
          teamid?: number
          autoTaxi?: number
          autoSpeaker?: number
          autoAmp?: number
          teleSpeaker?: number
          teleAmp?: number
          endClimb?: number
          endHarmony?: number
          endTrap?: number
          winState?: number
          endNotes?: string
          endHighNote?: number
          endSpotlight?: number
          intakeStyle?: number
          coopertition?: number
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
