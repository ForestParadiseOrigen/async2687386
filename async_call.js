const request = require('request');

/*
    API'S
    1. POKEMON: https://pokeapi.co/api/v2/pokemon
    2. DINOSAURIO: https://dinosaur-facts-api.shultzlab.com/dinosaurs
    3. RICK AND MORTY: https://rickandmortyapi.com/
    4. DOGS: https://pokeapi.co/api/v2/pokemon
*/

const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs';

let r = request(
    url, 
    {
        json: true
    }, 
    // callback de respuesta es una funcion dentro de otra funcion.
    (error, response, body) => {
        let dinos = body
        // recorrido de resultados del callback con otro callback.
        dinos.forEach(
            // callback singular de cada resultado que llege a dinos o al body.
            (dino)=>{
                // Especificamos que queremos sacar del dino en singular.
                console.log(dino.Name);
                console.log('--------------------');
            }
        );
    }
);
