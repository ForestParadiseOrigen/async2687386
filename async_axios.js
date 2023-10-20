const axios = require('axios');

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

// Llamamos a axios
axios.get(url)
    .then(
        function(response){
            console.log(response.data.results);
            
            let pokemons = body
            // recorrido de resultados del callback con otro callback.
            pokemons.forEach(
                // callback singular de cada resultado que llege a pokemons o al body.
                (pokemon)=>{
                    // Especificamos que queremos sacar del pokemon en singular.
                    console.log(pokemon.Name);
                    console.log('--------------------');
                }
            );
        }
    )
    .catch(
        function(error){
            console.log(error)
        }
    )