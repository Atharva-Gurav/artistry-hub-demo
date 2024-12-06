// src/FindArtist.js
import React from 'react';
import './FindArtist.css'; // Import the CSS file for styling

const FindArtist = () => {
    return (
        <div className="find-artist-container">
            <h2>What do you need designed?</h2>
            <div className="service-boxes">
                <div className="service-box">Mehendi Design</div>
                <div className="service-box">Web Design</div>
                <div className="service-box">Logo Maker</div>
                <div className="service-box">All Services</div>
            </div>
        </div>
    );
};

export default FindArtist;