import React from "react";
import "./Navbar.css";
import logo from './logo.png'

export default function Navbar(){
    return(
      <div class="navbar">
      <div className="logo">
                <img src={logo} alt="Artistry-Hub Logo" />
            </div>
      <ul>
          <li><a href="#" class="active">Home</a></li>
          <li><a href="#">Find Artist</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
      <div class="search-container">
          <input type="text" placeholder="Search..."/>
          <button type="submit">Search</button>
      </div>
  </div>
    )
}