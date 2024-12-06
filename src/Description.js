import React, { useEffect, useState } from 'react';
import './Description.css'; // Import the CSS file for styles

const Description = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'https://99designs-start-static.imgix.net/homepage/little-danube.jpg?auto=format&w=370&h=370&q=45&dpr=2', // Replace with your image paths
        'https://99designs-start-static.imgix.net/homepage/the-studio.jpg?auto=format&w=370&h=370&q=45&dpr=2',
        'https://99designs-start-static.imgix.net/homepage/feel-good-tea.jpg?auto=format&w=370&h=370&q=45&dpr=2',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    return (
        <div className="description-section">
            <div className="carousel">
                <div className="carousel-images">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className={index === currentIndex ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
            <div className="description">
            <h2 className="description-heading">Grow with Great Design</h2>
                <p>
                    This is a brief description of the content related to the images on the left. 
                    You can provide details about the images, the context, or any other relevant information 
                    that enhances the viewer's understanding.
                </p>
                <p>
                    Additional information can be added here, such as background stories, features, or 
                    any other interesting facts that might engage the audience.
                </p>
            </div>
        </div>
    );
};

export default Description;