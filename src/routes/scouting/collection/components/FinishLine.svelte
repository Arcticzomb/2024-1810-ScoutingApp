<script lang="ts">
    import { WinState, scoutingData } from "$lib/stores";


</script>



<div class="flex flex-col">
    <div class="flex flex-row m-4">
        <label for="co-op" class="flex flex-col justify-center text-w text-xl font-semibold">co-op</label>
        <input name="co-op"
                type="checkbox"
                bind:checked={$scoutingData.cooperatition}
                class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>
    </div>
</div>

<div class="flex flex-col">
    <div class="flex flex-row m-4">
        <label for="notes" class="flex flex-col justify-center text-w text-xl font-semibold">notes</label>
        <input name="notes"
                type="text"
                bind:value={$scoutingData.endNotes}
                class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2" />
    </div>
</div>

           
