import React from 'react'
import './About.css'
import about_img from '../../assets/model.png'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className="about_img" />
        </div>
        <div className="about-right">
            <h3>About Me</h3>
            <p>I’m a passionate Frontend Developer with 3 years of experience building modern, responsive, and user-centric web applications. I specialize in React.js and have a strong foundation in HTML, CSS, and JavaScript, along with expertise in modern frameworks and libraries like Next.js, Redux, and Tailwind CSS. I love creating intuitive, visually appealing user interfaces that deliver seamless experiences across devices.</p>
            <p>With a keen eye for detail and a commitment to clean, efficient code, I thrive on solving complex problems and optimizing performance to ensure fast, scalable, and maintainable solutions. I’m also experienced in integrating RESTful APIs, working with version control systems like Git, and collaborating in agile environments to deliver projects on time.</p>
            <div className="social-icons">
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                      </a>
                    </div>
        </div>
    </div>
  )
}

export default About