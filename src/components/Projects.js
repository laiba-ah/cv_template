import React from 'react';

function Projects() {
  const projects = [
    {
      name: "E-commerce Website",
      tech: "React, Django, Bootstrap",
      points: [
        "Built full-stack e-commerce platform with product listing, cart, checkout.",
        "Integrated REST APIs for backend management."
      ]
    },
    {
      name: "Organization Management System",
      tech: "Django, DRF, React",
      points: [
        "Created dashboards for employees, projects, attendance.",
        "Implemented API endpoints for CRUD operations."
      ]
    }
  ];

  return (
    <section style={{ margin: '20px 0' }}>
      <h2 style={{ color: '#0d6efd' }}>Projects</h2>
      {projects.map((proj, index) => (
        <div key={index} style={{ backgroundColor: '#f1f3f5', padding: '15px', margin: '10px 0', borderRadius: '8px' }}>
          <h3>{proj.name}</h3>
          <p><strong>Tech Stack:</strong> {proj.tech}</p>
          <ul>
            {proj.points.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Projects;
