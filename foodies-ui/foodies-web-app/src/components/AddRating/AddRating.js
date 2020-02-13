import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import "./AddRating.css";

export default class AddRating extends Component {
  _handleRatingOnChange = (rating, name) => {
    this.props.changeRating(rating, name);
  };
  render() {
    return (
      <div className="add-rating-container">
        <span>{this.props.quest}</span>
        <StarRatings
          starDimension="calc(3px + 2vmin)"
          rating={this.props.rating}
          starHoverColor="#8de4af"
          starRatedColor="#1f4343"
          changeRating={this._handleRatingOnChange}
          starSpacing="2px"
          numberOfStars={5}
          name={this.props.name}
        />
      </div>
    );
  }
}
