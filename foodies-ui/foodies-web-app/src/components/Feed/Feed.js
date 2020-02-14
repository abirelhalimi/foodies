import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  fetchRecipePosts,
  fetchReviewPosts,
  fetchMenuPosts,
  fetchOfferPosts,
  fetchDonationPosts
} from "../../redux/actions/postActions";
import axios from "axios";
import Header from "../Header";
import Post from "../Post";
import AddPost from "../AddPost/AddPost";
import "./assets/css/Feed.css";

class Feed extends Component {
  componentDidMount() {
    axios
      .all([
        axios.get("http://localhost:8080/api/post/recipe"),
        axios.get("http://localhost:8080/api/post/review"),
        axios.get("http://localhost:8080/api/post/menu"),
        axios.get("http://localhost:8080/api/donate/offer"),
        axios.get("http://localhost:8080/api/donate/donation")
      ])
      .then(
        axios.spread((resRecipe, resReview, resMenu, resOffer, resDonation) => {
          this.props.fetchRecipePosts(resRecipe.data);
          this.props.fetchReviewPosts(resReview.data);
          this.props.fetchMenuPosts(resMenu.data);
          this.props.fetchOfferPosts(resOffer.data);
          this.props.fetchDonationPosts(resDonation.data);
        })
      );
  }
  _getPostType = post => {
    if (post.cuisines) {
      return "recipe";
    } else if (post.offer) {
      return "offer";
    } else if (post.rating) {
      return "review";
    } else if (post.menuItem) {
      return "menuItem";
    } else {
      return "donation";
    }
  };
  _renderPosts = () => {
    let shuffledArray = this._shuffleArray(this.props.post);
    return shuffledArray.map((item, index) => {
      return (
        <Post
          type={this._getPostType(item)}
          post={item}
          key={index}
          style={{ marginTop: "20px" }}
        />
      );
    });
  };
  _shuffleArray = array => {
    // for (let i = array.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * i);
    //   const temp = array[i];
    //   array[i] = array[j];
    //   array[j] = temp;
    // }
    return array;
  };
  render() {
    return (
      <Fragment>
        <div style={{ width: "100%", position: "sticky", top: "0" }}>
          <Header withSections />
        </div>
        <div className="posts-container">
          <div className="posts">
            <AddPost />
            {this._renderPosts()}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ post }) => ({ post });
export default connect(mapStateToProps, {
  fetchRecipePosts,
  fetchReviewPosts,
  fetchMenuPosts,
  fetchOfferPosts,
  fetchDonationPosts
})(Feed);
