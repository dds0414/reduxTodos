/**
 * Created by yangbo on 16/12/31.
 */
import React from 'react'

const AddTodo = ({onButtonClick}) => {
    let input;

    return (
    <div>
        <input ref={node => {
            input = node
        }} type="text" />
        <button onClick={()=>{
            onButtonClick(input.value);
            input.value=""
        }}>click</button>
    </div>
)};

export default AddTodo