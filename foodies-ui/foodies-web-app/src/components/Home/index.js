import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./assets/css/index.css";
import LogoCentral from "./assets/foodies-logo-central.png";
import Button from "../Button";

class Home extends Component {
  render() {
    return (
      <div>
        <Header withButtons />
        <div className="home-container">
          <div className="cover">
            <span className="primary-text">A social network for all your</span>
            <span className="secondary-text">FOOD DESIRES</span>
            <span className="home-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sollicitudin est ex, quis egestas nisi tempus et.
            </span>
            <span style={{ position: "absolute", top: "25rem", left: "9.6%" }}>
              <Button width="122px" label="Get Started" linkTo="/SignUp" />
            </span>
            <img className="logo-central" src={LogoCentral} alt=""></img>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
