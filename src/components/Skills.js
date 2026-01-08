import React from 'react';

function Skills() {
  const skills = ["HTML", "CSS", "Bootstrap 5", "JavaScript", "React.js", "Python", "Django", "REST APIs"];
  return (
    <section style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      margin: '20px 0'
    }}>
      {skills.map(skill => (
        <div key={skill} style={{
          backgroundColor: '#e9ecef',
          padding: '8px 12px',
          borderRadius: '20px',
          fontWeight: '500'
        }}>
          {skill}
        </div>
      ))}
    </section>
  );
}

export default Skills;
