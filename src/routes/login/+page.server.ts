import type { ServerLoad, Actions, ActionFailure } from "@sveltejs/kit";
import { fail, redirect } from "@sveltejs/kit";

export const load = (async ({ locals: { getSession } }) => {
    if (await getSession()) throw redirect(303, "/");
}) satisfies ServerLoad;

export const actions = {
    default: async ({ url, request, locals: { supabase } }): Promise<ActionFailure<{error: string, email?: string}>> => {
        const form = await request.formData();
        const email = form.get("email") as string;
        const password = form.get("password") as string;

        if (!email) return fail(400, {
            error: "Email is required"
        });

        if (!password) return fail(400, {
            error: "Password is required"
        });

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) return fail(401, {
            error: error.message,
            email
        });

        throw redirect(303, url.searchParams.get("redirect_url") ?? "/");
    }
} satisfies Actions;
