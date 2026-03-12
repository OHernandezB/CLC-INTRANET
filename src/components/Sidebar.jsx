import React, { useState } from 'react';

const Sidebar = ({ onToggle, title = "CLÍNICA", subtitle = "LAS CONDES", menuData }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const defaultMenu = [
    { label: 'Inicio' },
    { label: 'Mi Perfil' },
    { label: 'Mis Documentos' },
    { label: 'Directorio Médico' },
    { label: 'Beneficios' },
    { label: 'Mesa de Ayuda' },
    { label: 'Configuración' },
  ];

  const data = menuData || [{ items: defaultMenu }];

  const handleToggle = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <aside 
      className="sidebar-container bg-white border-end transition-all" 
      style={{ 
        width: isCollapsed ? '70px' : '350px', 
        position: 'fixed', 
        top: '0', 
        left: '0',
        height: '100vh',
        zIndex: '1200',
        overflow: 'hidden',
        boxShadow: '0 0 20px rgba(0,0,0,0.05)'
      }}
    >
      {/* Hamburger Header */}
      <div className="p-4 d-flex align-items-center mb-2" style={{ height: '100px' }}>
        <button 
          onClick={handleToggle}
          className="btn border-0 p-0 d-flex flex-column justify-content-center gap-1 menu-trigger"
          style={{ width: '32px', height: '32px' }}
          title="Menú"
        >
          <div className="bar"></div>
          <div className="bar middle"></div>
          <div className="bar"></div>
        </button>
        {!isCollapsed && (
          <div className="ms-4 animate-fade-in d-flex flex-column">
            <span className="fw-bold fs-4 lh-1" style={{ color: 'var(--clinic-navy)' }}>{title}</span>
            <span className="fs-6 fw-light tracking-widest text-secondary" style={{ letterSpacing: '2px' }}>{subtitle}</span>
          </div>
        )}
      </div>
      
      {/* Menu Sections */}
      <div className="flex-grow-1 py-1 overflow-y-auto overflow-x-hidden h-100" style={{ maxHeight: 'calc(100vh - 120px)' }}>
        <nav className="nav flex-column px-3">
          {data.map((section, sidx) => (
            <div key={sidx} className="mb-4">
              {!isCollapsed && section.category && (
                <div className="px-4 mb-2 text-primary fw-bold small text-uppercase" style={{ letterSpacing: '1px', opacity: 0.7 }}>
                  {section.category}
                </div>
              )}
              {section.items.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="nav-link d-flex align-items-center px-4 py-2 mb-1 rounded-3 fs-6 fw-medium sidebar-item transition-all"
                  style={{ whiteSpace: 'nowrap', color: '#555' }}
                >
                  <span className={`animate-fade-in ${isCollapsed ? 'visually-hidden' : ''}`}>
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
