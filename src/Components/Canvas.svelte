<script>
  export let data;
  import Node from "./Node.svelte";

  function getCode(name) {
      return data[0].getCode(name);
  }
</script>

<style>
  .parent {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
  }
</style>

{#if data}
  <div class="parent">
    <Node node={data[0]} getCode={getCode}/>
  </div>
{/if}
