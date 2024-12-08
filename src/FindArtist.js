// src/FindArtist.js
import React, { useState, useEffect } from 'react';
import './FindArtist.css'; // For styling

const FindArtist = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock API data if actual API is not available
  const mockArtists = [
    {
      id: 1,
      name: 'John Doe',
      skills: ['Mehendi', 'Body Art'],
      location: 'Pune',
      profilePicture: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jane Smith',
      skills: ['Face Painting', 'Makeup'],
      location: 'Mumbai',
      profilePicture: 'https://via.placeholder.com/150',
    },
    // Add more artists
  ];

  // Fetch artists data from an API or use mock data
  useEffect(() => {
    setLoading(true);
    setError(null);
    
    // Mock the API response (remove if you have real API)
    setTimeout(() => {
      setArtists(mockArtists);
      setLoading(false);
    }, 1000);
    
    // For real API, use this:
    // fetch('/api/artists')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setArtists(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setError('Failed to load artists');
    //     setLoading(false);
    //   });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="artist-container">
      <h2>Find Artists</h2>
      <div className="artist-list">
        {artists.map((artist) => (
          <div key={artist.id} className="artist-card">
            <img src={artist.profilePicture} alt={artist.name} />
            <h3>{artist.name}</h3>
            <p>{artist.skills.join(', ')}</p>
            <p>{artist.location}</p>
            <button>View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindArtist;
