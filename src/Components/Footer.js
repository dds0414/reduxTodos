/**
 * Created by yangbo on 2016/12/30.
 */
import React, { Component } from 'react'

class Footer extends Component{

    renderFilter(filters, name){
        if(filters === this.props.filter){
            return name
        }
        return (
            <a onClick={(e)=> {
                e.preventDefault();
                this.props.setFilter(filters)
            }} href="#">
                {name}
            </a>
        )
    }

    render(){
        return (
            <div>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL', 'All')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')}
            </div>
        )
    }
}

export default Footer