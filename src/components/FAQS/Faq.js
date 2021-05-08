import React from "react";
import "../../css/styles.css";
const Faq = () => {
  return (
    <div class="final-text__section">
      <div class="final-text__container">
        <h2 class="subtitle subtitle__final-section">
          Preguntas frecuentes para los guías
        </h2>
        <details class="details">
          <summary class="summary">
            <h2 class="subtitle__summary">
              ¿Puedo apuntarme si aún no tengo un tour preparado?
            </h2>
            <i class="fas fa-chevron-down"></i>
          </summary>
          <p class="details__text">
            Puedes apuntarte pero no podrás recibir clientes. Debes tener cierta
            experiencia en este tipo de recorrido, ya que comprobamos la calidad
            de cada guía que anuncia su perfil en nuestra web.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Faq;
