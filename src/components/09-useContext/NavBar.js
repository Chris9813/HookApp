import React from 'react'
import {NavLink} from "react-router-dom"

export const NavBar = () => {
    return (
<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">useContext</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
        <NavLink exact activeClassName = "nav-link active" className="nav-link" to="/">Home</NavLink>
        <NavLink exact  activeClassName = "nav-link active" className="nav-link" to="/login">Login</NavLink>
        <NavLink exact  activeClassName = "nav-link active" className="nav-link" to="/about">About</NavLink>
    </div>
    </div>
</div>
</nav>
</>
)
}


/*
    <NavLink exact activeClassName = "list-group-item active" className="navbar-brand" to="/">Home</NavLink>
    <NavLink exact  activeClassName = "list-group-item active" className="navbar-brand" to="/login">Login</NavLink>
    <NavLink exact  activeClassName = "list-group-item active" className="navbar-brand" to="/about">About</NavLink>
*/


/*

*/