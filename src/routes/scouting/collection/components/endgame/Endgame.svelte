
<script lang="ts">
import { scoutingData } from "$lib/stores";
</script>
        





<div class="flex flex-col">
    <div class="flex flex-row m-4">
        <label for="Park" class="flex flex-col justify-center text-w text-xl font-semibold">Park</label>
        <input name="Park"
                type="checkbox"
                bind:checked={$scoutingData.endPark}
                class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>
        </div>
</div>

<div class="flex flex-row m-4">
        <label for="Hang" class="flex flex-col justify-center text-w text-xl font-semibold">Hang</label>
        <input name="Hang"
                type="checkbox"
                bind:checked={$scoutingData.endClimb}
                class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>
        </div>

        <div class="flex flex-row m-4">
                <label for="Harmony" class="flex flex-col justify-center text-w text-xl font-semibold">Harmony</label>
                <input name="Park"
                        type="checkbox"
                        bind:checked={$scoutingData.endHarmony}
                        class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>
                </div>
        
                <div class="flex flex-row m-4">
                        <label for="Trap" class="flex flex-col justify-center text-w text-xl font-semibold">Trap</label>
                        <input name="Trap"
                                type="checkbox"
                                bind:checked={$scoutingData.endTrap}
                                class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>
                        </div>

                        <div class="flex flex-row m-4">
                                <label for="Spotlight" class="flex flex-col justify-center text-w text-xl font-semibold">Spotlight</label>
                                <input name="Spotlight"
                                        type="checkbox"
                                        bind:checked={$scoutingData.endSpotlight}
                                        class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>
                                </div>