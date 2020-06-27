<script context="module">
  import { Link } from "svelte-routing";
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
</style>

<main>
  <Link to="/">{'<'} Kembali</Link>
  <h1 class="center">404 - Halaman tidak ditemukan</h1>
</main>
