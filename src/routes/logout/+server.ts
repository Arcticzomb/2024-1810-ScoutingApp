import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET = (async ({ locals: { supabase, getSession } }) => {
    if (await getSession()) {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    }
    throw redirect(303, "/login");

}) satisfies RequestHandler;
