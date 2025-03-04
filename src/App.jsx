import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Open from './Components/Open/Open';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div id="hero"> <Hero /> </div> 
      <div className="container">
        <div id="about"> <About /> </div> 
        <div id="skill"> <Open /> </div> 
        <div id="projects"> <Project /> </div> 
        <div id="contact"> <Contact /> </div> 
      </div>
      <Footer />
    </Router>
  );
}

export default App;
