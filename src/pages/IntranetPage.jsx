import React, { useState } from 'react';
import Header from '../components/Header';
import QuickLinks from '../components/QuickLinks';
import HeroBanner from '../components/BannerPrincipal';
import NewsSection from '../components/NewsSection';
import AlertsSection from '../components/AlertsSection';
import Footer from '../components/Footer';
import '../index.css';
import Sidebar from '../components/Sidebar';

const IntranetPage = ({ onNavigate }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const mainMenuData = [
    {
      category: '', // Sección Superior (Sin título visible)
      items: [
        { label: 'Misión' },
        { label: 'Portal del Colaborador' },
        { label: 'Calidad de Vida' },
        { label: 'Capacitación y Desarrollo' },
        { label: 'Remuneración y Personal' },
        { label: 'Selección de Personal' },
        { label: 'Alianza Estratégica Universidad Finis Terrae' },
        { label: 'Contáctenos' }
      ]
    },
    {
      category: 'CONVENIOS',
      items: [
        { label: 'Cartas Garantía' },
        { label: 'Form. Convenio Internac.' },
        { label: 'Descuentos médicos' },
        { label: 'Médicos en convenio' },
        { label: 'Consulta convenio' }
      ]
    },
    {
      category: 'INFORMACIÓN CLC',
      items: [
        { label: 'Código de conducta, ética y buenas prácticas' },
        { label: 'Formulario de notificación de incidentes de seguridad nueva' },
        { label: 'SOPORTE DOC - Anexo 6911' },
        { label: 'Turnos de Urgencia' },
        { label: 'Arsenal farmacológico' },
        { label: 'Formularios' },
        { label: 'Códigos existencia' },
        { label: 'Solicitudes equipo' },
        { label: 'Tabla operatoria' },
        { label: 'Reimpresión de Boletas' },
        { label: 'Manual de Orden, Higiene y Seguridad' },
        { label: 'Manual de Telemedicina' },
        { label: 'Instructivo de Exámenes de Laboratorio Clínico' },
        { label: 'Manual de exámenes de Banco de Sangre' },
        { label: 'Canal de Denuncias' },
        { label: 'Sistema Vuemotion' },
        { label: 'Gestión de Reclamos y Sugerencias' },
        { label: 'Tutorial Receta Médica' }
      ]
    },
    {
      category: 'COMUNICACIONES CLC',
      items: [
        { label: 'Recopilación Relatos Concurso Día de la Madre' }
      ]
    }
  ];

  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      <Header onLoginClick={onNavigate} sidebarCollapsed={sidebarCollapsed} />
      <div className="d-flex flex-grow-1 position-relative">
        <Sidebar 
          onToggle={(isCollapsed) => setSidebarCollapsed(isCollapsed)} 
          menuData={mainMenuData}
        />
        <main 
          className="flex-grow-1 transition-all" 
          style={{ 
            marginLeft: sidebarCollapsed ? '70px' : '350px'
          }}
        >
          <div className="container-fluid px-4 px-md-5 py-5">
            <QuickLinks onPrivateAccess={onNavigate} />
            <div className="my-5">
              <HeroBanner />
            </div>
            <div className="row g-5">
              <div className="col-12 col-xl-8">
                <NewsSection />
              </div>
              <div className="col-12 col-xl-4">
                <AlertsSection />
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default IntranetPage;
