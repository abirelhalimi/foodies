import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../../redux/actions/logInAction";
import { setCurrentUser } from "../../redux/actions/logInAction";
import jwt from "jsonwebtoken";
import validateInput from "../../Validation/SignUp";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import Input from "../Input";
import "../SignIn/assets/css/index.scss";

class RestaurantSignIn extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
    redirect: false
  };
  handleOnChange = (value, name) => {
    this.setState({
      [name]: value
    });
  };
  isValid = () => {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  };
  handleOnSubmit = e => {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {} });
      const userAuth = {
        email: "wboujaafar",
        password: "1234"
      };
      axios
        .post(
          `http://localhost:8080/api/authenticate?username=wboujaafar&password=1234`,
          userAuth
        )
        .then(res => {
          this.props.logIn(res.data);
          const token =
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6Indib3VqYWFmYXIgIiwiZXhwIjoxNTgxODAyOTIxLCJyb2wiOlsiUk9MRV9VU0VSIl19.oofB5-EolCJaymBnXEUyIgugOcLBcjxVF_yTtR7GRwi9jkVEY6uTtCEBog5mXRk3_VD97VwBi6sUXzgbGfuvEA";
          localStorage.setItem("jwtToken", token);
          axios
            .get(
              `http://localhost:8080/api/users/find?username=${
                jwt.decode(token).sub
              }
            `
            )
            .then(res => {
              this.props.setCurrentUser(res.data);
            });
        })
        .then(this.setState({ redirect: true }))
        .catch(error => {
          console.log(error.response);
        });
    }
  };

  handleRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/RestaurantFeed" />;
    }
  };
  render() {
    const { errors } = this.state;
    return (
      <Fragment>
        {this.handleRedirect()}
        <Header withButtons />
        <div className="cover sign-in-cover">
          <div className="sign-in-container">
            <h1 className="sign-in">Sign In</h1>
            <form className="sign-in-form" onSubmit={this.handleOnSubmit}>
              <Input
                label="Email*"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleOnChange}
              />
              {errors.email && (
                <span className="sign-in-error">{errors.email}</span>
              )}
              <Input
                type="password"
                label="Password*"
                name="password"
                value={this.state.password}
                onChange={this.handleOnChange}
              />
              {errors.password && (
                <span className="sign-in-error">{errors.password}</span>
              )}
              <div style={{ marginTop: "10px" }}>
                <button className="signup-button" onClick={this.handleOnSubmit}>
                  Sign in
                </button>
              </div>
            </form>
            <div style={{ margin: "20px 0 0 1.9rem" }}>
              Don't have an account ? <Link to="/SignUp">SignUp</Link>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default connect(null, { logIn, setCurrentUser })(RestaurantSignIn);
