// src/Portfolio.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const { id } = useParams(); // Retrieve artist ID from URL
  const [artist, setArtist] = useState(null);

  // Mock artist data with all 10 artists
  const artistData = [
    {
      id: 1,
      name: 'Aditi Shah',
      skills: ['Mehendi', 'Art', 'Design'],
      location: 'Pune',
      profilePicture: 'https://example.com/images/aditi.jpg',
      portfolio: [
        'https://via.placeholder.com/300x200/FFB6C1/000000?text=Art+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Art+2',
      ],
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      skills: ['Painting', 'Mural', 'Canvas Art'],
      location: 'Mumbai',
      profilePicture: 'https://example.com/images/rajesh.jpg',
      portfolio: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=Canvas+1',
        'https://via.placeholder.com/300x200/98FB98/000000?text=Canvas+2',
      ],
    },
    {
      id: 3,
      name: 'Nina Patel',
      skills: ['T-shirt Printing', 'Embroidery'],
      location: 'Mumbai',
      profilePicture: 'https://example.com/images/nina.jpg',
      portfolio: [
        'https://via.placeholder.com/300x200/FFB6C1/000000?text=T-Shirt+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=T-Shirt+2',
      ],
    },
    {
      id: 4,
      name: 'Sandeep Iyer',
      skills: ['Chocolate Art', 'Handcrafted Sweets'],
      location: 'Pune',
      profilePicture: 'https://example.com/images/sandeep.jpg',
      portfolio: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=Chocolate+1',
        'https://via.placeholder.com/300x200/98FB98/000000?text=Chocolate+2',
      ],
    },
    {
      id: 5,
      name: 'Priya Sharma',
      skills: ['Mehendi', 'Design', 'Minimal Art'],
      location: 'Delhi',
      profilePicture: 'https://example.com/images/priya.jpg',
      portfolio: [
        'https://via.placeholder.com/300x200/FFB6C1/000000?text=Mehendi+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Mehendi+2',
      ],
    },
    {
      id: 6,
      name: 'Amit Singh',
      skills: ['Event Planning', 'Wedding Coordination'],
      location: 'Bangalore',
      profilePicture: 'https://example.com/images/amit.jpg',
      portfolio: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=Event+1',
        'https://via.placeholder.com/300x200/98FB98/000000?text=Event+2',
      ],
    },
    {
      id: 7,
      name: 'Tanvi Desai',
      skills: ['Photography', 'Wedding Photos', 'Event Photos'],
      location: 'Hyderabad',
      profilePicture: 'https://example.com/images/tanvi.jpg',
      portfolio: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=Photography+1',
        'https://via.placeholder.com/300x200/98FB98/000000?text=Photography+2',
      ],
    },
    {
      id: 8,
      name: 'Karan Verma',
      skills: ['Calligraphy', 'Design', 'Invitations'],
      location: 'Chennai',
      profilePicture: 'https://example.com/images/karan.jpg',
      portfolio: [
        'https://via.placeholder.com/300x200/FFB6C1/000000?text=Calligraphy+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Calligraphy+2',
      ],
    },
    {
      id: 9,
      name: 'Snehal Gupta',
      skills: ['Jewelry Design', 'Custom Pieces'],
      location: 'Kolkata',
      profilePicture: 'https://example.com/images/snehal.jpg',
      portfolio: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=Jewelry+1',
        'https://via.placeholder.com/300x200/98FB98/000000?text=Jewelry+2',
      ],
    },
    {
      id: 10,
      name: 'Ravi Joshi',
      skills: ['Digital Art', 'Illustration', 'Character Design'],
      location: 'Surat',
      profilePicture: 'https://example.com/images/ravi.jpg',
      portfolio: [
        'https://via.placeholder.com/300x200/FFB6C1/000000?text=Digital+Art+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Digital+Art+2',
      ],
    },
  ];

  useEffect(() => {
    // Find artist by ID
    const selectedArtist = artistData.find((item) => item.id === parseInt(id));
    setArtist(selectedArtist);
  }, [id]);

  if (!artist) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Artist Not Found</h2>
        <p>Sorry, the artist you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <img src={artist.profilePicture} alt={artist.name} />
        <div className="portfolio-details">
          <h2>{artist.name}</h2>
          <p>Skills: {artist.skills.join(', ')}</p>
          <p>Location: {artist.location}</p>
        </div>
      </div>

      <h3 className="portfolio-gallery-heading">Portfolio</h3>
      <div className="portfolio-gallery">
        {artist.portfolio.map((item, index) => (
          <img key={index} src={item} alt={`Art ${index + 1}`} className="portfolio-image" />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
