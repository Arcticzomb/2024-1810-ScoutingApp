<svelte:head>
    <title>CATATRONICS | (Insecure) Admin</title>
</svelte:head>

<script lang="ts">
    import type { PageData } from "./$types";
    import { WinState, type PPG, score } from "$lib/stores";

    export let data: PageData;

    const { existing, ppg, supabase } = data;

    let cullNullPressed = false;
    let pggPressed = false;

    const cullNull = (async () => {
        if (cullNullPressed) return;
        existing.forEach(async (data) => {
            if ((data.winState !== WinState.unset) && (data.winState !== null)) return;
            const { error } =
                await supabase.from("scouting-data").delete().eq("id", data.id);
            if (error)
                console.error(error);
        });
        cullNullPressed = true;
    });

    const analyzePPG = () => {
        if (pggPressed) return;
        const ppgTeams = Array.from(new Set(existing.map(team => team.teamid)));

        // delete all ppg data
        ppg.forEach(async (team) => {
            const { error } =
                await supabase.from("ppg-data").delete().eq("teamid", team.teamid);

            if (error)
                console.error(error);
        });

        // analyze ppg
        ppgTeams.forEach(async (teamid) => {
            const teamData = existing.filter(team => team.teamid === teamid);

            let tmp_pggData: PPG = {
                teamid: teamid,
                matchesPlayed: teamData.length,
                totalAuto: 0,
                totalTeleop: 0,
                totalEndgame: 0,
                meanTeleop: 0,
                meanAuto: 0,
                meanEndgame: 0,
                pointTotal: 0
            };
            teamData.forEach((data) => {
                const scoredData = score(data).scoredData;
                tmp_pggData.totalAuto += scoredData.auto;
                tmp_pggData.totalTeleop += scoredData.teleop;
                tmp_pggData.totalEndgame += scoredData.endgame;
            });

            tmp_pggData.meanAuto = tmp_pggData.totalAuto / tmp_pggData.matchesPlayed;
            tmp_pggData.meanTeleop = tmp_pggData.totalTeleop / tmp_pggData.matchesPlayed;
            tmp_pggData.meanEndgame = tmp_pggData.totalEndgame / tmp_pggData.matchesPlayed;
            tmp_pggData.pointTotal = tmp_pggData.totalAuto + tmp_pggData.totalTeleop + tmp_pggData.totalEndgame;

            const { error } = await supabase.from("ppg-data").insert([tmp_pggData]);
        });

        pggPressed = true;
    };
</script>

<div class="flex mb-3 justify-center">
    <a class="flex flex-col justify-center text-w text-4xl mt-4 font-semibold" href="/">(Insecure) Admin</a>
</div>

<div class="flex justify-evenly">
    <button class={`text-w text-center text-lg shadow-sm rounded ${cullNullPressed ? "bg-inactive" : "bg-active"} px-4 py-2 m-4`} on:click={cullNull}>Cull Null</button>
    <button class={`text-w text-center text-lg shadow-sm rounded ${pggPressed ? "bg-inactive" : "bg-active"} px-4 py-2 m-4`} on:click={analyzePPG}>Analyze PPG</button>
</div>