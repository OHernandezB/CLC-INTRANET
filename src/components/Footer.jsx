import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light border-top py-5 mt-5">
      <div className="container-fluid px-5">
        <div className="row g-5 py-5 mb-5 border-bottom align-items-center">
          <div className="col-12 mb-4">
            <img src="https://www.clinicalascondes.cl/Dev_CLC/media/Imagenes/banner_home/logo-clc.svg" alt="logo-clc" style={{ height: '70px' }} />
          </div>
          <div className="col-12 col-md-6 col-xl-3 mt-0">
            <h4 className="h3 fw-bold mb-4" style={{ color: 'var(--clinic-navy)' }}>Clínica Las Condes</h4>
            <p className="fs-5 text-secondary lh-lg mb-4">
              Portal interno dedicado a la gestión informativa y operativa de nuestros colaboradores y cuerpo médico.
            </p>
            <div className="d-flex align-items-center gap-3 fw-bold fs-5" style={{ color: 'var(--clinic-navy)' }}>
              🛡️ <span className="text-decoration-underline">Conexión Segura (Intranet)</span>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3 ps-xl-5">
            <h4 className="h5 fw-bolder mb-4 text-uppercase text-secondary">Enlaces Internos</h4>
            <ul className="list-unstyled flex-column d-flex gap-3 fs-5">
              <li><a href="#" className="text-decoration-none text-dark hover-primary">Recursos Humanos ↗</a></li>
              <li><a href="#" className="text-decoration-none text-dark hover-primary">Bienestar Laboral</a></li>
              <li><a href="#" className="text-decoration-none text-dark hover-primary">Protocolos Clínicos</a></li>
              <li><a href="#" className="text-decoration-none text-dark hover-primary">Mesa de Ayuda TI</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-xl-3">
            <h4 className="h5 fw-bolder mb-4 text-uppercase text-secondary">Ubicación y Contacto</h4>
            <ul className="list-unstyled d-flex flex-column gap-3 fs-5">
              <li className="d-flex gap-3">📍 <span>Av. San Carlos 1234, Las Condes, Santiago, Chile</span></li>
              <li className="d-flex gap-3">📞 <span>+56 2 2555 0100</span></li>
              <li className="d-flex gap-3">✉️ <span>soporte.it@clinicasalud.cl</span></li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-xl-3">
            <h4 className="h5 fw-bolder mb-4 text-uppercase text-secondary">Horarios Admin</h4>
            <div className="fs-5 mb-2">Lunes a Viernes: <span className="fw-bold">08:30 - 18:30</span></div>
            <div className="fs-5 mb-4">Sábados: <span className="fw-bold">09:00 - 13:00</span></div>
            <div className="bg-danger bg-opacity-10 text-danger p-3 rounded-3 fw-bold fs-4 d-inline-block border border-danger">
              Urgencias: 24/7
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-2 fs-6 text-secondary">
          <div className="mb-3 mb-md-0">© 2026 Clínica Salud+ — Todos los derechos reservados.</div>
          <div className="d-flex gap-4">
            <a href="#" className="text-decoration-none text-secondary">PRIVACIDAD</a>
            <a href="#" className="text-decoration-none text-secondary">SEGURIDAD DE DATOS</a>
            <span className="fw-bold">V2.4.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
