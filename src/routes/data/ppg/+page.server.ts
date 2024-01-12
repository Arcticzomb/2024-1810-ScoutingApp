import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { EVENT, fetchOptions, type FRCTeams } from "$lib/types";

export const load = (async ({ locals: { supabase } }) => {

    const [ teams, ppg ] = await Promise.all([

        fetch(`https://frc-api.firstinspires.org/v3.0/${EVENT.season}/teams?&eventCode=${EVENT.eventCode}`, fetchOptions)
            .then((res) => res.json() as Promise<FRCTeams>)
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