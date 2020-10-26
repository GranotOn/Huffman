<script>
  export let node, getCode = () => {};

  function alertData() {
      alert(getCode(node.data.name));
  }
</script>

<style>
  .node {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .node-rep {
    cursor: pointer;
    position: absolute;
    top: 10%;
    left: 50%;
    width: 6em;
    height: 6em;
    border-radius: 100%;
    border: 5px solid mediumseagreen;
    text-align: center;
  }

  .node-rep p {
    font-size: 2em;
    color: white;
  }

  .node:nth-child(2) {
    margin-top: 10em;
    flex: 1;
  }

  .node:nth-child(3) {
    margin-top: 10em;
    flex: 1;
  }
</style>

{#if node}
  <div class="node">
    <div class="node-rep" on:click={alertData}>
      <p>{node.data.name}: {node.data.freq}</p>
    </div>
    {#if node.right}
      <svelte:self node={node.right} getCode={getCode} />
    {/if}

    {#if node.left}
      <svelte:self node={node.left} getCode={getCode} />
    {/if}
  </div>
{/if}
