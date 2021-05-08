import React from "react";
import "../../css/styles.css";
import milan from "../../assets/images/panoramic-milan.jpg";
import roma from "../../assets/images/roma-tours.jpg";
import verona from "../../assets/images/verona-city.jpg";
const Cities = () => {
  return (
    <div class="section-cities">
      <h2 class="subtitle">Ciudades más populares</h2>
      <div class="container-cities">
        <div class="container-city">
          <a href="/milan.html">
            <img src={milan} alt="" class="city-img" />
            <div class="city-name">Milán</div>
          </a>
        </div>
        <div class="container-city">
          <a href="#1">
            <img src={roma} alt="" class="city-img" />
            <div class="city-name">Roma</div>
          </a>
        </div>
        <div class="container-city">
          <a href="#2">
            <img src={verona} alt="" class="city-img" />
            <div class="city-name">Verona</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cities;
