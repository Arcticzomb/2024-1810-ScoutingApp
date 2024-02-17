<svelte:head>
    <title>CATATRONICS | Collection</title>
</svelte:head>

<script lang="ts">
    import { ScoutingPage, ppgStore, scoutingData, scoutingPage, setPPGData } from "$lib/stores";
    import type { PageData } from "./$types";
    import ScoreCollection from "./components/ScoreCollection.svelte";

    export let data: PageData;

    ppgStore.set(data.ppg);
    setPPGData($ppgStore, Number(data.existing.teamid));

    $scoutingData.id = data.id;
    $scoutingData.matchid = data.existing.matchid;
    $scoutingData.teamid = data.existing.teamid;
    $scoutingData.teamcolor = data.existing.allianceColor;
</script>

{#if $scoutingPage !== ScoutingPage.loading}
<div>
    <nav class="flex">
        <button on:click={() => $scoutingPage = ScoutingPage.auto}
            class={`text-w scale-text ${$scoutingPage === ScoutingPage.auto    ? "bg-active" : "bg-inactive"} w-1/3 py-3 border`}>Auto</button>
        <button on:click={() => $scoutingPage = ScoutingPage.teleop}
            class={`text-w scale-text ${$scoutingPage === ScoutingPage.teleop  ? "bg-active" : "bg-inactive"} w-1/3 py-3 border border-w`}>Tele-Op</button>
        <button on:click={() => $scoutingPage = ScoutingPage.endgame}
            class={`text-w scale-text ${$scoutingPage === ScoutingPage.endgame ? "bg-active" : "bg-inactive"} w-1/3 py-3 border border-w`}>Endgame</button>
        <button on:click={() => $scoutingPage = ScoutingPage.finishLine}
            class={`text-w scale-text ${$scoutingPage === ScoutingPage.finishLine ? "bg-active" : "bg-inactive"} w-1/3 py-3 border border-w`}>Finish</button>
    </nav>
</div>
    <ScoreCollection supabase={data.supabase}/>

{:else}
    <div class="flex flex-col h-screen w-5/6 text-w text-center justify-center items-center">
        <strong class="text-3xl text-center">Uploading&hellip;</strong>
    </div>
{/if}

<style>
    .dynMarg {
        margin: 5vw;
    }

    .dynMarg-small {
        margin: 3vw;
    }

    .dynPad {
        padding: 5vw;
    }

    .dynPad-small {
        padding: .5vw;
    }

    .scale-text {
        font-size : 5vw;
    }

</style>