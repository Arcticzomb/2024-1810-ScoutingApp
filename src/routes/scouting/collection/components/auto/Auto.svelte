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

    const teamCol = () => {
    if ($scoutingData.teamcolor === 0) { return("Red")} else { return("Blue") }
    }

</script>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<div class="flex">
    <p class ="mx-1 scale-text-small font-semibold text-w">Match {$scoutingData.matchid} Team</p>
    <p class ={`scale-text-small font-semibold ${$scoutingData.teamcolor ? "text-blue-alliance" : "text-red-alliance"}`}>{$scoutingData.teamid}</p>
</div>

<div class="flex mb-3 justify-center">
    <h1 class="flex flex-col justify-center text-w scale-text-large font-semibold">Auto Scoring</h1>
</div>


<div class="flex justify-center">
    <span class="text-w scale-text font-semibold w-1/2 text-center">Speaker Scored</span>
</div>

<div class="flex text-w mx-4 justify-center">
    <div class="inline-flex w-2/3">
        <div class="w-1/3 text-center">
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={AutoDecSpeaker}>-</button>
        </div>

        <p class="text-w my-auto scale-text-large font-thin w-1/3 text-center">{$scoutingData.autoSpeaker}</p>
        <div class="w-1/3 text-center">
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={() => $scoutingData.autoSpeaker++}>+</button>
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
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={AutoDecAmp}>-</button>
            </div>
        </div>

        <p class="text-w my-auto scale-text-large font-thin w-1/3 text-center">{$scoutingData.autoAmp}</p>
        <div class="w-1/3">
            <div class="text-center">
        <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
        on:click={() => $scoutingData.autoAmp++}>+</button>
            </div>
        </div>
    </div>
</div>

<div class="flex mx-4 my-8 justify-center">
    <div class="flex flex-row w-2/3">
        <label for="taxi" class="flex flex-col justify-center text-w scale-text font-semibold w-5/6">Left Starting Zone</label>
        <input name="taxi"
                type="checkbox"
                bind:checked={$scoutingData.autoTaxi}
                class="testcheck:tog checked:bg-active bg-inactive">
    </div>
</div>

<style>

    .dynMarg-small {
        margin: 3vw;
    }

    .scale-text {
        font-size : 5vw;
    }

    .scale-text-small {
        font-size : 4vw;
    }

    .scale-text-large {
        font-size : 9vw;
    }

    .testcheck\:tog:not(:checked),
    .testcheck\:tog:checked {
        appearance: none;
        border-radius: 0.25rem;
        width: 10vw;
        height: 10vw;
        text-align: center;

    }

    .testcheck\:tog:not(:checked)::before,
    .testcheck\:tog:checked::before {
        content: "";
    }

    .testcheck\:tog:not(:checked)::after,
    .testcheck\:tog:checked::after {
        content: "✓";
        font-size: 7vw;
        color: rgb(255 255 255);
        transition: all .2s;
    }

    .testcheck\:tog:not(:checked)::after {
        opacity: 0;
    }

    .testcheck\:tog:checked::after {
        opacity: 1;
    }
</style>