namespace FRC {
    export enum DistrictCode {
        FMA = "fma",
        PNW = "pnw",
        NE  = "ne",
        FIN = "fin",
        FNC = "fnc",
        ONT = "ont",
        ISR = "isr",
        CHS = "chs",
        FIT = "fit",
        PCH = "pch",
        FIM = "fim",
    }

    export enum TournamentType {
        None = "None",
        Regional = "Regional",
        DistrictEvent = "DistrictEvent",
        DistrictChampionship = "DistrictChampionship",
        DistrictChampionshipWithLevels = "DistrictChampionshipWithLevels",
        DistrictChampionshipDivision = "DistrictChampionshipDivision",
        ChampionshipSubdivision = "ChampionshipSubdivision",
        ChampionshipDivision = "ChampionshipDivision",
        Championship = "Championship",
        OffSeason = "OffSeason",
        OffSeasonWithAzureSync = "OffSeasonWithAzureSync"
    }

    export enum TournamentLevel {
        None = "None",
        Practice = "Practice",
        Qualification = "Qualification",
        Playoff = "Playoff"
    }

    export enum AllianceNumbers {
        TwoAlliance = "TwoAlliance",
        FourAlliance = "FourAlliance",
        SixAlliance = "SixAlliance",
        EightAlliance = "EightAlliance",
        SixteenAlliance = "SixteenAlliance"
    }

    export enum AllianceRole {
        None = "None",
        Captain = "Captain",
        Round1 = "Round1",
        Round2 = "Round2",
        Round3 = "Round3",
        Backup = "Backup"
    }

    export enum States {
        Alabama = "AL",
        Kentucky = "KY",
        Ohio = "OH",
        Alaska = "AK",
        Louisiana = "LA",
        Oklahoma = "OK",
        Arizona = "AZ",
        Maine = "ME",
        Oregon = "OR",
        Arkansas = "AR",
        Maryland = "MD",
        Pennsylvania = "PA",
        AmericanSamoa = "AS",
        Massachusetts = "MA",
        PuertoRico = "PR",
        California = "CA",
        Michigan = "MI",
        RhodeIsland = "RI",
        Colorado = "CO",
        Minnesota = "MN",
        SouthCarolina = "SC",
        Connecticut = "CT",
        Mississippi = "MS",
        SouthDakota = "SD",
        Delaware = "DE",
        Missouri = "MO",
        Tennessee = "TN",
        DC = "DC",
        Montana = "MT",
        Texas = "TX",
        Florida = "FL",
        Nebraska = "NE",
        TrustTerritories = "TT",
        Georgia = "GA",
        Nevada = "NV",
        Utah = "UT",
        Guam = "GU",
        NewHampshire = "NH",
        Vermont = "VT",
        Hawaii = "HI",
        NewJersey = "NJ",
        Virginia = "VA",
        Idaho = "ID",
        NewMexico = "NM",
        VirginIslands = "VI",
        Illinois = "IL",
        NewYork = "NY",
        Washington = "WA",
        Indiana = "IN",
        NorthCarolina = "NC",
        WestVirginia = "WV",
        Iowa = "IA",
        NorthDakota = "ND",
        Wisconsin = "WI",
        Kansas = "KS",
        NorthernMarianIslands = "MP",
        Wyoming = "WY",
    }
}

interface FrcRoot {
    currentSeason: number;
    maxSeason:     number;
    name:          string;
    apiVersion:    string;
    status:        string;
}
/****************************************/
interface FrcSeason {
    eventCount:       number;
    gameName:         string;
    kickoff:          Date;
    rookieStart:      number;
    teamCount:        number;
    frcChampionships: FrcChampionship[];
}

interface FrcChampionship {
    name:      string;
    startDate: Date;
    location:  string;
}
/****************************************/
interface FrcEvents {
    Events:     Event[];
    eventCount: number;
}

interface FrcEvent {
    address:      string;
    website:      string;
    webcasts:     any[];
    timezone:     string;
    code:         string;
    divisionCode: null;
    name:         string;
    type:         string;
    districtCode: string;
    venue:        string;
    city:         string;
    stateprov:    string;
    country:      string;
    dateStart:    Date;
    dateEnd:      Date;
}
/****************************************/
interface FrcDistricts {
    districts:     District[];
    districtCount: number;
}

interface FrcDistrict {
    code: string;
    name: string;
}
/****************************************/
interface FrcTeams {
    teams:          Team[];
    teamCountTotal: number;
    teamCountPage:  number;
    pageCurrent:    number;
    pageTotal:      number;
}

interface FrcTeam {
    schoolName:   string;
    website:      string;
    homeCMP:      string;
    teamNumber:   number;
    nameFull:     string;
    nameShort:    string;
    city:         string;
    stateProv:    string;
    country:      string;
    rookieYear:   number;
    robotName:    string;
    districtCode: null;
}
/****************************************/
interface FrcAvatars {
    teams:          FrcAvatar[];
    teamCountTotal: number;
    teamCountPage:  number;
    pageCurrent:    number;
    pageTotal:      number;
}

interface FrcAvatar {
    teamNumber:    number;
    encodedAvatar: string;
}
/****************************************/
interface FrcEventAwards {
    Awards: FrcListAward[];
}

interface FrcAward {
    awardId:         number;
    teamId:          number | null;
    eventId:         number;
    eventDivisionId: null;
    eventCode:       string;
    name:            string;
    series:          number;
    teamNumber:      number | null;
    schoolName:      null | string;
    fullTeamName:    null | string;
    person:          null | string;
}
/****************************************/
interface FrcAwardList {
    awards: FrcListAward[];
}

interface FrcListAward {
    awardId:     number;
    eventType:   string;
    description: string;
    forPerson:   boolean;
}
/****************************************/
interface FrcTeamAward {
    Awards: Award[];
}

interface FrcAwardTeam {
    awardId:         number;
    teamId:          number;
    eventId:         number;
    eventDivisionId: string | null;
    eventCode:       string;
    name:            string;
    series:          number;
    teamNumber:      number;
    schoolName:      string;
    fullTeamName:    string;
    person:          string | null;
}
/****************************************/
interface FrcEventMatchResults {
    Matches: Match[];
}

interface FrcMatch {
    actualStartTime: Date;
    tournamentLevel: string;
    postResultTime:  Date;
    description:     string;
    matchNumber:     number;
    scoreRedFinal:   number;
    scoreRedFoul:    number;
    scoreRedAuto:    number;
    scoreBlueFinal:  number;
    scoreBlueFoul:   number;
    scoreBlueAuto:   number;
    teams:           Team[];
}

interface FrcTeam {
    teamNumber: number;
    station:    FrcStation;
    dq:         boolean;
}

enum FrcStation {
    Blue1 = "Blue1",
    Blue2 = "Blue2",
    Blue3 = "Blue3",
    Red1 = "Red1",
    Red2 = "Red2",
    Red3 = "Red3",
}
/****************************************/
interface FrcEventRankings {
    Rankings: {
        rank:          number;
        teamNumber:    number;
        sortOrder1:    number;
        sortOrder2:    number;
        sortOrder3:    number;
        sortOrder4:    number;
        sortOrder5:    number;
        sortOrder6:    number;
        wins:          number;
        losses:        number;
        ties:          number;
        qualAverage:   number;
        dq:            number;
        matchesPlayed: number;
    }[];
}
/****************************************/
interface FrcDistrictRankings {
    districtRanks:     DistrictRank[];
    rankingCountTotal: number;
    rankingCountPage:  number;
    pageCurrent:       number;
    pageTotal:         number;
}

interface FrcDistrictRank {
    districtCode:         FRC.DistrictCode;
    teamNumber:           number;
    rank:                 number;
    totalPoints:          number;
    event1Code:           null;
    event1Points:         null;
    event2Code:           null;
    event2Points:         null;
    districtCmpCode:      null;
    districtCmpPoints:    null;
    teamAgePoints:        number;
    adjustmentPoints:     number;
    qualifiedDistrictCmp: boolean;
    qualifiedFirstCmp:    boolean;
}
/****************************************/
interface FrcSchedule {
    Schedule: __FrcSchedule__[];
}

interface __FrcSchedule__ {
    field:           string;
    tournamentLevel: FRC.TournamentLevel;
    description:     string;
    startTime:       Date;
    matchNumber:     number;
    teams:           {
        teamNumber: number;
        station:    FrcStation;
        surrogate:  boolean;
    }[];
}
/****************************************/
interface FrcAlliances {
    Alliances: {
        number:         number;
        captain:        number;
        round1:         number;
        round2:         number;
        round3:         number | null;
        backup:         number | null;
        backupReplaced: number | null;
        name:           string;
    }[];
    count:     number;
}
/****************************************/