/**
 * Created by yangbo on 2016/12/30.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

import {addtodo, setfilter,doTodos, VisibilityFilters} from '../Action/action'

class App extends Component {
    render(){
        console.log(this.props);
        let {dispatch,filter} = this.props;
        return (
            <div>
                <AddTodo
                    onAddClick = {(text)=>dispatch(addtodo(text))}
                />
                <TodoList
                    todos={this.props.todos}
                    onTodoClick={index=>dispatch(doTodos(index))}
                />
                <Footer
                    filter={filter}
                    setFilter={(nextFilter)=>dispatch(setfilter(nextFilter))}
                />
            </div>
        )
    }
}

function selectTodo(list, filter) {
    switch (filter){
        case VisibilityFilters.SHOW_ALL:
            return list;
        case VisibilityFilters.SHOW_ACTIVE:
            return list.filter(item => !item.do);
        case VisibilityFilters.SHOW_COMPLETED:
            return list.filter(item => item.do)
    }
}

function select(state) {
    return{
        filter:state.visibilityFilter,
        todos:selectTodo(state.todos, state.visibilityFilter)
    }
}


export default connect(select)(App)