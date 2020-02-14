import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchReviewsByRestaurant } from "../../redux/actions/postActions";
import axios from "axios";
import RestaurantHeader from "../RestaurantHeader";
import Post from "../Post";
import "./RestaurantFeed.css";
import AddMenu from "../AddMenu";

class RestaurantFeed extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/post/review-restaurant/1")
      .then(res => {
        this.props.fetchReviewsByRestaurant(res.data);
      });
  }
  _renderPosts = () => {
    return this.props.reviewsByRestaurant.map((item, index) => {
      return (
        <Post
          post={item}
          key={index}
          type="review"
          style={{ marginTop: "20px" }}
        />
      );
    });
  };
  render() {
    return (
      <Fragment>
        <RestaurantHeader withSections />
        <div className="posts-container">
          <div className="posts">
            <AddMenu />
            {this._renderPosts()}
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ reviewsByRestaurant }) => ({ reviewsByRestaurant });
export default connect(mapStateToProps, { fetchReviewsByRestaurant })(
  RestaurantFeed
);
