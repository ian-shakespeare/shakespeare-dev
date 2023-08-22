<script lang="ts">
  import "../app.css";
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

<header class="grid justify-center content-center py-32 px-6">
  <h1>Ian Shakespeare</h1>
  <h2 class="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent text-4xl">
    Software Developer,
    <br />
    Code Enthusiast
  </h2>
</header>
<slot />
<Particles
  options={particlesConfig}
  on:particlesLoaded={onParticlesLoaded}
  particlesInit={particlesInit}
/>
