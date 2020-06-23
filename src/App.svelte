<script>
  import { dzikirs } from "./data.json";
  let currentIdx = 0;
  let dzikir = dzikirs[currentIdx];

  console.log("---->", dzikirs);

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
  main {
    padding: 1em;
    max-width: 768px;
    margin: 0 auto;
  }
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

	#note{
		margin-top: 4em
	}
  @media (max-width: 767px) {
    main {
      max-width: 100%;
    }
  }
</style>

<main>
  <h1 class="center">Dzikir Pagi {currentIdx + 1}</h1>
  <div id="navigation">
    <div on:click={() => prev()} class="prev" />
    <div on:click={() => next()} class="next" />
  </div>
  <div>
    {#if dzikir.header}
      <p class="arabic center">{dzikir.header}</p>
    {/if}
    <p class="arabic">{dzikir.arabic}</p>

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
</main>
