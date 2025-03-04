import React from "react";
import "./Project.css";
import Ecom from "../../assets/ecom.jfif";
import Dash from "../../assets/dash.png";
import Task from "../../assets/task.png";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with React.js and Node.js",
    image: Ecom, // Use the imported image
    tech: ["React.js", "Node.js", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management and monitoring",
    image: Dash, // Use the imported image
    tech: ["React.js", "Redux", "Chart.js"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates",
    image: Task, // Use the imported image
    tech: ["React.js", "Socket.io", "Express"],
    demoLink: "#",
    githubLink: "#",
  },
];

const Project = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">🔗 Demo</a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
