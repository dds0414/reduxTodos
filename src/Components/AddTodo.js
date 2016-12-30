/**
 * Created by yangbo on 2016/12/30.
 */
import React, { Component } from 'react'

class AddTodo extends Component {

    handleClick(){
        let node = this.refs.inputValue;
        this.props.onAddClick(node.value.trim());
        node.value = ""
    }

    render(){
        return (
            <div>
                <input ref="inputValue" type="text"/>
                <button onClick={()=>this.handleClick()}>add</button>
            </div>
        )
    }
}

export default AddTodo