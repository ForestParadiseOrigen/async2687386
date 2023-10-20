const axios = require('axios');

/*
    API'S
    1. POKEMON: https://pokeapi.co/api/v2/pokemon
    2. DINOSAURIO: https://dinosaur-facts-api.shultzlab.com/dinosaurs
    3. RICK AND MORTY: https://rickandmortyapi.com/
    4. DOGS: https://pokeapi.co/api/v2/pokemon
*/

const url = 'https://api.kanye.rest';

async function obtenerInfo(){
    try{
        const response = await axios.get(url);
        console.log(response.data.quote + "\n");
    }catch(error){
        console.log(errorj);
    }
}

obtenerInfo();