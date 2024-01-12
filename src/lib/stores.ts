import { writable } from "svelte/store";
import { AllianceColor } from "./types";
import type { Database } from "./supabase";

/******************************************************/

// TODO: add all of the data that the scouting app needs to collect
export interface ScoutingData {
    id: number;
    matchid: number;
    teamid: number;
    teamcolor: AllianceColor;
}

const defaultData: ScoutingData = {
    id: 0,
    matchid: 0,
    teamid: 0,
    teamcolor: AllianceColor.red
};

export const scoutingData = writable<ScoutingData>(defaultData);

export const compileAndScore = (data: ScoutingData) => score(compile(data));

const compile = (data: ScoutingData) => {
    // TODO: compile all of the data to be able to be sent to the database
    const compiledData: Database["public"]["Tables"]["scouting-data"]["Row"] = {
        id: data.id,
        matchid: data.matchid,
        teamid: data.teamid,
        allianceColor: data.teamcolor
    };

    return compiledData;
};

export const score = (data: Database["public"]["Tables"]["scouting-data"]["Row"]) => {

    // TODO: write the scoring of the data
    return {
        compiledData: data,
        scoredData: {
            auto: 0,
            teleop: 0,
            endgame: 0
        }
    };
};

/******************************************************/

export enum ScoutingPage {
    auto,
    teleop,
    endgame,
    loading
}

export const scoutingPage = writable<ScoutingPage>(ScoutingPage.auto);

/******************************************************/

export interface PPG {
    matchesPlayed: number;
    meanTeleop: number;
    meanAuto: number;
    meanEndgame: number;
    pointTotal: number;
    teamid: number;
    totalAuto: number;
    totalEndgame: number;
    totalTeleop: number;
}

export const ppgStore = writable<PPG[]>();

export const setPPGData = (ppg: PPG[], teamid: number) => {
    if (!ppg.some((team) => team.teamid === teamid)) {
        ppgStore.update((ppg) => [
            ...ppg,
            {
                matchesPlayed: 0,
                meanTeleop: 0,
                meanAuto: 0,
                meanEndgame: 0,
                pointTotal: 0,
                teamid: teamid,
                totalAuto: 0,
                totalEndgame: 0,
                totalTeleop: 0
            }
        ]);
    }
};

/******************************************************/