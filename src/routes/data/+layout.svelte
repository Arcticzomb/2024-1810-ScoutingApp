<script lang="ts">
    import type { LayoutData } from "./$types";

    let searchData: number | null;

    export let data: LayoutData;

    // reduce ppg data to an array of teamids that have data
    const ppg = data.ppg.sort((a, b) => b.pointTotal - a.pointTotal);
    const searchableTeams = ppg.map((p) => p.teamid);


    const search = () => {
        if (!searchableTeams.some((teamid) => teamid === searchData)) {
            searchData = null;
            return;
        }

        // if team is found then redirect user there
        // location.href=`/data/team/${searchData}`;
    };

    $: availableTeams = searchableTeams.filter((teamid) => teamid.toString().startsWith(searchData?.toString() ?? "")).reduce((acc, teamid) => {
        // acc.push(`<a href="/data/team/${teamid}" class="block px-4 py-1 hover:bg-[#cfcfcf]">${teamid}</a>`);
        acc.push(`<span class="block px-4 py-1 hover:bg-[#cfcfcf]">${teamid}</span>`);
        return acc;
    }, [] as string[]).slice(0, 5);
</script>

<nav class="w-full bg-nav shadow-lg flex border-b rounded-b top-0">
    <a href="/" class="group text-w wide-text md:text-2xl px-8 py-2 my-2">
        [NAME]
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-w max-md:hidden"></span>
    </a>
    <div class="md:w-1/5 w-1/2 flex justify-around text-md text-w font-thin">
        <a href="/data" class="group my-5 transition duration-300 max-md:hidden" data-sveltekit-reload>
            Data
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-px bg-w"></span>
        </a>
        <a href="/data/ppg" class="group my-5 transition duration-300" data-sveltekit-reload>
            PPG
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-px bg-w max-md:hidden"></span>
        </a>
        <a href="/data/matches" class="group my-5 transition duration-300" data-sveltekit-reload>
            Matches
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-px bg-w max-md:hidden"></span>
        </a>
    </div>

    <form autocomplete="off" class="max-md:hidden ml-auto mr-8 m-0 p-0" on:submit|preventDefault={search}>
        <input type="number" bind:value={searchData} placeholder="Team Search..."
        class="mt-4 rounded px-2 py-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none">
        <div class={`mt-1 bg-w rounded absolute ${searchData ? "" : "hidden"}`}>
            {@html availableTeams.join('\n')}
        </div>
    </form>
</nav>

<slot/>

<style lang="postcss">
    .wide-text {
        letter-spacing: 5px;
    }
</style>