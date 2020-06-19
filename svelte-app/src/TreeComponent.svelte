<script>
  import nextColour from "./nextColour";
  let colour = nextColour();

  function handleClick() {
    colour = nextColour();
  }

  export let node;
</script>

<div class={`tree ${colour}`}>
  <button on:click={handleClick}>Update</button>
  <div class="nodes">
    {#if node.left}
      <svelte:self node={node.left} />
    {/if}
    {#if node.right}
      <svelte:self node={node.right} />
    {/if}
  </div>
</div>

<style>
  button {
    margin: 25px 0;
    padding: 10px;
  }

  .tree {
    text-align: center;
    width: auto;
  }

  .nodes {
    display: flex;
  }

  .red {
    background-color: red;
  }
  .orange {
    background-color: orange;
  }
  .yellow {
    background-color: yellow;
  }
  .green {
    background-color: green;
  }
  .blue {
    background-color: blue;
  }
  .indigo {
    background-color: indigo;
  }
  .violet {
    background-color: violet;
  }
</style>
