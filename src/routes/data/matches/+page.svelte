<svelte:head>
    <title>[NAME] | Matches</title>
</svelte:head>

<script lang="ts">
    import { EVENT, type StatMatch } from "$lib/types";
    import type { PageData } from "./$types";

    export let data: PageData;
    const matches = data.statMatch;

    matches.sort((a, b) => a.match_number - b.match_number);

    const winningColor = (stat: StatMatch) => {
        if (stat.winner === stat.epa_winner) {
            return "bg-green-500 text-green-950";
        } else if (
            (stat.winner ===  "red" && stat.epa_winner === "blue") ||
            (stat.winner ===  "blue" && stat.epa_winner === "red") ||
            (stat.winner === "draw")) {
            return "bg-red-500 text-black";
        }

        return "bg-primary text-w";
    };

    const rankingPoints = (stat: StatMatch, alliance: string) => {
        var ret = "";
        var totalrp = 0;

        if (alliance === "red") {
            totalrp = (stat.red_rp_1 ?? 0) + (stat.red_rp_2 ?? 0);
        } else {
            totalrp = (stat.blue_rp_1 ?? 0) + (stat.blue_rp_2 ?? 0);
        }

        for (var i = 0; i < totalrp; i++)
            ret += "●";

        return ret;
    };
</script>

<div class="w-full flex justify-center text-center my-8">
    <a href={`https://www.thebluealliance.com/event/${EVENT.season}${EVENT.eventCode}`} target="_blank" class="flex w-fit">
        <h1 class="text-w text-4xl font-thin">{EVENT.season} {data.eventName}</h1>
        <img src="/tba.webp" alt="" class="m-2"/>
    </a>
</div>

<hr class="mx-16 my-8">

<div class="mx-24 mb-8 portrait:hidden max-sm:hidden">
    <table class="text-w text-lg border-4 border-primary w-full">
        <thead class="bg-nav rounded">
            <!-- 7.7% is about 1/13 of the available space
                 the others are multiples of 7.7% -->
                <th class="w-[3.8%]">Video</th>
                <th class="w-[7.7%]">Match</th>
                <th class="w-[23.1%]">Red Alliance</th>
                <th class="w-[23.1%]">Blue Alliance</th>
                <th class="w-[15.4%]">Scores</th>
                <th class="w-[15.4%]">Win Pred</th>
        </thead>
        <tbody>
            {#each matches as match, i}
            <tr>
                <!-- Video Link -->
                <td class="p-0 border-r border-b text-link">
                    <a href={`https://youtube.com/watch?v=${match.video}`} target="_blank" class="flex justify-center">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                            class="text-link cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"></path>
                        </svg>
                    </a>
                </td>
                <!-- Match Number -->
                <td class="text-center border-b underline text-link">
                    <a href={`https://statbotics.io/match/${EVENT.season}${EVENT.eventCode}_qm${match.match_number}`} target="_blank">Quals {match.match_number}</a>
                </td>
                <!-- Red Alliance -->
                <td class="bg-red-300 text-red-900 underline">
                    <span class={`flex justify-evenly mx-3
                        ${((match.red_score ?? 0) > (match.blue_score ?? 0)) ?
                        "font-bold" :
                        "font-thin"}`}>
                        <span class="w-1/3 text-center">{match.red_1}</span>
                        <span class="w-1/3 text-center">{match.red_2}</span>
                        <span class="w-1/3 text-center">{match.red_3}</span>
                        <!-- <a href={`/data/team/${match.red_1}`} data-sveltekit-preload-data="hover" class="w-1/3 text-center">{match.red_1}</a>
                        <a href={`/data/team/${match.red_2}`} data-sveltekit-preload-data="hover" class="w-1/3 text-center">{match.red_2}</a>
                        <a href={`/data/team/${match.red_3}`} data-sveltekit-preload-data="hover" class="w-1/3 text-center">{match.red_3}</a> -->
                    </span>
                </td>
                <!-- Blue Alliance -->
                <td class="bg-blue-400 text-slate-800 underline">
                    <span class={`flex justify-evenly mx-3
                        ${((match.red_score ?? 0) < (match.blue_score ?? 0)) ?
                        "font-bold" :
                        "font-thin"}`}>
                        <span class="w-1/3 text-center">{match.blue_1}</span>
                        <span class="w-1/3 text-center">{match.blue_2}</span>
                        <span class="w-1/3 text-center">{match.blue_3}</span>
                        <!-- <a href={`/data/team/${match.blue_1}`} data-sveltekit-preload-data="hover" class="w-1/3 text-center">{match.blue_1}</a>
                        <a href={`/data/team/${match.blue_2}`} data-sveltekit-preload-data="hover" class="w-1/3 text-center">{match.blue_2}</a>
                        <a href={`/data/team/${match.blue_3}`} data-sveltekit-preload-data="hover" class="w-1/3 text-center">{match.blue_3}</a> -->
                    </span>
                </td>
                <td class="text-center p-0">
                    <span class="flex justify-between">
                        <span class={`w-full py-1 bg-red-300 text-red-900
                            ${((match.red_score ?? 0) > (match.blue_score ?? 0)) ?
                            "font-bold" :
                            "font-thin"}`}>
                            {match.red_score ?? "N/A"}<sup class="xsm">{rankingPoints(match, "red")}</sup>
                        </span>
                        <span class={`w-full py-1 bg-blue-400 text-slate-800
                            ${((match.blue_score ?? 0) > (match.red_score ?? 0)) ?
                            "font-bold" :
                            "font-thin"}`}>
                            {match.blue_score ?? "N/A"}<sup class="xsm">{rankingPoints(match, "blue")}</sup>
                        </span>
                    </span>
                </td>
                <!-- Win Pred -->
                <td class="flex justify-evenly p-0 border-l-8 border-nav">
                    <span class="py-1 w-full text-center bg-primary capitalize">
                        {match.epa_winner}
                    </span>
                    <span class={`px-1 w-full text-center py-1 ${winningColor(match)}`}>
                        {(match.epa_winner === "red") ?
                            Math.round(match.epa_win_prob * 100) :
                            100 - Math.round(match.epa_win_prob * 100)}%
                    </span>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>

<div class="sm:hidden text-w text-center">
    Phone Landscape To See Data
</div>

<footer class="w-screen bg-nav shadow-lg flex border-t rounded-t mt-16">
    <p class="text-w m-8">Design <span class="italic">slightly</span> inspired by <a href={`https://statbotics.io/event/${EVENT.season}${EVENT.eventCode}#qual-matches`} target="_blank" class="text-link underline">Statbotics</a></p>
</footer>

<style lang="postcss">
    .xsm {
        font-size: 0.5rem;
    }
</style>