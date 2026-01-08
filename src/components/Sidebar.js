import React from 'react';

function Sidebar() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "JS", level: 70 },
    { name: "React", level: 75 },
    { name: "Python", level: 85 },
    { name: "Django", level: 80 }
  ];

  const languages = ["English", "Urdu"];

  return (
    <div className="sidebar">
      <h1>Laiba Shaban</h1>
      <p>Aspiring Web Developer</p>
      <hr />
      <h2>Contact</h2>
      <p>📞 +92 3109200827</p>
      <p>✉ laiba@example.com</p>
      <p>💻 github.com/laiba</p>
      <hr />
      <h2>Skills</h2>
      {skills.map((skill) => (
        <div key={skill.name} style={{ marginBottom: '10px' }}>
          <p style={{ margin: '0 0 3px 0', fontSize: '14px' }}>{skill.name}</p>
          <div style={{
            backgroundColor: '#e0f0f0',
            borderRadius: '20px',
            height: '10px',
            width: '100%',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${skill.level}%`,
              height: '10px',
              backgroundColor: '#4FB0AE'
            }}></div>
          </div>
        </div>
      ))}
      <hr />
      <h2>Languages</h2>
      <ul className="language-list">
        {languages.map((lang) => <li key={lang}>{lang}</li>)}
      </ul>
    </div>
  );
}

export default Sidebar;
