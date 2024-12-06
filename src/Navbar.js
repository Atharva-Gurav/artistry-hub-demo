import React from "react";
import "./Navbar.css";
import logo from './logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div class="navbar">
            <div className="logo">
                <img src={logo} alt="Artistry-Hub Logo" />
            </div>
            <ul>
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/find-artist">Find Artist</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li> {/* Use Link for navigation */}
            </ul>
            <div class="search-container">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
        </div>
    )
}