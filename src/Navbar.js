import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import logo from './logo.png';

export default function Navbar({ role, onLogout }) {
    console.log('Navbar received role:', role); // Debug role

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Artistry-Hub Logo" />
            </div>
            <ul>
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/find-artist" activeClassName="active">Find Artist</NavLink></li>
                <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
                <li><NavLink to="/blogs" activeClassName="active">Blogs</NavLink></li>
                
               
                {!role && (
                    <>
                        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                    </>
                )}

                {/* Role-Specific Links */}
                {role === 'user' && (
                    <>
                        <li><NavLink to="/user-dashboard">User Dashboard</NavLink></li>
                        <li><NavLink to="/my-orders">My Orders</NavLink></li>
                    </>
                )}
                {role === 'artist' && (
                    <>
                        <li><NavLink to="/artist-dashboard">Artist Dashboard</NavLink></li>
                        <li><NavLink to="/my-services">My Services</NavLink></li>
                    </>
                )}
                {role === 'admin' && (
                    <>
                        <li><NavLink to="/admin-dashboard">Admin Dashboard</NavLink></li>
                        <li><NavLink to="/manage-users">Manage Users</NavLink></li>
                        <li><NavLink to="/manage-services">Manage Services</NavLink></li>
                    </>
                )}

                {/* Login/Logout */}
                {role ? (
                    <li>
                        <NavLink to="/" onClick={onLogout}>Logout</NavLink>
                    </li>
                ) : (
                    <li>
                        <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
                    </li>
                )}
            </ul>
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
        </div>
    );
}
