//Pokemon list
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

pokemonList.forEach(function(pokemon) {
        document.write(`<div class="pokemon">${pokemon.name}  
        (${pokemon.height}m)</div>` )
})