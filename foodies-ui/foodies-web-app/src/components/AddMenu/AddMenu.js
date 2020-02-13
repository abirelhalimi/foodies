import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Button from "../Button";
import AddPost from "../AddPost";

import { addMenuPost } from "../../redux/actions/addPostAction";
import "../AddPost/AddPost.css";
import PhotoIcon from "@material-ui/icons/Photo";

class AddMenu extends Component {
  state = {
    inputValue: "",
    imagePreviewURL: "",
    addMenuItem: true,
    addOffer: false,
    addDonation: false
  };
  _handleRatingOnChange = newRating => {
    this.setState({
      rating: newRating
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
  handleMenuItemOnClick = () => {
    this.setState({ addMenuItem: true, addOffer: false, addDonation: false });
  };
  handleOfferOnClick = () => {
    this.setState({ addMenuItem: false, addOffer: true, addDonation: false });
  };
  handleDonationOnClick = () => {
    this.setState({ addMenuItem: false, addOffer: false, addDonation: true });
  };

  _handleOnPost = () => {
    let post = {};
    if (this.state.addMenuItem) {
      post = {
        image: this.state.imagePreviewURL,
        text: this.state.inputValue
      };
      axios
        .post(
          `http://localhost:8080/api/post/menu/${this.props.auth.user.id}`,
          post
        )
        .then(res => {
          this.setState(
            {
              inputValue: "",
              imagePreviewURL: "",
              addMenuItem: true,
              addOffer: false,
              addDonation: false
            },
            () => {
              this.props.addMenuPost(res.data);
            }
          );
        });
    }
    if (this.state.addOffer) {
      post = {
        image: this.state.imagePreviewURL,
        text: this.state.inputValue,
        offer: true,
        restaurant: { id: 1 }
      };
      axios.post("http://localhost:8080/api/donate", post).then(res => {
        this.setState(
          {
            inputValue: "",
            imagePreviewURL: "",
            addMenuItem: true,
            addOffer: false,
            addDonation: false
          },
          () => {
            this.props.addMenuPost(res.data);
          }
        );
      });
    }
    if (this.state.addDonation) {
      post = {
        image: this.state.imagePreviewURL,
        text: this.state.inputValue,
        offer: false,
        restaurant: { id: 1 }
      };
      axios.post("http://localhost:8080/api/donate", post).then(res => {
        this.setState(
          {
            inputValue: "",
            imagePreviewURL: "",
            addMenuItem: true,
            addOffer: false,
            addDonation: false
          },
          () => {
            this.props.addMenuPost(res.data);
          }
        );
      });
    }
  };

  render() {
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
            <div style={{ width: "33.33%" }}>
              <Button
                width="100%"
                label="Menu Item"
                outlined={!this.state.addMenuItem}
                onClick={this.handleMenuItemOnClick}
              />
            </div>
            <div style={{ width: "33.33%" }}>
              <Button
                width="100%"
                label="Offer"
                outlined={!this.state.addOffer}
                onClick={this.handleOfferOnClick}
              />
            </div>
            <div style={{ width: "33.33%" }}>
              <Button
                width="100%"
                label="Donation"
                outlined={!this.state.addDonation}
                onClick={this.handleDonationOnClick}
              />
            </div>
          </div>
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
          <div style={{ margin: "0.8rem" }}>{$imagePreview}</div>

          <div style={{ padding: "1rem" }}>
            <Button
              label="Post"
              width="15rem"
              outlined={
                (this.state.imagePreviewURL || this.state.inputValue.length) &&
                (this.state.addMenuItem ||
                  this.state.addOffer ||
                  this.state.addDonation)
                  ? false
                  : true
              }
              onClick={
                (this.state.imagePreviewURL || this.state.inputValue.length) &&
                (this.state.addMenuItem ||
                  this.state.addOffer ||
                  this.state.addDonation)
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
export default connect(mapStateToProps, { addMenuPost })(AddMenu);
