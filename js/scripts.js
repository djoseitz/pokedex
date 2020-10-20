let pokemonList = [
    {name: 'Pikachu', height: 1.04, type: 'Electric'},
    {name: 'Bulbasaur', height: 2.04, type: 'Grass'},
    {name: 'Charmander', height: 2, type: 'Fire'},
    {name: 'Squirtle', height: 1.08, type: 'Water'}
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + "(height: " + pokemonList[i].height + ") ");
}