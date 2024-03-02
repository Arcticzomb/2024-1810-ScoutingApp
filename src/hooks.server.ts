import {
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    PUBLIC_FRC_USERNAME,
    PUBLIC_FRC_API_KEY,
} from "$env/static/public";
import { ScoutingFetch } from "$lib/ScoutingFetch/ScoutingFetch";

import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.supabase = createSupabaseServerClient({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event
    });

    event.locals.scoutingFetch = new ScoutingFetch(2024, "FLWP", {
        // TBA: PUBLIC_TBA_KEY,`
        FIRSTEvents: {
            username: PUBLIC_FRC_USERNAME,
            key: PUBLIC_FRC_API_KEY
        }
    });

    /**
     * a little helper that is written for convenience so that instead
     * of calling `const { data: { session } } = await supabase.auth.getSession()`
     * you just call this `await getSession()`
     */
    event.locals.getSession = async () => {
        const {
            data: { session }
        } = await event.locals.supabase.auth.getSession();
        return session;
    };

    return resolve(event, {
        /**
         * There's an issue with `filterSerializedResponseHeaders` not working when using `sequence`
         *
         * https://github.com/sveltejs/kit/issues/8061
         */
        filterSerializedResponseHeaders(name) {
            return name === "content-range";
        }
    });
};
