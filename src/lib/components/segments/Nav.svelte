<script lang="ts">
  import { page } from "$app/stores";
  import {onMount} from "svelte";

  let isOpen = false;
  let scrollPos = 0;

  const routes = [
    ["Home", "/"],
    ["Projects", "/projects"],
    ["Contact", "/contact"],
    ["GitHub", "/github"],
  ];

  onMount(() => {
    window.addEventListener("scroll", (event) => {
      scrollPos = window.pageYOffset;
    });
  });

  $: path = $page.url.pathname;
</script>

<nav data-background-visible={scrollPos > 0} class="sticky top-0 px-6 py-4 z-50 duration-300 data-[background-visible=true]:backdrop-blur-sm data-[background-visible=true]:bg-zinc-900/75 md:px-12 lg:!backdrop-blur-none lg:!bg-transparent lg:px-24 lg:max-w-[1240px] lg:py-2 lg:mx-auto">
  <button aria-controls="nav-menu" on:click={() => {isOpen = !isOpen}} class="lg:hidden">
    <i class="fa-solid fa-bars text-4xl opacity-75" />
    <span class="sr-only">open nav</span>
  </button>
  <div id="nav-menu" aria-expanded={isOpen} data-open={isOpen} class="fixed grid grid-cols-[85%_15%] -left-full duration-300 w-screen h-screen inset-y-0 data-[open=true]:left-0 lg:left-auto lg:static lg:grid-cols-1 lg:h-auto lg:w-full">
    <div class="relative bg-zinc-900/75 backdrop-blur-sm px-6 py-8 lg:p-2">
      <button on:click={() => {isOpen = false}} class="absolute top-4 right-6 lg:hidden">
        <i class="fa-solid fa-xmark text-2xl" />
        <span class="sr-only">close nav</span>
      </button>
      <ul class="grid lg:grid-cols-[repeat(4,1fr)] lg:justify-center lg:gap-2">
        {#each routes as [label, href]}
          <li data-current={href === path} class="text-3xl py-4 border-b border-zinc-600 duration-300 last:border-0 lg:border-0 lg:text-xl lg:data-[current=true]:bg-zinc-700/50 lg:hover:bg-zinc-800/50 lg:text-center lg:py-2">
            <a href={href} class="block">{label}</a>
          </li>
        {/each}
      </ul>
    </div>
    <button aria-hidden="true" on:click={() => {isOpen = false}} class="block lg:hidden">
      <span class="sr-only">close nav</span>
    </button>
  </div>
</nav>
