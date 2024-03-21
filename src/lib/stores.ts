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

export enum IntakeStyle {
    Hybrid = 2,
    Ground = 1,
    Station = 0,
    unset = -1
}

export enum EndClimb {
    Hang = 2,
    Park = 1,
    None = 0,
    unset = -1
}

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
    endClimb: EndClimb,
    endHarmony: boolean,
    endTrap: boolean,
    winState: WinState,
    endNotes: string,
    intakeStyle: boolean[],
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
    endClimb: EndClimb.unset,
    endHarmony: false,
    endTrap: false,
    endNotes: "",
    intakeStyle: [ false, false ],
    coopertition: false
};


    
    
export const scoutingData = writable<ScoutingData>(defaultData);

export const compileAndScore = (data: ScoutingData) => score(compile(data));

const compile = (data: ScoutingData) => {
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
        endClimb: data.endClimb,
        endHarmony: (() => {
            if (data.endClimb === EndClimb.Hang)
                return (data.endHarmony ? 1 : 0)
            return 0;
            })(),
        endTrap: (() => {
            if (data.endClimb === EndClimb.Hang)
                return (data.endTrap ? 1 : 0)
            return 0;
            })(),
        intakeStyle: (() => {
            if (data.intakeStyle[0] && data.intakeStyle[1])
                return IntakeStyle.Hybrid;
            else if (data.intakeStyle[0])
                return IntakeStyle.Station;
            else if (data.intakeStyle[1])
                return IntakeStyle.Ground;
            else
                return IntakeStyle.unset;
        })(),
        winState: data.winState,
        endNotes: data.endNotes.replace(/\n/g, " ")
    };

    return compiledData;
};

export const score = (data: Database["public"]["Tables"]["scouting-data"]["Row"]) => {

    let autoScore =
        (2 * (data.autoAmp ?? 0)) +
        (5 * (data.autoSpeaker ?? 0)) +
        (data.autoTaxi ? 2 : 0);

    let teleScore =
        (data.teleAmp ?? 0) +
        (2 * (data.teleSpeaker ?? 0));

    let endScore =
        (data.endHarmony ? 2 : 0) +
        (data.endTrap ? 5 : 0) +
        (() => {
            switch (data.endClimb) {
                case EndClimb.Hang:
                    return 3;
                case EndClimb.Park:
                    return 1;
                default:
                    return 0;
            }
        })(); 

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