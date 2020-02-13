import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./PostOwner.css";
export default class PostOwner extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Link to={`/profile/${this.props.user.id}`}>
            <img
              alt={`${this.props.user.username}'s profile picture`}
              className="profile-picture"
              src={`data:image/jpeg;base64,${this.props.user.image}`}
            ></img>{" "}
          </Link>
          <div>
            <Link to={`/profile/${this.props.user.id}`}>
              <span
                onClick={this._handleProfileOnClick}
                className="username-text"
              >
                {this.props.user.username}
              </span>
            </Link>
            <div>{moment(this.props.post.date).format("LLL")}</div>
          </div>
        </div>
      </div>
    );
  }
}
