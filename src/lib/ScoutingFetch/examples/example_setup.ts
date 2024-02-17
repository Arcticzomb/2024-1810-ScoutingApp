import { ScoutingFetch } from "../ScoutingFetch";

// year and event that will be defaulted in the calls if not specified otherwise
const YEAR = 2016;
const EVENT = "nytr";

/*
 * for better reference on what is happening behind the scenes: https://thebluealliance.com/apidocs
 * this key can be obtained by making an account on https://thebluealliance.com
 * then under `More` and `Account` the "Read API Keys" header can be found
 * give the key a discription and click `Add New Key` and a new Key should be generated
 * the key will be a long string of letters and numbers
 *
 * It is recommended to have the key stored and only accessed on the server side
 * that is to say the anyone accessing the site shouldn't be able to see the key if they go looking
 * a user should only be able to see the data returned by the request
 * this is most easily accomplished by having the key in a .env file and only then again only
 * accessing it on the server side to make the requests before the page loads
 */
const TheBlueAllianceKey = "[insert The Blue Alliance key here]";

/**
 * this is a bit diffrent than the TBA key as it has both a username and key
 * when registering for api access (https://frc-events.firstinspires.org/services/api/register)
 * a username must be specified and that is what goes in the `username` field
 * an email will be sent confirming the username and will provide the key that is needed
 * 
 * It is recommended to have the key stored and only accessed on the server side
 * that is to say the anyone accessing the site shouldn't be able to see the key if they go looking
 * a user should only be able to see the data returned by the request
 * this is most easily accomplished by having the key in a .env file and only then again only
 * accessing it on the server side to make the requests before the page loads
 */
const FIRSTEventsKey = {
    username: "[FIRST Events selected username]",
    key: "[FIRST Events key]"
}

// make scouting fetch object
// (export is just so it can be used in other files)
export const scoutingFetch = new ScoutingFetch(YEAR, EVENT, { TBA: TheBlueAllianceKey, FIRSTEvents: FIRSTEventsKey });
