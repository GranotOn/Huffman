<script>
  export let data;

  import Node from "../Huffman/Tree.js";
  let canvas;

  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
  }
</script>

<style>
  canvas {
    border: 1px solid black;
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.7);
    margin: auto;
    width: 100%;
    height: 100%;
  }
</style>

{#if data}
  <canvas width="100%" height="100%" bind:this={canvas}>
    Your browser doesn't support 'canvas'.
  </canvas>
{/if}
