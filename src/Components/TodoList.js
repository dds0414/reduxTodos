/**
 * Created by yangbo on 16/12/31.
 */
import React from 'react'


const TodoList = ({onItemClick,todos}) => {
    return (
    <div>
        <ul>
            {todos.map((item,index) =>
                <li
                    style={{
                        textDecoration: item.do ? 'line-through' : 'none',
                        cursor: item.do ? 'default' : 'pointer'
                    }}
                    onClick={()=>onItemClick(index)}
                    key={index}
                >
                    {item.text}
                </li>
            )}
        </ul>
    </div>
)};

export default TodoList