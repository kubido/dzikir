<script>
  import { Router, Route } from "svelte-routing";
  import Routes, { routes } from "./config/routes.svelte";
  // import Home from "./pages/Home.svelte";
  // import DzikirPagi from "./pages/DzikirPagi.svelte";
  // import DzikirPetang from "./pages/DzikirPetang.svelte";
  // import NotFound from "./pages/NotFound.svelte";
</script>

<style>
  main {
    padding: 1em;
    max-width: 768px;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    main {
      max-width: 100%;
    }
  }
</style>

<main>
  <Router url={''}>
    {#each routes as route}
      <Route {...route} />
    {/each}
  </Router>
</main>
