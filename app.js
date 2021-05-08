const app = {};

app.getPokemon = () => {
  console.log("hello");

  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/`,
    method: "GET",
    dataType: "json",
  }).then((result) => {
    app.pokemonOptions(result);
  });
};

app.pokemonOptions = (pokemonInfo) => {
  console.log(pokemonInfo);
  for (let pokemans in pokemonInfo.results) {
    console.log(`${pokemans}`);
  }
};

app.init = function () {
  app.getPokemon();
};

$(function () {
  app.init();
});
