/**
 * Created by yangbo on 16/12/31.
 */
import React from 'react'
import {SHOW_ALL, SHOW_ACTIVE, SHOW_DO} from '../actions/action'
import Link from './Link'

const Footer = ({filter, onNameClick}) => {
    return(
        <div>
            Show:
            {" "}
            <Link filter={filter} onNameClick={onNameClick} show={SHOW_ALL}/>
            {", "}
            <Link filter={filter} onNameClick={onNameClick} show={SHOW_ACTIVE}/>
            {", "}
            <Link filter={filter} onNameClick={onNameClick} show={SHOW_DO}/>
        </div>
    );
};



export default Footer