<script lang="ts">
    import { WinState, scoutingData } from "$lib/stores";


</script>

<div class="flex flex-col mt-14">
    <div class="flex flex-row m-4 space-x-5 center">
        <label for="win" class="flex flex-col justify-center text-w scale-text font-semibold">Win</label>
        <input name="WinState" id="win" type="radio" value={WinState.Win}
        class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"
        bind:group={$scoutingData.winState}/>

        <label for="loss" class="flex flex-col justify-center text-w scale-text font-semibold">Loss</label>
        <input name="WinState" id="loss" type="radio" value={WinState.Loss}
        class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"
        bind:group={$scoutingData.winState}/>

        <label for="tie" class="flex flex-col justify-center text-w scale-text font-semibold">Tie</label>
        <input name="WinState" id="tie" type="radio" value={WinState.Tie}
        class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"
        bind:group={$scoutingData.winState}/>
    </div>
</div>

<div class="flex flex-col center">
    <div class="flex flex-row m-4">
        <label for="notes" class="flex flex-col text-w scale-text font-semibol center">notes</label>
    </div>
    <textarea autocomplete="off" name="notes" wrap="soft"
    bind:value={$scoutingData.endNotes}
    class="text-w appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2" />
</div>

<style>
    .center {
    margin: auto;
    width: auto;
    text-align: center;
    padding: 10px;
    }

    .scale-text {
        font-size : 5vw;
    }

</style>
           
