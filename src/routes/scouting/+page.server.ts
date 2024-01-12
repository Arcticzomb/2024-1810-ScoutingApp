import { AllianceColor, EVENT, fetchOptions, type FRCSchedule } from "$lib/types";
import type { PageServerLoad } from "./$types";
import { fail, type Actions, redirect } from "@sveltejs/kit";

export const load = (async ({ locals: { supabase } }) => {

    const [matches, existing] = await Promise.all([

        // get the match schedule from FRC Events API
        fetch(`https://frc-api.firstinspires.org/v3.0/${EVENT.season}/schedule/${EVENT.eventCode}?tournamentLevel=Qualification`, fetchOptions)
            .then((res) => res.json() as Promise<FRCSchedule>)
            .then((res) => res.Schedule.map((match) => ({
                matchNumber: match.matchNumber,
                red: match.teams.filter((team) => team.station.slice(0, 1) === "R").map((team) => team.teamNumber),
                blue: match.teams.filter((team) => team.station.slice(0, 1) === "B").map((team) => team.teamNumber)
            }))),

        // get the scouting data from the database
        supabase.from("scouting-data").select()
            .then(({ data, error }) => {
                if (error) throw fail(500, { error: error.message });
                return data;
            })
    ]);

    return { matches, existing };

}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        const form = await request.formData();

        const matchid = form.get("matchid") as string;
        const teamid = form.get("teamid") as string;

        if (!matchid && !teamid) {
            return fail(500, { error: "need to provide match number and team number" });
        } else if (!matchid) {
            return fail(500, { error: "need to provide match number" });
        } else if (!teamid) {
            return fail(500, { error: "need to provide team number" });
        }

        const { data: existing, error } = await supabase.from("scouting-data").select("matchid, teamid");

        if (error)
            return fail(500, { error: error.message });

        if (existing.some((row) => row.matchid === Number(matchid) && row.teamid === Number(teamid))) {
            return fail(500, { error: "that team is already being scouted" });
        }

        /* upload data */
        const matchs = await fetch(`https://frc-api.firstinspires.org/v3.0/${EVENT.season}/schedule/${EVENT.eventCode}?tournamentLevel=Qualification`, fetchOptions)
            .then((res) => res.json() as Promise<FRCSchedule>)
            .then((res) => res.Schedule.map((match) => ({
                matchNumber: match.matchNumber,
                red: match.teams.filter((team) => team.station.slice(0, 1) === "R").map((team) => team.teamNumber),
                blue: match.teams.filter((team) => team.station.slice(0, 1) === "B").map((team) => team.teamNumber)
            })));

        let teamcolor = null;

        if (matchs.find((match) => match.matchNumber === Number(matchid))?.red.includes(Number(teamid)))
            teamcolor = AllianceColor.red;
        else if (matchs.find((match) => match.matchNumber === Number(matchid))?.blue.includes(Number(teamid)))
            teamcolor = AllianceColor.blue;

        if (teamcolor === null) {
            return fail(500, { error: "that team isn't available this match" });
        }

        const { data, error: supabaseError } = await supabase
            .from("scouting-data")
            .insert({
                matchid: Number(matchid),
                teamid: Number(teamid),
                allianceColor: teamcolor
            })
            .select("id")
            .single();

        if (supabaseError)
            return fail(500, { error: supabaseError.message });

        throw redirect(303, "/scouting/collection?" + new URLSearchParams({ id: data.toString() }));
    }
} satisfies Actions;