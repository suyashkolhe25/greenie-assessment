import React from "react";
import { NavLink  } from "react-router-dom";

import 'react-bootstrap';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                {/* <Link className="navbar-brand hover-underline-animation" to={null}>SIGN UP</Link> */}
                <NavLink  className="navbar-brand hover-underline-animation " activeClassName="active" to="/">  User Details</NavLink>
                <NavLink  className="navbar-brand hover-underline-animation " activeClassName="active" style={{}} to="/accountCreation">Account Creation</NavLink>
                {/* <NavLink  className="navbar-brand hover-underline-animation " activeClassName="active" to="/"><img src={home_icon} width={23} alt="Home icon"/>  User Details</NavLink> */}
            </div>
        </nav>
    )
}

export default Navbar