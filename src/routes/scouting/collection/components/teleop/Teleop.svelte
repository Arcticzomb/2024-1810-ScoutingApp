<script>
    import { scoutingData } from "$lib/stores";


const TeleDecAmp = () => {
    if($scoutingData.teleAmp > 0){
        $scoutingData.teleAmp--;
    }
}

const TeleDecSpeaker = () => {
    if($scoutingData.teleSpeaker > 0){
        $scoutingData.teleSpeaker--;
    }
}

const TeleDecAmpedSpeaker = () => {
    if($scoutingData.teleAmpedSpeaker > 0){
        $scoutingData.teleAmpedSpeaker--;
    }
}

</script>







<div class="flex m-4">
    <span class="flex flex-col justify-center text-w text-xl font-semibold">Amp Scored</span>
    <div class="flex justify-between text-w">
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={TeleDecAmp}>-</button>
        <p class="text-w my-auto text-4xl font-thin">{$scoutingData.teleAmp}</p>
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={() => $scoutingData.teleAmp++}>+</button>
    </div>

    </div>
    <!-- the issue with the moving buttons is because it is linked to the text which causes it to fluctuate depending on the width of the numbers -->
<div class="rounded flex justify-between text-w m-4">
    <span class="flex flex-col justify-center text-w text-xl font-semibold">Speaker Scored</span>
    <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={TeleDecSpeaker}>-</button>
    <p class="text-w my-auto text-4xl font-thin">{$scoutingData.teleSpeaker}</p>
    <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={() => $scoutingData.teleSpeaker++}>+</button>
</div>

<div class="flex m-4">
    <span class="flex flex-col justify-center text-w text-xl font-semibold">Amped Up Points</span>
    <div class="flex justify-between text-w">
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={TeleDecAmpedSpeaker}>-</button>
        <p class="text-w my-auto text-4xl font-thin">{$scoutingData.teleAmpedSpeaker}</p>
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={() => $scoutingData.teleAmpedSpeaker++}>+</button>
    </div>
</div>