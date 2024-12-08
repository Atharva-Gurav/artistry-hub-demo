import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [role, setRole] = useState('User');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    portfolio: '',
    skillTags: '',
    certifications: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <div>
            <input
              type="radio"
              name="role"
              value="User"
              checked={role === 'User'}
              onChange={(e) => setRole(e.target.value)}
            />{' '}
            User
            <input
              type="radio"
              name="role"
              value="Artist"
              checked={role === 'Artist'}
              onChange={(e) => setRole(e.target.value)}
            />{' '}
            Artist
          </div>
        </div>
        {role === 'Artist' && (
          <>
            <div className="form-group">
              <label>Portfolio Link:</label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="Enter your portfolio link"
                required
              />
            </div>
            <div className="form-group">
              <label>Skill Tags:</label>
              <input
                type="text"
                name="skillTags"
                value={formData.skillTags}
                onChange={handleChange}
                placeholder="Enter your skills (comma-separated)"
                required
              />
            </div>
            <div className="form-group">
              <label>Certifications:</label>
              <input
                type="text"
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                placeholder="Enter your certifications"
              />
            </div>
          </>
        )}
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
