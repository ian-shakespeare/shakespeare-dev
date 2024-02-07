<script lang="ts">
  import Page from "$lib/components/primitives/Page.svelte";
  import Contact from "$lib/components/segments/Contact.svelte";
  import { page } from "$app/stores";

  const projects = [
    {
      id: "weboost",
      title: "weboost",
      subtitle: "Cellular signal booster Ecommerce platform",
      description: `weboost is the principal Ecommerce site for
        <a href="https://wilsonelectronics.com" class="underline">
        Wilson Electronics</a>. Made using React and NextJS, the UI is hand
        built to be highly interactive. The site integrates closely with
        <a href="https://shopify.com" class="underline">Shopify</a> to deliver a
        clean and simple interface for purchasing products. This site contains
        dozens of custom pages, with hundreds more templated. The first portions
        of the site were built entirely by myself, with others assisting
        for the later stages. Pictured is the home page, which was one of
        the first completed.`,
      img: {
        alt: "weboost screenshot",
        src: "https://res.cloudinary.com/dpos2lw94/image/upload/v1692931766/weboost_screenshot_pj9fjk.png",
      },
    },
    {
      id: "flightowl",
      title: "FlightOwl",
      subtitle: "Commercial flight search engine and tracker",
      description: `FlightOwl is the all-in-one web and mobile app for finding
        and saving flights. FlightOwl offers a simple interface for flight
        searching. Flights are easily trackable, meaning users can
        monitor flight prices worry-free. FlightOwl was my capstone
        project at Utah Tech University. With an API implemented in Go, this
        project was designed for extreme scalability. The web app was made with
        Svelte, my personal favorite UI framework. This site was deployed with
        Heroku.`,
      img: {
        alt: "flightowl screenshot",
        src: "https://res.cloudinary.com/dpos2lw94/image/upload/v1692931766/flightowl_screenshot_chgblm.png",
      },
    },
    {
      id: "portfolio",
      title: "Shakespeare Dev v1",
      subtitle: "Portfolio and CV website for myself",
      description: `Serving as my initial implementation of
        <a href="/" class="underline">shakespeare.dev</a>, this site was made to
        be highly kinetic. With a custom built particles engine and smooth
        Svelte transitions, this site is designed to be simple and clean.
        Shakespeare Dev v1 was my first successful solo deployment, hosted on
        GitHub pages.`,
      img: {
        alt: "portfolio screenshot",
        src: "https://res.cloudinary.com/dpos2lw94/image/upload/v1692931766/portfolio_screenshot_ivzbea.png",
      },
    },
  ]

  $: hash = $page.url.hash;
</script>

<Page title="Projects - Shakespeare Dev" description="Projects page for Ian Shakespeare, Software Developer">
  <h1 class="text-3xl text-center bg-gradient-to-r bg-clip-text text-transparent from-emerald-400 to-blue-400">
    A Couple Projects I've Worked On
  </h1>
  <div class="mt-4 mb-8">
    {#each projects as { id, title, subtitle, description, img }}
      <section
        id={id}
        data-selected={id === hash.replace("#", "")}
        class="group grid gap-8 py-16 border-b border-zinc-700 first:pt-8 data-[selected=true]:bg-zinc-800/50 lg:grid-cols-2 lg:items-center"
      >
        <img alt={img.alt} src={img.src} class="lg:group-even:col-start-2" />
        <div class="grid gap-2 lg:group-even:row-start-1 lg:group-even:col-start-1">
          <h2 class="text-3xl">{title}</h2>
          <h3 class="text-zinc-400 text-sm">{subtitle}</h3>
          <p class="text-justify">{@html description}</p>
        </div>
      </section>
    {/each}
  </div>
  <Contact />
</Page>
