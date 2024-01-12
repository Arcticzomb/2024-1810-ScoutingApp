<svelte:head>
    <title>[NAME] | PPG</title>
</svelte:head>

<script lang="ts">
    import { ppgStore } from "$lib/stores";
    import type { PageData } from "./$types";
    import PPGRow from "./PPGRow.svelte";

    export let data: PageData;

    ppgStore.set(data.ppg);

    // sort by total points then by teleop points if total is the same
    $ppgStore.sort((a, b) => {
        if (a.pointTotal === b.pointTotal) {
            return (b.totalTeleop / b.matchesPlayed) - (a.totalTeleop / a.matchesPlayed);
        } else {
            return (b.pointTotal / b.matchesPlayed) - (a.pointTotal / a.matchesPlayed);
        }
    });
</script>


<h1 class="text-w text-center text-5xl mt-8 font-thin">Points Per Game</h1>

<div class="flex justify-center mb-8">
    <table class="text-w text-center mt-8 w-5/6">
        <thead>
            <tr>
                <th class="border-b font-thin">Team Number</th>
                <th class="border-b border-x font-thin">Team Name</th>
                <th class="border-b border-x font-thin">PPG Rank</th>
                <th class="border-b border-x font-thin max-md:hidden">Percentile</th>
                <th class="border-b md:border-x max-md:border-l font-thin">PPG</th>
                <th class="border-b border-x font-thin max-md:hidden">Auto PPG</th>
                <th class="border-b border-x font-thin max-md:hidden">Teleop PPG</th>
                <th class="border-b font-thin max-md:hidden">Endgame PPG</th>
            </tr>
        </thead>
        <tbody class="font-thin">
            {#each $ppgStore as p, index}
                <PPGRow index={index} teams={data.teams}/>
            {/each}
        </tbody>
    </table>
</div>