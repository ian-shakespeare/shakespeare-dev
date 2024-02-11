<script lang="ts">
  import "../../app.css";
  import Nav from "$lib/components/segments/Nav.svelte";
  import Particles from "svelte-particles";
  import { loadSlim } from "tsparticles-slim";

  const particlesConfig = {
    fpsLimit: 60,
    particles: {
      color: {
        value: "#fff"
      },
      links: {
        enable: true,
        color: "#fff"
      },
      move: {
        enable: true
      },
      number: {
        value: 75,
      },
    },
  };

  const onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;
  };

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };
</script>

<Nav />
<slot />
<Particles
  options={particlesConfig}
  on:particlesLoaded={onParticlesLoaded}
  particlesInit={particlesInit}
  class="opacity-25"
/>
