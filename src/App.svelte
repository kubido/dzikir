<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import DzikirPagi from "./pages/DzikirPagi.svelte";
  import NotFound from "./pages/NotFound.svelte";
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
    <Route path="/" component={Home} />
    <Route path="/dzikir-pagi" component={DzikirPagi} />
    <Route component={NotFound} />
  </Router>
</main>
