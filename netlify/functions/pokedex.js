import fetch from 'node-fetch';

exports.handler = async () => {
    const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
    const responser = await fetch(API_URL);
    const data = await responser.json();
    const pokemon = data.results;

    return {
        statusCode: 200,
        body: JSON.stringify(pokemon),
    }
}