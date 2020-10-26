//Pokemon index
let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Pikachu', 
            height: 1.04, 
            type: 'Electric'
        },
        {
            name: 'Bulbasaur', 
            height: 2.04, 
            type: ['Grass', 'poison']
        },
        {
            name: 'Charmander', 
            height: 2, 
            type: 'Fire'
        },
        {
            name: 'Squirtle', 
            height: 1.08, 
            type: 'Water'
        }
    ];

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
        console.log(pokemon);
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

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
})