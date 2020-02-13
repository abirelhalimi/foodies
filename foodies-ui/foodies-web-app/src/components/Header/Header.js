import React, { Component, Fragment } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/actions/logInAction";
import "./assets/css/Header.css";
import Logo from "./assets/foodies-logo.png";
import Button from "../Button";
import PropTypes from "prop-types";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import StarsIcon from "@material-ui/icons/Stars";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RedeemIcon from "@material-ui/icons/Redeem";
import setAuthorizationToken from "../../utils/setAuthorizationToken";

class Header extends Component {
  state = {
    profileClicked: false,
    redirect: false
  };

  handleClick = () => {
    if (!this.state.profileClicked) {
      document.addEventListener("mousedown", this.handleClickOutside);
    } else {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
    this.setState(prevState => ({
      profileClicked: !prevState.profileClicked
    }));
  };

  handleOnClickLogOut = e => {
    e.preventDefault();
    localStorage.removeItem("jwtToken");
    setAuthorizationToken(false);
    this.setState({ redirect: true });
    this.props.setCurrentUser({});
  };

  handleClickOutside = e => {
    if (this.node.contains(e.target)) {
      document.removeEventListener("mousedown", this.handleClickOutside);
      return;
    }
    this.handleClick();
  };

  handleRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/SignIn" />;
    }
  };

  render() {
    return (
      <Fragment>
        {this.handleRedirect()}
        <div style={{ display: "flex" }}>
          <ul>
            <li>
              <Link to={this.props.auth.isAuthenticated ? "/Feed" : "/"}>
                <img className="logo" src={Logo} alt="" />
              </Link>
            </li>
            {this.props.withSections && (
              <div className="sections-wrapper">
                <NavLink
                  exact
                  to="/Feed"
                  className="sections"
                  activeStyle={{
                    borderBottom: "4px solid #8de4af"
                  }}
                >
                  <HomeIcon />
                  <span className="section-label">Home</span>
                </NavLink>
                <NavLink
                  exact
                  to="/Recipes"
                  className="sections"
                  activeStyle={{
                    borderBottom: "4px solid #8de4af"
                  }}
                >
                  <FastfoodIcon />
                  <span className="section-label">Recipes</span>
                </NavLink>
                <NavLink
                  exact
                  to="/Reviews"
                  className="sections"
                  activeStyle={{
                    borderBottom: "4px solid #8de4af"
                  }}
                >
                  <StarsIcon />
                  <span className="section-label">Reviews</span>
                </NavLink>
                <NavLink
                  exact
                  to="/Menus"
                  className="sections"
                  activeStyle={{
                    borderBottom: "4px solid #8de4af"
                  }}
                >
                  <RestaurantIcon />
                  <span className="section-label">Menus</span>
                </NavLink>
                <NavLink
                  exact
                  to="/Offers"
                  className="sections"
                  activeStyle={{
                    borderBottom: "4px solid #8de4af"
                  }}
                >
                  <LocalOfferIcon />
                  <span className="section-label">Offers</span>
                </NavLink>
                <NavLink
                  exact
                  to="/Donations"
                  className="sections"
                  activeStyle={{
                    borderBottom: "4px solid #8de4af"
                  }}
                >
                  <RedeemIcon />
                  <span className="section-label">Donations</span>
                </NavLink>
              </div>
            )}
            {this.props.withButtons && (
              <div className="buttons-wraper">
                <li className="header-sign-button-wrapper">
                  <Button
                    width="95px"
                    label="Sign in"
                    linkTo="/SignIn"
                    outlined
                  />
                </li>
                <li className="header-sign-button-wrapper">
                  <Button width="95px" label="Sign Up" linkTo="/SignUp" />
                </li>
              </div>
            )}
            {this.props.withSections && (
              <Fragment>
                <div className="perm_identity">
                  <NavLink
                    exact
                    to="/Recommendation"
                    className="sections"
                    activeStyle={{
                      borderBottom: "4px solid #8de4af"
                    }}
                  >
                    <SearchIcon />
                    <span
                      className="section-label"
                      style={{ marginRight: "20px" }}
                    >
                      Recommend me a restaurant
                    </span>
                  </NavLink>
                </div>
              </Fragment>
            )}
          </ul>
          {this.props.withSections && (
            <div
              style={{
                backgroundColor: "#002727",
                borderBottom: "1px solid darkslategrey"
              }}
              ref={node => {
                this.node = node;
              }}
            >
              <PersonIcon
                fontSize="large"
                style={{
                  marginRight: "1rem",
                  marginTop: "10px",
                  color: "#8DE4AF",
                  cursor: "pointer"
                }}
                onClick={this.handleClick}
              />
              {this.state.profileClicked && (
                <div className="header-drop-down">
                  <div className="header-name">
                    <FingerprintIcon style={{ marginRight: "7px" }} />
                    {this.props.auth.user.username}
                  </div>
                  <Link to={`/profile/${this.props.auth.user.id}`}>
                    <div className="header-profile">
                      <PersonIcon style={{ marginRight: "7px" }} /> Profile
                    </div>
                  </Link>
                  <div
                    className="header-log-out"
                    onClick={this.handleOnClickLogOut}
                  >
                    <ExitToAppIcon style={{ marginRight: "7px" }} />
                    Log out
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}
Header.propTypes = {
  withButtons: PropTypes.bool,
  withSections: PropTypes.bool
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { setCurrentUser })(Header);
