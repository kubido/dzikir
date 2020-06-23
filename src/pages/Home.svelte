<script context="module">
  import { link } from "svelte-routing";
  let menus = [
    { label: "Dzikir Pagi", path: "/dzikir-pagi" },
    { label: "Dzikir Sore", path: "/dzikir-sore" },
    { label: "Dzikir Setelah Shalat", path: "/dzikir-setelah-shalat" },
    { label: "Qunut Nazilah", path: "/qunut-nazilah" }
  ];
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
    padding: 1em 2em;
    margin-bottom: 0.6em;
    font-size: 3em;
    background: #eee;
    display: block;
  }
</style>

<div>
  <h1 class="center">Do'a</h1>
  {#each menus as menu}
    <a href={menu.path} use:link replace class="button">{menu.label}</a>
  {/each}
</div>
