import React from 'react';
import { Link } from 'react-scroll'; // ✅ Import Link from react-scroll
import './Navbar.css';
import logo from '../../assets/logo1.png';

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo1' />
      <ul>
        <li><Link to="hero" smooth={true} duration={500}>Home</Link></li> 
        <li><Link to="about" smooth={true} duration={500}>About</Link></li> 
        <li><Link to="skill" smooth={true} duration={500}>Skills</Link></li> 
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li> 
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li> 
        <li><button className='btn'>Resume</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
