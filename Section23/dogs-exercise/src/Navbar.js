import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

class NavBar extends Component{
    render(){
        return(
            <nav className='Navbar'>
                <h3>Dog Shelter</h3>
                <NavLink activeClassName='Navbar-activeLink' exact to='/dogs'>Home</NavLink>
                {this.props.dogs.map(d => (
                    <NavLink key={d.name} activeClassName='Navbar-activeLink' exact to={`/dogs/${d.name}`}>{d.name}</NavLink>
                ))}
            </nav>
        )
    }
}

export default NavBar;