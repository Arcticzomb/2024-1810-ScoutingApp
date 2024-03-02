<script lang="ts">
    import { IntakeStyle, WinState, scoutingData } from "$lib/stores";

</script>

<div class="flex">
    <p class ="mx-1 scale-text-small font-semibold text-w">Match {$scoutingData.matchid} Team</p>
    <p class ={`scale-text-small font-semibold ${$scoutingData.teamcolor ? "text-blue-alliance" : "text-red-alliance"}`}>{$scoutingData.teamid}</p>
</div>

<div class="flex justify-center">
    <div class="flex flex-row">
        <h1 class="flex flex-col justify-center text-w scale-text-large font-semibold">Win State</h1>
    </div>
</div>
<div class="flex text-w mx-4 justify-center mt-2">
    <div class="inline-flex w-1/3">
        <label for="win" class="flex flex-col justify-center text-w scale-text font-semibold ml-1"
        style="margin-left: auto;">Win</label>

        <input name="WinState" id="win" type="radio" value={WinState.Win}
        class="testcheck:tog checked:bg-active bg-inactive text-center"
        style="margin-left: auto;margin-right: 1;"
        bind:group={$scoutingData.winState}/>
    </div>
    <div class="inline-flex w-1/3">
        <label for="tie" class="flex flex-col justify-center text-w scale-text font-semibold ml-1"
        style="margin-left: auto;">Loss</label>

        <input name="WinState" id="tie" type="radio" value={WinState.Loss}
        class="testcheck:tog checked:bg-active bg-inactive text-center"
        style="margin-left: auto;margin-right: 1;"
        bind:group={$scoutingData.winState}/>
    </div>
    <div class="inline-flex w-1/3">
        <label for="loss" class="flex flex-col justify-center text-w scale-text font-semibold ml-1"
        style="margin-left: auto;">Tie</label>

        <input name="WinState" id="loss" type="radio" value={WinState.Tie}
        class="testcheck:tog checked:bg-active bg-inactive text-center"
        style="margin-left: auto;margin-right: 1;"
        bind:group={$scoutingData.winState}/>
    </div>
</div>


<div class="flex mt-10 justify-center">
    <div class="flex flex-row">
        <h1 class="flex flex-col justify-center text-w scale-text-large font-semibold">Intake/Pickup Method</h1>
    </div>
</div>
<div class="flex justify-center mt-2">
    <div class="flex flex-row w-1/2">
        <label for="station" class="flex flex-col justify-center text-w scale-text font-semibold">Station</label>
        <input name="Pickup" id="station" type="checkbox"
        class="testcheck:tog checked:bg-active bg-inactive text-center"
        bind:checked={$scoutingData.intakeStyle[0]}/>
    </div>
</div>
<div class="flex justify-center mt-6">
    <div class="flex flex-row w-1/2">
        <label for="ground" class="flex flex-col justify-center text-w scale-text font-semibold">Ground</label>
        <input name="Pickup" id="ground" type="checkbox"
        class="testcheck:tog checked:bg-active bg-inactive text-center"
        bind:checked={$scoutingData.intakeStyle[1]}/>
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
    .center {
        margin: auto;
        width: auto;
        text-align: center;
        padding: 10px;
    }

    .scale-text-small {
        font-size : 3vw;
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
        padding: 5vw;
        line-height: 1.4;
        margin-left: auto;
        margin-right: 0;
    }

    .testcheck\:tog:not(:checked)::before,
    .testcheck\:tog:checked::before {
        content: "";
    }

    .testcheck\:tog:not(:checked)::after,
    .testcheck\:tog:checked::after {
        content: "✓";
        font-size: 6vw;
        line-height: 0.4vw;
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
           
