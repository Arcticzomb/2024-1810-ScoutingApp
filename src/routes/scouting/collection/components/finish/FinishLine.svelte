<script lang="ts">
    import { IntakeStyle, WinState, scoutingData } from "$lib/stores";

</script>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<div class="flex">
    <p class ="mx-1 scale-text-small font-semibold text-w">Match {$scoutingData.matchid} Team</p>
    <p class ={`scale-text-small font-semibold ${$scoutingData.teamcolor ? "text-blue-alliance" : "text-red-alliance"}`}>{$scoutingData.teamid}</p>
</div>

<div class="flex mb-3 justify-center">
    <div class="flex flex-row">
        <h1 class="flex flex-col justify-center text-w scale-text-large font-semibold">Win State</h1>
    </div>
</div>

<div class="flex justify-evenly">
    <div class="flex flex-col justify-center w-1/3">
        <label for="win" class="text-center text-w scale-text font-semibold">Win</label>

        <input name="Win" id="Park" type="radio" value={WinState.Win}
        class="mx-auto testcheck:tog checked:bg-active bg-inactive"
        bind:group={$scoutingData.winState}/>
    </div>
    <div class="flex flex-col justify-center w-1/3">
        <label for="loss" class="text-center text-w scale-text font-semibold">Loss</label>

        <input name="Loss" id="loss" type="radio" value={WinState.Loss}
        class="mx-auto testcheck:tog checked:bg-active bg-inactive"
        bind:group={$scoutingData.winState}/>
    </div>
    <div class="flex flex-col justify-center w-1/3">
        <label for="loss" class="text-center text-w scale-text font-semibold">Tie</label>

        <input name="Tie" id="loss" type="radio" value={WinState.Tie}
        class="mx-auto testcheck:tog checked:bg-active bg-inactive"
        bind:group={$scoutingData.winState}/>
    </div>
</div>

<div class="flex mt-10 justify-center">
    <h1 class="flex flex-col justify-center text-w scale-text-large font-semibold">Intake/Pickup Method</h1>
</div>

<div class="flex justify-center dynPad">
    <div class="flex flex-row w-1/2">
        <label for="station" class="flex flex-col justify-center text-w scale-text font-semibold">Station</label>
        <input id="station" name="PickupButton" type="checkbox"
        bind:checked={$scoutingData.intakeStyle[0]}
        class="testcheck:tog checked:bg-active bg-inactive ml-auto mr-0">
    </div>
</div>

<div class="flex justify-center dynPad">
    <div class="flex flex-row w-1/2">
        <label for="ground" class="flex flex-col justify-center text-w scale-text font-semibold">Ground</label>
        <input id="ground" name="GroundButton" type="checkbox"
        bind:checked={$scoutingData.intakeStyle[1]}
        class="testcheck:tog checked:bg-active bg-inactive ml-auto mr-0">
    </div>
</div>

<div class="flex flex-col center">
    <div class="flex flex-row mt-0">
        <label for="notes" class="flex flex-col text-w scale-text-large font-semibol center">Notes</label>
    </div>
    <textarea autocomplete="off" name="notes" wrap="soft"
    bind:value={$scoutingData.endNotes}
    class="text-w border-slate-500 border-2 appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive"
    placeholder="Enter notes here"/>
</div>

<style>

    .dynPad {
        padding: 5vw;
    }

    .center {
        margin: auto;
        width: auto;
        text-align: center;
        padding: 10px;
    }

    .scale-text-small {
        font-size : 4vw;
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
           
