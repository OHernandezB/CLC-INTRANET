import React from 'react';

const Header = ({ onLoginClick, sidebarCollapsed }) => {
  return (
    <header className="bg-white sticky-top shadow-sm w-100 py-3 transition-all" style={{ zIndex: 1100 }}>
      <div className="container-fluid px-5 d-flex justify-content-between align-items-center">
        <div 
          className="logo-section d-flex align-items-center"
          style={{ 
            marginLeft: sidebarCollapsed ? '70px' : '350px',
            transition: 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <img
            src="https://www.clinicalascondes.cl/Dev_CLC/media/Imagenes/banner_home/logo-clc.svg"
            alt="CLC Logo"
            style={{ height: '70px' }}
          />
        </div>

        <div className="search-section d-none d-lg-block flex-grow-1 mx-5" style={{ maxWidth: '800px' }}>
          <div className="input-group">
            <input
              type="text"
              className="form-control rounded-pill px-4 py-2 border-2"
              placeholder="Buscar noticias, documentos..."
              style={{ fontSize: '18px' }}
            />
          </div>
        </div>

        <button 
          onClick={onLoginClick}
          className="btn text-white rounded-pill px-5 py-2 fw-bold shadow-sm"
          style={{ backgroundColor: '#a5c536', border: 'none', fontSize: '20px', padding: '10px 25px' }}>
          Iniciar Sesión
        </button>
      </div>
    </header>
  );
};

export default Header;
