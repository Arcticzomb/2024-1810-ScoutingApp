<script lang="ts">
    import { EndClimb, scoutingData } from "$lib/stores";
    import CurrentTeam from "../CurrentTeam.svelte";
</script>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<div class="flex mb-3 justify-center">
    <h1 class="flex flex-col justify-center text-w scale-text-large font-semibold">Stage State</h1>
</div>

<div class="flex justify-evenly">
    <div class="flex flex-col justify-center w-1/3">
        <label for="Park" class="text-center text-w scale-text font-semibold">None</label>

        <input name="parkHang" id="Park" type="radio" value={EndClimb.None}
        class="mx-auto testcheck:tog checked:bg-active bg-inactive"
        bind:group={$scoutingData.endClimb}/>
    </div>
    <div class="flex flex-col justify-center w-1/3">
        <label for="Park" class="text-center text-w scale-text font-semibold">Park</label>

        <input name="parkHang" id="Park" type="radio" value={EndClimb.Park}
        class="mx-auto testcheck:tog checked:bg-active bg-inactive"
        bind:group={$scoutingData.endClimb}/>
    </div>
    <div class="flex flex-col justify-center w-1/3">
        <label for="ParkHang" class="text-center text-w scale-text font-semibold">Hang</label>

        <input name="parkHang" id="ParkHang" type="radio" value={EndClimb.Hang}
        class="mx-auto testcheck:tog checked:bg-active bg-inactive"
        bind:group={$scoutingData.endClimb}/>
    </div>
</div>

<div class="fadein">
    {#if $scoutingData.endClimb === EndClimb.Hang}
        <div class="flex mt-10 justify-center">
            <h1 class="flex flex-col justify-center text-w scale-text-large font-semibold">Climb Extras</h1>
        </div>

        <div class="flex justify-center dynPad">
            <div class="flex flex-row w-1/2">
                <label for="harmony" class="flex flex-col justify-center text-w scale-text font-semibold">Harmony</label>
                <input id="harmony" name="HarmonyButton" type="checkbox"
                bind:checked={$scoutingData.endHarmony}
                class="testcheck:tog checked:bg-active bg-inactive ml-auto mr-0">
            </div>
        </div>

        <div class="flex justify-center dynPad">
            <div class="flex flex-row w-1/2">
                <label for="trap" class="flex flex-col justify-center text-w scale-text font-semibold">Trap</label>
                <input id="trap" name="TrapButton" type="checkbox"
                bind:checked={$scoutingData.endTrap}
                class="testcheck:tog checked:bg-active bg-inactive ml-auto mr-0">
            </div>
        </div>
    {/if}
</div>

<div class="absolute w-full bottom-20">
    <CurrentTeam scoutingData={$scoutingData}/>
</div>

<style>

    .fadein {
        transition: all .2s;
    }

    .dynPad {
        padding: 5vw;
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