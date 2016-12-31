/**
 * Created by yangbo on 16/12/31.
 */
import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import FooterContainer from '../containers/FooterContainer'


const App = () => (
    <div>
        <AddTodoContainer />
        <TodoListContainer />
        <FooterContainer />
    </div>
);

export default App