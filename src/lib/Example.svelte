<script>
  export let example;
</script>

<div class="sm:grid sm:grid-cols-4 sm:gap-4 my-4">
    <div class="col-span-3">
      <h3 class="text-xl text-left ml-4 mb-2">{example.title}</h3>
      {#each example.description as line}
        <p class="text-left ml-4">{line}</p>
      {/each}
    </div>

    <div class="
      btn-group 
      max-w-fit
      mx-auto
      my-4
      sm:btn-group-vertical 
      sm:justify-center 
      sm:ml-auto 
      sm:mr-2
      sm:my-0"
    >
      <a href="{example.codeLink}"
        target="_blank"
        class="btn btn-outline btn-md"
      >Code</a>

      {#if example.exampleLink !== undefined}
        <a href="{example.exampleLink}"
          target="_blank"
          class="btn btn-outline btn-md"
        >Example</a>
      {:else}
        <a href="{example.exampleLink}"
          target="_blank"
          class="btn btn-outline btn-md"
          disabled
        >Example</a>
      {/if}
    </div>
</div>