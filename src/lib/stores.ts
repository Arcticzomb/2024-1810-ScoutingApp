import { writable } from "svelte/store";
import type { Database } from "./supabase";

/******************************************************/

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

// TODO: add all of the data that the scouting app needs to collect
export interface ScoutingData {
    id: number;
    matchid: number;
    teamid: number;
    teamcolor: AllianceColor;
    autoTaxi: boolean;
    autoAmp: number;
    autoSpeaker: number,
    teleSpeaker: number,
    teleAmp: number,
    //teleAmpedSpeaker: number,
    endClimb: number, // 0 none; 1 park; 2 hang
    endHarmony: boolean,
    endTrap: boolean,
    winState: number, // 0 tie; 1 loss; 2 win;
    endNotes: string,
    endSpotlight: boolean,
    intakeStyle: number,
    coopertition: boolean,
    
};

const defaultData: ScoutingData = {
    id: 0,
    matchid: 0,
    teamid: 0,
    teamcolor: AllianceColor.red,
    autoTaxi: false,
    autoAmp: 0,
    autoSpeaker: 0,
    winState: WinState.unset,
    teleSpeaker: 0,
    teleAmp: 0,
    //teleAmpedSpeaker: 0,
    endClimb: 0,
    endHarmony: false,
    endTrap: false, 
    endNotes: "",
    endSpotlight: false,
    intakeStyle: -1,
    coopertition: false,

};


    
    
export const scoutingData = writable<ScoutingData>(defaultData);

export const compileAndScore = (data: ScoutingData) => score(compile(data));

const compile = (data: ScoutingData) => {
    // TODO: compile all of the data to be able to be sent to the database
    const compiledData: Database["public"]["Tables"]["scouting-data"]["Row"] = {
        id: data.id,
        teamid: data.teamid,
        matchid: data.matchid,
        allianceColor: data.teamcolor,
        autoTaxi: data.autoTaxi ? 1 : 0,
        autoSpeaker: data.autoSpeaker,
        autoAmp: data.autoAmp,
        teleSpeaker: data.teleSpeaker,
        teleAmp: data.teleAmp,
        coopertition: data.coopertition ? 1 : 0,
        intakeStyle: data.intakeStyle,
        endClimb: data.endClimb,
        endHarmony: data.endHarmony ? 1 : 0,
        endTrap: data.endTrap ? 1 : 0,
        endSpotlight: data.endSpotlight ? 1 : 0,
        winState: data.winState,
        endNotes: data.endNotes.replace(/\n/g, " "),       
    };

    return compiledData;
};

export const score = (data: Database["public"]["Tables"]["scouting-data"]["Row"]) => {

    // TODO: write the scoring of the data
    let autoScore = 2 * (data.autoAmp ?? 0) + 5 * (data.autoSpeaker ?? 0);
    let teleScore = 1 * (data.teleAmp ?? 0) + 2 * (data.teleSpeaker ?? 0);
    let endScore = 0;
    if (data.autoTaxi == 1) { autoScore += 1; }
    if (data.endClimb == 0) { endScore += 0 } else if (data.endClimb == 1) { endScore += 1 } else if (data.endClimb == 2) { endScore += 3 }

    return {
        compiledData: data,
        scoredData: {
            auto: autoScore, 
            teleop: teleScore,
            endgame: endScore,


        }
    };
};

/******************************************************/

export enum ScoutingPage {
    auto,
    teleop,
    endgame,
    finishLine,
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