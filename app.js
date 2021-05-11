const app = {};
// retrieve data from api
app.getPokemon = (typings) => {
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/?limit=893`,
    method: "GET",
    dataType: "json",
  }).then((result) => {
    // let sorted = result.filter(x => x)
    result.results.forEach((element, index, array) => {
      const pokemonLink = element.url;
      $.ajax({
        url: pokemonLink,
        method: "GET",
        dataType: "json",
      }).then((res) => {
        // if (res.types[0] == typings || res.types[1] == typings) {
        app.pokemonOptions(res, typings);
        // }
      });
    });
  });
};

// populates select dropdown options
app.pokemonOptions = (pokemonInfo, typingsagain) => {
  if (
    pokemonInfo.types[0] == typingsagain ||
    pokemonInfo.types[1] == typingsagain
  ) {
    const pokemonName = pokemonInfo.name;
    const pokemonOptionAppend = `<option value="${pokemonName}">${pokemonName}</option>`;
  }

  $(".pokemonOptions").append(pokemonOptionAppend);
};

app.sortPokemon = () => {
  $(".pokemonOptions.one").on("change", function () {
    console.log(this.value);
  });

  $(".pokemonOptions.two").on("change", function () {
    console.log(this.value);
  });

  $(".pokemonType.one").on("change", function () {
    let pokemonType = this.value;
    console.log(pokemonType);
    app.getPokemon(pokemonType);
  });
};

app.showPokemon = () => {};

app.init = function () {
  app.sortPokemon();
  app.showPokemon();
};

// function ready
$(function () {
  app.init();
});
