const app = {};
// retrieve data from api
app.getPokemon = () => {
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/?limit=893`,
    method: "GET",
    dataType: "json",
  }).then((result) => {
    app.pokemonOptions(result);
    // console.log(result.results);
    // result.results.forEach((element, index, array) => {
    //   const pokemonName = element.name;
    //   $.ajax({
    //     url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    //     method: "GET",
    //     dataType: "json",
    //   }).then((res) => {});
    // });
  });
};

//populates select dropdown options
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

app.typeFilter = () => {
  $(".pokemonType.one").on("change", function () {
    console.log(this.value);
  });
};

app.showPokemon = () => {};

app.init = function () {
  app.getPokemon();
};

// function ready
$(function () {
  app.init();
  app.sortPokemon();
  app.showPokemon();
  app.typeFilter();
});
