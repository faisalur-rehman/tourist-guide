import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import "./Profile.css";
import ProfileCard from "./ProfileCard";
const Profile = () => {
  return (
    <section>
      <div className="profile-card">
        <div className="profile">
          <Link to="tour-guide">
            <ProfileCard />
          </Link>
        </div>
        <div className="profile">
          <Link to="tour-guide">
            <ProfileCard />
          </Link>
        </div>
        <div className="profile">
          <Link to="tour-guide">
            <ProfileCard />
          </Link>
        </div>
        <div className="profile">
          <Link to="tour-guide">
            <ProfileCard />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Profile;
