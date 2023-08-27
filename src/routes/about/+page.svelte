<script lang="ts">
  import Page from "$lib/components/primitives/Page.svelte";
  import Contact from "$lib/components/segments/Contact.svelte";
</script>

<Page title="About - Shakespeare Dev" description="About page for Ian Shakespeare, Software Developer">
  <h1 class="text-3xl text-center mb-8 bg-gradient-to-r bg-clip-text text-transparent from-rose-400 to-amber-400">
    A Little About Me
  </h1>
  <section class="grid gap-8 justify-items-center py-4">
    <img
      alt="image of ian"
      src="https://avatars.githubusercontent.com/u/70654892?s=400&u=0f97c3f78d0409df1034ae4f8f0db31e4a0f2dc7&v=4"
      class="w-48 h-48 inline-block rounded-full"
    />
    <p>
      <span class="text-xl bg-gradient-to-r bg-clip-text text-transparent from-emerald-400 to-blue-400">
        Hey there, I'm Ian!
      </span>
      I'm a recently graduated computer science student with a passion for web
      and mobile development. Equipped with a solid academic background and
      hands-on experience, I am well-versed in a range of programming languages
      and technologies. I have extensive experience working with TypeScript,
      React, Go, and Python, which have enabled me to design and develop robust
      and scalable production-level applications. During my studies, I
      successfully completed various projects that involved utilizing these
      technologies to create interactive web applications and intuitive mobile
      interfaces. My ability to work effectively in teams and my strong
      problem-solving skills have allowed me to deliver high-quality solutions
      while meeting project deadlines. I am eager to apply my skills and
      contribute to innovative projects in the ever-evolving field of technology.
    </p>
  </section>
  <hr class="border-zinc-700 my-8" />
  <Contact />
</Page>
