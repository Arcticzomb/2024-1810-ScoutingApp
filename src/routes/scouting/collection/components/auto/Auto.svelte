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


<div class="flex my-14">
    <div class="flex flex-row center">
        <label for="taxi" class="flex flex-col justify-center text-w scale-text font-semibold">Left Starting Zone</label>
        <input name="taxi"
                type="checkbox"
                bind:checked={$scoutingData.autoTaxi}
                class="appearance-none rounded shadow-sm dynPad checked:bg-active bg-inactive m-2"/>
    </div>
</div>

<div class="flex justify-center">
    <span class="text-w scale-text font-semibold w-1/2 text-center">Speaker Scored</span>
</div>

<div class="flex text-w mx-4 justify-center">
    <div class="inline-flex w-2/3">
        <div class="w-1/3 text-center">
            <button class="appearance-none rounded shadow-sm px-3 bg-active dynMarg-small dynPad-small scale-text"
            on:click={AutoDecSpeaker}>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</button>
        </div>

        <p class="text-w my-auto scale-text-large font-thin w-1/3 text-center">{$scoutingData.autoSpeaker}</p>
        <div class="w-1/3 text-center">
            <button class="appearance-none rounded shadow-sm px-3 bg-active dynMarg-small dynPad-small scale-text"
            on:click={() => $scoutingData.autoSpeaker++}>&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;</button>
        </div>
    </div>
</div>

<div class="flex justify-center mt-8">
    <span class="text-w scale-text font-semibold w-1/2 text-center">Amp Scored</span>
</div>

<div class="flex text-w mx-4 justify-center">
    <div class="inline-flex w-2/3">
        <div class="w-1/3">
            <div class="text-center">
        <button class="appearance-none rounded shadow-sm px-3 bg-active dynMarg-small dynPad-small scale-text"
        on:click={AutoDecAmp}>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</button>
            </div>
        </div>

        <p class="text-w my-auto scale-text-large font-thin w-1/3 text-center">{$scoutingData.autoAmp}</p>
        <div class="w-1/3">
            <div class="text-center">
        <button class="appearance-none rounded shadow-sm px-3 bg-active dynMarg-small dynPad-small scale-text"
        on:click={() => $scoutingData.autoAmp++}>&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;</button>
            </div>
        </div>
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

    .dynPad-small {
        padding: .5vw;
    }

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