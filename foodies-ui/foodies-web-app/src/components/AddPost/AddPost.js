import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import {
  addRecipePost,
  addReviewPost
} from "../../redux/actions/addPostAction";

import CuisineChip from "../CuisineChip/CuisineChip";
import SearchRestaurant from "../SearchRestaurant/SearchRestaurant";
import Button from "../Button";
import AddRating from "../AddRating";

import PhotoIcon from "@material-ui/icons/Photo";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

import "./AddPost.css";
class AddPost extends Component {
  state = {
    inputValue: "",
    imagePreviewURL: "",
    addRating: false,
    addRecipe: true,
    showCuisines: false,
    cuisines: [],
    accessibility: 0,
    dish: 0,
    location: 0,
    price: 0,
    service: 0,
    chosenRestaurantId: ""
  };
  _handleRatingOnChange = (newRating, name) => {
    this.setState({
      [name]: newRating
    });
  };
  _handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsBinaryString(file);
    reader.onloadend = () => {
      this.setState({
        imagePreviewURL: btoa(reader.result)
      });
    };
  }
  handleRecipeOnClick = () => {
    this.setState({ addRecipe: true, addRating: false });
  };
  handleRecomendationOnClick = () => {
    this.setState({ addRecipe: false, showCuisines: false });
  };
  _handleShowCuisinesOnClick = () => {
    this.setState(prevState => ({
      showCuisines: !prevState.showCuisines
    }));
  };
  _handleOnPost = () => {
    const data = new FormData();
    data.append("file", this.state.file);
    const recipe = this.state.addRecipe
      ? {
          cuisines: this.state.cuisines,
          image: this.state.imagePreviewURL,
          text: this.state.inputValue
        }
      : {
          rating: {
            accessibility: this.state.accessibility,
            dish: this.state.dish,
            location: this.state.location,
            price: this.state.price,
            service: this.state.service
          },
          image: this.state.imagePreviewURL,
          text: this.state.inputValue,
          restaurant: { id: this.state.chosenRestaurantId }
        };
    if (this.state.addRecipe) {
      axios
        .post(
          `http://localhost:8080/api/post/recipe/${this.props.auth.user.id}`,
          recipe
        )
        .then(res => {
          this.setState(
            {
              inputValue: "",
              imagePreviewURL: "",
              addRating: false,
              addRecipe: true,
              showCuisines: false,
              cuisines: [],
              accessibility: 0,
              dish: 0,
              location: 0,
              price: 0,
              service: 0,
              chosenRestaurantId: ""
            },
            () => {
              this.props.addRecipePost(res.data);
            }
          );
        });
    } else {
      axios
        .post(
          `http://localhost:8080/api/post/review/${this.props.auth.user.id}`,
          recipe
        )
        .then(res => {
          this.setState(
            {
              inputValue: "",
              imagePreviewURL: "",
              addRating: false,
              addRecipe: true,
              showCuisines: false,
              cuisines: [],
              accessibility: 0,
              dish: 0,
              location: 0,
              price: 0,
              service: 0,
              chosenRestaurantId: ""
            },
            () => {
              this.props.addReviewPost(res.data);
            }
          );
        });
    }
  };
  _handleCuisineOnClick = id => {
    if (this.state.cuisines.some(cuisine => cuisine.id === id)) {
      let cuisines = this.state.cuisines;
      cuisines = cuisines.filter(item => item.id !== id);
      this.setState({ cuisines: cuisines });
    } else {
      this.setState(prevState => ({
        cuisines: [...prevState.cuisines, { id: id }]
      }));
    }
  };
  _handleAddRatingOnClick = () => {
    this.setState(prevState => ({
      addRating: !prevState.addRating
    }));
  };
  _handleonChooseRestaurant = restaurant => {
    this.setState({
      chosenRestaurantId: restaurant
    });
  };
  render() {
    const cuisines = [
      { id: 20, label: "Healthy" },
      { id: 41, label: "Diet meals" },
      { id: 12, label: "American" },
      { id: 10, label: "Ice cream" },
      { id: 5, label: "Asian" },
      { id: 42, label: "Biscuit" },
      { id: 43, label: "Drinks" },
      { id: 44, label: "Burgers" },
      { id: 28, label: "Chinese" },
      { id: 45, label: "Chocolate" },
      { id: 51, label: "Couscous" },
      { id: 52, label: "Crepe" },
      { id: 46, label: "Kids" },
      { id: 15, label: "Fast food" },
      { id: 4, label: "Sea food" },
      { id: 47, label: "Pastery" },
      { id: 19, label: "Grill" },
      { id: 7, label: "Indian" },
      { id: 13, label: "Italian" },
      { id: 53, label: "Juice" },
      { id: 54, label: "Kebab" },
      { id: 26, label: "Moroccan" },
      { id: 55, label: "Paella" },
      { id: 56, label: "Panninis" },
      { id: 16, label: "Pizza" },
      { id: 57, label: "Fish" },
      { id: 58, label: "Chicken" },
      { id: 59, label: "Pasta" },
      { id: 60, label: "Fresh food" },
      { id: 49, label: "Salads" },
      { id: 61, label: "Sandwiches" },
      { id: 50, label: "Soups" },
      { id: 8, label: "Sushis" },
      { id: 48, label: "Tacos" },
      { id: 27, label: "Tapas" },
      { id: 21, label: "Meats" },
      { id: 32, label: "Bakery" },
      { id: 30, label: "Vegan" }
    ];

    let { imagePreviewURL } = this.state;
    let $imagePreview = null;
    if (imagePreviewURL) {
      $imagePreview = (
        <img
          className="add-new-post-image-preview"
          src={`data:image/jpeg;base64,${imagePreviewURL}`}
          alt="preview"
        />
      );
    }

    return (
      <div className="add-new-post-container">
        <div className="add-new-post-title-container">Add a new post</div>
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <Button
                width="100%"
                label="Recipe"
                outlined={!this.state.addRecipe}
                onClick={this.handleRecipeOnClick}
              />
            </div>
            <div style={{ width: "50%" }}>
              <Button
                width="100%"
                label="Review"
                outlined={this.state.addRecipe}
                onClick={this.handleRecomendationOnClick}
              />
            </div>
          </div>
          {!this.state.addRecipe && (
            <SearchRestaurant
              onChooseRestaurant={this._handleonChooseRestaurant}
            />
          )}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="add-new-post-profile-picture-input-container">
              <img
                alt={`your profile avatar`}
                className="profile-picture"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
              ></img>

              <input
                type="text"
                className="add-new-post-input"
                placeholder={`Write down your ${
                  this.state.addRecipe ? "recipe" : "review"
                }`}
                value={this.state.inputValue}
                onChange={this._handleChange}
              />
            </div>
            <div className="add-new-post-photo-upload-btn-wrapper">
              <Button
                outlined={true}
                textColor="#1f4343"
                icon={<PhotoIcon />}
              />
              <input
                type="file"
                name="myfile"
                accept="image/*"
                onChange={e => this._handleImageChange(e)}
              />
            </div>
          </div>

          <div
            style={{
              margin: "0.8rem",
              width: "100%",
              display: "flex",
              justifyContent: "center"
            }}
          >
            {$imagePreview}
          </div>
          {this.state.addRecipe && (
            <div
              style={{
                color: "#1f4343",
                margin: "0.8rem",
                width: "fit-content",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                cursor: "pointer"
              }}
              onClick={this._handleShowCuisinesOnClick}
            >
              Choose cuisines for your recipe
              {this.state.showCuisines ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </div>
          )}
          {this.state.showCuisines && (
            <div style={{ margin: "0.8rem" }}>
              {cuisines.map((cuisine, index) => {
                return (
                  <CuisineChip
                    key={index}
                    onClick={() => this._handleCuisineOnClick(cuisine.id)}
                    label={cuisine.label}
                  />
                );
              })}
            </div>
          )}
          {!this.state.addRecipe && (
            <div
              style={{
                color: "#1f4343",
                margin: "0.8rem",
                width: "fit-content",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                cursor: "pointer"
              }}
              onClick={this._handleAddRatingOnClick}
            >
              Click to choose your ratings
              {this.state.addRating ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </div>
          )}
          {this.state.addRating && (
            <div>
              <AddRating
                name="dish"
                quest="How do you rate this dish?"
                rating={this.state.dish}
                changeRating={this._handleRatingOnChange}
              ></AddRating>
              <AddRating
                name="price"
                quest="How do you rate the price?"
                rating={this.state.price}
                changeRating={this._handleRatingOnChange}
              ></AddRating>
              <AddRating
                name="service"
                quest="How do you rate the service?"
                rating={this.state.service}
                changeRating={this._handleRatingOnChange}
              ></AddRating>
              <AddRating
                name="location"
                quest="How do you rate the location of this restaurant?"
                rating={this.state.location}
                changeRating={this._handleRatingOnChange}
              ></AddRating>
              <AddRating
                name="accessibility"
                quest="How do you rate this restaurant's accessibility?"
                rating={this.state.accessibility}
                changeRating={this._handleRatingOnChange}
              ></AddRating>
            </div>
          )}

          <div style={{ padding: "1rem" }}>
            <Button
              label="Post"
              width="15rem"
              outlined={
                ((this.state.imagePreviewURL || this.state.inputValue) &&
                  this.state.cuisines.length) ||
                ((this.state.imagePreviewURL || this.state.inputValue) &&
                  this.state.dish &&
                  this.state.location &&
                  this.state.price &&
                  this.state.accessibility &&
                  this.state.service &&
                  this.state.chosenRestaurantId)
                  ? false
                  : true
              }
              onClick={
                ((this.state.imagePreviewURL || this.state.inputValue) &&
                  this.state.cuisines.length) ||
                ((this.state.imagePreviewURL || this.state.inputValue) &&
                  this.state.dish &&
                  this.state.location &&
                  this.state.price &&
                  this.state.accessibility &&
                  this.state.service &&
                  this.state.chosenRestaurantId)
                  ? this._handleOnPost
                  : null
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps, { addRecipePost, addReviewPost })(
  AddPost
);
