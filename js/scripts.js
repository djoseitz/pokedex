//Dave's Pokemon index
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

  //Create pokemon list
  function addListItem(pokemon) {
    //Creates list
    let pokemonList = document.querySelector('.list-group');
    let listitem = document.createElement('li');
    listitem.classList.add('group-list-item');
    //Creates buttons
    let button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = pokemon.name;
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#pokemonModal")
    listitem.append(button);
    pokemonList.append(listitem);

    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      showModal(pokemon);
    });
  }
  
  function LoadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.other.dream_world.front_default;
        item.height = details.height;
        item.types = [];
          details.types.forEach((typeObject) => {
              item.types.push(typeObject.type.name)
          });
      }).catch(function (e) {
        console.error(e);
      });
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

// loads modal with pokemon info
function showModal(pokemon) {
  let modalBody = $(".modal-body");
  let modalTitle = $(".modal-title");

  modalTitle.empty();
  modalBody.empty();

  let nameElement = $("<h1>" + pokemon.name + "</h1>");

  let imageElement = $("<img class='modal-img' style = width: '50%'>");
  imageElement.attr("src", pokemon.imageUrl);

  let pokemonHeight = $("<p>" + "Height: " + pokemon.height + "</p>");
  let pokemonType = $("<p>" + "Types: " + pokemon.types + "</p>");

  modalTitle.append(nameElement);
  modalBody.append(imageElement);
  modalBody.append(pokemonHeight);
  modalBody.append(pokemonType);
}