<script lang="ts">
  import { onMount } from "svelte";

  export let src: string;
  export let srcSmall: string;
  export let alt: string;
  export let position: "left"
    | "left-bottom"
    | "left-top"
    | "right"
    | "right-bottom"
    | "right-top"
    | "center"
    | "bottom"
    | "top" = "center";
  let className: string;
  export { className as class };
  export let scaleOnHover = false;

  let isLoaded = false;
  let container: HTMLDivElement;

  onMount(() => {
    const img = container.querySelector("img")!;
    if (img.complete) {
      isLoaded = true;
    } else {
      img.addEventListener("load", () => {isLoaded = true});
    }
  });
</script>

<div
  bind:this={container}
  data-position={position}
  class={`
    ${className}
    group/lazy
    bg-no-repeat
    bg-cover
    overflow-hidden
    data-[position=left]:bg-left
    data-[position=left-bottom]:bg-left-bottom
    data-[position=left-top]:bg-left-top
    data-[position=right]:bg-right
    data-[position=right-bottom]:bg-right-bottom
    data-[position=right-top]:bg-right-top
    data-[position=center]:bg-center
    data-[position=bottom]:bg-bottom
    data-[position=top]:bg-top
  `}
  style={`background-image:url(${srcSmall});`}
>
  <img
    src={src}
    alt={alt}
    loading="lazy"
    data-scale={scaleOnHover}
    data-loaded={isLoaded}
    data-position={position}
    class={`
      pointer-events-none
      h-full
      w-full
      object-cover
      duration-200
      data-[position=left]:object-left
      data-[position=left-bottom]:object-left-bottom
      data-[position=left-top]:object-left-top
      data-[position=right]:object-right
      data-[position=right-bottom]:object-right-bottom
      data-[position=right-top]:object-right-top
      data-[position=center]:object-center
      data-[position=bottom]:object-bottom
      data-[position=top]:object-top
      data-[loaded=false]:opacity-0
      data-[scale=true]:group-focus/btn:scale-105
      data-[scale=true]:group-hover/lazy:scale-105
    `}
    style="border-radius:inherit;"
  />
</div>
