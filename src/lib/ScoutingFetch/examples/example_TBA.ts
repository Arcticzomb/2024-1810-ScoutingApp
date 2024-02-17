import { scoutingFetch } from "./example_setup";

/**
 * get awards from `TBA` (The Blue Alliance API)
 * any request that goes through the The Blue Alliance API has to go through the `TBA` object
 * because this an HTTP request it needs an `await`
 */
const event = await scoutingFetch.TBA.event();
// do whatever with the returned info

/**
 * the TBA requires all team numbers to be prefixed with "frc"
 * and any event requests are with year and event code concatenated
 * (if an event code is not provided this will be handled by the libary)
 */
const team = await scoutingFetch.TBA.team("frc254");
const eventWParams = await scoutingFetch.TBA.event("2016nytr");
// do whatever with the returned info