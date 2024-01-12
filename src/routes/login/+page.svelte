<svelte:head>
    <title>[NAME] | Login</title>
</svelte:head>

<script lang="ts">
    import type { ActionData } from "./$types";
    import { enhance } from "$app/forms";
    export let form: ActionData;
</script>

<img src="logo.png" alt="21677 logo" class="mx-auto my-5 text-w landscape:w-0 portrait:w-60">

{#if form?.error}
    <span class="flex justify-center text-red-700 text-lg font-bold">{form.error.toUpperCase()}</span>
{/if}

<form class="flex flex-col gap-8 text-w mx-10 items-center" method="post" use:enhance>
    <div class="max-w-screen-md">
        <label for="email" class="text-3xl">Email:</label>
        <input type="email" name="email" class="text-black w-full appearance-none shadow-sm rounded p-1" value={form?.email ?? ""}>
    </div>
    <div class="max-w-screen-md">
        <label for="password" class="text-3xl">Password:</label>
        <input type="password" name="password" class="text-black w-full appearance-none shadow-sm rounded p-1">
    </div>
    <button type="submit" class="text-w shadow-sm rounded bg-active p-2 text-xl">Log in</button>
    <a href="/login/forgot-password">Forgot password?</a>
</form>

