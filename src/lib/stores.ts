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
    win: number,
    teleSpeaker: number,
    teleAmp: number,
    teleAmpedSpeaker: number,
    endClimb: boolean,
    endHarmony: boolean,
    endTrap: boolean,
    gameOutcome: WinState,
    endNotes: string,
    endPark: boolean,
    endHighNote: boolean,
    endSpotlight: boolean,
    intakeStyle: number,
    cooperatition: boolean,
    
};

const defaultData: ScoutingData = {
id: 0,
matchid: 0,
teamid: 0,
teamcolor: AllianceColor.red,
autoTaxi: false,
autoAmp: 0,
autoSpeaker: 0,
 win: 0,
teleSpeaker: 0,
teleAmp: 0,
teleAmpedSpeaker: 0,
endClimb: false,
endHarmony: false,
endTrap: false, 
gameOutcome: 0,
endNotes: "",
endPark: false,
endHighNote: false,
endSpotlight: false,
intakeStyle: 0,
cooperatition: false,

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
        autoTaxi: data.autoTaxi,
        autoAmp: data.autoAmp,
        autoSpeaker: data.autoSpeaker,
        teleSpeaker: data.teleSpeaker,
        teleAmp: data.teleAmp,
        //teleAmpedSpeaker: data.teleAmpedSpeaker,
       endClimb: data.endClimb,
       endHarmony: data.endHarmony,
       endTrap: data.endTrap,
       //win tie loss
       endNotes: data.endNotes,
       endPark: data.endPark,
       endHighNote: data.endHighNote,
       endSpotlight: data.endSpotlight,
       intakeStyle: data.intakeStyle,
      // cooperatition: data.cooperatition,
       
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