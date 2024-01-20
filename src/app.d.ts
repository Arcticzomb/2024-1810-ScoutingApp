import { SupabaseClient, Session } from "@supabase/supabase-js";
import { Database } from "$lib/supabase";
import type { ScoutingFetch } from "$lib/ScoutingFetch/ScoutingFetch";

declare global {
    namespace App {
        interface Locals {
            supabase: SupabaseClient<Database>;
            getSession(): Promise<Session | null>;

            scoutingFetch: ScoutingFetch
        }
        interface PageData {
            session: Session | null;
        }
        // interface Error {}
        // interface Platform {}
    }
}
