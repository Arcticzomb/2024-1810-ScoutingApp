import { TBAFetch } from "./TheBlueAlliance/TBAFetch";
import { FIRSTEventsFetch } from "./FIRSTEventsWeb/FIRSTEventsFetch";
import { StatboticsFetch } from "./Statbotics/StatboticsFetch";

/**
 * Ment to assist in creating scouting API http requests by handeling the url and headers for the user
 * @author FRC 1810 Programming
 * @since 2023-2024
 */
export class ScoutingFetch {

    readonly year: number;
    readonly event: string;
    readonly eventkey: string;

    public TBA: TBAFetch;
    public FRC: FIRSTEventsFetch;
    public Stat: StatboticsFetch;

    /**
     * Construcor for the Scouting Fetch class
     * @param year Competition year (or season), must be 4 digits - can be changed per call
     * @param event The 4-letter event key to fetch for, eg `nytr` - can be changed per call
     * @param key Authentication keys for the APIs, all optional
     */
    constructor(
            year: number,
            event: string,
            key?: {
                /** X-TBA-Auth-Key */
                TBA?: string;

                /** uncombined */
                FIRSTEvents?: {
                    /** Raw username for the FIRST Events Web API */
                    username: string;
                    /** Raw key for the FIRST Events Web API */
                    key: string;
                }
            }) {
        this.year = year;
        this.event = event.toLowerCase();
        this.eventkey = `${year}${event}`;

        // if the The Blue Alliance key is defined make the TBA object
        const TBARequest = (key?.TBA) ? { headers: { "accept": "application/json", "X-TBA-Auth-Key": key.TBA }} : undefined;
        this.TBA = new TBAFetch(TBARequest, year, event);

        // if the the FIRST Events username and key are defined make the FRC object
        const FRCRequest = (key?.FIRSTEvents) ? { headers: { "accept": "application/json", "Authorization": `Basic ${btoa(`${key.FIRSTEvents.username}:${key.FIRSTEvents.key}`)}` }} : undefined;
        this.FRC = new FIRSTEventsFetch(FRCRequest, year, event);

        this.Stat = new StatboticsFetch(year, event);
    }
}