import { scoutingFetch } from "./example_setup";

/**
 * get awards from `FRC` (FIRST Events Web API)
 * any request that goes through the FIRST Events Web API has to go through the `FRC` object
 * because its a HTTP request it needs an `await`
 */
const awards = await scoutingFetch.FRC.eventAwards();
// do whatever with the returned info

/**
 * the default `year` or `event` provided in the constructor can be accessed as a readonly variable
 * there are many optional filters for many of the methods so they are accessed in an object type
 * so that the user can specify any arbitray filters and also not others
 */
const teams = await scoutingFetch.FRC.teams({ teamNumber: 1810, eventCode: scoutingFetch.event });
// const teams = scoutingFetch.FRC.teams(); // can also be called without parameters and defaults will be used
// do whatever with the returned info

/**
 * some of the values have an enum to help with filling in infomation
 * rather than requiring the user to have figure out what the specific string that each parameter wants
 */
const districtRankings =
    await scoutingFetch.FRC.allianceSelectionPoints({
        tournamentType: FRC.TournamentType.Regional,
        sizeType: FRC.AllianceNumbers.EightAlliance,
        allianceNumber: 1,
        allianceRole: FRC.AllianceRole.Captain
    });
// do whatever with the returned info
