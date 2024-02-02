<script lang="ts">
    import { scoutingData } from "$lib/stores";

    const AutoDecAmp = () => {
        if ($scoutingData.autoAmp > 0)
            $scoutingData.autoAmp--;
        }
        
    const AutoDecSpeaker = () => {
        if ($scoutingData.autoSpeaker > 0)
            $scoutingData.autoSpeaker--;
    }

</script>


<div class="flex mx-4 my-14">
    <div class="flex flex-row center">
        <label for="taxi" class="flex flex-col justify-center text-w scale-text font-semibold">Left Starting Zone</label>
        <input name="taxi"
                type="checkbox"
                bind:checked={$scoutingData.autoTaxi}
                class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>
    </div>
</div>

<div class="flex mx-4">
    <span class="text-w scale-text font-semibold w-1/2 text-center">Amp Scored</span>
    <span class="text-w scale-text font-semibold w-1/2 text-center">Speaker Scored</span>
</div>

<div class="flex text-w mx-4">
    <div class="w-1/2 inline-flex">
        <div class="w-1/3">
            <div class="apearance-none rounded shadow-sm bg-active m-4 text-center">
        <button class="scale-text" on:click={AutoDecAmp}>-</button>
            </div>
        </div>
        <p class="text-w my-auto scale-text-large font-thin w-1/3 text-center">{$scoutingData.autoAmp}</p>
        <div class="w-1/3">
            <div class="apearance-none rounded shadow-sm bg-active m-4 text-center">
        <button class="scale-text" on:click={() => $scoutingData.autoAmp++}>+</button>
            </div>
        </div>
    </div>

    <div class="w-1/2 inline-flex">
        <div class="w-1/3">
            <div class="apearance-none rounded shadow-sm bg-active m-4 text-center">
        <button class="scale-text" on:click={AutoDecSpeaker}>-</button>
            </div>
        </div>
        <p class="text-w my-auto scale-text-large font-thin w-1/3 text-center">{$scoutingData.autoSpeaker}</p>
        <div class="w-1/3">
            <div class="apearance-none rounded shadow-sm bg-active m-4 text-center">
        <button class="scale-text" on:click={() => $scoutingData.autoSpeaker++}>+</button>
            </div>
        </div>
    </div>
</div>

<style>
    .center {
        margin: auto;
    }

    .scale-text {
        font-size : 5vw;
    }

    .scale-text-large {
        font-size : 9vw;
    }

</style>