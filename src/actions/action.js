/**
 * Created by yangbo on 16/12/31.
 */

export const ADD_TODO = "ADD_TODO";
export const DO_TODO = "DO_TODO";

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_ACTIVE = "SHOW_ACTIVE";
export const SHOW_DO = "SHOW_DO";


export const SET_FILTER = "SET_FILTER";



let nextTodoId = 0;
export const AddTodoAction = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
});

export const DoTodoAction = (id) => ({
    type: DO_TODO,
    id
});


export const SetFilterAction = (filter) => ({
    type: SET_FILTER,
    filter
});