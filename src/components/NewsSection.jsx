import React from 'react';
import beneficiosImg from '../assets/beneficios-colaboradores.jpg';
import busStopImg from '../assets/bus-stop.jpg';
const NewsSection = () => {
  const news = [
    {
      id: 1,
      category: 'Cursos de Capacitación',
      date: '5 de Marzo, 2026',
      title: 'Cursos de Capacitación Disponibles',
      description: 'Encuentra los cursos de capacitación disponibles para este mes.',
      image: 'https://agenda.minpublico.cl/academiafiscalia/wp-content/uploads/2023/10/cursos.jpg'
    },
    {
      id: 2,
      category: 'Beneficios',
      date: '3 de Marzo, 2026',
      title: 'Transporte CLC / Bus de Acercamiento',
      description: 'Encuentra los horarios de los buses de acercamiento.',
      image: busStopImg
    },
    {
      id: 3,
      category: 'Beneficios',
      date: '2 de Marzo, 2026',
      title: 'Beneficios Colaboradores',
      description: 'Encuentra los beneficios disponibles para los colaboradores.',
      image: beneficiosImg
    }
  ];

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="display-6 fw-bold m-0 align-items-center d-flex gap-3">
          Informaciones Generales
        </h3>
        <a href="#" className="text-decoration-underline fw-bold fs-5" style={{ color: 'var(--clinic-navy)' }}>Ver todas las noticias</a>
      </div>

      <div className="row g-4">
        {news.map(item => (
          <div key={item.id} className="col-12">
            <div className="card border-0 rounded-4 shadow-sm p-4 h-100 overflow-hidden" style={{ transition: 'transform 0.2s ease' }}>
              <div className="row g-4 align-items-center">
                <div className="col-12 col-md-3">
                  <div className="bg-light rounded-4 d-flex align-items-center justify-content-center overflow-hidden" style={{ height: '180px' }}>
                    {/* Detect if image is a path/URL (contains / or http) or is a React asset object */}
                    {(typeof item.image === 'string' && (item.image.includes('/') || item.image.includes('http'))) || typeof item.image !== 'string' ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover', display: 'block' }}
                      />
                    ) : (
                      <span style={{ fontSize: '64px' }}>{item.image}</span>
                    )}
                  </div>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex gap-3 align-items-center mb-2">
                    <span className="badge rounded-pill px-3 py-2 fw-bold" style={{ backgroundColor: '#eef2ff', color: 'var(--clinic-navy)' }}>
                      {item.category}
                    </span>
                    <small className="text-secondary">{item.date}</small>
                  </div>
                  <h4 className="card-title h3 fw-bold mb-3" style={{ color: 'var(--clinic-text)' }}>{item.title}</h4>
                  <p className="card-text fs-5 text-secondary mb-4">{item.description}</p>
                  <a href="#" className="fw-bold fs-5 text-decoration-none" style={{ color: 'var(--clinic-navy)' }}>Leer más →</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
