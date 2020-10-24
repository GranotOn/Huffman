<script>
  let data;
  import * as Huffman from "./Huffman/Huffman.js";

  function apply() {
    const val = data.value;
    if (!val) return;
    
    const obj = Huffman.parseDataToObject(val);
    const code = Huffman.code(obj);

    console.log(code);
  }
</script>

<style>
  header {
    width: 100%;
    min-height: 5em;
    background-color: #444;
    box-shadow: 1px 1px 1px 3px rgba(4, 65, 34, 0.603);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  input {
    min-width: 50%;
    margin: 0 1em;
    padding: 1em;
  }

  button {
    padding: 1em;
    margin: 0 0.2em;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 5px;
    color: white;
    font-weight: bold;
  }

  button:hover {
    background-color: rgb(102, 96, 96);
    transition: 0.2s all;
  }
</style>

<header>
  <input
    type="text"
    placeholder="Data"
    on:keydown={(e) => e.key === 'Enter' && apply()}
    bind:this={data} />
  <button id="apply" on:click={apply}>Apply</button>
  <button id="reset">Reset</button>
</header>
