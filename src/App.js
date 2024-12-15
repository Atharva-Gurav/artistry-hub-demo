
import Footer from './Footer';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';

import "./Navbar"; 
import Navbar from './Navbar';
import Home from './Home';
import FindArtist from './FindArtist';
import RegistrationForm from './RegistrationForm';
import Services from './Services';
import About from './About';
import Blogs from './Blogs';
import Contact from './Contact';
import Portfolio from './Portfolio';
import ServiceArtists from './ServiceArtists';


function App() {
  return (
     <Router>
     <Navbar /> 
     <Routes>
     <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/find-artist" element={<FindArtist />} />
         <Route path="/services" element={<Services />} />
         <Route path="/register" element={<RegistrationForm />} />
         <Route path="/about" element={<About />} />
         <Route path="/blogs" element={<Blogs />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/portfolio/:id" element={<Portfolio />} />
         <Route path="/service/:id" element={<ServiceArtists />} />
      </Routes>
     
      <Footer/>
 </Router>
  );
}

export default App;
