import type { PageServerLoad } from "../$types";

export const load = (async ({ locals: { scoutingFetch } }) => {

    const [ eventName, statMatch ] = await Promise.all([

        scoutingFetch.FRC.events(scoutingFetch.year, { eventCode: scoutingFetch.event })
            .then((res) => res.Events[0].name),

        scoutingFetch.Stat.matches({ year: scoutingFetch.year, event: scoutingFetch.eventkey })
            .then((res) => res.filter((match) => match.comp_level === "qm"))

    ]);

    return {
        eventName,
        statMatch,
        eventCode: scoutingFetch.event,
        season: scoutingFetch.year
    };

}) satisfies PageServerLoad;