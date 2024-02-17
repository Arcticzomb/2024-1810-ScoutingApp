<svelte:head>
    <title>CATATRONICS | Data</title>
</svelte:head>

<script lang="ts">
    import { AllianceColor, WinState } from "$lib/stores";
    import type { PageData } from "./$types";

    export let data: PageData;

    // TODO: hard code a bunch of headers for the table that you would like
    const headers = ["Match Number", "Team Number", "Win", "Left Zone", "Auto Speaker", "Auto Amp", "Teleop Speaker", "Teleop Amp", "Climb", "Trap"];

    // download button callback
    // generates the CSV of compiled data inplace
    const download = () => {
        const headers = Object.keys(data.existing[0]).join(',');
        const rows = data.existing.map(obj => Object.values(obj).join(','));
        const csvContent = `${headers}\n${rows.join('\n')}`;

        const link = document.createElement('a');
        link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
        link.setAttribute('download', 'scouting-data.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // sort teams by match number then team color then team number in ascending order
    data.existing.sort((a, b) => {

        // sort by team match id if not the same
        if (a.matchid !== b.matchid) {
            return a.matchid - b.matchid;

        // sort by team color if not the same
        } else if (a.allianceColor !== b.allianceColor) {
            return a.allianceColor - b.allianceColor;

        // sort by team id
        } else {
            return a.teamid - b.teamid;
        }
    });

    const winState = (winState: WinState) => {
        switch (winState) {
            case WinState.Win:
                return "<span class=\"px-2 rounded-md bg-green-500 text-green-950\">Yes</span>";
            case WinState.Loss:
                return "<span class=\"px-2 rounded-md bg-red-500 text-black\">No</span>";
            case WinState.Tie:
                return "<span class=\"px-2 rounded-md font-thin text-slate-500\">Tie</span>";
            case WinState.unset:
                return " ";
        }
    };
</script>

<button class=" text-w text-center text-lg shadow-sm rounded bg-active px-4 py-2 m-4"
    on:click={download}>
    Download CSV
</button>

<h1 class="text-w text-center text-5xl md:-mt-10 max-md:mt-4 mb-8 font-thin">Collected Data</h1>

<div class="flex justify-center mb-8">
    <table class="text-center mx-16 w-full">
        <thead class="text-w">
            {#each headers as header}
                <th class="w-1/12"><span class="w-11/12 rounded my-2 mx-auto">{header}</span></th>
            {/each}
        </thead>
        <tbody class="border-2">
            <!-- TODO: fill table so that each element matches the header defined above-->
            {#each data.existing as team}
                <tr class="text-w border border-slate-500">
                    <td>{team.matchid}</td>
                    <td class="inline-flex items-center">
                        <svg class="w-3 h-3 mr-1 mt-px">
                            <circle cx="5" cy="5" r="5" class={`fill-current ${(team.allianceColor === AllianceColor.red) ? "text-red-500" : "text-blue-600"}`}></circle>
                        </svg>
                        {team.teamid}
                    </td>
                    <td>
                        {@html winState(team.winState ?? WinState.unset)}
                    </td>
                    <td class="border-l border-slate-500">{team.autoTaxi ? "Yes" : " "}</td>
                    <td class={`${(!team.autoSpeaker) ? "font-thin text-slate-500" : ""}`}>{(team.autoSpeaker ?? 0)}</td>
                    <td class={`${(!team.autoAmp) ? "font-thin text-slate-500" : ""}`}>{(team.autoAmp ?? 0)}</td>
                    <td class={`border-l border-slate-500 ${(!team.teleSpeaker) ? "font-thin text-slate-500" : ""}`}>{team.teleSpeaker ?? 0}</td>
                    <td class={`${(!team.teleAmp) ? "font-thin text-slate-500" : ""}`}>{(team.teleAmp ?? 0)}</td>
                    <td class="border-l border-slate-500">{team.endClimb ? "Yes" : " "}</td>
                    <td>{team.endTrap ? "Yes" : " "}</td>
                    
                </tr>
            {/each}
        </tbody>
    </table>
</div>