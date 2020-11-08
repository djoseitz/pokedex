//Dave's Pokemon index
let pokemonRepository = (function () {
  let pokemonList = [];

  function getAll() {
      return pokemonList;
  }

  function add(pokemon) {
      if (typeof pokemon === 'object') {
          pokemonList.push(pokemon);
      }
      else {
          alert('Invalid Pokemon')
      }
  }

    // loads modal with pokemon info
    function showModal(pokemon) {
      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");
      let modalHeader = $(".modal-header");

      modalHeader.empty();
      modalTitle.empty();
      modalBody.empty();

      let nameElement = $("<h1>" + pokemon.name + "</h1>");

      let imageElement = $('img class="modal-img" style = width: "50%">');
      imageElement.attr("src", pokemon.imageUrl);
      let pokemonHeight = $("<p>" + "Height: " + pokemon.height + "</p>");
      let pokemonType = $("<p>" + "Types: " + pokemon.types + "</p>");

      pokemon.types.forEach((typeObject) => {
        let pokemonType = document.createElement('p');
          pokemonType.innerText = typeObject.type.name;
        modal.appendChild(pokemonType);
      });

      modalTitle.append(nameElement);
      modalBody.append(imageElement);
      modalBody.append(pokemonHeight);
      modayBody.append(pokemonType);
    }

  return {
      getAll: getAll,
      add: add,
      addListItem: addListItem,
      LoadList: LoadList,
      loadDetails: loadDetails
    };
})();

pokemonRepository.LoadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});