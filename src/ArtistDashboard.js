import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ArtistDashboard = () => {
    return (
        <>
        
        <div style={{ padding: '20px' }}>
            <h2>Artist Dashboard</h2>
            <p>Welcome to your dashboard! Here you can:</p>
            <ul>
                <li>List and manage your services.</li>
                <li>View bookings and communicate with clients.</li>
                <li>Track completed and ongoing projects.</li>
            </ul>
        </div>
        <Footer/>
        </>
    );
};

export default ArtistDashboard;
