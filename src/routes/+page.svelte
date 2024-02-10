<svelte:head>
    <title>[NAME] | Scouting</title>
</svelte:head>

<!-- TODO: Make page look nicer (please) -->
<!-- I gotchu homie -->
<div>
    <img src="logo.png" alt="favicon.png" width="30%" height="30%" class="p-2 inline-block">
    <span id="ampText" class="flex-col text-w scale-text font-semibold inline-block text-center px-3">
        The Official 1810 & 9316<br>Scouting App</span>
</div>



<!-------------------->
<div class="flex flex-col m-10 gap-5 items-center">
    <a href="/scouting" class="text-w rounded bg-active p-1 scale-text text-center" data-sveltekit-preload-data="off">Start Scouting</a>
    <a href="/data/ppg" class="text-w rounded bg-active p-1 scale-text">Data</a>
</div>

<style>
    .scale-text {
        font-size : 5vw;
    }

</style>