<script>
  import { Link } from "svelte-routing";
  export let dzikirs;
  export let title;

  let currentIdx = 0;
  let dzikir = dzikirs[currentIdx];
  let mouseEvent = { timer: 0, intervalId: null };
  function handleKeydown(event) {
    let key = event.key;
    if (key === "ArrowRight") next();
    if (key === "ArrowLeft") prev();
  }

  function handleClick(event) {
    const centerXScreenPos = window.innerWidth / 2;

    event.x > centerXScreenPos ? next() : prev();
  }

  function handleMouseDown(event) {
    mouseEvent.intervalId = setInterval(() => {
      mouseEvent.timer = mouseEvent.timer + 1;
    }, 1);
  }

  function handleMouseUp(event) {
    let isHoldClick = mouseEvent.timer > 50;
    if (!isHoldClick) handleClick(event);

    clearInterval(mouseEvent.intervalId);
    mouseEvent.timer = 0;
  }

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
    direction: rtl;
    text-align: right;
    font-size: 1.4em;
    white-space: pre-line;
    line-height: 2em;
  }
  .translation {
    white-space: pre-line;
  }
  #detail {
    text-align: left;
  }

  #detail i {
    white-space: pre-line;
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
    font-size: 3em;
    font-weight: 100;
  }

  #note {
    margin-top: 4em;
  }
  #note * {
    display: block;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 10vw;
    }
  }
</style>

<svelte:window on:mouseup={handleMouseUp} on:mousedown={handleMouseDown} />

<div>
  <Link to="/">{'<'} Kembali</Link>
  <h1 class="center">
    {title}
    <sup>{currentIdx + 1}</sup>
  </h1>

  <div>
    {#if dzikir.header}
      <p class="arabic center">{dzikir.header}</p>
    {/if}
    <p class="arabic">{dzikir.arabic}</p>
    {#if dzikir.counter}
      <sup>dibaca {dzikir.counter}x</sup>
    {/if}
    <div id="detail">
      <i>{dzikir.arabic_read}</i>
      <br />
      <br />
      {#if dzikir.translation}
        <b>Artinya:</b>
        <p class="translation">{dzikir.translation}</p>
      {/if}
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
