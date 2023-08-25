<script lang="ts">
  export let alt: string;
  export let src: string;
  export let caption: string;

  let isExpanded = false;
</script>

<button
  on:click={() => {isExpanded = !isExpanded}}
  on:mouseover={() => {isExpanded = true}}
  on:mouseout={() => {isExpanded = false}}
  class="block"
>
  <figure>
    <img
      alt={alt}
      src={src}
    />
    <figcaption data-expanded={isExpanded} class="grid content-center h-0 bg-zinc-800 overflow-hidden duration-300 box-content px-4 data-[expanded=true]:h-16 data-[expanded=true]:p-4">
      {caption}
    </figcaption>
  </figure>
</button>
