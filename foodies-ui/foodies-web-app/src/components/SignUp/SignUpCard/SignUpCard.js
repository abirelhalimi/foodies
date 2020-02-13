import React, { Component } from "react";
import Input from "../../Input";
import Button from "../../Button";
import "./assets/css/index.css";

class SignUpCard extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    address: ""
  };
  handleOnChange = (value, name) => {
    this.setState({
      [name]: value
    });
  };
  handleOnSubmit = () => {
    if (
      this.state.password.trim() === this.state.confirmPassword.trim() &&
      this.state.email &&
      this.state.username &&
      this.state.password.trim()
    ) {
      this.props.onSubmit(this.state);
    }
  };
  render() {
    return (
      <div className="sign-up-container">
        <h1 className="sign-up">Sign Up</h1>
        <form className="sign-up-form" onSubmit={this.handleOnSubmit}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly"
            }}
          >
            <Input
              type="text"
              label="Email*"
              name="email"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
            <Input
              type="text"
              label="Username*"
              name="username"
              value={this.state.username}
              onChange={this.handleOnChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <Input
              type="password"
              label="Password*"
              name="password"
              value={this.state.password}
              onChange={this.handleOnChange}
            />
            <Input
              type="password"
              label="Confirm Password*"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleOnChange}
            />
          </div>
          {this.props.profileType === "Restaurant" && (
            <div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly"
                }}
              >
                <Input
                  type="text"
                  label="Name*"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleOnChange}
                />
                <Input
                  type="text"
                  label="Phone Number*"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleOnChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly"
                }}
              >
                <Input
                  type="text"
                  label="Address*"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleOnChange}
                />
              </div>
            </div>
          )}

          <Button width="50%" label="Sign Up" onClick={this.handleOnSubmit} />
        </form>
      </div>
    );
  }
}
export default SignUpCard;
