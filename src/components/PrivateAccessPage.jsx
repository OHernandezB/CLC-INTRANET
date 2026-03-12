import React, { useState } from 'react';
import Sidebar from './Sidebar';
import headerImg from '../IMG/imagen-general-edificio-clc.jpg';

const PrivateAccessPage = ({ onBack }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const institutionalMenu = [
    {
      category: 'Gestión Administrativa y Financiera',
      items: [
        { label: 'Aranceles' }, { label: 'Boleta Electrónica' }, { label: 'CRM MasCerca' },
        { label: 'Habilitar Exámenes Anulados' }, { label: 'Acceso a Reportes BO' },
        { label: 'Preasignación Hab.' }, { label: 'Disponibilidad Hab.' },
        { label: 'Ficha Proyectos CLC' }, { label: 'Presupuesto Semanal' },
        { label: 'Seguimiento de Presupuestos' }, { label: 'Adm. Reembolso Web' },
        { label: 'Seguros Siniestros / Seguros Liquidación' }, { label: 'Sistema de Estacionamientos' }
      ]
    },
    {
      category: 'Gestión Clínica y Médica',
      items: [
        { label: 'Vue Motion' }, { label: 'Mantenedor Áreas Médicas' }, { label: 'Gestión Solicitud DOC' },
        { label: 'Cartola de Procedimientos' }, { label: 'Seguimiento Pacientes' },
        { label: 'Médicos Convenio' }, { label: 'Auditoría de Ficha Clínica' },
        { label: 'Listado de Centros-Subcentros' }, { label: 'Personalización Recetas' },
        { label: 'Solicitud/Gestión Creación Prestaciones' }, { label: 'Definición Turnos Urgencia' },
        { label: 'Estado de Habitaciones' }, { label: 'Honorarios Médicos de Consulta' },
        { label: 'HM de Consulta por Sociedad' }
      ]
    },
    {
      category: 'Sistemas y Soporte',
      items: [
        { label: 'CLC 2020' }, { label: 'Monitoreo Interfaces' }, { label: 'Administrador Sitio Web' },
        { label: 'Gestión CRM Web' }, { label: 'Suite DTE' }, { label: 'Gestión Regulación Hospitalaria' },
        { label: 'CRM CEV' }, { label: 'Portal Gestión de Reclamos' }, { label: 'Gestión Programación Quirúrgica' }
      ]
    }
  ];

  return (
    <div className="min-vh-100 d-flex bg-white">
      <Sidebar
        onToggle={(collapsed) => setSidebarCollapsed(collapsed)}
        title="ÁREA"
        subtitle="PRIVADA CLC"
        menuData={institutionalMenu}
      />

      <main
        className="flex-grow-1 transition-all"
        style={{
          marginLeft: sidebarCollapsed ? '70px' : '350px',
          backgroundColor: '#fff'
        }}
      >
        {/* Photo Header */}
        <div className="position-relative overflow-hidden" style={{ height: '350px' }}>
          <img
            src={headerImg}
            className="w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'linear-gradient(90deg, rgba(0,51,153,0.8) 0%, rgba(0,51,153,0.4) 100%)' }}>
            <div className="container px-5">
              <h1 className="display-3 fw-bold text-white mb-2 animate-fade-in">Acceso Privado</h1>
            </div>
          </div>
        </div>

        <div className="container py-5 px-5">
          <div className="mb-5 d-flex justify-content-between align-items-center animate-fade-in">
            <h2 className="fw-bold m-0" style={{ color: 'var(--clinic-navy)' }}>Herramientas y Enlaces</h2>
            <button
              onClick={onBack}
              className="btn btn-outline-primary px-4 py-2 fw-bold rounded-pill"
            >
              ← Volver al Portal
            </button>
          </div>

          <div className="row g-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {[
              { title: 'Control Presupuestario', desc: 'Seguimiento y gestión de presupuestos.' },
              { title: 'InfoView Business Objects', desc: 'Portal de Business Intelligence.' },
              { title: 'Recursos Humanos', desc: 'Gestión de personal y beneficios.' },
              { title: 'Tabla Operatoria', desc: 'Programación y control de pabellones.' },
              { title: 'Acreditación Médica', desc: 'Procesos de acreditación y calidad.' },
              { title: 'Integración de Cuentas', desc: 'Gestión contable y financiera.' },
              { title: 'Informe Pagos On-line', desc: 'Reporte Suite DTE y recaudación.' },
              { title: 'Gestión Asistencia', desc: 'Control de asistencia y turnos.' },
              { title: 'Administración Protocolos', desc: 'Gestión de documentos clínicos.' },
              { title: 'Auditoría Protocolos', desc: 'Revisión y cumplimiento normativo.' },
              { title: 'FIN700', desc: 'Sistema de gestión ERP.' },
              { title: 'Insumos Pabellón', desc: 'Control de inventario quirúrgico.' },
              { title: 'MAXIMO', desc: 'Gestión de activos y mantenimiento.' },
              { title: 'Digitalización Documentos', desc: 'Archivo clínico electrónico.' }
            ].map((tool, idx) => (
              <div key={idx} className="col-12 col-xl-6">
                <div className="d-flex align-items-center p-4 bg-white border rounded-4 hover-lift shadow-sm transition-all" style={{ cursor: 'pointer', height: '100px' }}>
                  <div className="flex-grow-1 overflow-hidden">
                    <h5 className="fw-bold mb-1 text-truncate" style={{ color: 'var(--clinic-navy)' }}>{tool.title}</h5>
                    <p className="text-secondary mb-0 text-truncate small">{tool.desc}</p>
                  </div>
                  <div className="ms-3 text-primary fw-bold text-nowrap">
                    Abrir →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivateAccessPage;
