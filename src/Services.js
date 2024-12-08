import React from 'react';
import './Services.css'; // Import the CSS file for styling

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-list">
        <div className="service-card">
          <img 
            src="https://via.placeholder.com/300x200/FFB6C1/000000?text=Logo+Design" 
            alt="Logo Design" 
            className="service-image" 
          />
          <div className="service-content">
            <h3 className="service-title">Logo Design</h3>
            <p className="service-description">
              A custom logo design that represents your brand’s identity and values, creating a lasting first impression.
            </p>
          </div>
        </div>

        <div className="service-card">
          <img 
            src="https://via.placeholder.com/300x200/ADD8E6/000000?text=Web+Page+Design" 
            alt="Web Page Design" 
            className="service-image" 
          />
          <div className="service-content">
            <h3 className="service-title">Web Page Design</h3>
            <p className="service-description">
              Create a visually appealing and user-friendly website that provides an optimal user experience.
            </p>
          </div>
        </div>

        <div className="service-card">
          <img 
            src="https://via.placeholder.com/300x200/FFFFE0/000000?text=Business+Card+Design" 
            alt="Business Card Design" 
            className="service-image" 
          />
          <div className="service-content">
            <h3 className="service-title">Business Card Design</h3>
            <p className="service-description">
              A well-designed business card is essential for leaving a professional and lasting impression.
            </p>
          </div>
        </div>

        <div className="service-card">
          <img 
            src="https://via.placeholder.com/300x200/98FB98/000000?text=Brand+Guide" 
            alt="Brand Guide" 
            className="service-image" 
          />
          <div className="service-content">
            <h3 className="service-title">Brand Guide</h3>
            <p className="service-description">
              Develop a comprehensive brand guide to ensure consistency across all your branding efforts.
            </p>
          </div>
        </div>

        <div className="service-card">
          <img 
            src="https://via.placeholder.com/300x200/FFE4E1/000000?text=Packaging+Design" 
            alt="Packaging Design" 
            className="service-image" 
          />
          <div className="service-content">
            <h3 className="service-title">Packaging Design</h3>
            <p className="service-description">
              Professional packaging design that not only protects your product but also elevates your brand’s image.
            </p>
          </div>
        </div>

        <div className="service-card">
          <img 
            src="https://via.placeholder.com/300x200/FFD700/000000?text=T-Shirt+Design" 
            alt="T-Shirt Design" 
            className="service-image" 
          />
          <div className="service-content">
            <h3 className="service-title">T-Shirt Design</h3>
            <p className="service-description">
              Unique and stylish t-shirt designs that reflect your brand’s personality and message.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
