let Pokedex = require("pokedex-promise-v2");
let options = {
    protocol: 'https',
    versionPath: '/api/v2/'
}
let pokedex = new Pokedex(options);

export function getPokemon(id) {
    return new Promise((resolve, reject) => {
        return pokedex.getPokemonByName(id)
            .then(res => { return resolve(res) })
            .catch(err => { return reject(err) });
    });
}

export async function getMoves(moves) {
    if("type" in moves[0]) {
        return moves;
    }
    let movePromises = [];
    for(let i = 0; i < moves.length; i++) {
        movePromises.push(getMove(moves[i].move.url));
    }
    return await Promise.all(movePromises).then(res => res).catch(err => err);
}

async function getMove(name) {
    return await pokedex.getResource(name)
        .then(res => res)
        .catch(err => err)
}

export function capitalize(str) {
    let find = '-';
    let re = new RegExp(find, 'g');
    str = str.replace(re, " ");
    return str.charAt(0).toUpperCase() + str.slice(1);
}
