import React from 'react';
import './Footer.css'; // Import the CSS file for styles
import { Link } from 'react-router-dom'; // Import Link for navigation

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-heading">Company</h3>
                    <ul className="footer-list">
                        <li><Link to="/about">About</Link></li> {/* Link for About */}
                        <li><Link to="/contact">Contact</Link></li> {/* Link for Contact */}
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Design Services</h3>
                    <ul className="footer-list">
                        <li><Link to="/design-contests">Design Contests</Link></li> {/* Link for Design Contests */}
                        <li><Link to="/one-to-one-projects">1-to-1 Projects</Link></li> {/* Link for 1-to-1 Projects */}
                        <li><Link to="/find-artist">Find a Designer</Link></li> {/* Link for Find a Designer */}
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Get a Design</h3>
                    <ul className="footer-list">
                        <li><Link to="/logo-design">Logo Design</Link></li> {/* Link for Logo Design */}
                        <li><Link to="/business-card">Business Card</Link></li> {/* Link for Business Card */}
                        <li><Link to="/web-page-design">Web Page Design</Link></li> {/* Link for Web Page Design */}
                        <li><Link to="/brand-guide">Brand Guide</Link></li> {/* Link for Brand Guide */}
                        <li><Link to="/packaging-design">Packaging Design</Link></li> {/* Link for Packaging Design */}
                        <li><Link to="/t-shirt-design">T-Shirt Design</Link></li> {/* Link for T-Shirt Design */}
                        <li><Link to="/book-cover-design">Book Cover Design</Link></li> {/* Link for Book Cover Design */}
                        <li><Link to="/services">Browse All Categories</Link></li> {/* Link for Browse All Categories */}
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Artistry Hub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
