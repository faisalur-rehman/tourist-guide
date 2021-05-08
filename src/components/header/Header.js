import React from "react";
import logo from "../../assets/images/corazon-cuore-2.svg";
import "../../css/styles.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="main-menu">
          <div className="logo-container">
            <a href="/">
              <img src={logo} alt="logo Cuore tours" className="logo-img" />
              <span className="logo-text">Cuore Tours</span>
            </a>
          </div>
          <div className="main-menu__items">
            <a
              href="#
                "
              className="main-menu__item"
            >
              <a href="/form.html" className="main-menu__item" target="_blank">
                <i className="fas fa-user-circle"></i>
                Mi perfil
              </a>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
