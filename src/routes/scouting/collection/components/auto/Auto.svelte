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
    <div class="flex flex-row m-4">
        <label for="taxi" class="flex flex-col justify-center text-w text-xl font-semibold">Left Starting Zone</label>
        <input name="taxi"
                type="checkbox"
                bind:checked={$scoutingData.autoTaxi}
                class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>
                

            




    </div>
    <div class="flex m-4">
        <span class="flex flex-col justify-center text-w text-xl font-semibold">Amp Scored</span>
        <div class="flex justify-between text-w">
            <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={AutoDecAmp}>-</button>
            <p class="text-w my-auto text-4xl font-thin">{$scoutingData.autoAmp}</p>
            <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={() => $scoutingData.autoAmp++}>+</button>
        </div>
    </div>
    <div class="rounded flex justify-between text-w m-4">
        <span class="flex flex-col justify-center text-w text-xl font-semibold">Speaker Scored</span>
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={AutoDecSpeaker}>-</button>
        <p class="text-w my-auto text-4xl font-thin">{$scoutingData.autoSpeaker}</p>
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={() => $scoutingData.autoSpeaker++}>+</button>
    </div>
</div>