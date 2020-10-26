<script>
  export let data;
  import Node from "./Node.svelte";
</script>

<style>
  .parent {
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>

{#if data}
  <div class="parent">
    <Node node={data[0]} />
  </div>
{/if}
