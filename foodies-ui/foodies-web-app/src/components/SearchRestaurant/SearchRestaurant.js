import React, { Component } from "react";
import axios from "axios";
import "./SearchRestaurant.css";
class SearchRestaurant extends Component {
  state = {
    query: "",
    results: [],
    chosenRestaurant: ""
  };
  _handleRestaurantOnClick = (restaurant, name) => {
    this.setState({ query: name, results: [] }, () => {
      this.props.onChooseRestaurant(restaurant);
    });
  };
  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query) {
          if (this.state.query.length % 1 === 0) {
            axios
              .get(
                `http://localhost:8080/api/restaurant/search?name=${this.state.query}`
              )
              .then(res => {
                this.setState(
                  {
                    results: res.data
                  },
                  () => {
                    console.log(res.data);
                  }
                );
              });
          }
        } else {
          this.setState({ results: [] });
        }
      }
    );
  };
  getRestaurants = () => {
    axios
      .post(`http://localhost:8080/api/restaurant`, this.state.query)
      .then(res => {
        this.setState(
          {
            results: res.data
          },
          () => {
            console.log(res.data);
          }
        );
      });
  };

  render() {
    return (
      <div style={{ margin: "0.8rem" }}>
        <input
          className="search-restaurant-input"
          placeholder="Choose the restaurant..."
          value={this.state.query}
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        {this.state.results.slice(0, 3).map((restaurant, index) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              key={index}
              onClick={() =>
                this._handleRestaurantOnClick(restaurant.id, restaurant.name)
              }
            >
              {restaurant.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchRestaurant;
