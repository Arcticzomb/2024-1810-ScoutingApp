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

<div class="flex justify-center dynPad">
    <div class="flex flex-row w-1/2 mt-20">
        <label for="co-op" class="flex flex-col justify-center text-w scale-text font-semibold">co-op</label>
        <input name="co-op" type="checkbox"
            bind:checked={$scoutingData.coopertition}
            class="testcheck:tog checked:bg-active bg-inactive text-center">
        </div>
</div>

<style>
    .dynMarg-small {
        margin: 3vw;
    }

    .dynPad-small {
        padding: 2vw;
    }

    .scale-text {
        font-size : 5vw;
    }

    .scale-text-large {
        font-size : 7vw;
    }


    .testcheck\:tog:not(:checked),
    .testcheck\:tog:checked {
        appearance: none;
        border-radius: 0.25rem;
        --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        padding: 3vw;
        margin-left: auto;
        margin-right: 0;
    }

    .testcheck\:tog:not(:checked)::before,
    .testcheck\:tog:checked::before {
        content: "";
        font-size: 3vw;
        color: rgb(255 255 255);
    }

    .testcheck\:tog:not(:checked)::after,
    .testcheck\:tog:checked::after {
        content: "\2713";
        font-size: 5vw;
        line-height: 0.4vw;
        color: rgb(255 255 255);
        transition: all .2s;
    }

    .testcheck\:tog:not(:checked)::after {
        opacity: 0;
        transform: scale(0);
    }

    .testcheck\:tog:checked::after {
        opacity: 1;
        transform: scale(1);
    }
</style>