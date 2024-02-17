import querystring from "node:querystring";

/** avaliable APIs */
export enum APIs {
    // The Blue Alliance API
    TBA = "https://www.thebluealliance.com/api/v3/",

    // First Inspires Web API
    FIRSTEvents = "https://frc-api.firstinspires.org/v3.0/",

    // Statbotics API
    Statbotics = "https://api.statbotics.io/v2/"
}

export class Fetch {
    protected _year: number;
    protected _event: string;
    protected _eventKey: string;

    constructor(year: number, event: string) {
        this._year = year;
        this._event = event;

        this._eventKey = `${year}${event}`;
    }

    // helper function to make calls a bit easier
    static f(targetAPI: APIs, subpath: string, options?: {}, request?: RequestInit) {
        const searchParams = querystring.stringify(options);
        return fetch(`${targetAPI}${subpath}` + `${searchParams && `?${searchParams}`}`, request);
    }
}