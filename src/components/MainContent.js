import React from 'react';
import { FaBriefcase, FaGraduationCap, FaProjectDiagram, FaUser } from 'react-icons/fa';

function MainContent() {
  const experiences = [
    {
      role: "Front-End Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2025 - Present",
      details: [
        "Designed responsive web pages using HTML, CSS, and JavaScript.",
        "Collaborated with back-end team to integrate APIs.",
        "Optimized website performance and accessibility."
      ]
    }
  ];

  const projects = [
    {
      name: "Portfolio Website",
      tech: "React, CSS",
      points: [
        "Created personal portfolio website to showcase projects.",
        "Implemented responsive design for mobile and desktop."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Software Engineering",
      school: "University of Example",
      duration: "2019 - 2023",
      details: ["GPA: 3.8/4.0", "Courses: Web Development, Data Structures"]
    }
  ];

  return (
    <div className="main-content">
      <section className="section">
        <h2><FaUser style={{ marginRight: '8px' }} />About Me</h2>
        <p>Creative and detail-oriented web developer with experience building modern web apps. Passionate about UI/UX design and performance optimization.</p>
      </section>

      <section className="section">
        <h2><FaBriefcase style={{ marginRight: '8px' }} />Experience</h2>
        {experiences.map((exp, i) => (
          <div key={i} className="card">
            <h3>{exp.role} | {exp.company}</h3>
            <p><i>{exp.duration}</i></p>
            <ul>
              {exp.details.map((d, idx) => <li key={idx}>{d}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="section">
        <h2><FaGraduationCap style={{ marginRight: '8px' }} />Education</h2>
        {education.map((edu, i) => (
          <div key={i} className="card">
            <h3>{edu.degree} | {edu.school}</h3>
            <p><i>{edu.duration}</i></p>
            <ul>
              {edu.details.map((d, idx) => <li key={idx}>{d}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="section">
        <h2><FaProjectDiagram style={{ marginRight: '8px' }} />Projects</h2>
        {projects.map((proj, i) => (
          <div key={i} className="card">
            <h3>{proj.name}</h3>
            <p><strong>Tech Stack:</strong> {proj.tech}</p>
            <ul>
              {proj.points.map((p, idx) => <li key={idx}>{p}</li>)}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

export default MainContent;
