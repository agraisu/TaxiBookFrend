import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
          <h1>Hello, I'm John Doe</h1>
          <p>Frontend Developer specializing in React.js and modern web technologies with UX design expertise.</p>
            <button className='btn1'>View Profile</button>
            <button className='btn2'>Contact Me</button>
        </div>
    </div>
  )
}

export default Hero