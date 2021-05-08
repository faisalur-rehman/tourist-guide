import React from "react";
import milan from "../../assets/images/tour-milan.jpg";
// import roma from "../../assets/images/roma-tours.jpg";
// import verona from "../../assets/images/verona-city.jpg";
import javi from "../../assets/images/tour-milan-javi.jpg";
import "./Categories.css";
import { Link } from "react-router-dom";
const Cities = () => {
  return (
    <div className="categories">
      <h2>Most Booked Tours</h2>
      <div className="flex-categories">
        <div className="category">
          <h3>Online</h3>
          <Link to="online-tour-guide">
            <img src={javi} alt="" />
          </Link>
        </div>
        <div className="category">
          <h3>Face to face</h3>

          <Link to="f2f-tour-guide">
            <img src={milan} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cities;
