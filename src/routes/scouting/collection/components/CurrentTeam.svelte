<script lang="ts">
    import type { ScoutingData } from "$lib/stores";

    export let scoutingData : ScoutingData;
</script>

<div class="flex flex-row text-w font-semibold justify-center">
    <p class="text-lg">Match {scoutingData.matchid}</p>
    <p class="text-lg mx-2">Team <span class={`${scoutingData.teamcolor ? "text-blue-alliance" : "text-red-alliance"}`}>{scoutingData.teamid}</span></p>
</div>