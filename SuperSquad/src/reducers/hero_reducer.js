import character_json from '../data/characters.json'
import { ADD_CHARACTER } from '../actions'
import { REMOVE_CHARACTER } from '../actions'
import { createCharacter } from './helper'


function heros(state =[], action) {
    switch(action.type) {
        case ADD_CHARACTER :     
        var heros = [...state, createCharacter(action.id)];
        return heros;
        case REMOVE_CHARACTER :     
          heros = state.filter(item => item.id !== action.id);
        return heros;
        default:
            return state;
    }

}




export default heros