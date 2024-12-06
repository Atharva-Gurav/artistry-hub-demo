import React from 'react';
import './Footer.css'; // Import the CSS file for styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-heading">Company</h3>
                    <ul className="footer-list">
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Design Services</h3>
                    <ul className="footer-list">
                        <li><a href="#design-contests">Design Contests</a></li>
                        <li><a href="#one-to-one-projects">1-to-1 Projects</a></li>
                        <li><a href="#find-a-designer">Find a Designer</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Get a Design</h3>
                    <ul className="footer-list">
                        <li><a href="#logo-design">Logo Design</a></li>
                        <li><a href="#business-card">Business Card</a></li>
                        <li><a href="#web-page-design">Web Page Design</a></li>
                        <li><a href="#brand-guide">Brand Guide</a></li>
                        <li><a href="#packaging-design">Packaging Design</a></li>
                        <li><a href="#t-shirt-design">T-Shirt Design</a></li>
                        <li><a href="#book-cover-design">Book Cover Design</a></li>
                        <li><a href="#browse-all-categories">Browse All Categories</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;