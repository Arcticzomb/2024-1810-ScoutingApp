<!-- TODO -->
<p class="text-w text-2xl text-center">Make the Auto page</p>


<script lang="ts">
    import { scoutingData } from "$lib/stores";

    const decAmp = () => {
        if ($scoutingData.autoAmp > 0)
            $scoutingData.autoAmp--;
    }

    var amp: number, speaker: number;
</script>
 
<p class="text-w text-2xl text-left">Left Starting Zone</p>
<label>
  <input type="checkbox" bind:checked={$scoutingData.autoTaxi} /> 
</label>

<label>
    <button on:click={decAmp}>-</button>
    <p class="text-w text-2xl text-left"> Shots Scored in Amp</p>
    <button on:click={() => { $scoutingData.autoAmp++; }}>+</button>
   
</label>
<p class="text-w text-2xl text-float"> Shots Scored in Speaker</p>
<label>

    <input type="number" bind:value = {$scoutingData.autoSpeaker} min = "0" max = "2"/>
   
</label>
                     



