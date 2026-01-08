import React from 'react';

function Experience() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Logicexer",
      duration: "May 2025 - Present",
      details: [
        "Developed web applications using Django and React.",
        "Worked on REST API integration and dynamic front-end features.",
        "Collaborated with team members for project delivery."
      ]
    }
  ];

  return (
    <section style={{ margin: '20px 0' }}>
      <h2 style={{ color: '#0d6efd' }}>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} style={{
          backgroundColor: '#f1f3f5',
          padding: '15px',
          margin: '10px 0',
          borderRadius: '8px'
        }}>
          <h3>{exp.role} | {exp.company}</h3>
          <p style={{ fontStyle: 'italic' }}>{exp.duration}</p>
          <ul>
            {exp.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
