import React from 'react';

const AlertsSection = () => {
  const alerts = [
    { id: 1, title: 'Calendario de Turnos', text: 'El calendario de turnos del próximo mes ya está disponible para revisión.', time: 'Hace 2 horas', type: 'info' },
    { id: 2, title: 'Reunión de Equipo', text: 'Reunión programada para hoy a las 15:00 en la sala de conferencias B.', time: 'Hace 10 minutos', type: 'event' },
    { id: 3, title: 'Actualización de Protocolo', text: 'Nuevo protocolo de seguridad institucional implementado esta mañana.', time: 'Hace 1 hora', type: 'urgent' },
    { id: 4, title: 'Sistemas Internos', text: 'Mantenimiento preventivo de base de datos mañana a las 22:00.', time: 'Hace 4 horas', type: 'info' }
  ];

  return (
    <aside className="ps-xl-4 h-100 d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="h2 fw-bold m-0 d-flex align-items-center gap-3">
          🔔 Avisos Importantes
        </h3>
        <span className="badge rounded-pill bg-danger px-3 py-2 fw-bold fs-5">{alerts.length}</span>
      </div>

      {/* Vertical Carousel for Alerts */}
      <div id="alertsCarousel" className="carousel slide carousel-vertical mb-5" data-bs-ride="carousel">
        <div className="carousel-inner rounded-4 px-2">
          {alerts.map((alert, index) => (
            <div key={alert.id} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="5000">
               <div className={`card border-2 rounded-4 p-4 shadow-sm h-100 ${alert.type === 'urgent' ? 'border-danger bg-danger bg-opacity-10' : 'border-light bg-white'}`} style={{ minHeight: '300px' }}>
                <div className="card-body p-0 d-flex flex-column justify-content-center position-relative text-center">
                  {alert.type === 'urgent' && (
                    <span className="badge bg-danger text-uppercase fw-bold p-2 mb-3 align-self-center" style={{ fontSize: '12px' }}>Urgente</span>
                  )}
                  <h5 className="card-title h3 fw-bold mb-3">{alert.title}</h5>
                  <p className="card-text fs-4 text-secondary mb-4">{alert.text}</p>
                  <div className="text-muted fs-5 mt-auto">{alert.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel Indicators for vertical navigation */}
        <div className="carousel-indicators position-static mt-4 d-flex gap-2 justify-content-center">
          {alerts.map((_, index) => (
            <button 
              key={index}
              type="button" 
              data-bs-target="#alertsCarousel" 
              data-bs-slide-to={index} 
              className={index === 0 ? 'active bg-primary' : 'bg-secondary'} 
              style={{ width: '12px', height: '12px', borderRadius: '50%', border: 'none' }}
              aria-current={index === 0 ? 'true' : 'false'} 
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="card border-0 rounded-4 p-5 shadow mt-auto" style={{ backgroundColor: 'var(--clinic-yellow-bg)', border: '2px solid #fde68a !important' }}>
        <h4 className="h3 fw-bold mb-3 d-flex align-items-center gap-3" style={{ color: '#92400e' }}>
          ⚠️ Recordatorio TI
        </h4>
        <p className="fs-5 m-0" style={{ color: '#b45309', lineHeight: '1.6' }}>
          Actualización del sistema programada para el domingo a las 02:00 AM.
        </p>
      </div>
    </aside>
  );
};

export default AlertsSection;
