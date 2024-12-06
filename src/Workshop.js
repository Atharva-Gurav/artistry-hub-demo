import React, { useState } from 'react';
import './Workshops.css'; // Import the CSS file for styles

const Workshops = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const events = [
        {
            title: 'Web Development Bootcamp',
            date: 'March 15, 2024',
            description: 'Join us for an intensive bootcamp on web development covering HTML, CSS, and JavaScript.',
            image: 'event1.jpg', // Replace with your image paths
        },
        {
            title: 'Graphic Design Workshop',
            date: 'April 10, 2024',
            description: 'Learn the fundamentals of graphic design and create stunning visuals.',
            image: 'event2.jpg',
        },
        {
            title: 'Digital Marketing Seminar',
            date: 'May 5, 2024',
            description: 'Explore the latest trends in digital marketing and how to leverage them for your business.',
            image: 'event3.jpg',
        },
    ];

    const nextEvent = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    };

    const prevEvent = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    };

    return (
        <div className="workshops-section">
            <h2 className="workshops-heading">Upcoming and Ongoing Workshops</h2>
            <div className="carousel">
                <button className="carousel-button" onClick={prevEvent}>Previous</button>
                <div className="carousel-content">
                    <img src={events[currentIndex].image} alt={events[currentIndex].title} className="event-image" />
                    <h3 className="event-title">{events[currentIndex].title}</h3>
                    <p className="event-date">{events[currentIndex].date}</p>
                    <p className="event-description">{events[currentIndex].description}</p>
                </div>
                <button className="carousel-button" onClick={nextEvent}>Next</button>
            </div>
        </div>
    );
};

export default Workshops;