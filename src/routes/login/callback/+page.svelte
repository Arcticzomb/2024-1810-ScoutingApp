<script lang="ts">
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    $: {
        const redirectTo = $page.url.searchParams.get("redirect_url");
        if (browser) goto(redirectTo ?? ($page.data.session ? "/account" : "/"));
    }

</script>
