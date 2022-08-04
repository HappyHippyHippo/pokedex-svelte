import {writable} from "svelte/store"

export const PokemonStore = writable({
    id: "",
    name: "",
    image: "#",
});
