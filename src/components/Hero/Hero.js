import React from "react";
import "../../css/styles.css";
import SearchIcon from "@material-ui/icons/Search";
const Hero = () => {
  return (
    <div>
      <div className="section-cta">
        <article className="container-cta">
          <h1 className="main-title">Top Rated Tour in Milan</h1>
          <p className="cta-text">
            Discover the best tours and activities in Milan
          </p>
          <input type="text" placeholder="Search Tour" />
          <span className="search-icon">
            <i class="fa fa-search" style={{ fontSize: 24 }}></i>
          </span>
        </article>
      </div>
    </div>
  );
};

export default Hero;
