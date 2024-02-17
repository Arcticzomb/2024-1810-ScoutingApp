import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ locals: { supabase, scoutingFetch } }) => {

    const [ teams, ppg ] = await Promise.all([

        fetch(`https://frc-api.firstinspires.org/v3.0/${scoutingFetch.year}/teams?eventCode=${scoutingFetch.event}`, scoutingFetch.FRC.FIRSTEventsRequest)
            .then((res) => res.json() as Promise<FrcTeams>)
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