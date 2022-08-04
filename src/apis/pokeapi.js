import axios from "axios";

function request(pokemon) {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((resp) => {
      if (resp.status === 200) {
        return {
          id: resp.data.id,
          name: resp.data.name,
          image:
              resp.data["sprites"]["versions"]["generation-v"]["black-white"][
                  "animated"
                  ]["front_default"],
        };
      } else throw new Error("pokemon not found");
    })
    .catch(() => {
      return {
        id: "",
        name: "Not found",
        image: "#",
      };
    });
}

export class PokeAPI {
  get(pokemon, callback) {
    request(pokemon).then((data) => callback(data));
  }

  increment(id, callback) {
    request(id + 1).then((data) => {
      callback(data)
    });
  }

  decrement(id, callback) {
    if (id > 1) {
      request(id - 1).then((data) => callback(data));
    }
  }
}
