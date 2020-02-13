import React, { Component } from "react";
import PersonIcon from "@material-ui/icons/Person";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import "./assets/css/ProfileTypeCard.css";

export default class ProfileTypeCard extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="individual-profile">
        {this.props.type === "Individual" ? (
          <PersonIcon fontSize="large" />
        ) : (
          <FastfoodIcon fontSize="large" />
        )}
        <span className="profile-text">{this.props.type}</span>
      </div>
    );
  }
}
