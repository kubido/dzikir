<script context="module">
  import { link } from "svelte-routing";
  import { routes } from "../config/routes.svelte";
</script>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  .center {
    text-align: center;
  }
  .button {
    width: 100%;
    box-sizing: border-box;
    padding: 1em 1.5em;
    margin-bottom: 0.6em;
    font-size: 2em;
    background: #eee;
    display: block;

    color: #ff8761;
    font-weight: 200;
    text-align: center;
    background: #ecf0f1;
    border: 0;
    border-bottom: 2px solid #dadedf;
    cursor: pointer;
    -webkit-box-shadow: inset 0 -2px #dadedf;
    box-shadow: inset 0 -2px #dadedf;
  }
  @media (max-width: 767px) {
    .button {
      padding: 4vw;
      font-size: 8vw;
    }
  }
</style>

<div>
  <h1 class="center">Do'a</h1>
  {#each routes.filter(r => r.category == 'menu') as menu}
    <a href={menu.path} use:link replace class="button">
      <span>{menu.label}</span>

    </a>
  {/each}
</div>
