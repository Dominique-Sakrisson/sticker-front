import React, { Component } from 'react'

import {NavLink} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <NavLink className='header-link' exact activeClassName="active" to="/">Home</NavLink>
                <NavLink className='header-link' exact activeClassName="active" to="/create">Create</NavLink>
                <NavLink className='header-link' exact activeClassName="active" to="/stickers">List</NavLink>
            </div>
        )
    }
}
