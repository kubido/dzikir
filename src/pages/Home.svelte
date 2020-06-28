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
    padding: 4vw;
    margin-bottom: 0.6em;
    font-size: 2em;
    background: #eee;
    display: block;
  }
  @media (max-width: 767px) {
    .button {
      font-size: 8vw;
    }
  }
</style>

<div>
  <h1 class="center">Do'a</h1>
  {#each routes.filter(r => r.category == 'menu') as menu}
    <a href={menu.path} use:link replace class="button">{menu.label}</a>
  {/each}
</div>
