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


<div class="flex flex-col">
    <div class="flex flex-row m-4 center">
        <label for="taxi" class="flex flex-col justify-center text-w text-xl font-semibold">Left Starting Zone</label>
        <input name="taxi"
                type="checkbox"
                bind:checked={$scoutingData.autoTaxi}
                class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>

    </div>
    <div class="flex m-4">
        <span class="flex flex-col text-w text-xl font-semibold" id="ampText">Amp Scored</span>
        <span class="flex flex-col text-w text-xl font-semibold float-right" id="speakerText">Speaker Scored</span>
    </div>
    <div class="rounded flex justify-between text-w m-4 px-3 center">
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={AutoDecAmp}>-</button>
        <p class="text-w my-auto text-4xl font-thin">{$scoutingData.autoAmp}</p>
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={() => $scoutingData.autoAmp++}>+</button>
        
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={AutoDecSpeaker}>-</button>
        <p class="text-w my-auto text-4xl font-thin">{$scoutingData.autoSpeaker}</p>
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={() => $scoutingData.autoSpeaker++}>+</button>
    </div>
</div>

<style>


    #ampText {
        position: static;
        padding-left: 10%;

    }

    #speakerText {
        position: static;
        padding-left: 19%;
    }

    .center {
    margin: auto;
    width: auto;
    text-align: center;
    padding: 10px;
    }
</style>