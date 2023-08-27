<script lang="ts">
  const contact = [
    {
      label: "ian@shakespeare.dev",
      href: "mailto:ian@shakespeare.dev",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ian-shakespeare-abb990197/",
    },
    {
      label: "GitHub",
      href: "https://github.com/ian-shakespeare",
    },
  ];
</script>

<section id="contact" class="grid gap-8">
  <p class="text-2xl text-center md:text-3xl">Contact me</p>
  <ul class="flex flex-wrap justify-center gap-4">
    {#each contact as { label, href }}
      <li>
        <a href={href} target="_blank" class="block px-4 py-3 border border-zinc-400 duration-300 hover:bg-white hover:text-zinc-950">
          {label}
        </a>
      </li>
    {/each}
  </ul>
</section>
