import { CompLevel, EVENT, fetchOptions, type FRCEvents, type StatMatch } from "$lib/types";
import type { PageServerLoad } from "../$types";

export const load = (async () => {

    const [ eventName, statMatch ] = await Promise.all([

        fetch(`https://frc-api.firstinspires.org/v3.0/${EVENT.season}/events?eventCode=${EVENT.eventCode}`, fetchOptions)
            .then((res) => res.json() as Promise<FRCEvents>)
            .then((res) => res.Events[0].name),

        fetch(`https://api.statbotics.io/v2/matches/event/${EVENT.season}${EVENT.eventCode}`)
            .then((res) => res.json() as Promise<StatMatch[]>)
            .then((res) => res.filter((match) => match.comp_level === CompLevel.Qm))

    ]);

    return { eventName, statMatch };

}) satisfies PageServerLoad;