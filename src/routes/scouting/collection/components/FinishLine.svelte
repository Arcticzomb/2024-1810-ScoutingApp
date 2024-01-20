<script lang="ts">
    import { WinState, scoutingData } from "$lib/stores";


</script>

<div class="flex flex-col">
    <div class="flex flex-row m-4 space-x-5 center">
        <label for="win" class="flex flex-col justify-center text-w text-xl font-semibold">Win</label>
        <input name="WinState" id="win" type="radio" value="2"
        class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2 float-right"/>

        <label for="loss" class="flex flex-col justify-center text-w text-xl font-semibold">Loss</label>
        <input name="WinState" id="loss" type="radio" value="1"
        class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>

        <label for="tie" class="flex flex-col justify-center text-w text-xl font-semibold">Tie</label>
        <input name="WinState" id="tie" type="radio" value="0"
        class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>
    </div>
</div>

<div class="flex flex-col">
    <div class="flex flex-row m-4 space-x-5 center">
        <label for="station" class="flex flex-col justify-center text-w text-xl font-semibold">Station</label>
        <input name="Pickup" id="station" type="radio" value="0"
        class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>

        <label for="ground" class="flex flex-col justify-center text-w text-xl font-semibold">Ground</label>
        <input name="Pickup" id="ground" type="radio" value="1"
        class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>

        <label for="both" class="flex flex-col justify-center text-w text-xl font-semibold">Both</label>
        <input name="Pickup" id="both" type="radio" value="2"
        class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>
    </div>
</div>


<div class="flex flex-col center">
    <div class="flex flex-row m-4">
        <label for="notes" class="flex flex-col text-w text-xl font-semibol center">notes</label>
    </div>
    <input name="notes"
    type="text"
    bind:value={$scoutingData.endNotes}
    class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2" />
</div>

<style>
    .center {
    margin: auto;
    width: auto;
    text-align: center;
    padding: 10px;
    }
</style>
           
