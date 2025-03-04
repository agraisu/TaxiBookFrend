import React from "react";
import "./Open.css";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", percentage: 90 },
      { name: "JavaScript", percentage: 85 },
      { name: "HTML/CSS", percentage: 95 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", percentage: 80 },
      { name: "Express.js", percentage: 75 },
      { name: "MongoDB", percentage: 70 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", percentage: 85 },
      { name: "Docker", percentage: 65 },
      { name: "AWS", percentage: 60 },
    ],
  },
];

const Open = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills & Expertise</h2>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-card">
            <h3>{category.category}</h3>
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill">
                <span>{skill.name}</span>
                <span className="percentage">{skill.percentage}%</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Open;
