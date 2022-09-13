<script>
  import Skill from "./Skill.svelte";
  export let name;
  export let link;
  export let skills;
</script>

<h1 class='text-4xl text-primary-content m-6'>{name}</h1>
<h3 class='text-2xl m-6 underline'>
  <a href={link} target="_blank">{link}</a>
</h3>
{#each skills as skill}
  <Skill {skill} />
{/each}