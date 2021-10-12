import React from "react"
const Banner = () => (
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="banner" src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Cursos Online Gratis y de Pago</p>
          <p> Tu futuro dentro de la tecnología te está esperando...</p>
          <a href="https://ed.team" target="_blank" className="button">Suscribirse ahora</a>
        </div>
      </div>
    </div>
  </div>
)
export default Banner