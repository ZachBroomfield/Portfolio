<script>
  import Example from "./Example.svelte";

  export let skill;
</script>

<div class="
  collapse
  collapse-arrow
  border
  border-base-300
  bg-base-300
  rounded-box
  max-w-4xl
  mx-auto
  my-2"
>
  <input type="checkbox" />
  <h2 class="collapse-title text-2xl text-left">{skill.name}</h2>
  <div class="collapse-content">
    {#if skill.subheading !== undefined}
      {#each skill.subheading as line}
        <h3 class="text-left text-2xl m-4">{@html line}</h3>
      {/each}
      <div class="divider"></div>
    {/if}
    {#each skill.examples as example, index}
        <Example {example} />
        {#if index !== skill.examples.length - 1}
          <div class="divider"></div>
        {/if}
    {/each}
  </div>
</div>