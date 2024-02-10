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
const TeleAmpedSpeaker = () => {
    if($scoutingData.teleAmpedSpeaker > 0){
        $scoutingData.teleAmpedSpeaker--;
    }
}
*/
</script>

<!-- the issue with the moving buttons is because it is linked to the text which causes it to fluctuate depending on the width of the numbers -->

<div class="flex text-w mx-4 mt-14 justify-center text-center">
    <span class="flex flex-col justify-center text-w scale-text font-semibold w-1/2">Speaker Scored</span>
    <div class="inline-flex w-1/2">
        <div class="w-1/3">
            <div class="text-center">
        <button class="appearance-none rounded shadow-sm px-3 bg-active dynMarg-small dynPad-small scale-text"
        on:click={TeleDecSpeaker}>-</button>
            </div>
        </div>

        <p class="text-w my-auto scale-text-large font-thin w-1/3 text-center">{$scoutingData.teleSpeaker}</p>
        <div class="w-1/3">
            <div class="text-center">
        <button class="appearance-none rounded shadow-sm px-3 bg-active dynMarg-small dynPad-small scale-text"
        on:click={() => $scoutingData.teleSpeaker++}>+</button>
            </div>
        </div>
    </div>
</div>

<div class="flex text-w mx-4 mt-6 justify-center">
    <span class="flex flex-col justify-center text-w scale-text font-semibold w-1/2 text-center">Amp Scored</span>
    <div class="inline-flex w-1/2">
        <div class="w-1/3">
            <div class="text-center">
        <button class="appearance-none rounded shadow-sm px-3 bg-active dynMarg-small dynPad-small scale-text"
        on:click={TeleDecAmp}>-</button>
            </div>
        </div>

        <p class="text-w my-auto scale-text-large font-thin w-1/3 text-center">{$scoutingData.teleAmp}</p>
        <div class="w-1/3">
            <div class="text-center">
        <button class="appearance-none rounded shadow-sm px-3 bg-active dynMarg-small dynPad-small scale-text"
        on:click={() => $scoutingData.teleAmp++}>+</button>
            </div>
        </div>
    </div>
</div>

<div class="flex mx-4 my-8 justify-center">
    <div class="flex flex-row w-1/2">
        <label for="co-op" class="flex flex-col justify-center text-w scale-text font-semibold">co-op</label>
        <input name="co-op"
            type="checkbox"
            bind:checked={$scoutingData.coopertition}
            class="m-4 appearance-none rounded shadow-sm dynPad checked:bg-active bg-inactive"
            style="margin-left: auto;margin-right: 0;"/>
    </div>
</div>

<div class="flex my-3 justify-center">
    <div class="flex flex-row">
        <h1 class="flex flex-col justify-center text-w scale-text font-semibold">Intake/Pickup Method</h1>
    </div>
</div>

<div class="flex text-w mx-4 justify-center">
    <div class="inline-flex w-1/3">
        <label for="station" class="flex flex-col justify-center text-w scale-text font-semibold"
        style="margin-left: auto;">Station</label>

        <input name="Pickup" id="station" type="radio" value="0"
        class="appearance-none rounded shadow-sm checked:bg-active bg-inactive p-5 m-2"
        style="margin-left: auto;margin-right: 1;"
        bind:group={$scoutingData.intakeStyle}/>
    </div>
    <div class="inline-flex w-1/3">
        <label for="ground" class="flex flex-col justify-center text-w scale-text font-semibold"
        style="margin-left: 1; margin-right: 1;">Ground</label>
        
        <input name="Pickup" id="ground" type="radio" value="1"
        class="appearance-none rounded shadow-sm checked:bg-active bg-inactive p-5 m-2"
        style="margin-left: auto;margin-right: 1;"
        bind:group={$scoutingData.intakeStyle}/>
    </div>
    <div class="inline-flex w-1/3">
        <label for="both" class="flex flex-col justify-center text-w scale-text font-semibold"
        style="margin-left: auto;">Both</label>

        <input name="Pickup" id="both" type="radio" value="2"
        class="appearance-none rounded shadow-sm checked:bg-active bg-inactive p-5 m-2"
        style="margin-left: auto;margin-right: 1;"
        bind:group={$scoutingData.intakeStyle}/>
    </div>
</div>


<style>
    .dynMarg-small {
        margin: 3vw;
    }

    .dynPad {
        padding: 5vw;
    }

    .dynPad-small {
        padding: 2vw;
    }

    .scale-text {
        font-size : 5vw;
    }

    .scale-text-large {
        font-size : 9vw;
    }

    .bgc1 {
        background-color: #343;
    }

    .bgc2 {
        background-color: #843;
    }
</style>