import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./assets/css/RecomendationCard.css";

class RecomendationCard extends Component {
  state = {
    selected: false,
    style: null
  };
  handleClick = () => {
    const style = {
      width: "100%",
      height: "100%",
      position: "absolute",
      opacity: "0.5",
      backgroundColor: "rgb(32, 21, 21)"
    };
    if (this.state.selected === false) this.setState({ selected: true, style });
    else this.setState({ selected: false, style: null });
    this.props.onClick(this.state.selected);
  };
  render() {
    return (
      <Fragment>
        <div
          className="recomendation-container"
          style={{ backgroundImage: `url(${this.props.img})` }}
          onClick={this.handleClick}
        >
          <div className="overlay" style={this.state.style}></div>
          <div className="recomendation-title">{this.props.label}</div>
          {this.state.selected && (
            <div className="icon-check">
              <CheckCircleIcon fontSize="large" />
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

RecomendationCard.propTypes = {
  img: PropTypes.string,
  label: PropTypes.string
};

RecomendationCard.defaultProps = {
  img:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
  label: "Beauty"
};
export default RecomendationCard;
