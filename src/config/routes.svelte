<script context="module">
  import Home from "../pages/Home.svelte";
  import DzikirPagi from "../pages/DzikirPagi.svelte";
  import DzikirPetang from "../pages/DzikirPetang.svelte";
  import DzikirSetelahShalat from "../pages/DzikirSetelahShalat.svelte";
  import NotFound from "../pages/NotFound.svelte";

  export const routes = [
    {
      label: "Home",
      path: "/",
      component: Home
    },
    {
      label: "Dzikir Pagi",
      category: "menu",
      path: "/dzikir-pagi",
      component: DzikirPagi
    },
    {
      label: "Dzikir Petang",
      category: "menu",
      path: "/dzikir-petang",
      component: DzikirPetang
    },
    {
      label: "Dzikir Setelah Shalat",
      category: "menu",
      path: "/dzikir-setelah-shalat",
      component: DzikirSetelahShalat
    },
    {
      component: NotFound
    }
  ];
</script>
