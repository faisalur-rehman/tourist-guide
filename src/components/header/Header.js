import React, { useState } from "react";
import logo from "../../assets/images/corazon-cuore-2.svg";
import "../../css/styles.css";
import SignInModel from "../Model/SigninModel";
import Profile from "../UserProfile/Profile";
import { Link } from "react-router-dom";

const Header = () => {
  const [clicked, setClicked] = useState(false);
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
              {localStorage.getItem("token") ? (
                <Link to="/user-profile" className="profile-name">
                  Profile
                </Link>
              ) : (
                <li onClick={() => setClicked(true)}>Sign in</li>
              )}
              <li>Contact Us</li>
            </ul>
          </div>
        </nav>
        {clicked && <SignInModel setCancel={setClicked} />}
      </header>
    </div>
  );
};

export default Header;
