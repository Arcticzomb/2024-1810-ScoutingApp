<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="flex flex-col h-screen w-screen text-w text-center justify-center items-center">
    <strong class="text-8xl">Error</strong>
    <em class="text-2xl">{$page.status}: {$page.error?.message}</em>
    <button on:click={() => history.back()} class="text-w rounded bg-active p-1 w-fit mt-2">Go back...</button>
</div>
