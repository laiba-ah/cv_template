import React from 'react';

function Header() {
  return (
    <header style={{
      backgroundColor: '#0d6efd',
      color: '#fff',
      padding: '30px 20px',
      textAlign: 'center',
      borderRadius: '8px 8px 0 0'
    }}>
      <h1 style={{ margin: '0', fontSize: '36px', fontWeight: '700' }}>Laiba Shaban</h1>
      <p style={{ margin: '5px 0', fontSize: '18px' }}>Aspiring Web Developer</p>
      <p style={{ margin: '5px 0', fontSize: '14px' }}>
        +92 3109200827 | laiba@example.com | GitHub: github.com/laiba
      </p>
    </header>
  );
}

export default Header;
