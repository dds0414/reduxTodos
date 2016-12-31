/**
 * Created by yangbo on 16/12/31.
 */
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {SHOW_ALL, SHOW_ACTIVE, SHOW_DO,DoTodoAction} from '../actions/action'


const filterTodos = (todos, filter) => {
    switch (filter){
        case SHOW_ALL:
            return todos;
        case SHOW_ACTIVE:
            return todos.filter(todo => !todo.do);
        case SHOW_DO:
            return todos.filter(todo => todo.do)
    }
}


const mapStateToPorps = (state, ownProp) => ({
    todos:filterTodos(state.todos, state.filter)
});

const mapDispatchToProps = (dispatch, ownProp) => ({
    onItemClick: function (index) {
        dispatch(DoTodoAction(index))
    }
});

const TodoListContainer = connect(
    mapStateToPorps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer