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

<div class="flex my-3 justify-center mt-14">
    <h1 class="flex flex-col justify-center text-w scale-text-large font-semibold">Auto Scoring</h1>
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

<div class="flex mx-4 my-8 justify-center">
    <div class="flex flex-row w-2/3">
        <label for="taxi" class="flex flex-col justify-center text-w scale-text font-semibold w-5/6">Left Starting Zone</label>
        <input name="taxi"
                type="checkbox"
                bind:checked={$scoutingData.autoTaxi}
                class="testcheck:tog checked:bg-active bg-inactive text-center">
    </div>
</div>

<style>
    .dynMarg-small {
        margin: 3vw;
    }

    .dynPad-small {
        padding: .5vw;
    }

    .scale-text {
        font-size : 5vw;
    }

    .scale-text-large {
        font-size : 9vw;
    }

    .testcheck\:tog:not(:checked),
    .testcheck\:tog:checked {
        appearance: none;
        border-radius: 0.25rem;
        --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        padding: 5vw;
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