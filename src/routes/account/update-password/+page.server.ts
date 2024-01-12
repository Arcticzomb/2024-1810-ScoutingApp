import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        const form = await request.formData();
        const password = form.get("password") as string;

        const { error } = await supabase.auth.updateUser({
            password: password
        });

        if (error) throw fail(500);

        throw redirect(303, "/");
    }
} satisfies Actions;
