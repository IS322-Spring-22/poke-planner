import {ADD_MOVE, ADD_POKEMON, EDIT_POKEMON, REMOVE_MOVE, REMOVE_POKEMON} from "../actionTypes";
import {getMoves, getPokemon} from "../../services/api";
import {addError} from "./errors";

export const addPokemon = pokemon => ({
    type: ADD_POKEMON,
    pokemon
});

export const removePokemon = pokemon => ({
    type: REMOVE_POKEMON,
    pokemon
});

export const editPokemon = pokemon => ({
    type: EDIT_POKEMON,
    pokemon
});

export const addMove = (pokemon, move) => ({
    type: ADD_MOVE,
    pokemon,
    move
});

export const removeMove = (pokemon, move) => ({
    type: REMOVE_MOVE,
    pokemon,
    move
});

export const addPokemonToTeam = id => {
    return dispatch => {
        return getPokemon(id)
            .then( async function(pokemon) {
                pokemon["moveList"] = [];
                pokemon.moves = await getMoves(pokemon.moves);
                dispatch( addPokemon(pokemon) );
            }).catch( err => dispatch( addError(err) ));
    }
}

export const removePokemonFromTeam = pokemon => {
    return async function(dispatch) {
        await dispatch(removePokemon(pokemon));
    }
}

export const editPokemonInTeam = pokemon => {
    return async function (dispatch){
        dispatch(editPokemon(pokemon));
    }
}

export const addMoveToList = (pokemon, move) => {
    return async function (dispatch){
        await dispatch(addMove(pokemon, move));
    }
}

export const removeMoveFromList = (pokemon, move) => {
    return async function (dispatch){
        dispatch(removeMove(pokemon, move));
    }
}
