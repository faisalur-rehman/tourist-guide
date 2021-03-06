import React from "react";
import guide from "../../assets/images/duomo-milan.jpg";
import guide1 from "../../assets/images/panoramic-milan.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" style={{ backgroundColor: "#d1cecf" }}>
        <div
          class="carousel-item active"
          style={{ width: "80%", margin: "auto" }}
        >
          <img class="d-block w-80" src={guide} alt="First slide" />
        </div>
        <div class="carousel-item" style={{ width: "80%", margin: "auto" }}>
          <img class="d-block w-100" src={guide1} alt="Second slide" />
        </div>
        <div class="carousel-item" style={{ width: "80%", margin: "auto" }}>
          <img class="d-block w-100" src={guide} alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
