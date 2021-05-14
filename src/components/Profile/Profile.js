import React, { useState, useEffect } from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import "./Profile.css";
import ProfileCard from "./ProfileCard";
import { formGetData, formPostData, patchData } from "../Api/ApiRequest";

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await formGetData(
          `/tour-guide/profiles`,
          localStorage.getItem("token")
        );
        setProfiles(data.profiles);
        console.log(data);
      } catch (err) {
        // setError(err.response)
        console.log(err.response);
      }
    }
    fetchData();
  }, []);
  return (
    <section>
      <div className="profile-card">
        {profiles.map((profile, index) => (
          <div className="profile" key={index}>
            <Link to={`tour-guide/${profile._id}`}>
              <ProfileCard />
            </Link>
          </div>
        ))}
        {/* <div className="profile">
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
        </div> */}
      </div>
    </section>
  );
};

export default Profile;
