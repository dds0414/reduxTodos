/**
 * Created by yangbo on 16/12/31.
 */
import {ADD_TODO, DO_TODO, SHOW_ALL, SET_FILTER} from '../actions/action'
import { combineReducers } from'redux'

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    do: false
                }
            ];
        case DO_TODO:
            return [
                ...state.slice(0, action.id),
                Object.assign({}, state[action.id], {
                    do: !state[action.id].do
                }),
                ...state.slice(action.id + 1)
            ];
        default:
            return state;
    }
};

const filter = (state=SHOW_ALL, action) =>{
    switch (action.type){
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
};

const reducers = combineReducers({
    todos,
    filter
})

export default reducers