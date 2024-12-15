// src/FindArtist.js
import React, { useState, useEffect } from 'react';
import './FindArtist.css'; // For styling
import { useNavigate } from 'react-router-dom';

const FindArtist = () => {
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate(); // For navigation to portfolio page

  // Load mock data (simulate API call)
  useEffect(() => {
    setArtists([
      {
        id: 1,
        name: 'Aditi Shah',
        skills: ['Mehendi', 'Art', 'Design'],
        location: 'Pune',
        profilePicture: 'https://example.com/images/aditi.jpg',
      },
      {
        id: 2,
        name: 'Rajesh Kumar',
        skills: ['Painting', 'Mural', 'Canvas Art'],
        location: 'Mumbai',
        profilePicture: 'https://example.com/images/rajesh.jpg',
      },
      {
        id: 3,
        name: 'Nina Patel',
        skills: ['T-shirt Printing', 'Embroidery'],
        location: 'Mumbai',
        profilePicture: 'https://example.com/images/nina.jpg',
      },
      {
        id: 4,
        name: 'Sandeep Iyer',
        skills: ['Chocolate Art', 'Handcrafted Sweets'],
        location: 'Pune',
        profilePicture: 'https://example.com/images/sandeep.jpg',
      },
      {
        id: 5,
        name: 'Priya Sharma',
        skills: ['Mehendi', 'Design', 'Minimal Art'],
        location: 'Delhi',
        profilePicture: 'https://example.com/images/priya.jpg',
      },
      {
        id: 6,
        name: 'Amit Singh',
        skills: ['Event Planning', 'Wedding Coordination'],
        location: 'Bangalore',
        profilePicture: 'https://example.com/images/amit.jpg',
      },
      {
        id: 7,
        name: 'Tanvi Desai',
        skills: ['Photography', 'Wedding Photos', 'Event Photos'],
        location: 'Hyderabad',
        profilePicture: 'https://example.com/images/tanvi.jpg',
      },
      {
        id: 8,
        name: 'Karan Verma',
        skills: ['Calligraphy', 'Design', 'Invitations'],
        location: 'Chennai',
        profilePicture: 'https://example.com/images/karan.jpg',
      },
      {
        id: 9,
        name: 'Snehal Gupta',
        skills: ['Jewelry Design', 'Custom Pieces'],
        location: 'Kolkata',
        profilePicture: 'https://example.com/images/snehal.jpg',
      },
      {
        id: 10,
        name: 'Ravi Joshi',
        skills: ['Digital Art', 'Illustration', 'Character Design'],
        location: 'Surat',
        profilePicture: 'https://example.com/images/ravi.jpg',
      },
    ]);
  }, []);

  const handleViewProfile = (id) => {
    // Navigate to the Portfolio page for the selected artist
    navigate(`/portfolio/${id}`);
  };

  return (
    <div className="artist-container">
      <h2 className="artist-heading">
        Find <span>Artists</span>
      </h2>
      <div className="artist-list">
        {artists.map((artist) => (
          <div key={artist.id} className="artist-card">
            <img src={artist.profilePicture} alt={artist.name} className="artist-image" />
            <h3 className="artist-name">{artist.name}</h3>
            <p className="artist-skills">Skills: {artist.skills.join(', ')}</p>
            <p className="artist-location">Location: {artist.location}</p>
            <button onClick={() => handleViewProfile(artist.id)} className="view-profile-button">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindArtist;
