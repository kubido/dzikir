<script>
  import { Link } from "svelte-routing";
  import { dzikirs } from "../data.json";
  let currentIdx = 0;
  let dzikir = dzikirs[currentIdx];

  const prev = () => {
    if (currentIdx > 0) {
      currentIdx = currentIdx - 1;
      dzikir = dzikirs[currentIdx];
    }
  };

  const next = () => {
    if (currentIdx < dzikirs.length - 1) {
      currentIdx = currentIdx + 1;
      dzikir = dzikirs[currentIdx];
    }
  };
</script>

<style>
  .arabic {
    text-align: right;
    font-size: 1.4em;
    line-height: 2em;
  }
  .translation {
    white-space: pre-line;
  }
  #detail {
    text-align: left;
  }

  #navigation {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    display: flex;
  }

  #navigation .prev,
  #navigation .next {
    width: 50%;
    height: 100vh;
    position: relative;
  }

  .center {
    text-align: center;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  #note {
    margin-top: 4em;
  }
</style>

<div>
  <Link to="/">{'<'} Kembali</Link>
  <h1 class="center">
    Dzikir Pagi
    <sup>{currentIdx + 1}</sup>
  </h1>
  <div id="navigation">
    <div on:click={() => prev()} class="prev" />
    <div on:click={() => next()} class="next" />
  </div>
  <div>
    {#if dzikir.header}
      <p class="arabic center">{dzikir.header}</p>
    {/if}
    <p class="arabic">{dzikir.arabic}</p>

    <sup>dibaca {dzikir.counter}x</sup>
    <div id="detail">
      <i>{dzikir.arabic_read}</i>
      <br />
      <br />
      <b>Artinya:</b>
      <p class="translation">{dzikir.translation}</p>
      {#if dzikir.faedah}
        <b>Faedah:</b>
        <p>{dzikir.faedah}</p>
      {/if}
      <div id="note">
        {#each dzikir.sources as source}
          <sup>{source}</sup>
        {/each}
      </div>
    </div>
  </div>
</div>
