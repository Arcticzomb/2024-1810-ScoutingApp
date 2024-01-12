<script lang="ts">
    import { ppgStore } from "$lib/stores";

    export let index: number;
    export let teams: {
        teamNumber: number;
        teamName: string;
    }[];

    const ppg = $ppgStore[index];
    const percentileColor = (percentile: number) => {
        var ret = "";
        if (percentile >= 95)
            ret = "bg-yellow-500 text-yellow-950 font-bold";
        else if (percentile >= 85)
            ret = "bg-green-600 text-green-950 font-semibold";
        else if (percentile >= 75)
            ret = "bg-green-400 text-green-950 font-normal";
        else if (percentile <= 25)
            ret = "bg-red-400 text-red-950 font-thin";
        return "px-4 rounded " + ret;
    };

    const round = (num: number) => Math.round(num * 10) / 10;

    const calculatePercentileRanks = (arr: number[]): {[key: number]: number} => {
        const sortedArr = [...arr].sort((a, b) => a - b);
        const result: {[key: number]: number} = {};

        for (let i = 0; i < arr.length; i++) {
            const index = sortedArr.indexOf(arr[i]);
            const percentile = (index / (arr.length - 1)) * 100;
            const roundedPercentile = Math.round(percentile * 100) / 100;

            result[arr[i]] = roundedPercentile;
        }

        return result;
    }

    const ppgArray = $ppgStore;
    const overall = calculatePercentileRanks(ppgArray.map((ppg) => ppg.pointTotal / ppg.matchesPlayed));
    const auto = calculatePercentileRanks(ppgArray.map((ppg) => ppg.meanAuto));
    const teleop = calculatePercentileRanks(ppgArray.map((ppg) => ppg.meanTeleop));
    const endgame = calculatePercentileRanks(ppgArray.map((ppg) => ppg.meanEndgame));
</script>

<tr>
    <td class="border-t">{ppg.teamid}</td>
    <td class="border-t border-x break-words">
        <a href={`https://thebluealliance.com/team/${ppg.teamid}`} target="_blank" class="underline text-link font-normal">
            {teams.find((team) => team.teamNumber === ppg.teamid)?.teamName ?? ppg.teamid.toString()}
        </a>
    </td>
    <td class="border-t border-x">{index + 1}</td>
    <td class="border-t border-x max-md:hidden">{Math.round(((($ppgStore.length - 1) - index) / $ppgStore.length) * 100)}</td>
    <td class="border-t md:border-x max-md:border-l"><span class={percentileColor(overall[ppg.pointTotal / ppg.matchesPlayed])}>{round(ppg.pointTotal / ppg.matchesPlayed)}</span></td>
    <td class="border-t border-x max-md:hidden"><span class={percentileColor(auto[ppg.meanAuto])}>{round(ppg.meanAuto)}</span></td>
    <td class="border-t border-x max-md:hidden"><span class={percentileColor(teleop[ppg.meanTeleop])}>{round(ppg.meanTeleop)}</span></td>
    <td class="border-t max-md:hidden"><span class={percentileColor(endgame[ppg.meanEndgame])}>{round(ppg.meanEndgame)}</span></td>
</tr>