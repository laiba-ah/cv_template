import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const cvRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
    documentTitle: "CV_Template",
    removeAfterPrint: true,
    pageStyle: `
      @page { size: auto; margin: 20mm; }
      @media print { body { -webkit-print-color-adjust: exact; } }
    `
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* CV Layout */}
      <div ref={cvRef} style={{ width: '900px' }}>
        <div className="cv-container">
          <Sidebar />
          <MainContent />
        </div>
      </div>

      {/* Button below CV, right-aligned */}
      <div style={{ width: '900px', display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <button 
          onClick={handlePrint} 
          style={{
            padding: '12px 25px',
            backgroundColor: '#4FB0AE',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
          }}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default App;
