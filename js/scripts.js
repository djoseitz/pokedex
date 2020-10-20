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

//Displays pokemon
for (let i = 0; i < pokemonList.length; i++) {
    //displays "Wow that's big!" if pokemon over 2m high
    if (pokemonList[i].height > 2) {
        document.write(`<div class="pokemon">${pokemonList[i].name} 
        (height: ${pokemonList[i].height}) - 
        Wow that's big!</div>`);
        }
    //displays rest of pokemon without "Wow that's big!" message
    else {
        document.write(`<div class="pokemon">${pokemonList[i].name} 
        (height: ${pokemonList[i].height})
        </div>`);
        }
    }