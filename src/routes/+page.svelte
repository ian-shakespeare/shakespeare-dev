<script lang="ts">
  import Page from "$lib/components/primitives/Page.svelte";
  import ExpandableImage from "$lib/components/segments/ExpandableImage.svelte";

  const screenshots = [
    {
      alt: "weboost screenshot",
      src: "https://res.cloudinary.com/dpos2lw94/image/upload/v1692931766/weboost_screenshot_pj9fjk.png",
      caption: `Weboost Ecommerce web application. Built using TypeScript and NextJS.`
    },
    {
      alt: "portfolio screenshot",
      src: "https://res.cloudinary.com/dpos2lw94/image/upload/v1692931766/portfolio_screenshot_ivzbea.png",
      caption: `Portfolio and CV SPA. Built with SvelteKit.`
    },
    {
      alt: "flightowl screenshot",
      src: "https://res.cloudinary.com/dpos2lw94/image/upload/v1692931766/flightowl_screenshot_chgblm.png",
      caption: `FlightOwl flight search engine. Built with Go, TypeScript, and SvelteKit.`
    },
  ];
  
  const technologyIcons = {
    prod: [
      "devicon-typescript-plain",
      "devicon-react-original",
      "devicon-go-original-wordmark",
      "devicon-kotlin-plain",
      "devicon-python-plain",
      "devicon-javascript-plain",
    ],
  };
</script>

<header class="grid content-center py-32 px-6 relative z-10 gap-4 max-w-[1240px] mx-auto md:justify-center">
  <h1 class="text-xl lg:text-2xl flex gap-4 items-center">
    <img
      alt="image of ian"
      src="https://avatars.githubusercontent.com/u/70654892?s=400&u=0f97c3f78d0409df1034ae4f8f0db31e4a0f2dc7&v=4"
      class="w-12 h-12 inline-block rounded-full"
    />
    Ian Shakespeare
  </h1>
  <div class="grid gap-2">
    <h2 class="text-gradient-warm text-5xl font-semibold inline-block md:text-6xl lg:text-7xl">
      Software Developer.
    </h2>
    <h3 class="text-gradient-cool text-5xl font-semibold inline-block md:text-6xl lg:text-7xl">
      Code Enthusiast.
    </h3>
  </div>
</header>
<Page title="Home - Shakespeare Dev" description="TODO(ian) add a proper description">
  <div class="grid bg-zinc-900/75 backdrop-blur-sm p-4">
    <section class="grid gap-4">
      <h4 class="text-2xl text-center md:text-3xl">Things I've worked on.</h4>
      <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {#each screenshots as screenshot}
          <li>
            <ExpandableImage
              {...screenshot}
            />
          </li>
        {/each}
      </ul>
    </section>
    <hr class="border-zinc-600 my-8" />
    <section>
      <h4 class="text-2xl text-center md:text-3xl">Technologies I've used.</h4>
      <ul>
      {#each technologyIcons.prod as prodIcon}
        <li>
          <i class={`text-8xl ${prodIcon}`} />
        </li>
      {/each}
      </ul>
    </section>
  </div>
</Page>
