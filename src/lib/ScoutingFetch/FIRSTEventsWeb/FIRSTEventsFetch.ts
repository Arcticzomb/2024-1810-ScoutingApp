import { APIs, Fetch } from "../BaseFetch";
import querystring from "node:querystring";

export class FIRSTEventsFetch extends Fetch {

    private FIRSTEventsRequest: RequestInit | undefined;

    constructor(FIRSTEventsRequest: RequestInit | undefined, year: number, event: string) {
        super(year, event);
        this.FIRSTEventsRequest = FIRSTEventsRequest;
    }

    private frc(subpath: string, options?: {}) { return Fetch.f(APIs.FIRSTEvents, subpath, options, this.FIRSTEventsRequest); }

    /****************************** FIRST Events Web API Wrappers ******************************/
    // All functions are better explained on the FIRST Events API docs:
    // https://frc-api-docs.firstinspires.org/

    /**
     * /
     * @returns Root level call with no parameters
     */
    public async root() {
        return this.frc("")
            .then((res) => res.json() as Promise<FrcRoot>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season
     * @param year Numeric year of the event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @returns The season summary API returns a high level glance of a particular FRC season
     */
    public async season(year?: number) {
        return this.frc(`${year ?? this._year}`)
            .then((res) => res.json() as Promise<FrcSeason>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/events?eventCode=&teamNumber=&districtCode=&excludeDistrict=&weekNumber&tournamentType
     * @param year Numeric year of the event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @param options.eventCode Case insensitive alphanumeric eventCode of the event about which details are requested
     * @param options.teamNumber Numeric teamNumber of the team from which the attending event listings are requested
     * @param options.districtCode Case insensitive districtCode of the district from which event listings are requested - district code are in the `FRCDistrictCode` enum
     * @param options.excludeDistrict Boolean to specify whether or not to exclude district events in the event listings. true means exclude, but if no value is specified, false will be used (include district events). Excluding district events also excludes district championships
     * @param options.weekNumber Week during the FRC season that the event takes place
     * @param options.tournamentType Type of event to perform the calculation on - Tournament types are in the `FRC.TournamentType` enum
     * @returns The event listings API returns all FRC official district and regional events in a particular season
     */
    public async events(year?: number, options?: {
        eventCode?: string,
        teamNumber?: number
        districtCode?: FRC.DistrictCode | string,
        excludeDistrict?: boolean
        weekNumber?: number,
        tournamentType?: FRC.TournamentType | string
    }) {
        return this.frc(`${year ?? this._year}/events`, options)
            .then((res) => res.json() as Promise<FrcEvents>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/districts
     * @param year Numeric year of the event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @returns The district listings API returns all FRC official districts of a particular season
     */
    public async districts(year?: number) {
        return this.frc(`${year ?? this._year}/districts`)
            .then((res) => res.json() as Promise<FrcDistricts>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/teams?teamNumber=&eventCode=&districtCode=&state=&page=
     * @param options.teamNumber Numeric teamNumber of the team about which information is requested. Must be 1 to 4 digits
     * @param options.eventCode Case insensitive alphanumeric eventCode of the event from which details are requested
     * @param options.districtCode Case insensitive districtCode of the district from which event listings are requested - district code are in the `FRCDistrictCode` enum
     * @param options.state Name of the state or province the desired teams are located
     * @param options.page Numeric page of results to return. If not included, page 1 will be returned
     * @param year Numeric year of the event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @returns The team listings API returns all FRC official teams in a particular season
     */
    public async teams(options?: {
        teamNumber?: number,
        eventCode?: string,
        districtCode?: FRC.DistrictCode | string,
        state?: FRC.States | string,
        page?: number
    }, year?: number) {
        return this.frc(`${year ?? this._year}/teams`, options)
            .then((res) => res.json() as Promise<FrcTeams>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/avatars?teamNumber=&eventCode=&page=
     * @param year Numeric year of the event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @param options.teamNumber Numeric teamNumber of the team about which information is requested. Must be 1 to 4 digits
     * @param options.eventCode Case insensitive alphanumeric eventCode of the event from which details are requested
     * @param options.page Numeric page of results to return. If not included, page 1 will be returned
     * @returns The team avatar listings API returns all FRC official teams in a particular season with, if applicable, their Avatar in base-64
     */
    public async avatars(year?: number, options?: {
        teamNumber?: number,
        eventCode?: string,
        page?: number
    }) {
        return this.frc(`${year ?? this._year}/avatars`, options)
            .then((res) => res.json() as Promise<FrcAvatars>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/awards/event/:eventCode
     * @param year Numeric year of the event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @param eventCode Optional case insensitive alphanumeric eventCode of the event from which the awards are requested. Must be at least 3 characters
     * @returns details about awards presented at a particular event in a particular season
     */
    public async eventAwards(year?: number, eventCode?: string) {
        return this.frc(`${year ?? this._year}/awards/event/${eventCode ?? this._event}`)
            .then((res) => res.json() as Promise<FrcEventAwards>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/awards/list
     * @param year Numeric year of the event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @returns a listing of the various awards that can be distributed in the requested season
     */
    public async awards(year?: number) {
        return this.frc(`${year ?? this._year}/awards/list`)
            .then((res) => res.json() as Promise<FrcAwardList>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/awards/team/:teamNumber
     * @param teamNumber Numeric teamNumber of the team about which information is requested. Must be 1 to 4 digits
     * @param year Numeric year of the team from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @returns details about awards presented for a particular team in a particular season
     */
    public async teamAwards(teamNumber: number, year?: number) {
        return this.frc(`${year ?? this._year}/awards/team/${teamNumber}`)
            .then((res) => res.json() as Promise<FrcTeamAward>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/awards/eventteam/:eventCode/:teamNumber
     * @param eventCode alphanumeric eventCode of the event from which the awards are requested. Must be at least 3 characters
     * @param teamNumber Numeric teamNumber of the team about which information is requested. Must be 1 to 4 digits
     * @param year Numeric year of the team and event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @returns details about awards presented at a particular event in a particular season for a particular team
     */
    public async eventTeamAwards(eventCode: string, teamNumber: number, year?: number) {
        return this.frc(`${year ?? this._year}/awards/eventteam/${eventCode}/${teamNumber}`)
            .then((res) => res.json() as Promise<FrcTeamAward>);
    }

    /**
     * FIXME: Type needs to be remade each year
     * https://frc-api.firstinspires.org/v3.0/:season/scores/:eventCode/:tournamentLevel?matchNumber=&start=&end=
     * @param tournamentLevel Required tournamentLevel of desired score details
     * @param options.matchNumber Optional specific single matchNumber of result
     * @param options.start Optional start match number for subset of results to return (inclusive)
     * @param options.end Optional end match number for subset of results to return (inclusive)
     * @param eventCode Case insensitive alphanumeric eventCode of the event from which the details are requested. Must be at least 3 characters
     * @param year Numeric year of the event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @returns the score detail for all matches of a particular event in a particular season and a particular tournament level. Score details are only available once a match has been played, retrieving info about future matches requires the event schedule API. You cannot receive data about a match that is in progress
     */
    public async score(tournamentLevel: FRC.TournamentLevel | string, options?: {
        matchNumber?: number,
        start?: number,
        end?: number
    }, eventCode?: string, year?: number) {
        return this.frc(`${year ?? this._year}/scores/${eventCode ?? this._event}/${tournamentLevel}`, options)
            .then((res) => res.json() as Promise<any>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/matches/:eventCode?tournamentLevel=&teamNumber=&matchNumber=&start=&end=
     * @param options.tournamentLevel Optional tournamentLevel of desired match results
     * @param options.teamNumber Optional teamNumber to search for within the results. Only returns match results in which the requested team was a participant
     * @param options.matchNumber Optional specific single matchNumber of result
     * @param options.start Optional start match number for subset of results to return
     * @param options.end Optional end match number for subset of results to return (inclusive)
     * @param year Numeric year of the event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @param eventCode Case insensitive alphanumeric eventCode of the event from which the results are requested. Must be at least 3 characters
     * @returns the match results for all matches of a particular event in a particular season
     */
    public async eventMatchResults(options?: {
        tournamentLevel?: FRC.TournamentLevel | string,
        teamNumber?: number,
        matchNumber?: number,
        start?: number,
        end?: number
    }, year?: number, eventCode?: string) {
        return this.frc(`${year ?? this._year}/matches/${eventCode ?? this._event}`, options)
            .then((res) => res.json() as Promise<FrcEventMatchResults>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/rankings/district/qualPerformanceCalculation
     * @param params.tournamentType Type of event to perform the calculation on using `FRC.TournamentType` enum
     * @param params.qualificationRank Numbered rank of the desired team in the qualification matches
     * @param params.teamsAtEvent Number of teams in the event
     * @param year Numeric year of the event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @returns Qual Performance Points is one of three endpoints to assist teams in figuring out how to improve their performance to achieve the desired district ranking placement. It is to determine the Event Total points
     */
    public async qualPerformancePoints(params: {
        tournamentType: FRC.TournamentType | string,
        qualificationRank: number,
        teamsAtEvent: number
    }, year?: number) {
        return this.frc(`${year ?? this._year}/rankings/district/qualPerformanceCalculation`, params)
            .then((res) => res.json() as Promise<number>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/rankings/district/allianceSelectionCalculation
     * @param params.tournamentType Type of event to perform the calculation on using `FRC.TournamentType` enum
     * @param params.sizeType Number of alliances in the playoffs for the event using the `FRC.AllianceNumbers` enum
     * @param params.allianceNumber The number of the playoff alliance the team is on
     * @param params.allianceRole Team's role in the playoff alliance using the `FRC.AllianceRole` enum
     * @param year Numeric year of the event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @returns Alliance Selection Points is one of three endpoints to assist teams in figuring out how to improve their performance to achieve the desired district ranking placement. It is to determine the Event Total points
     */
    public async allianceSelectionPoints(params: {
        tournamentType: FRC.TournamentType | string,
        sizeType: FRC.AllianceNumbers | string,
        allianceNumber: number,
        allianceRole: FRC.AllianceRole | string
    }, year?: number) {
        return this.frc(`${year ?? this._year}/rankings/district/allianceSelectionCalculation`, params)
            .then((res) => res.json() as Promise<number>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/rankings/district/playoffAdvancementCalculation
     * @param params.tournamentType Type of event to perform the calculation on using `FRC.TournamentType` enum
     * @param params.quarterFinalWins Number of Quarterfinal matches the team has won
     * @param params.semiFinalWins Number of Semifinal matches the team has won
     * @param params.finalWins Number of Final matches the team has won
     * @param year Numeric year of the event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @returns Playoff Advancement Points is one of three endpoints to assist teams in figuring out how to improve their performance to achieve the desired district ranking placement. It is to determine the Event Total points
     */
    public async playoffAdvancmentPoints(params: {
        tournamentType: FRC.TournamentType | string,
        quarterFinalWins: number,
        semiFinalWins: number,
        finalWins: number,
    }, year?: number) {
        return this.frc(`${year ?? this._year}/rankings/district/playoffAdvancementCalculation`, params)
            .then((res) => res.json() as Promise<number>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/rankings/:eventCode?teamNumber=&top=
     * @param options Cannot be specified together
     * @param options.teamNumber Optional team number of the team whose ranking is requested
     * @param options.top Optional number of requested top ranked teams to return in result
     * @param eventCode Case insensitive alphanumeric eventCode of the event from which the rankings are requested. Must be at least 3 characters
     * @param year Numeric year of the event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @returns team ranking detail from a particular event in a particular season
     */
    public async eventRankings(options?: {
        teamNumber?: number,
        top?: number
    }, eventCode?: string, year?: number) {
        return this.frc(`${year ?? this._year}/rankings/${eventCode ?? this._event}`, options)
            .then((res) => res.json() as Promise<FrcEventRankings>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/rankings/district?districtCode=&teamNumber=&top=&page=
     * @param options You must specify a `districtCode` unless a `teamNumber` is being specified. If a `teamNumber` is specified, do not include any other paramaters. Optionally, the `top` parameter can be added to the query string to request a subset of the rankings based on the highest ranked teams at the time of the request. Alternately, you can specify the `teamNumber` parameter to retrieve the ranking on one specific team. You cannot specify both a `top` and `teamNumber` in the same call. If you specify a `page`, you cannot specify a `top`
     * @param options.districtCode Case insensitive alphanumeric districtCode of the district from which the rankings are requested using `FRC.DistrictCode` enum
     * @param options.teamNumber Optional team number of the team whose ranking is requested
     * @param options.top Optional number of requested top ranked teams to return in result
     * @param options.page Numeric page of results to return. If not included, page 1 will be returned
     * @param year Numeric year of the event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @returns team ranking detail from a particular team in a particular season
     */
    public async districtRankings(options?: {
        districtCode?: FRC.DistrictCode | string,
        teamNumber?: number,
        top?: number,
        page?: number
    },  year?: number) {
        return this.frc(`${year ?? this._year}/rankings/district`, options)
            .then((res) => res.json() as Promise<FrcDistrictRankings>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/schedule/:eventCode?tournamentLevel=&teamNumber=&start=&end=
     * @param options You must also specify a tournamentLevel from which to return the results. Alternately, you can specify a teamNumber to filter the results to only those in which a particular team is participating. There is no validation that the teamNumber you request is actually competing at the event, if they are not, the response will be empty. You can also specify the parameters together, but cannot make a request without at least one of the two
     * @param options.tournamentLevel tournamentLevel of desired match schedule using `FRC.TournamentLevel` enum
     * @param options.teamNumber Optional teamNumber to search for within the schedule. Only returns matches in which the requested team participated
     * @param options.start Optional start match number for subset of results to return (inclusive)
     * @param options.end Optional end match number for subset of results to return (inclusive)
     * @param eventCode Case insensitive alphanumeric eventCode of the event from which the schedule are requested. Must be at least 3 characters
     * @param year Numeric year of the event from which the award listings are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @returns the match schedule for the desired tournament level of a particular event in a particular season
     */
    public async schedule(options?: {
        tournamentLevel?: FRC.TournamentLevel | string,
        teamNumber?: number,
        start?: number,
        end?: number,
    }, eventCode?: string, year?: string) {
        return this.frc(`${year ?? this._year}/schedule/${eventCode ?? this._event}`, options)
            .then((res) => res.json() as Promise<FrcSchedule>);
    }

    /**
     * https://frc-api.firstinspires.org/v3.0/:season/alliances/:eventCode
     * @param year Numeric year of the event from which the event alliances are requested. Must be 4 digits and greater than or equal to 2015, and less than or equal to the current year
     * @param eventCode Case insensitive alphanumeric eventCode of the event from which the alliance selection results are requested. Must be at least 3 characters
     * @returns details about alliance selection at a particular event in a particular season
     */
    public async alliances(year?: number, eventCode?: string) {
        return this.frc(`${year ?? this._year}/alliances/${eventCode ?? this._event}`)
            .then((res) => res.json() as Promise<FrcAlliances>);
    }
    /************************** END OF FIRST Events Web API Wrappers **************************/
}