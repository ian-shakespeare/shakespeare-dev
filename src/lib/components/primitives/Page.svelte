<script lang="ts">
  export let title: string;
  export let description: string;
  export let keywords: string | null = null;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="author" content="Ian Shakespeare" />
  {#if !!keywords}
    <meta name="keywords" content={keywords} />
  {/if}
</svelte:head>
<main class="max-w-[1440px] mx-auto">
  <slot />
</main>
