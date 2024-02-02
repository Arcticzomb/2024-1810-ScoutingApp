<script lang="ts">
import { scoutingData } from "$lib/stores";
</script>
        
<div class="flex flex-col">
        <div class="flex flex-row m-4 space-x-5 center">
            <label for="Park" class="flex flex-col justify-center text-w scale-text font-semibold">Park</label>
            <input name="ParkHang" id="Park" type="radio" value="0"
            class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2 float-right"/>
    
            <label for="ParkHang" class="flex flex-col justify-center text-w scale-text font-semibold">Hang</label>
            <input name="ParkHang" id="Hang" type="radio" value="1"
            class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>
        </div>
</div>

<div class="flex flex-col">
<div id="harmony" class="flex flex-row m-4 center">
        <label id="harmonyLabel" for="Harmony" class="flex flex-col justify-center text-w scale-text font-semibold">Harmony</label>
        <input id="harmonyButton" name="Park"
                type="checkbox"
                bind:checked={$scoutingData.endHarmony}
                class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>
        </div>
</div>

<div class="flex flex-col">
<div id="trap" class="flex flex-row m-4">
        <label id="trapLabel" for="Trap" class="flex flex-col justify-center text-w scale-text font-semibold">Trap</label>
        <input id="trapButton" name="Trap"
                type="checkbox"
                bind:checked={$scoutingData.endTrap}
                class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>
        </div>
</div>

<div class="flex flex-col">
<div class="flex flex-row m-4 center">
        <label id="spotlightLabel" for="Spotlight" class="flex flex-col justify-center text-w scale-text font-semibold">Spotlight</label>
        <input id="spotlightButton" name="Spotlight"
                type="checkbox"
                bind:checked={$scoutingData.endSpotlight}
                class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>
        </div>
</div>

<style>
        .center {
                margin: auto;
                width: auto;
                text-align: center;
                padding: 10px;
        }

        #harmonyLabel {
        position: absolute;
        left: 26%;
        bottom: 74%;
        }

        #harmonyButton {
        position: absolute;
        left: 67%;
        bottom: 72%;
        }

        #trapLabel {
        position: absolute;
        left: 26%;
        bottom: 63%;
        }

        #trapButton {
        position: absolute;
        left: 67%;
        bottom: 61%;
        }

        #spotlightLabel {
        position: absolute;
        left: 26%;
        bottom: 52%;
        }

        #spotlightButton {
        position: absolute;
        left: 67%;
        bottom: 50%;
        }

        .scale-text {
        font-size : 5vw;
        }

</style>