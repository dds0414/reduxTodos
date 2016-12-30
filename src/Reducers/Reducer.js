/**
 * Created by yangbo on 2016/12/30.
 */
import { combineReducers } from 'redux'
import {ADD_TODO, COMPLETE_TODO, VisibilityFilters, SET_VISIBILITY_FILTER} from '../Action/action'

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state=SHOW_ALL, action) {
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return  state
    }
}

function todos(state=[], action) {
    switch (action.type){
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    do: true
                }),
                ...state.slice(action.index + 1)
            ];
        case ADD_TODO:
            return [
                ...state,
                {
                    text:action.text,
                    do:false
                }
            ];
        default:
            return  state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp