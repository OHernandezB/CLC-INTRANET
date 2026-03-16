import React, { useState, useRef, useEffect } from 'react';

const Header = ({ onLoginClick, sidebarCollapsed }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef(null);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false);
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => {
    if (!isFocused) setIsExpanded(false);
  };

  return (
    <header className="bg-white sticky-top shadow-sm w-100 py-3 transition-all" style={{ zIndex: 1100 }}>
      <div className="container-fluid px-5 d-flex align-items-center justify-content-between">

        {/* Left Section: Logo + Login */}
        <div className="d-flex align-items-center gap-4">
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

        </div>

        {/* Center Section: Static Title */}
        <div
          className="position-absolute start-50 translate-middle-x"
          style={{ pointerEvents: 'none' }}
        >
          <h2 className="m-0 fw-bold text-nowrap" style={{ color: 'var(--clinic-navy)', fontSize: '35px' }}>
            INTRANET COLABORADORES
          </h2>
        </div>

        {/* Right Section: Search */}
        <div
          className="search-wrapper position-relative"
          ref={searchRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`search-bubble ${isExpanded || isFocused ? 'active' : ''}`}>
            <div className="search-icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar noticias..."
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
