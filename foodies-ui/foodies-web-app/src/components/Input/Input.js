import React, { Component } from "react";
import "./Input.scss";

export default class Input extends Component {
  handleOnChange = e => {
    this.props.onChange(e.target.value, e.target.name);
  };
  render() {
    return (
      <div className="group">
        <input
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleOnChange}
          required
        ></input>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>{this.props.label}</label>
      </div>
    );
  }
}
