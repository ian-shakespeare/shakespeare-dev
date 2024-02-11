<script lang="ts">
  import Page from "$lib/components/primitives/Page.svelte";
  import Contact from "$lib/components/segments/Contact.svelte";

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
  
  const technologies = [
    {
      label: "In production",
      icons: [
        ["devicon-typescript-plain", "TypeScript"],
        ["devicon-nextjs-original", "NextJS"],
        ["devicon-react-original", "React"],
        ["devicon-github-original", "GitHub"],
        ["devicon-go-original-wordmark", "Go"],
        ["devicon-kotlin-plain", "Kotlin"],
        ["devicon-python-plain", "Python"],
        ["devicon-javascript-plain", "JavaScript"],
        ["devicon-heroku-original", "Heroku"],
      ]
    },
    {
      label: "In projects",
      icons: [
        ["devicon-svelte-plain", "Svelte"],
        ["devicon-cplusplus-plain", "C++"],
        ["devicon-sqlite-plain", "SQLite"],
        ["devicon-postgresql-plain", "PostgreSQL"],
        ["devicon-swift-plain", "Swift"],
        ["devicon-django-plain", "Django"],
      ]
    },
    {
      label: "For fun",
      icons: [
        ["devicon-rust-plain", "Rust"],
        ["devicon-csharp-plain", "C#"],
        ["devicon-elixir-plain", "Elixir"],
      ]
    }
  ];

  const work = [
    {
      place: "Wilson Electronics",
      position: "Software Developer",
      startDate: "Aug 2022",
      endDate: "Current",
    },
    {
      place: "Utah Tech University",
      position: "Computer Science Tutor",
      startDate: "January 2022",
      endDate: "December 2022",
    },
    {
      place: "Steamroller Copies",
      position: "Print Tech & Customer Service Rep",
      startDate: "January 2020",
      endDate: "December 2021",
    },
    {
      place: "Apollo Burger",
      position: "Customer Service Rep",
      startDate: "July 2017",
      endDate: "November 2019",
    },
  ];

  const awards = [
    "Bachelor of Science in Computer Science Cum Laude",
    "Associate of Science in General Studies Honors",
    "Service Learning Award 2022",
    "University Spirit Award - Finalist",
    "Service Learning Award 2021",
    "JLPT N5 Certification",
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
<Page title="Home - Shakespeare Dev" description="Home page and CV for Ian Shakespeare, Software Developer.">
  <section class="grid gap-4">
    <h4 class="text-2xl text-center md:text-3xl">Things I've worked on</h4>
    <ul class="grid gap-2 justify-center md:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(3,auto)]">
      {#each screenshots as {alt, src, href}}
        <li>
          <a href={href}>
            <img alt={alt} src={src} width="325" height="220" class="border-8 border-transparent duration-300 rounded-md hover:border-zinc-700" />
          </a>
        </li>
      {/each}
    </ul>
  </section>
  <hr class="border-zinc-700 my-8" />
  <section class="grid gap-8 mb-8">
    <h4 class="text-2xl text-center md:text-3xl">Technologies I've used</h4>
    {#each technologies as {label, icons}}
      <div class="grid gap-4">
        <h5 class="text-xl text-zinc-300">{label}:</h5>
        <ul class="flex flex-wrap justify-center md:justify-start">
          {#each icons as [icon, iconLabel]}
            <li class="group/item grid content-start p-2 duration-300 rounded hover:bg-zinc-800/50">
              <button class="group/btn peer cursor-default">
                <i aria-hidden="true" class={`text-8xl text-zinc-700 duration-300 group-hover/item:text-white group-focus/btn:text-white ${icon}`} />
                <span class="sr-only">show name</span>
              </button>
              <p class="h-0 pt-2 text-center overflow-hidden duration-300 group-hover/item:h-8 peer-focus:h-8">
                {iconLabel}
              </p>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
    <p class="text-zinc-600 text-center">
      Icons provided by <a href="https://devicon.dev/" class="underline">Devicon</a>
    </p>
  </section>
  <hr class="border-zinc-700 my-8" />
  <section class="grid gap-8">
    <h4 class="text-2xl text-center md:text-3xl">Places I've worked</h4>
    <ul class="grid gap-2 justify-center md:grid-cols-2">
      {#each work as { place, position, startDate, endDate }}
        <li class="group grid gap-2 px-4 py-8 bg-zinc-800/50">
          <h5 class="text-xl group-first:bg-gradient-to-r group-first:bg-clip-text group-first:text-transparent group-first:from-rose-400 group-first:to-amber-400 md:text-2xl">
            {place}
          </h5>
          <p>{position}</p>
          <p class="text-zinc-500">{startDate} - {endDate}</p>
        </li>
      {/each}
    </ul>
  </section>
  <hr class="border-zinc-700 my-8" />
  <section class="grid gap-8 justify-center">
    <h4 class="text-2xl text-center md:text-3xl">Education and Honors I've received</h4>
    <ul class="grid gap-y-2 gap-x-4 md:grid-cols-2">
      {#each awards as award}
        <li class="group max-w-[300px] text-lg">
          <span aria-hidden="true" class="inline-block bg-gradient-to-r bg-clip-text text-transparent group-odd:from-rose-400 group-odd:to-amber-400 group-even:from-emerald-400 group-even:to-blue-400">
            {"•"}
          </span>
          {award}
        </li>
      {/each}
    </ul>
  </section>
  <hr class="border-zinc-700 my-8" />
  <Contact />
</Page>
