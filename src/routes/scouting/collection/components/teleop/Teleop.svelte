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
/*
const TeleDecAmpedSpeaker = () => {
    if($scoutingData.teleAmpedSpeaker > 0){
        $scoutingData.teleAmpedSpeaker--;
    }
}
*/
</script>

<div class="flex m-4">
    <span class="flex flex-col justify-center text-w text-xl font-semibold center">Amp Scored</span>
    <div class="flex justify-between text-w">
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={TeleDecAmp}>-</button>
        <p class="text-w my-auto text-4xl font-thin">{$scoutingData.teleAmp}</p>
        <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={() => $scoutingData.teleAmp++}>+</button>
    </div>

    </div>
    <!-- the issue with the moving buttons is because it is linked to the text which causes it to fluctuate depending on the width of the numbers -->
<div class="rounded flex justify-between text-w m-4">
    <span class="flex flex-col justify-center text-w text-xl font-semibold center">Speaker Scored</span>
    <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={TeleDecSpeaker}>-</button>
    <p class="text-w my-auto text-4xl font-thin">{$scoutingData.teleSpeaker}</p>
    <button class="appearance-none rounded shadow-sm px-3 bg-active m-4 mx-6 text-3xl" on:click={() => $scoutingData.teleSpeaker++}>+</button>
</div>

<div class="flex flex-col">
    <div class="flex flex-row m-4 center">
        <label for="co-op" class="flex flex-col justify-center text-w text-xl font-semibold">co-op</label>
        <input name="co-op"
                type="checkbox"
                bind:checked={$scoutingData.coopertition}
                class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"/>
    </div>
</div>

<div class="flex flex-col">
    <div class="flex flex-row m-4 center">
        <h1 class="flex flex-col justify-center text-w text-xl font-semibold">Intake/Pickup Method</h1>
    </div>
</div>

<div class="flex flex-col">
    <div class="flex flex-row m-4 center">
        <label for="station" class="flex flex-col justify-center text-w text-xl font-semibold">Station</label>
        <input name="Pickup" id="station" type="radio" value="0"
        class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"
        bind:group={$scoutingData.intakeStyle}/>

        <label for="ground" class="flex flex-col justify-center text-w text-xl font-semibold">Ground</label>
        <input name="Pickup" id="ground" type="radio" value="1"
        class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"
        bind:group={$scoutingData.intakeStyle}/>

        <label for="both" class="flex flex-col justify-center text-w text-xl font-semibold">Both</label>
        <input name="Pickup" id="both" type="radio" value="2"
        class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"
        bind:group={$scoutingData.intakeStyle}/>
    </div>
</div>

<style>
    .center {
    margin: auto;
    width: auto;
    text-align: center;
    padding: 10px;
    }
</style>