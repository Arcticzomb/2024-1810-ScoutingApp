<script lang="ts">
    import type { ScoutingData } from "$lib/stores";

    export let scoutingData : ScoutingData;
</script>

<div class="flex flex-col text-w font-semibold mt-12">
    <p class="mx-auto text-lg">Match {scoutingData.matchid}</p>
    <p class="mx-auto text-lg">Team <span class={`${scoutingData.teamcolor ? "text-blue-alliance" : "text-red-alliance"}`}>{scoutingData.teamid}</span></p>
</div>