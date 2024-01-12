import { PUBLIC_FRC_API_KEY, PUBLIC_FRC_USERNAME } from "$env/static/public";

// TODO: set event info
export const EVENT = {
    season: 2022,
    eventCode: "mose"
};

export const fetchOptions = {
    headers: {
        "Authorization": `Basic ${btoa(`${PUBLIC_FRC_USERNAME}:${PUBLIC_FRC_API_KEY}`)}`
    }
};

export enum AllianceColor {
    red = 0,
    blue = 1
}

export enum WinState {
    Win = 2,
    Loss = 1,
    Tie = 0,
    unset = -1
}

/******************************************************/
export interface FRCSchedule {
    Schedule: Schedule[];
}

export interface Schedule {
    field:           string;
    tournamentLevel: string;
    description:     string;
    startTime:       Date;
    matchNumber:     number;
    teams:           ScheduleTeam[];
}

export interface ScheduleTeam {
    teamNumber: number;
    station:    string;
    surrogate:  boolean;
}

/******************************************************/

export interface FRCTeams {
    teams:          Team[];
    teamCountTotal: number;
    teamCountPage:  number;
    pageCurrent:    number;
    pageTotal:      number;
}

export interface Team {
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

/******************************************************/

export interface FRCMatches {
    Matches: Match[];
}

export interface Match {
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
    teams:           ScheduleTeam[];
}

/******************************************************/

export interface FRCEvents {
    Events:     Event[];
    eventCount: number;
}

export interface Event {
    address:      string;
    website:      string;
    webcasts:     string[];
    timezone:     string;
    code:         string;
    divisionCode: string | null;
    name:         string;
    type:         string;
    districtCode: string;
    venue:        string;
    city:         string;
    stateprov:    string;
    country:      string;
    dateStart:    Date | null;
    dateEnd:      Date | null;
}

/******************************************************/

export interface StatMatch {
    key:                  string;
    year:                 number;
    event:                string;
    comp_level:           CompLevel;
    set_number:           number;
    match_number:         number;
    offseason:            boolean;
    status:               string;
    video:                null | string;
    red_1:                number;
    red_2:                number;
    red_3:                number;
    red_dq:               string;
    red_surrogate:        string;
    red_epa_sum:          number;
    red_auto_epa_sum:     number;
    red_teleop_epa_sum:   number;
    red_endgame_epa_sum:  number;
    red_rp_1_epa_sum:     number;
    red_rp_2_epa_sum:     number;
    blue_1:               number;
    blue_2:               number;
    blue_3:               number;
    blue_dq:              string;
    blue_surrogate:       string;
    blue_epa_sum:         number;
    blue_auto_epa_sum:    number;
    blue_teleop_epa_sum:  number;
    blue_endgame_epa_sum: number;
    blue_rp_1_epa_sum:    number;
    blue_rp_2_epa_sum:    number;
    winner:               Winner;
    epa_winner:           Winner;
    epa_win_prob:         number;
    red_rp_1_prob:        number;
    red_rp_2_prob:        number;
    blue_rp_1_prob:       number;
    blue_rp_2_prob:       number;
    playoff:              boolean;
    time:                 number;
    predicted_time:       number;
    red_score:            number;
    blue_score:           number;
    red_auto:             number;
    red_auto_movement:    number;
    red_teleop:           number;
    red_endgame:          number;
    red_no_fouls:         number;
    red_fouls:            number;
    red_rp_1:             number;
    red_rp_2:             number;
    red_tiebreaker:       number;
    blue_auto:            number;
    blue_auto_movement:   number;
    blue_teleop:          number;
    blue_endgame:         number;
    blue_no_fouls:        number;
    blue_fouls:           number;
    blue_rp_1:            number;
    blue_rp_2:            number;
    blue_tiebreaker:      number;
}

export enum CompLevel {
    F = "f",
    Qm = "qm",
    Sf = "sf",
}

export enum Winner {
    Blue = "blue",
    Draw = "draw",
    Red = "red",
}
