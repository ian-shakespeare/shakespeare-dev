<script lang="ts">
  import LazyImage from "$lib/components/segments/LazyImage.svelte";
  import { onDestroy, onMount } from "svelte";

  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
  const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;

  let itrv: NodeJS.Timer;

  const weddingDate = new Date("2024-03-16T07:00:00.000Z");

  const dateToSeconds = (d: Date): number => Math.floor(Number(d) / 1000)

  let secondsUntilWedding = dateToSeconds(weddingDate) - dateToSeconds(new Date());
  $: days = Math.floor(secondsUntilWedding / SECONDS_IN_DAY);
  $: hours = Math.floor(secondsUntilWedding / SECONDS_IN_HOUR) % 24;
  $: minutes = Math.floor(secondsUntilWedding / SECONDS_IN_MINUTE) % 60;
  $: seconds = secondsUntilWedding % 60;

  const padNumber = (n: number): string =>
    n >= 10
      ? n.toString()
      : "0" + n.toString();

  onMount(() => {
    itrv = setInterval(() => {
      secondsUntilWedding = dateToSeconds(weddingDate) - dateToSeconds(new Date());
    }, 1_000);
  });

  onDestroy(() => clearInterval(itrv));
</script>

<svelte:head>
  <title>Seina &amp; Ian - Wedding Home</title>
  <meta name="robots" content="noindex">
</svelte:head>
<main class="relative min-h-screen bg-black font-quicksand text-white">
  <section class="relative grid h-screen justify-items-center lg:h-[85vh]">
    <div class="grid h-2/3 content-center lg:h-full">
      <ol class="grid grid-cols-4">
        {#each [
          ["Days", padNumber(days)],
          ["Hours", padNumber(hours)],
          ["Mins", padNumber(minutes)],
          ["Secs", padNumber(seconds)]
        ] as [timeUnit, value]}
          <li class="relative grid justify-items-center after:absolute after:right-0 after:font-bold after:content-[':'] last:after:hidden lg:after:text-lg xl:after:text-xl">
            <span class="text-lg lg:text-xl xl:text-2xl">{value}</span>
            <span class="text-sm lg:text-base xl:text-lg">{timeUnit}</span>
          </li>
        {/each}
      </ol>
      <h1 class="relative z-10 mb-10 mt-6 select-none text-center font-playfair text-8xl font-medium lg:mb-16 lg:mt-12 lg:text-9xl xl:text-[10rem]">
        Seina<br>
        <sub class="bottom-0">&amp;</sub> Ian
      </h1>
      <a
        href="https://maps.app.goo.gl/sBKcU3j5MmYY5pkt6"
        class="relative z-10 rounded-full border-[1px] border-amber-100 bg-amber-100 px-6 py-4 text-center text-black duration-300 hover:bg-transparent hover:text-amber-100"
      >
        March 16, 2024, 16:00 | Nagoya, Japan
      </a>
    </div>
    <LazyImage
      alt="Ian and Seina looking across the desert"
      src="https://res.cloudinary.com/dpos2lw94/image/upload/v1707366255/engagement14_quo3y9.webp"
      srcSmall="https://res.cloudinary.com/dpos2lw94/image/upload/v1707366254/engagement14-small_ixudye.jpg"
      class="absolute inset-0 -bottom-20 opacity-75 lg:inset-y-0"
      position="left"
    />
  </section>
  <section class="relative z-10 grid bg-stone-950 px-8 pb-12">
    <h2 class="text-center font-playfair text-5xl bg-gradient-to-r from-black via-stone-800 to-black py-12">Gallery</h2>
    <ul class="grid gap-4 lg:grid-cols-6">
      {#each [
        [
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366253/engagement11_upsnew.webp",
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366253/engagement11-small_ket2t2.jpg",
          "Ian carrying Seina",
          "portrait",
        ],
        [
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366254/engagement12_xbv9cl.webp",
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366254/engagement12-small_csnswb.jpg",
          "Ian and Seina looking at one another",
          "landscape",
        ],
        [
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366250/engagement1_yhhn0n.webp",
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366250/engagement1-small_eywc3d.jpg",
          "Ian and Seina looking at a rock",
          "landscape",
        ],
        [
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366253/engagement10_qfdbam.webp",
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366253/engagement10-small_xrtgrx.jpg",
          "Ian and Seina walking together",
          "portrait",
        ],
        [
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366250/engagement3_mjummb.webp",
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366250/engagement3-small_zztmr2.jpg",
          "Closeup of Ian and Seina looking at the camera",
          "landscape",
        ],
        [
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366251/engagement4_fyppwp.webp",
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366251/engagement4-small_eszllo.jpg",
          "Ian and Seina looking at one another in front of the sun",
          "portrait",
        ],
        [
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366251/engagement5_e6u0ee.webp",
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366252/engagement5-small_pob7wo.jpg",
          "Ian carrying Seina",
          "portrait",
        ],
        [
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366251/engagement6_e1jlri.webp",
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366251/engagement6-small_i06q7l.jpg",
          "Ian and Seina walking together",
          "landscape",
        ],
        [
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366252/engagement7_cr3mp3.webp",
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366252/engagement7-small_edntrc.jpg",
          "Ian and Seina holding hands",
          "landscape",
        ],
        [
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366253/engagement8_yscl5j.webp",
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366252/engagement8-small_lqiipd.jpg",
          "Ian making a Jojo's pose while Seina laughs from embarrassment",
          "portrait",
        ],
        [
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366253/engagement9_xa5vcj.webp",
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366252/engagement9-small_twfhz7.jpg",
          "Ian and Seina walking away from the camera",
          "landscape-orphan",
        ],
        [
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366254/engagement13_ubkwdy.webp",
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366254/engagement13-small_xhkdkj.jpg",
          "Ian and Seina holding hands",
          "landscape-orphan",
        ],
        [
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366255/engagement16_znxfae.webp",
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366255/engagement16-small_psn4gr.jpg",
          "Ian and Seina looking out at the city",
          "landscape-orphan",
        ],
        [
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366251/engagement2_uxkq9k.webp",
          "https://res.cloudinary.com/dpos2lw94/image/upload/v1707366250/engagement2-small_xtsgg5.jpg",
          "Ian and Seina looking at the camera",
          "landscape-orphan",
        ],
      ] as [src, srcSmall, alt, orientation]}
        <li data-orientation={orientation} class="lg:col-span-2 lg:data-[orientation=landscape-orphan]:col-span-3 lg:data-[orientation=landscape]:col-span-4">
          <button class="group/btn h-full">
            <LazyImage
              scaleOnHover
              alt={alt}
              src={src}
              srcSmall={srcSmall}
              class="h-full opacity-75 rounded duration-300 hover:opacity-100 group-focus/btn:opacity-100"
            />
          </button>
        </li>
      {/each}
    </ul>
  </section>
  <a
    href="/wedding/register"
    class="absolute right-4 top-4 z-10 rounded-full border-[1px] border-amber-100 bg-transparent px-6 py-2 text-center text-amber-100 duration-300 hover:bg-amber-100 hover:text-black lg:right-8 lg:text-lg xl:right-12 xl:top-8 xl:text-xl"
  >
    RSVP
  </a>
</main>
