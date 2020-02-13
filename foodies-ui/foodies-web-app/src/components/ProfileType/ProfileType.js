import React, { Component } from "react";
import ProfileTypeCard from "../ProfileTypeCard";
import "./assets/css/ProfileType.css";

class ProfileType extends Component {
  render() {
    return (
      <div className="profile-cards-container sign-in-container">
        <ProfileTypeCard
          onClick={() => {
            this.props.onProfileChosen("Individual");
          }}
          type="Individual"
        />
        <ProfileTypeCard
          type="Restaurant"
          onClick={() => {
            this.props.onProfileChosen("Restaurant");
          }}
        />
      </div>
    );
  }
}

export default ProfileType;
