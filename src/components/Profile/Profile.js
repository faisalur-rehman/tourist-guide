import React from "react";
import doctor from "../../assets/images/tour-milan-miguel.jpg";
import "../../index.css";
import { Link } from "react-router-dom";
import "./Profile.css";
const Profile = () => {
  return (
    <section className="recommended-slider">
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <Link to="tour-guide" className="card">
            <div className="card-body">
              <div className="card-1">
                <div className="content">
                  <div className="left">
                    <div className="left-img">
                      <img src={doctor} width="126px" alt="" />
                    </div>
                    <div className="left-text">
                      <h3>
                        <b>Juri</b>
                      </h3>
                      <p>Milan Specialist</p>
                    </div>
                  </div>
                  <div className="right">
                    <p>+1232123432</p>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className="p-1">(86)</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Profile;
