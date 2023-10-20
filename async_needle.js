const needle = require('needle');

/*
    API'S
    1. POKEMON:
        const url = 'https://pokeapi.co/api/v2/pokemon';
    2. DINOSAURIO:
        const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs';
    3. RICK AND MORTY:
        const url = 'https://rickandmortyapi.com/';
*/

const url = 'https://pokeapi.co/api/v2/pokemon';

// Llamamos a needle
needle('GET',
    url, 
    {json: true}
)
.then(
    function(response){
        console.log(response.body.results);
    }
)
.catch(
    function(error){

    }
)