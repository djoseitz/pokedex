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

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listitem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokebutton');
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

/*
pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.height > 2) {
        document.write(`<div class="pokemon">${pokemon.name}  
            (${pokemon.height}m) - Wow that's big!</div>` )
    }
    else {
        document.write(`<div class="pokemon">${pokemon.name}  
        (${pokemon.height}m)</div>` )
    }
})
*/