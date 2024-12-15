import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceArtists.css'; // Import the CSS file for styling

// Mock Data for Artists
const artistsData = [
  { id: 1, name: 'Aditi Shah', skills: ['Bridal Mehendi', 'Mehendi Service'], location: 'Pune', profilePicture: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Rajesh Kumar', skills: ['Modern Canvas Art', 'Canvas Painting'], location: 'Mumbai', profilePicture: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Nina Patel', skills: ['T-Shirt Printing', 'Embroidery'], location: 'Mumbai', profilePicture: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Sandeep Iyer', skills: ['Chocolate Making'], location: 'Pune', profilePicture: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Priya Sharma', skills: ['Mehendi Service', 'Bridal Mehendi'], location: 'Delhi', profilePicture: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Amit Singh', skills: ['Chocolate Making', 'Handmade Crafts'], location: 'Bangalore', profilePicture: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Tanvi Desai', skills: ['Photography', 'Digital Art'], location: 'Hyderabad', profilePicture: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Karan Verma', skills: ['Calligraphy', 'Design'], location: 'Chennai', profilePicture: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Snehal Gupta', skills: ['Jewelry Design', 'Handmade Crafts'], location: 'Kolkata', profilePicture: 'https://via.placeholder.com/150' },
  { id: 10, name: 'Ravi Joshi', skills: ['Digital Art', 'Illustration'], location: 'Surat', profilePicture: 'https://via.placeholder.com/150' },
];

// Services Data
const servicesData = [
  { service_id: 1, service_name: 'Portrait Drawing' },
  { service_id: 2, service_name: 'Modern Canvas Art' },
  { service_id: 3, service_name: 'Bridal Mehendi' },
  { service_id: 4, service_name: 'T-Shirt Printing' },
  { service_id: 5, service_name: 'Embroidery' },
  { service_id: 6, service_name: 'Chocolate Making' },
  { service_id: 7, service_name: 'Canvas Painting' },
  { service_id: 8, service_name: 'Digital Art' },
  { service_id: 9, service_name: 'Mehendi Service' },
  { service_id: 10, service_name: 'Handmade Crafts' },
];

const ServiceArtists = () => {
  const { id } = useParams(); // Get service ID from URL params
  const serviceId = parseInt(id);

  // Get the service name for the current serviceId
  const service = servicesData.find((service) => service.service_id === serviceId);

  // If service not found, return early
  if (!service) {
    return <p>Service not found</p>;
  }

  // Filter artists offering this service based on matching service name in their skills
  const filteredArtists = artistsData.filter((artist) =>
    artist.skills.some((skill) => skill.toLowerCase() === service.service_name.toLowerCase())
  );

  return (
    <div className="artists-container">
      <h1 className="artists-heading">
        {service ? `${service.service_name} - Artists` : 'Artists Offering This Service'}
      </h1>
      {filteredArtists.length > 0 ? (
        <div className="artists-list">
          {filteredArtists.map((artist) => (
            <div key={artist.id} className="artist-card">
              <img
                src={artist.profilePicture}
                alt={artist.name}
                className="artist-image"
              />
              <h3 className="artist-name">{artist.name}</h3>
              <p className="artist-location">{artist.location}</p>
              <Link to={`/portfolio/${artist.id}`}>
                <button className="view-profile-button">View Profile</button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No artists found for this service.</p>
      )}
    </div>
  );
};

export default ServiceArtists;
