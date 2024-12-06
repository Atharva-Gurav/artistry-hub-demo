
import Footer from './Footer';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';

import "./Navbar"; 
import Navbar from './Navbar';
import Home from './Home';
import FindArtist from './FindArtist';


function App() {
  return (
     <Router>
     <Navbar /> {/* Include the Navbar here */}
     <Routes>
     <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/find-artist" element={<FindArtist />} />
         {/* Add more routes as needed */}
      </Routes>
     
      <Footer/>
 </Router>
  );
}

export default App;
