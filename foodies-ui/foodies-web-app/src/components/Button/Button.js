import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./asstets/css/Button.css";

class Button extends Component {
  render() {
    const style = this.props.outlined ? "outlined" : "filled";
    return (
      <Fragment>
        <Link
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}
          to={this.props.linkTo}
        >
          <button
            className={style}
            style={{
              color: this.props.textColor,
              width: this.props.width,
              fontSize: "calc(2px + 2vmin)",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "fit-content",
              minHeight: "2rem"
            }}
            onClick={this.props.onClick}
          >
            {this.props.icon ? this.props.icon : null}
            {this.props.label}
          </button>
        </Link>
      </Fragment>
    );
  }
}

Button.propTypes = {
  linkTo: PropTypes.string,
  label: PropTypes.string,
  outlined: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.any,
  textColor: PropTypes.string
};

export default Button;
