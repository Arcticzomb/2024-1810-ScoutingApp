<script>
    import { scoutingData } from "$lib/stores";
    import CurrentTeam from "../CurrentTeam.svelte";

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
</script>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<div class="flex mb-3 justify-center">
    <h1 class="flex flex-col justify-center text-w scale-text-large font-semibold">Tele-Op Scoring</h1>
</div>

<div class="flex text-w mx-4 mt-6 justify-center text-center">
    <span class="flex flex-col justify-center text-w scale-text font-semibold w-1/2">Speaker Scored</span>
    <div class="inline-flex w-1/2">
        <div class="w-1/3">
            <div class="text-center">
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={TeleDecSpeaker}>-</button>
            </div>
        </div>

        <p class="text-w my-auto scale-text-large font-thin w-1/3 text-center">{$scoutingData.teleSpeaker}</p>
        <div class="w-1/3">
            <div class="text-center">
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
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
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={TeleDecAmp}>-</button>
            </div>
        </div>

        <p class="text-w my-auto scale-text-large font-thin w-1/3 text-center">{$scoutingData.teleAmp}</p>
        <div class="w-1/3">
            <div class="text-center">
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={() => $scoutingData.teleAmp++}>+</button>
            </div>
        </div>
    </div>
</div>

<CurrentTeam scoutingData={$scoutingData}/>

<style>
    .dynMarg-small {
        margin: 3vw;
    }

    .scale-text {
        font-size : 5vw;
    }

    .scale-text-large {
        font-size : 9vw;
    }
</style>