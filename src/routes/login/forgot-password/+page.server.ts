import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import type { ActionFailure } from "@sveltejs/kit";

export const actions = {
    default: async ({ request, url, locals: { supabase } }): Promise<ActionFailure<{ error: string; values?: { email: string } }>> => {
        const form = await request.formData();
        const email = form.get("email") as string;

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${url.origin}/login/callback?redirect_url=/account/update-password`
        });

        if (error) return fail(500, {
            error: error.message,
            values: {
                email
            }
        });

        throw redirect(303, "/login");
    }
} satisfies Actions;
