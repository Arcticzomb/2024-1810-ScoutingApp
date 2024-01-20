import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ locals: { supabase, scoutingFetch } }) => {

    const [ teams, ppg ] = await Promise.all([

        scoutingFetch.FRC.teams({ eventCode: scoutingFetch.event })
            .then((res) => res.teams.map((team) => ({
                teamNumber: team.teamNumber,
                teamName: team.nameShort
            }))),

        supabase.from("ppg-data").select()
            .then(({ data, error }) => {
                if (error) throw fail(500, { error: error.message });
                return data;
            })
    ]);

    return { teams, ppg };

}) satisfies PageServerLoad;