/**
 * Created by yangbo on 16/12/31.
 */
import React from 'react'

const Link =({filter,show, onNameClick}) => {
    return (
        <span>{filter == show ? show :
            <a href="#"
               onClick={(e)=>{
                   e.preventDefault();
                   onNameClick(show);
               }}
            >{show}</a> }
        </span>
    )
};

export default Link