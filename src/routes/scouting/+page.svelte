<svelte:head>
    <title>CATATRONICS | Scouting</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<script lang="ts">
    import { enhance } from "$app/forms";
    import { onDestroy } from "svelte";
    import type { ActionData, PageData } from "./$types";
    export let form: ActionData;
    export let data: PageData;

    const { matches, supabase } = data;

    let existing = data.existing;

    // callback fn for handling realtime updates with supabase
    const handleUpdate = async () => {
        const { data, error } = await supabase.from("scouting-data").select();
        if (error) return; 
        existing = data;
    };

    // subscribe to realtime updates
    supabase
        .channel("any")
        .on("postgres_changes", { event: "INSERT", schema: "public", table: "scouting-data" }, handleUpdate)
        .on("postgres_changes", { event: "DELETE", schema: "public", table: "scouting-data" }, handleUpdate)
        .subscribe();

    let matchid: string;

    // keep track of currently avaliable teams and which alliance they are on
    $: match = ((match) => {
        // if the match that was supplied as the param is null return empty arrays
        if (!match) return { red: [], blue: [] };

        // find all teams that are competing in the supplied match number
        const rows = existing.filter((row) => row.matchid === match.matchNumber);
        if (rows.length === 0) return match; // if that is zero return an empty match object
        return {
            // find all red alliance teams and place them in an array
            red: match.red.filter((team) => !rows.some((row) => row.teamid === team)),
            // find all blue alliance teams and place them in an array
            blue: match.blue.filter((team) => !rows.some((row) => row.teamid === team))
        };
    })(matches.find((match) => match.matchNumber === Number(matchid)));

    // make sure to locally unsubscribe from realtime updates (as to not get billed)
    onDestroy(() => supabase.channel("any").unsubscribe());

    let teamInput: string;

</script>

    <meta name="viewport" content="width=device-width, initial-scale=1" />

<a href="/" class="inline-block portrait:w-1/4 landscape:w-1/6 text-w text-center text-xl shadow-sm rounded bg-active py-2 m-2">Back</a>

{#if form?.error}
    <span class="center m-3 text-red-700 text-center text-2xl font-bold capitalize">{form.error}</span>
{/if}

<form autocomplete="off" class="dynMarg bg-primary rounded-lg py-2 text-center" method="post" use:enhance>
    <div class="mt-2">
        <label for="matchid" class="block text-w text-3xl font-bold text-center mb-2">Match</label>
        <input type="tel" required name="matchid" bind:value={matchid} placeholder="Qualification Match ID"
            class="scale-text block m-auto portrait:w-5/6 landscape:w-2/3 text-xl text-center rounded-lg shadow-sm">
    </div>

    <div class="mt-2">
        <label for="teamid" class="block text-w text-3xl font-bold text-center mb-2">Team</label>
        <input type="tel" id="teamInput" name="teamid" bind:value={teamInput} placeholder="Team Number: Click numbers below"
            class="scale-text block m-auto portrait:w-5/6 landscape:w-2/3 text-xl text-center rounded-lg shadow-sm teamnum">
    </div>

    <div class="my-2 flex portrait:flex-col landscape:justify-center portrait:h-10 landscape:h-8">
        <!-- spaces (&nbsp;) are needed to correctly maintain spacing on either orientation -->
        <strong class="text-center text-w scale-text-med">Teams Available to Scout:</strong>
    </div>

    <button on:click={() => teamInput = match?.red[0].toString() ?? ""} type="button" class="text-center font-bold text-red-alliance mx-1 scale-text-med">
        {match?.red[0] ?? ""}</button>
    <button on:click={() => teamInput = match?.red[1].toString() ?? ""} type="button" class="text-center font-bold text-red-alliance mx-1 scale-text-med">
        {match?.red[1] ?? ""}</button>
    <button on:click={() => teamInput = match?.red[2].toString() ?? ""} type="button" class="text-center font-bold text-red-alliance mx-1 scale-text-med">
        {match?.red[2] ?? ""}</button>
    <br>
    <button on:click={() => teamInput = match?.blue[0].toString() ?? ""} type="button" class="text-center font-bold text-blue-alliance mx-1 scale-text-med">
        {match?.blue[0] ?? ""}</button>
    <button on:click={() => teamInput = match?.blue[1].toString() ?? ""} type="button" class="text-center font-bold text-blue-alliance mx-1 scale-text-med">
        {match?.blue[1] ?? ""}</button>
    <button on:click={() => teamInput = match?.blue[2].toString() ?? ""} type="button" class="text-center font-bold text-blue-alliance mx-1 scale-text-med">
        {match?.blue[2] ?? ""}</button>

    <div class="landscape:mt-6 portrait:mt-12">
        <button type="submit" class="block mx-auto landscape:w-2/6 portrait:w-1/2 text-center text-w text-2xl shadow-sm rounded bg-active py-4 px-8">Start</button>
    </div>
</form>

<style>
    .center {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .dynMarg {
        margin: 5vw;
    }

    .scale-text {
        font-size: 3vw;
    }

    .scale-text-med {
        font-size: 6vw;
    }
</style>

