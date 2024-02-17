<svelte:head>
    <title>CATATRONICS | Scouting</title>
</svelte:head>

<div class="flex flex-col">
    <img src="logo.png" alt="favicon.png" width="70%" height="70%" class="p-2 inline-block mt-2 mx-auto landscape:hidden">
    <span id="ampText" class="flex-col text-w scale-text font-semibold inline-block text-center px-3">1810 & 9316 Scouting App</span>
</div>

<!-------------------->
<div class="flex flex-col m-10 gap-5 items-center h-full bg-primary rounded-lg p-3">
    <a href="/scouting" class="text-w rounded bg-active p-1 px-2 scale-text text-center" data-sveltekit-preload-data="off">Start Scouting</a>
    <a href="/data/ppg" class="text-w rounded bg-active p-1 px-2 scale-text">Data</a>
</div>

<style>
    .scale-text {
        font-size : 5vw;
    }

</style>