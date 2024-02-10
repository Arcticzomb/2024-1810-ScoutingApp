<script lang="ts">
    import { scoutingData } from "$lib/stores";

</script>

<div class="flex my-3 justify-center mt-14">
    <div class="flex flex-row">
        <h1 class="flex flex-col justify-center text-w scale-text font-semibold">Stage State</h1>
    </div>
</div>

<div class="flex text-w mx-4 justify-center">
    <div class="inline-flex w-1/3">
        <label for="None" class="flex flex-col justify-center text-w scale-text font-semibold ml-1"
        style="margin-left: auto;">None</label>

        <input name="parkHang" id="None" type="radio" value="0"
        class="appearance-none rounded shadow-sm checked:bg-active bg-inactive p-5 m-2"
        style="margin-left: auto;margin-right: 1;"
        bind:group={$scoutingData.endClimb}/>
    </div>
    <div class="inline-flex w-1/3">
        <label for="Park" class="flex flex-col justify-center text-w scale-text font-semibold ml-1"
        style="margin-left: auto;">Park</label>

        <input name="parkHang" id="Park" type="radio" value="1"
        class="appearance-none rounded shadow-sm checked:bg-active bg-inactive p-5 m-2"
        style="margin-left: auto;margin-right: 1;"
        bind:group={$scoutingData.endClimb}/>
    </div>
    <div class="inline-flex w-1/3">
        <label for="ParkHang" class="flex flex-col justify-center text-w scale-text font-semibold ml-1"
        style="margin-left: auto;">Hang</label>

        <input name="parkHang" id="ParkHang" type="radio" value="2"
        class="appearance-none rounded shadow-sm checked:bg-active bg-inactive p-5 m-2"
        style="margin-left: auto;margin-right: 1;"
        bind:group={$scoutingData.endClimb}/>
    </div>
</div>

<div class="flex justify-center dynPad mt-6">
    <div class="flex flex-row w-1/2">
        <label for="Harmony" class="flex flex-col justify-center text-w scale-text font-semibold">Harmony</label>
        <input id="Harmony" name="harmonyButton" type="checkbox"
        bind:checked={$scoutingData.endHarmony}
        class="appearance-none rounded shadow-sm dynPad checked:bg-active bg-inactive float-right"
        style="margin-left: auto;margin-right: 0;"/>
    </div>
</div>

<div class="flex justify-center dynPad">
    <div class="flex flex-row w-1/2">
        <label for="Trap" class="flex flex-col justify-center text-w scale-text font-semibold">Trap</label>
        <input id="Trap" name="trapButton" type="checkbox"
        bind:checked={$scoutingData.endTrap}
        class="appearance-none rounded shadow-sm dynPad checked:bg-active bg-inactive"
        style="margin-left: auto;margin-right: 0;"/>
    </div>
</div>

<div class="flex justify-center dynPad">
    <div class="flex flex-row w-1/2">
        <label for="Spotlight" class="flex flex-col justify-center text-w scale-text font-semibold">Spotlight</label>
        <input id="Spotlight" name="spotlightButton" type="checkbox"
        bind:checked={$scoutingData.endSpotlight}
        class="appearance-none rounded shadow-sm dynPad checked:bg-active bg-inactive"
        style="margin-left: auto;margin-right: 0;"/>
    </div>
</div>

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
    .dynPad-top {
        padding-top: 14vw;
    }
    .scale-text {
        font-size : 5vw;
    }
    .scale-text-large {
        font-size : 9vw;
    }

    .bgc1 {
        background-color: #333;
    }

    .bgc2 {
        background-color: #433;
    }
</style>