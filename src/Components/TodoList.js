/**
 * Created by yangbo on 2016/12/30.
 */
import React ,{ Component } from 'react'


class TodoList extends Component{
    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map((todo,index)=>
                        <li
                            style={{
                                textDecoration:todo.do ? 'line-through' : 'none',
                            }}
                            onClick={()=>this.props.onTodoClick(index)}
                            key={index}>
                            {todo.text}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default TodoList