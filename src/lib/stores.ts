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
    endHighNote: boolean,
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
winState: -1,
teleSpeaker: 0,
teleAmp: 0,
//teleAmpedSpeaker: 0,
endClimb: 0,
endHarmony: false,
endTrap: false, 
endNotes: "",
endHighNote: false,
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
        matchid: data.matchid,
        teamid: data.teamid,
        allianceColor: data.teamcolor,
        autoTaxi: data.autoTaxi ? 1 : 0,
        autoAmp: data.autoAmp,
        autoSpeaker: data.autoSpeaker,
        teleSpeaker: data.teleSpeaker,
        teleAmp: data.teleAmp,
        //teleAmpedSpeaker: data.teleAmpedSpeaker,
        endClimb: data.endClimb,
        endHarmony: data.endHarmony ? 1 : 0,
        endTrap: data.endTrap ? 1 : 0,
        winState: data.winState,
        endNotes: data.endNotes.replace(/\n/g, " "),
        endHighNote: data.endHighNote ? 1 : 0,
        endSpotlight: data.endSpotlight ? 1 : 0,
        intakeStyle: data.intakeStyle,
        coopertition: data.coopertition ? 1 : 0,
       
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
            endgame: 0,


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