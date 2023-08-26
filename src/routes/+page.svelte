<script lang="ts">
  import Page from "$lib/components/primitives/Page.svelte";

  const screenshots = [
    {
      alt: "weboost screenshot",
      src: "https://res.cloudinary.com/dpos2lw94/image/upload/v1692931766/weboost_screenshot_pj9fjk.png",
      href: "/projects#weboost"
    },
    {
      alt: "portfolio screenshot",
      src: "https://res.cloudinary.com/dpos2lw94/image/upload/v1692931766/portfolio_screenshot_ivzbea.png",
      href: "/projects#portfolio"
    },
    {
      alt: "flightowl screenshot",
      src: "https://res.cloudinary.com/dpos2lw94/image/upload/v1692931766/flightowl_screenshot_chgblm.png",
      href: "/projects#flightowl"
    },
  ];
  
  const technologyIcons = [
    {
      label: "In production",
      icons: [
        "devicon-typescript-plain",
        "devicon-nextjs-original",
        "devicon-react-original",
        "devicon-github-original",
        "devicon-go-original-wordmark",
        "devicon-kotlin-plain",
        "devicon-python-plain",
        "devicon-javascript-plain",
        "devicon-heroku-original",
      ]
    },
    {
      label: "In projects",
      icons: [
        "devicon-svelte-plain",
        "devicon-cplusplus-plain",
        "devicon-sqlite-plain",
        "devicon-postgresql-plain",
        "devicon-swift-plain",
        "devicon-django-plain",
      ]
    },
    {
      label: "For fun",
      icons: [
        "devicon-rust-plain",
        "devicon-csharp-plain",
        "devicon-elixir-plain",
      ]
    }
  ];
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
  <div class="grid bg-zinc-900/75 backdrop-blur-sm p-4 pb-16">
    <section class="grid gap-4">
      <h4 class="text-2xl text-center md:text-3xl">Things I've worked on</h4>
      <ul class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {#each screenshots as {alt, src, href}}
          <li>
            <a href={href}>
              <img alt={alt} src={src} class="border-8 border-transparent duration-300 rounded-md hover:border-zinc-700" />
            </a>
          </li>
        {/each}
      </ul>
    </section>
    <hr class="border-zinc-700 my-8" />
    <section class="grid gap-8">
      <h4 class="text-2xl text-center md:text-3xl">Technologies I've used</h4>
      {#each technologyIcons as {label, icons}}
        <div class="grid gap-4">
          <h5 class="text-xl text-zinc-300">{label}:</h5>
          <ul class="flex flex-wrap gap-4 justify-center md:justify-left">
          {#each icons as icon}
            <li>
              <i class={`text-8xl text-zinc-700 duration-300 cursor-pointer hover:text-white ${icon}`} />
            </li>
          {/each}
          </ul>
        </div>
      {/each}
      <p class="text-zinc-600 text-center">
        Icons provided by <a href="https://devicon.dev/" class="underline">Devicon</a>
      </p>
    </section>
  </div>
</Page>
