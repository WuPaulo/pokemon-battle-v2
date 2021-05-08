const app = {};

app.getPokemon = () => {
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/?limit=893`,
    method: "GET",
    dataType: "json",
  }).then((result) => {
    app.pokemonOptions(result);
  });
};

app.pokemonOptions = (pokemonInfo) => {
  pokemonInfo.results.forEach((element, index, array) => {
    const pokemonName = element.name;
    const pokemonOptionAppend = `<option value="${pokemonName}">${pokemonName}</option>`;

    $(".pokemonOptions").append(pokemonOptionAppend);
  });
};

app.sortPokemon = () => {
  $(".pokemonOptions.one").on("change", function () {
    console.log(this.value);
  });
  $(".pokemonOptions.two").on("change", function () {
    console.log(this.value);
  });
};

app.init = function () {
  app.getPokemon();
};

$(function () {
  app.init();
  app.sortPokemon();
});
