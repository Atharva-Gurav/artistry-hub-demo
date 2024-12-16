// src/Portfolio.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Portfolio.css';
import Footer from './Footer';
import Navbar from './Navbar';

const Portfolio = () => {
  const { id } = useParams(); // Retrieve artist ID from URL
  const [artist, setArtist] = useState(null);

  // Mock artist data with all 10 artists
  const artistData = [
    {
      id: 1,
      name: 'John Doe',
      skills: ['Portrait Drawing', 'Pencil Art'],
      location: 'Pune',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFB6C1/000000?text=Art+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Art+2',
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      skills: ['Modern Canvas Art', 'Acrylic Painting'],
      location: 'Mumbai',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=Canvas+1',
        'https://via.placeholder.com/300x200/98FB98/000000?text=Canvas+2',
      ],
    },
    {
      id: 3,
      name: 'Alex Johnson',
      skills: ['Bridal Mehendi', 'Henna Art'],
      location: 'Delhi',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFB6C1/000000?text=Mehendi+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Mehendi+2',
      ],
    },
    {
      id: 4,
      name: 'Emma Brown',
      skills: ['T-Shirt Printing', 'Custom Designs'],
      location: 'Bangalore',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=T-Shirt+1',
        'https://via.placeholder.com/300x200/98FB98/000000?text=T-Shirt+2',
      ],
    },
    {
      id: 5,
      name: 'Liam Wilson',
      skills: ['Embroidery', 'Hand-Stitched Designs'],
      location: 'Chennai',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFB6C1/000000?text=Embroidery+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Embroidery+2',
      ],
    },
    {
      id: 6,
      name: 'Olivia Taylor',
      skills: ['Handmade Chocolates', 'Dessert Crafting'],
      location: 'Hyderabad',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=Chocolate+1',
        'https://via.placeholder.com/300x200/98FB98/000000?text=Chocolate+2',
      ],
    },
    {
      id: 7,
      name: 'Noah Davis',
      skills: ['Canvas Painting', 'Oil Painting'],
      location: 'Kolkata',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=Canvas+Painting+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Canvas+Painting+2',
      ],
    },
    {
      id: 8,
      name: 'Ava Thomas',
      skills: ['Digital Art', 'Illustrations'],
      location: 'Pune',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFB6C1/000000?text=Digital+Art+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Digital+Art+2',
      ],
    },
    {
      id: 9,
      name: 'Mason Moore',
      skills: ['Henna Art', 'Body Mehendi'],
      location: 'Jaipur',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=Henna+1',
        'https://via.placeholder.com/300x200/98FB98/000000?text=Henna+2',
      ],
    },
    {
      id: 10,
      name: 'Mia White',
      skills: ['Handmade Crafts', 'Home Decor'],
      location: 'Surat',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFB6C1/000000?text=Craft+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Craft+2',
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
    <>
    
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
    <Footer/>
    </>
  );
};

export default Portfolio;
