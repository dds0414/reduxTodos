/**
 * Created by yangbo on 2016/12/30.
 */

/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};


export function addtodo(text) {
    return{
        type:ADD_TODO,
        text
    }
}

export function setfilter(filter) {
    return{
        type:SET_VISIBILITY_FILTER,
        filter
    }
}

export function doTodos(index) {
    return{
        type:COMPLETE_TODO,
        index
    }
}