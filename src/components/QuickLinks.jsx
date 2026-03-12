import React from 'react';

const QuickLinks = ({ onPrivateAccess }) => {
  const links = [
    'ACCESO PRIVADO',
    'GERENCIAS Y DIRECCION MEDICA',
    'DIRECTORIO TELEFONICO',
    'CENTRO DE DOCUMENTOS',
    'CENTRO DE EDUCACION'
  ];

  return (
    <div className="d-flex flex-row justify-content-center align-items-center gap-3 my-5 py-3 overflow-auto" style={{
      whiteSpace: 'nowrap',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    }}>
      {links.map((link, index) => (
        <button 
          key={index} 
          onClick={link === 'ACCESO PRIVADO' ? onPrivateAccess : undefined}
          className="btn text-white px-4 py-3 fw-bold flex-shrink-0" 
          style={{
          backgroundColor: 'var(--clinic-navy)',
          borderRadius: '100px',
          fontSize: '20px',
          letterSpacing: '0.8px',
          boxShadow: '0 6px 16px rgba(0,51,153,0.2)',
          border: 'none',
          minWidth: 'fit-content'
        }}>
          {link}
        </button>
      ))}
    </div>
  );
};

export default QuickLinks;
