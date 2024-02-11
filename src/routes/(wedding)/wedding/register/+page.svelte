<script lang="ts">
  enum GroomRelations {
    Sibling = 1,
    ExtendedFamily = 2,
    Friend = 3,
    FriendSpouse = 4,
    SiblingFamily = 5,
  }

  const relationLabels = {
    [GroomRelations.Sibling]: "Sibling",
    [GroomRelations.ExtendedFamily]: "Extended Family",
    [GroomRelations.Friend]: "Friend",
    [GroomRelations.FriendSpouse]: "Spouse of a Friend",
    [GroomRelations.SiblingFamily]: "Spouse or Child of a Sibling",
  };

  let guestCount = 1;

  let cmps: HTMLLIElement[] = [];

  $: cmps = cmps.filter(el => el);

  const handleSubmit = () => {
    const guests = cmps.map((cmp) => ({
      firstName: cmp.querySelector<HTMLInputElement>(".firstName")?.value,
      lastName: cmp.querySelector<HTMLInputElement>(".lastName")?.value,
      email: cmp.querySelector<HTMLInputElement>(".email")?.value,
      relation: Number(cmp.querySelector<HTMLSelectElement>("select")?.value),
    }));
    console.log(guests);
  };
</script>

<svelte:head>
  <title>Seina &amp; Ian - Wedding Home</title>
  <meta name="robots" content="noindex">
</svelte:head>
<main class="relative min-h-screen bg-black font-quicksand text-white">
  <section class="mx-auto grid max-w-[500px] gap-2 rounded-b bg-gradient-to-r from-stone-800 to-stone-900 px-6 py-4">
    <h1 class="font-playfair text-5xl">Registration</h1>
    <ul class="grid">
    {#each {length: guestCount} as _, i}
      <li bind:this={cmps[i]} class="grid gap-2 border-b border-white py-6 last:border-b-0">
        <h2 class="text-xl">Guest {i + 1}</h2>
        <input class="email rounded bg-stone-700 px-4 py-2" type="email" placeholder={i === 0 ? "Email" : "Email (Optional)"} />
        <input class="firstName rounded bg-stone-700 px-4 py-2" type="text" placeholder="First Name" />
        <input class="lastName rounded bg-stone-700 px-4 py-2" type="text" placeholder="Last Name" />
        <h3>Relation to Groom</h3>
        <select class="relation rounded bg-stone-700 px-4 py-3">
          {#each Object.entries(relationLabels) as [key, label]}
            <option value={key}>{label}</option>
          {/each}
        </select>
      </li>
    {/each}
    </ul>
    <button class="rounded py-2 duration-300 hover:bg-stone-700" on:click={() => guestCount += 1}>+ Add Guest</button>
    <button class="rounded border-[1px] border-amber-500 py-2 text-amber-500 duration-300 hover:bg-amber-500 hover:text-black" on:click={handleSubmit}>Submit</button>
  </section>
</main>
