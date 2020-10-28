//Pokemon index
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

    //Logs pokemon info on click (see below)
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function (){
            console.log(pokemon);
        });
    }


//Create pokemon list
    function addListItem(pokemon) {
        //Creates list
        let pokemonList = document.querySelector('.pokemon-list');
        let listitem = document.createElement('li');
        //Creates buttons
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokebutton');
        button.addEventListener('click', function() {
            showDetails(pokemon)
        });
        listitem.appendChild(button);
        pokemonList.appendChild(listitem);
    }

    function LoadList() {
        return fetch('https://pokeapi.co/api/v2/pokemon/?limit=150').then(function (response) {
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
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
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