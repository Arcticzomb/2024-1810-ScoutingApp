import type { LayoutServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({ locals: { getSession }, url }) => {
    const path = url.pathname;
    const session = await getSession();
    if ((!path.startsWith("/login") && !path.startsWith("/api")) && !session) {
        const redirectUrl = "/login?" +
            new URLSearchParams({ "redirect_url": url.pathname }).toString();
        throw redirect(303, redirectUrl);
    }
    return {
        session: await getSession()
    };
};
