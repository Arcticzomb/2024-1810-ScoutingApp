<script lang="ts">
    import { WinState, scoutingData } from "$lib/stores";


</script>

<div class="flex text-w mx-4 justify-center mt-14">
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


<div class="flex mt-10 mb-3 justify-center">
    <div class="flex flex-row">
        <h1 class="flex flex-col justify-center text-w scale-text-large font-semibold">Intake/Pickup Method</h1>
    </div>
</div>
<div class="flex justify-center dynPad mt-6">
    <div class="flex flex-row w-1/2">
        <label for="station" class="flex flex-col justify-center text-w scale-text font-semibold">Station</label>
        <input name="Pickup" id="station" type="radio" value="0"
        class="testcheck:tog checked:bg-active bg-inactive text-center"
        bind:group={$scoutingData.intakeStyle}/>
    </div>
</div>
<div class="flex justify-center dynPad mt-6">
    <div class="flex flex-row w-1/2">
        <label for="ground" class="flex flex-col justify-center text-w scale-text font-semibold">Ground</label>
        <input name="Pickup" id="ground" type="radio" value="1"
        class="testcheck:tog checked:bg-active bg-inactive text-center"
        bind:group={$scoutingData.intakeStyle}/>
    </div>
</div>
    <div class="flex justify-center dynPad mt-6">
    <div class="flex flex-row w-1/2">
            <label for="both" class="flex flex-col justify-center text-w scale-text font-semibold">Both</label>
        <input name="Pickup" id="both" type="radio" value="2"
        class="testcheck:tog checked:bg-active bg-inactive text-center"
        bind:group={$scoutingData.intakeStyle}/>
    </div>
</div>

<div class="flex flex-col center">
    <div class="flex flex-row mt-10">
        <label for="notes" class="flex flex-col text-w scale-text-large font-semibol center">Notes</label>
    </div>
    <textarea autocomplete="off" name="notes" wrap="soft"
    bind:value={$scoutingData.endNotes}
    class="text-w border-slate-500 border-2 appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"
    placeholder="Enter notes here"/>
</div>

<style>
    .center {
    margin: auto;
    width: auto;
    text-align: center;
    padding: 10px;
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
           
