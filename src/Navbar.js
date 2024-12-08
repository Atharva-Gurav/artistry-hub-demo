import React from "react";
import "./Navbar.css";
import logo from './logo.png';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Artistry-Hub Logo" />
            </div>
            <ul>
                {/* Use NavLink instead of Link */}
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/find-artist" activeClassName="active">Find Artist</NavLink></li>
                <li><NavLink to="/blogs" activeClassName="active">Blogs</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                <li><NavLink to="/login" activeClassName="active">Login</NavLink></li> {/* Use NavLink for Login */}
            </ul>
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
        </div>
    )
}
