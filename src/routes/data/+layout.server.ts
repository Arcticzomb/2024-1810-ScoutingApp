import { fail } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals: { supabase } }) => {

    const { data: ppg, error } = await supabase.from("ppg-data").select();

    if (error)
        throw fail(500);

    return { ppg };
}) satisfies LayoutServerLoad;