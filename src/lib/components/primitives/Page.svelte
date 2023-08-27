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
<main class="relative max-w-[1240px] mx-auto z-10 px-6 md:px-12 lg:px-24">
  <div class="grid bg-zinc-900/75 backdrop-blur-sm p-4 pb-16">
    <slot />
  </div>
</main>
