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


<div class="flex flex-col my-4">
    <div class="flex flex-row m-4 center">
        <label for="taxi" class="flex flex-col justify-center text-w text-xl font-semibold">Left Starting Zone</label>
        <input name="taxi"
                type="checkbox"
                bind:checked={$scoutingData.autoTaxi}
                class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>

    </div>
    <div class="flex m-4">
        <span id="ampText" class="flex flex-col text-w text-xl font-semibold">Amp Scored</span>
        <span id="speakerText" class="flex flex-col text-w text-xl font-semibold float-right">Speaker Scored</span>
    </div>
    <div id="ampScore" class="rounded flex justify-between text-w m-4 px-3 center">
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={AutoDecAmp}>-</button>
        <p class="text-w my-auto text-4xl font-thin">{$scoutingData.autoAmp}</p>
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={() => $scoutingData.autoAmp++}>+</button>
    </div>
    <div id="speakerScore" class="rounded flex justify-between text-w m-4 px-3 center">
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={AutoDecSpeaker}>-</button>
        <p class="text-w my-auto text-4xl font-thin">{$scoutingData.autoSpeaker}</p>
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={() => $scoutingData.autoSpeaker++}>+</button>
    </div>
</div>

<style>


    #ampText {
        position: absolute;
        left: 14%;

    }

    #speakerText {
        position: absolute;
        left: 61%;
    }

    #ampScore {
        position: absolute;
        left: 2%;
        top: 25%;
    }

    #speakerScore {
        position: absolute;
        left: 53%;
        top: 25%;
    }

    .center {
    margin: auto;
    width: auto;
    text-align: center;
    padding: 10px;
    }
</style>