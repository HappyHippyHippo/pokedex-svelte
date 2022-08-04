<script>
  import {PokeAPI} from "./apis/pokeapi";
  import {PokemonStore} from "./stores/pokemon";

  let input = ""

  const api = new PokeAPI();

  const handlePrev = () => {
    api.decrement($PokemonStore.id, (data) => PokemonStore.update(() => data));
  }
  const handleNext = () => {
    api.increment($PokemonStore.id, (data) => PokemonStore.update(() => data));
  }
  const handleSubmit = () => {
    api.get(input.trim().toLowerCase(), (data) => PokemonStore.update(() => data));
    input = "";
  }
</script>

<main>
  <img src="{$PokemonStore.image}" alt="" class="pokemon__image" />

  <h1 class="pokemon__data">
    <span class="pokemon__number">{$PokemonStore.id}</span> -
    <span class="pokemon__name">{$PokemonStore.name}</span> -
  </h1>

  <form class="form" on:submit|preventDefault={handleSubmit}>
    <input
            bind:value={input}
      type="search"
      class="input__search"
      placeholder="Name or Number"
      required
    />
  </form>

  <div class="buttons">
    <button class="button btn-prev" on:click={handlePrev}>
      Prev &lt;
    </button>
    <button class="button btn-next" on:click={handleNext}>
      Next &gt;
    </button>
  </div>

  <img src="/assets/pokedex.png" alt="pokedex" class="pokedex" />
</main>
