import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import "./GetRestaurantRating.css";

export default class GetRestaurantRating extends Component {
  render() {
    return (
      <div className="get-restaurent-rating-container">
        <div>{this.props.label}</div>
        <StarRatings
          starDimension="20px"
          rating={this.props.rating}
          starRatedColor="#1f4343"
          starSpacing="3px"
          numberOfStars={5}
        />
      </div>
    );
  }
}
