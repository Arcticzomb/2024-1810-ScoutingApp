import {
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY
} from "$env/static/public";

export const GET = (async () => {
    const headers = { "apikey": PUBLIC_SUPABASE_ANON_KEY };
    const data = await fetch(`${PUBLIC_SUPABASE_URL}/rest/v1/scouting-data`, { headers })
        .then((res) => res.json());

    const dataJSON = JSON.stringify(data);
    const responseInit = {
        status: 200,
        headers: { "content-type": "application/json" }
    };

    return new Response(dataJSON, responseInit);
});