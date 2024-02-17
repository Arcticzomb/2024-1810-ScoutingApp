import { APIs, Fetch } from "../BaseFetch";

export class TBAFetch extends Fetch {

    private TBARequest: RequestInit | undefined;

    constructor(TBARequest: RequestInit | undefined, year: number, event: string) {
        super(year, event);
        this.TBARequest = TBARequest;
    }

    private tba(subpath: string) { return Fetch.f(APIs.TBA, subpath, this.TBARequest); }

    /****************************** The Blue Alliance API Wrappers ******************************/
    // All functions are better explained on the TBA API docs:
    // https://www.thebluealliance.com/apidocs/v3

    /* TBA - Calls that expose TBA internals or status */
    /**
     * /status
     * @returns Returns API status, and TBA status information
     */
    public async status() {
        return this.tba("status")
            .then((res) => res.json() as Promise<TbaStatus>);
    }

    /* list - Calls that return a list of records */
    /**
     * /teams/{page_num}
     * @param pageNumber Page number of results to return, zero-indexed
     * @returns Gets a list of Team objects, paginated in groups of 500
     */
    public async teams(pageNumber?: number) {
        return this.tba(`teams/${pageNumber ?? 0}`)
            .then((res) => res.json() as Promise<TbaTeam[]>);
    }

    /**
     * /teams/{page_num}/simple
     * @param pageNumber Page number of results to return, zero-indexed
     * @returns Gets a list of short form Team_Simple objects, paginated in groups of 500
     */
    public async teamsSimple(pageNumber?: number) {
        return this.tba(`teams/${pageNumber ?? 0}/simple`)
            .then((res) => res.json() as Promise<TbaTeamSimple[]>);
    }

    /**
     * /teams/{page_num}/keys
     * @param pageNumber Page number of results to return, zero-indexed
     * @returns Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500)
     */
    public async teamsKeys(pageNumber?: number) {
        return this.tba(`teams/${pageNumber ?? 0}/keys`)
            .then((res) => res.json() as Promise<string[]>);
    }

    /**
     * /teams/{year}/{page_num}
     * @param year Competition Year (or Season). Must be 4 digits.
     * @param pageNumber Page number of results to return, zero-indexed
     * @returns Gets a list of Team objects that competed in the given year, paginated in groups of 500
     */
    public async teamsYear(year?: number, pageNumber?: number) {
        return this.tba(`teams/${year ?? this._year}/${pageNumber ?? 0}`)
            .then((res) => res.json() as Promise<TbaTeam>);
    }

    /**
     * /teams/{year}/{page_num}/simple
     * @param year Competition Year (or Season). Must be 4 digits
     * @param pageNumber Page number of results to return, zero-indexed
     * @returns Gets a list of short form Team_Simple objects that competed in the given year, paginated in groups of 500
     */
    public async teamsYearSimple(year?: number, pageNumber?: number) {
        return this.tba(`teams/${year ?? this._year}/${pageNumber ?? 0}/simple`)
            .then((res) => res.json() as Promise<TbaTeamSimple>);
    }

    /**
     * /teams/{year}/{page_num}/keys
     * @param year Competition Year (or Season). Must be 4 digits
     * @param pageNumber Page number of results to return, zero-indexed
     * @returns Gets a list Team Keys that competed in the given year, paginated in groups of 500
     */
    public async teamsYearKeys(year?: number, pageNumber?: number) {
        return this.tba(`teams/${year ?? this._year}/${pageNumber ?? 0}/keys`)
            .then((res) => res.json() as Promise<string[]>);
    }

    /**
     * /team/{team_key}/events/{year}/statuses
     * @param teamKey TBA Team Key, eg `frc254`
     * @param year Competition Year (or Season). Must be 4 digits
     * @returns Gets a key-value list of the event statuses for events this team has competed at in the given year
     */
    public async teamEventStatuses(teamKey: string, year?: number) {
        return this.tba(`team/${teamKey}/events/${year ?? this._year}/statuses`)
            .then((res) => res.json() as Promise<TbaTeamEventStatuses>);
    }

    /**
     * /events/{year}
     * @param year Competition Year (or Season). Must be 4 digits
     * @returns Gets a list of events in the given year
     */
    public async events(year?: number) {
        return this.tba(`events/${year ?? this._year}`)
            .then((res) => res.json() as Promise<TbaEvent[]>);
    }

    /**
     * /events/{year}/simple
     * @param year Competition Year (or Season). Must be 4 digits
     * @returns Gets a short-form list of events in the given year
     */
    public async eventsSimple(year?: number) {
        return this.tba(`events/${year ?? this._year}/simple`)
            .then((res) => res.json() as Promise<TbaEventSimple[]>);
    }

    /**
     * /events/{year}/keys
     * @param year Competition Year (or Season). Must be 4 digits
     * @returns Gets a list of event keys in the given year
     */
    public async eventsKeys(year?: number) {
        return this.tba(`events/${year ?? this._year}/keys`)
            .then((res) => res.json() as Promise<string[]>);
    }

    /**
     * /event/{event_key}/teams
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets a list of Team objects that competed in the given event
     */
    public async eventTeams(eventKey?: string) {
        return this.tba(`event/${eventKey ?? this._eventKey}/teams`)
            .then((res) => res.json() as Promise<TbaTeam[]>);
    }

    /**
     * /event/{event_key}/teams/simple
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets a short-form list of Team objects that competed in the given event
     */
    public async eventTeamsSimple(eventKey?: string) {
        return this.tba(`event/${eventKey ?? this._eventKey}/teams/simple`)
            .then((res) => res.json() as Promise<TbaTeamSimple[]>);
    }

    /**
     * /event/{event_key}/teams/keys
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets a list of Team keys that competed in the given event
     */
    public async eventTeamsKeys(eventKey?: string) {
        return this.tba(`event/${eventKey ?? this._eventKey}/teams/keys`)
            .then((res) => res.json() as Promise<string[]>);
    }

    /**
     * /event/{event_key}/teams/statuses
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets a key-value list of the event statuses for teams competing at the given event
     */
    public async eventTeamsStatuses(eventKey?: string) {
        return this.tba(`event/${eventKey ?? this._eventKey}/teams/statuses`)
            .then((res) => res.json() as Promise<TbaTeamEventStatuses>);
    }

    /**
     * /district/{district_key}/events
     * @param districtKey TBA District Key, eg 2016fim
     * @returns Gets a list of events in the given district
     */
    public async districtEvents(districtKey: string) {
        return this.tba(`district/${districtKey}/events`)
            .then((res) => res.json() as Promise<TbaEvent[]>);
    }

    /**
     * /district/{district_key}/events/simple
     * @param districtKey TBA District Key, eg 2016fim
     * @returns Gets a short-form list of events in the given district
     */
    public async districtEventsSimple(districtKey: string) {
        return this.tba(`district/${districtKey}/events/simple`)
            .then((res) => res.json() as Promise<TbaEventSimple[]>);
    }

    /**
     * /district/{district_key}/events/keys
     * @param districtKey TBA District Key, eg 2016fim
     * @returns Gets a list of event keys for events in the given district
     */
    public async districtEventsKeys(districtKey: string) {
        return this.tba(`district/${districtKey}/events/keys`)
            .then((res) => res.json() as Promise<string[]>);
    }

    /**
     * /district/{district_key}/teams
     * @param districtKey TBA District Key, eg 2016fim
     * @returns Gets a list of Team objects that competed in events in the given district
     */
    public async districtTeams(districtKey: string) {
        return this.tba(`district/${districtKey}/teams`)
            .then((res) => res.json() as Promise<TbaTeam[]>);
    }

    /**
     * /district/{district_key}/teams/simple
     * @param districtKey TBA District Key, eg 2016fim
     * @returns Gets a short-form list of Team objects that competed in events in the given district
     */
    public async districtTeamsSimple(districtKey: string) {
        return this.tba(`district/${districtKey}/teams/simple`)
            .then((res) => res.json() as Promise<TbaTeamSimple[]>);
    }

    /**
     * /district/{district_key}/teams/keys
     * @param districtKey TBA District Key, eg 2016fim
     * @returns Gets a list of Team objects that competed in events in the given district
     */
    public async districtTeamsKeys(districtKey: string) {
        return this.tba(`district/${districtKey}/teams/keys`)
            .then((res) => res.json() as Promise<string[]>);
    }

    /**
     * /district/{district_key}/rankings
     * @param districtKey TBA District Key, eg 2016fim
     * @returns Gets a list of team district rankings for the given district
     */
    public async districtRankings(districtKey: string) {
        return this.tba(`district/${districtKey}/rankings`)
            .then((res) => res.json() as Promise<TbaRanking[]>);
    }

    /* team - Calls that return team or team-specific information. */
    /**
     * /team/{team_key}
     * @param teamKey TBA Team Key, eg `frc254`
     * @returns Gets a Team object for the team referenced by the given key
     */
    public async team(teamKey: string) {
        return this.tba(`team/${teamKey}`)
            .then((res) => res.json() as Promise<TbaTeam>);
    }

    /**
     * /team/{team_key}/simple
     * @param teamKey TBA Team Key, eg `frc254`
     * @returns Gets a Team_Simple object for the team referenced by the given key
     */
    public async teamSimple(teamKey: string) {
        return this.tba(`team/${teamKey}/simple`)
            .then((res) => res.json() as Promise<TbaTeamSimple>);
    }

    /**
     * /team/{team_key}/years_participated
     * @param teamKey TBA Team Key, eg `frc254`
     * @returns Gets a list of years in which the team participated in at least one competition
     */
    public async teamYearsParticipated(teamKey: string) {
        return this.tba(`team/${teamKey}/years_participated`)
            .then((res) => res.json() as Promise<number[]>);
    }

    /**
     * /team/{team_key}/districts
     * @param teamKey TBA Team Key, eg `frc254`
     * @returns Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district
     */
    public async teamDistricts(teamKey: string) {
        return this.tba(`team/${teamKey}/districts`)
            .then((res) => res.json() as Promise<TbaDistrict[]>);
    }

    /**
     * /team/{team_key}/robots
     * @param teamKey TBA Team Key, eg `frc254`
     * @returns Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot
     */
    public async teamRobots(teamKey: string) {
        return this.tba(`team/${teamKey}/robots`)
            .then((res) => res.json() as Promise<TbaRobot[]>);
    }

    /**
     * /team/{team_key}/events
     * @param teamKey TBA Team Key, eg `frc254`
     * @returns Gets a list of all events this team has competed at
     */
    public async teamEvents(teamKey: string) {
        return this.tba(`team/${teamKey}/events`)
            .then((res) => res.json() as Promise<TbaEvent[]>);
    }

    /**
     * /team/{team_key}/events/simple
     * @param teamKey TBA Team Key, eg `frc254`
     * @returns Gets a short-form list of all events this team has competed at
     */
    public async teamEventsSimple(teamKey: string) {
        return this.tba(`team/${teamKey}/events/simple`)
            .then((res) => res.json() as Promise<TbaEventSimple[]>);
    }

    /**
     * /team/{team_key}/events/keys
     * @param teamKey TBA Team Key, eg `frc254`
     * @returns Gets a list of the event keys for all events this team has competed at
     */
    public async teamEventsKeys(teamKey: string) {
        return this.tba(`team/${teamKey}/events/keys`)
            .then((res) => res.json() as Promise<string[]>);
    }

    /**
     * /team/{team_key}/events/{year}
     * @param teamKey TBA Team Key, eg `frc254`
     * @param year Competition Year (or Season). Must be 4 digits
     * @returns Gets a list of events this team has competed at in the given year
     */
    public async teamEventsYear(teamKey: string, year?: number) {
        return this.tba(`team/${teamKey}/events/${year ?? this._year}`)
            .then((res) => res.json() as Promise<TbaEvent[]>);
    }

    /**
     * /team/{team_key}/events/{year}/simple
     * @param teamKey TBA Team Key, eg `frc254`
     * @param year Competition Year (or Season). Must be 4 digits
     * @returns Gets a short-form list of events this team has competed at in the given year
     */
    public async teamEventsYearSimple(teamKey: string, year?: number) {
        return this.tba(`team/${teamKey}/events/${year ?? this._year}/simple`)
            .then((res) => res.json() as Promise<TbaEventSimple[]>);
    }

    /**
     * /team/{team_key}/events/{year}/keys
     * @param teamKey TBA Team Key, eg `frc254`
     * @param year Competition Year (or Season). Must be 4 digits
     * @returns Gets a list of the event keys for events this team has competed at in the given year
     */
    public async teamEventsYearKeys(teamKey: string, year?: number) {
        return this.tba(`team/${teamKey}/events/${year ?? this._year}/keys`)
            .then((res) => res.json() as Promise<string[]>);
    }

    /**
     * /team/{team_key}/events/{year}/statuses
     * @param teamKey TBA Team Key, eg `frc254`
     * @param year Competition Year (or Season). Must be 4 digits
     * @returns Gets a key-value list of the event statuses for events this team has competed at in the given year
     */
    public async teamEventsYearStatuses(teamKey: string, year?: number) {
        return this.tba(`team/${teamKey}/events/${year ?? this._year}/statuses`)
            .then((res) => res.json() as Promise<TbaTeamEventStatuses[]>);
    }

    /**
     * /team/{team_key}/event/{event_key}/matches
     * @param teamKey TBA Team Key, eg `frc254`
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets a list of matches for the given team and event
     */
    public async teamEventMatches(teamKey: string, eventKey?: string) {
        return this.tba(`team/${teamKey}/event/${eventKey ?? this._eventKey}/matches`)
            .then((res) => res.json() as Promise<TbaMatch[]>);
    }

    /**
     * /team/{team_key}/event/{event_key}/matches/simple
     * @param teamKey TBA Team Key, eg `frc254`
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets a short-form list of matches for the given team and event
     */
    public async teamEventMatchesSimple(teamKey: string, eventKey?: string) {
        return this.tba(`team/${teamKey}/event/${eventKey ?? this._eventKey}/matches/simple`)
            .then((res) => res.json() as Promise<TbaMatch[]>);
    }

    /**
     * /team/{team_key}/event/{event_key}/matches/keys
     * @param teamKey TBA Team Key, eg `frc254`
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets a list of match keys for matches for the given team and event
     */
    public async teamEventMatchesKeys(teamKey: string, eventKey?: string) {
        return this.tba(`team/${teamKey}/event/${eventKey ?? this._eventKey}/matches/keys`)
            .then((res) => res.json() as Promise<string[]>);
    }

    /**
     * /team/{team_key}/event/{event_key}/awards
     * @param teamKey TBA Team Key, eg `frc254`
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets a list of awards the given team won at the given event
     */
    public async teamEventAwards(teamKey: string, eventKey?: string) {
        return this.tba(`team/${teamKey}/event/${eventKey ?? this._eventKey}/awards`)
            .then((res) => res.json() as Promise<TbaAward[]>);
    }

    /**
     * /team/{team_key}/event/{event_key}/status
     * @param teamKey TBA Team Key, eg `frc254`
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets the competition rank and status of the team at the given event
     */
    public async teamEventStatus(teamKey: string, eventKey?: string) {
        return this.tba(`team/${teamKey}/event/${eventKey ?? this._eventKey}/status`)
            .then((res) => res.json() as Promise<TbaAdditionalProp>);
    }

    /**
     * /team/{team_key}/awards
     * @param teamKey TBA Team Key, eg `frc254`
     * @returns Gets a list of awards the given team has won
     */
    public async teamAwards(teamKey: string) {
        return this.tba(`team/${teamKey}/awards`)
            .then((res) => res.json() as Promise<TbaAward[]>);
    }

    /**
     * /team/{team_key}/awards/{year}
     * @param teamKey TBA Team Key, eg `frc254`
     * @param year Competition Year (or Season). Must be 4 digits
     * @returns Gets a list of awards the given team has won in a given year
     */
    public async teamAwardsYear(teamKey: string, year?: number) {
        return this.tba(`team/${teamKey}/awards/${year ?? this._year}`)
            .then((res) => res.json() as Promise<TbaAward[]>);
    }

    /**
     * /team/{team_key}/matches/{year}
     * @param teamKey TBA Team Key, eg `frc254`
     * @param year Competition Year (or Season). Must be 4 digits
     * @returns Gets a list of matches for the given team and year
     */
    public async teamMatches(teamKey: string, year?: number) {
        return this.tba(`team/${teamKey}/matches/${year ?? this._year}`)
            .then((res) => res.json() as Promise<TbaMatch[]>);
    }

    /**
     * /team/{team_key}/matches/{year}/simple
     * @param teamKey TBA Team Key, eg `frc254`
     * @param year Competition Year (or Season). Must be 4 digits
     * @returns Gets a short-form list of matches for the given team and year
     */
    public async teamMatchesSimple(teamKey: string, year?: number) {
        return this.tba(`team/${teamKey}/matches/${year ?? this._year}/simple`)
            .then((res) => res.json() as Promise<TbaMatch[]>);
    }

    /**
     * /team/{team_key}/matches/{year}/keys
     * @param teamKey TBA Team Key, eg `frc254`
     * @param year Competition Year (or Season). Must be 4 digits
     * @returns Gets a list of match keys for matches for the given team and year
     */
    public async teamMatchesKeys(teamKey: string, year?: number) {
        return this.tba(`team/${teamKey}/matches/${year ?? this._year}/keys`)
            .then((res) => res.json() as Promise<string[]>);
    }

    /**
     * /team/{team_key}/media/{year}
     * @param teamKey TBA Team Key, eg `frc254`
     * @param year Competition Year (or Season). Must be 4 digits
     * @returns Gets a list of Media (videos / pictures) for the given team and year
     */
    public async teamMedia(teamKey: string, year?: number) {
        return this.tba(`team/${teamKey}/media/${year ?? this._year}`)
            .then((res) => res.json() as Promise<TbaMedia[]>);
    }

    /**
     * /team/{team_key}/media/tag/{media_tag}
     * @param teamKey TBA Team Key, eg `frc254`
     * @param mediaTag Media Tag which describes the Media
     * @returns Gets a list of Media (videos / pictures) for the given team and tag
     */
    public async teamMediaTag(teamKey: string, mediaTag: string) {
        return this.tba(`team/${teamKey}/media/tag/${mediaTag}`)
            .then((res) => res.json() as Promise<TbaMedia[]>);
    }

    /**
     * /team/{team_key}/media/tag/{media_tag}/{year}
     * @param teamKey TBA Team Key, eg `frc254`
     * @param mediaTag Media Tag which describes the Media
     * @param year Competition Year (or Season). Must be 4 digits
     * @returns Gets a list of Media (videos / pictures) for the given team, tag and year
     */
    public async teamMediaTagYear(teamKey: string, mediaTag: string, year?: number) {
        return this.tba(`team/${teamKey}/media/tag/${mediaTag}/${year ?? this._year}`)
            .then((res) => res.json() as Promise<TbaMedia[]>);
    }

    /**
     * /team/{team_key}/social_media
     * @param teamKey TBA Team Key, eg `frc254`
     * @returns Gets a list of Media (social media) for the given team
     */
    public async teamSocialMedia(teamKey: string) {
        return this.tba(`team/${teamKey}/social_media`)
            .then((res) => res.json() as Promise<TbaMedia[]>);
    }

    /* event - Calls that return event, or event-specific information */
    /**
     * /event/{event_key}
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets an Event
     */
    public async event(eventKey?: string) {
        return this.tba(`event/${eventKey ?? this._eventKey}`)
            .then((res) => res.json() as Promise<TbaEvent>);
    }

    /**
     * /event/{event_key}/simple
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets a short-form Event
     */
    public async eventSimple(eventKey?: string) {
        return this.tba(`event/${eventKey ?? this._eventKey}/simple`)
            .then((res) => res.json() as Promise<TbaEventSimple>);
    }

    /**
     * /event/{event_key}/alliances
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @return Gets a list of Elimination Alliances for the given Event
     */
    public async eventAlliances(eventKey?: string) {
        return this.tba(`event/${eventKey ?? this._eventKey}/alliances`)
            .then((res) => res.json() as Promise<TbaAlliance[]>);
    }

    /**
     * /event/{event_key}/oprs
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event
     */
    public async eventOprs(eventKey?: string) {
        return this.tba(`event/${eventKey ?? this._eventKey}/oprs`)
            .then((res) => res.json() as Promise<TbaOprs>);
    }

    /**
     * /event/{event_key}/rankings
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets a list of team rankings for the Event
     */
    public async eventRankings(eventKey?: string) {
        return this.tba(`event/${eventKey ?? this._eventKey}/rankings`)
            .then((res) => res.json() as Promise<TbaEventRanking>);
    }

    /**
     * /event/{event_key}/matches
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets a list of matches for the given event
     */
    public async eventMatches(eventKey?: string) {
        return this.tba(`event/${eventKey ?? this._eventKey}/matches`)
            .then((res) => res.json() as Promise<TbaMatch[]>);
    }

    /**
     * /event/{event_key}/matches/simple
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets a short-form list of matches for the given event
     */
    public async eventMatchesSimple(eventKey?: string) {
        return this.tba(`event/${eventKey ?? this._eventKey}/matches/simple`)
            .then((res) => res.json() as Promise<TbaMatch[]>);
    }

    /**
     * /event/{event_key}/matches/keys
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets a list of match keys for the given event
     */
    public async eventMatchesKeys(eventKey?: string) {
        return this.tba(`event/${eventKey ?? this._eventKey}/matches/keys`)
            .then((res) => res.json() as Promise<string[]>);
    }

    /**
     * /event/{event_key}/awards
     * @param eventKey TBA Event Key, eg `2016nytr`
     * @returns Gets a list of awards from the given event
     */
    public async eventAwards(eventKey?: string) {
        return this.tba(`event/${eventKey ?? this._eventKey}/awards`)
            .then((res) => res.json() as Promise<TbaAward[]>);
    }

    /* match - Calls that return match, or match-specific information. */
    /**
     * /match/{match_key}
     * @param matchKey TBA Match Key, eg `2016nytr_qm1`
     * @returns Gets a Match object for the given match key
     */
    public async match(matchKey: string) {
        return this.tba(`match/${matchKey}`)
            .then((res) => res.json() as Promise<TbaMatch>);
    }

    /**
     * /match/{match_key}/simple
     * @param matchKey TBA Match Key, eg `2016nytr_qm1`
     * @returns Gets a short-form Match object for the given match key
     */
    public async matchSimple(matchKey: string) {
        return this.tba(`match/${matchKey}/simple`)
            .then((res) => res.json() as Promise<TbaMatch>);
    }

    /**
     * /match/{match_key}/zebra_motionworks
     * @param matchKey TBA Match Key, eg 2016nytr_qm1
     * @returns Gets Zebra MotionWorks data for a Match for the given match key
     */
    public async matchZebraMotionworks(matchKey: string) {
        return this.tba(`match/${matchKey}/zebra_motionworks`)
            .then((res) => res.json() as Promise<TbaZebraMotionworks>);
    }

    /* district - Calls that return district, or district-related information */

    /**
     * /districts/{year}
     * @param year Competition Year (or Season). Must be 4 digits
     * @returns Gets a list of districts and their corresponding district key, for the given year
     */
    public async districts(year?: number) {
        return this.tba(`districts/${year ?? this._year}`)
            .then((res) => res.json() as Promise<TbaDistrict[]>);
    }
    /************************** END OF The Blue Alliance API Wrappers **************************/
}