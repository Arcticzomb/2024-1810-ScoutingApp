import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ locals: { supabase } }) => {

    const { data: existing, error } = await supabase.from("scouting-data").select();

    if (error)
        throw fail(500);

    return { existing };
}) satisfies PageServerLoad;