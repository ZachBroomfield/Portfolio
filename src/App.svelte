<script lang="ts">
  import Portfolio from "./lib/Portfolio.svelte";
  import { name, link, skills } from "./assets/data.json"
</script>

<div class='text-center m-10'>
  <Portfolio {name} {link} {skills} />
</div>
