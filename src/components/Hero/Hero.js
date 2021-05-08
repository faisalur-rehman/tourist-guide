import React from "react";
import "../../css/styles.css";
const Hero = () => {
  return (
    <div>
      <div className="section-cta">
        <article className="container-cta">
          <h1 className="main-title">¿Eres guía Freelance?</h1>
          <p className="cta-text">
            Crea tu perfil y gana dinero con tu pasión. En menos de 5 minutos
            puedes empezar a beneficiarte de esta oportunidad única.
          </p>
          <a href="#register" className="cta-button">
            Crear perfil Gratis
          </a>
        </article>
      </div>

      <div className="popup-container" id="register">
        <div className="popup">
          <div className="popup-title">
            <p className="popup-text">Regístrate</p>
          </div>
          <div className="input-container">
            <label for="name">Nombre</label>
            <input type="name" id="name" />
          </div>
          <div className="input-container">
            <label for="password">Contraseña</label>
            <input type="password" id="password" />
          </div>
          <a href="/form.html">
            <div className="popup-button">Registrarme</div>
          </a>
          <a href="#1" className="popup-close">
            X
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
