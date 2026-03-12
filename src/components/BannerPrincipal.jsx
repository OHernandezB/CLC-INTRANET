import React, { useEffect } from 'react';
import { Carousel } from 'bootstrap';

const HeroBanner = () => {
  useEffect(() => {
    const carouselEl = document.getElementById('heroCarousel');
    if (carouselEl) {
      new Carousel(carouselEl, {
        interval: 7000,
        ride: 'carousel',
        pause: 'hover'
      });
    }
  }, []);

  return (
    <div id="heroCarousel" className="carousel slide mb-5 shadow-lg rounded-4 overflow-hidden" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {/* Slide 1 - Vacunación */}
        <div className="carousel-item active" data-bs-interval="7000">
          <div className="p-5 text-white text-center position-relative" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://www.minsal.cl/wp-content/uploads/2026/01/Campana-Vacunacion-2026_banner-1040x220-1.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '450px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRadius: '16px'
          }}>
            <div className="container py-5">
              <h2 className="display-3 fw-bolder mb-3" style={{
                color: 'white',
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '-1px'
              }}>CAMPAÑA DE VACUNACIÓN</h2>
              <h2 className="display-3 fw-bolder mb-3" style={{
                color: 'white',
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '-1px'
              }}>CLÍNICA LAS CONDES</h2>
              <p className="fs-3 mb-5 opacity-90 mx-auto" style={{
                maxWidth: '900px',
                color: 'white',
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
                fontWeight: '600'
              }}>
                Participa en nuestra vacunación gratuita y protege a los tuyos.
              </p>
              <button className="btn btn-light text-primary px-5 py-3 fs-4 fw-bold rounded-3 shadow">
                Más información
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 Menú Mensual Clinica Las Condes*/}
        <div className="carousel-item" data-bs-interval="7000">
          <div className="p-5 text-white text-center position-relative" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://portaluchile.uchile.cl//.imaging/default/dam/imagenes/Uchile/imagenes-noticias/176450_2_inta-01-l-4_L/jcr:content.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '450px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRadius: '16px'
          }}>
            <div className="container py-5">
              <h2 className="display-3 fw-bolder mb-3" style={{
                color: 'white',
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '-1px'
              }}>MENÚ MENSUAL</h2>
              <h2 className="display-3 fw-bolder mb-3" style={{
                color: 'white',
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '-1px'
              }}>CLÍNICA LAS CONDES</h2>
              <p className="fs-3 mb-5 opacity-90 mx-auto" style={{
                maxWidth: '900px',
                color: 'white',
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
                fontWeight: '600'
              }}>
                Encuentralo
              </p>
              <button className="btn btn-light text-primary px-5 py-3 fs-4 fw-bold rounded-3 shadow">
                Más información
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 - CLINICA LAS CONDES */}
        <div className="carousel-item" data-bs-interval="7000">
          <div className="p-5 text-white text-center position-relative" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://www.clinicalascondes.cl/getattachment/d9ab1f3c-3b0d-43b8-b6e8-e8c9161ccd1f/")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '450px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRadius: '16px'
          }}>
            <div className="container py-5">
              <h2 className="display-3 fw-bolder mb-3" style={{
                color: 'white',
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '-1px'
              }}></h2>
              <h2 className="display-3 fw-bolder mb-3" style={{
                color: 'white',
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '-1px'
              }}>CLÍNICA LAS CONDES</h2>
              <h2 className="display-3 fw-bolder mb-3" style={{
                color: 'white',
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '-1px'
              }}>VIVIR MEJOR</h2>
              <h2></h2>
              <p className="fs-3 mb-5 opacity-90 mx-auto" style={{
                maxWidth: '900px',
                color: 'white',
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
                fontWeight: '600'
              }}>
                Encuentra mas detalles aqui
              </p>
              <button className="btn btn-light text-primary px-5 py-3 fs-4 fw-bold rounded-3 shadow">
                Más información
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ width: '3rem', height: '3rem' }}></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" style={{ width: '3rem', height: '3rem' }}></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default HeroBanner;
