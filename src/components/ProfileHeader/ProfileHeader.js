import React from "react";
import logo from "../../assets/images/corazon-cuore-2.svg";
import "../../css/styles.css";
import { Link } from "react-router-dom";

const ProfileHeader = () => {
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
            <ul>
              <li>
                <Link to="/tour-guide/#introduction">Introduction </Link>
              </li>
              <li>
                <Link to="/tour-guide/#introduction">General Information</Link>
              </li>
              <li>
                <Link to="/tour-guide/#introduction">Meeting Point </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default ProfileHeader;
