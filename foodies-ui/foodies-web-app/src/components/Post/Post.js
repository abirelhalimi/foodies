import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import CommentIcon from "@material-ui/icons/Comment";
import StarRatings from "react-star-ratings";
import PostModal from "../PostModal/PostModal";
import PostOwner from "../PostOwner/PostOwner";
import "./Post.css";

class Post extends Component {
  state = {
    showModal: false,
    isliked: false,
    likes: this.props.post.likes,
    inputValue: "",
    showCommentInput: false
  };

  _handleOnClick = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };
  _handleOnClose = () => {
    this.setState({ showModal: false });
  };
  _calculateRating = rating => {
    return (
      (rating.dish +
        rating.accessibility +
        rating.service +
        rating.price +
        rating.location) /
      5
    );
  };
  _handleOnClickLike = () => {
    this.setState(prevState => ({
      isliked: !prevState.isliked,
      likes: !this.state.isliked ? prevState.likes + 1 : prevState.likes - 1
    }));
    if (!this.state.isliked) {
      if (this.props.type === "recipe") {
        axios.post(
          `http://localhost:8080/api/post/recipe/like/${this.props.post.id}`
        );
      } else if (this.props.type === "review") {
        axios.post(
          `http://localhost:8080/api/post/review/like/${this.props.post.id}`
        );
      }
    } else {
      if (this.props.type === "recipe") {
        axios.post(
          `http://localhost:8080/api/post/recipe/unlike/${this.props.post.id}`
        );
      } else if (this.props.type === "review") {
        axios.post(
          `http://localhost:8080/api/post/review/unlike/${this.props.post.id}`
        );
      }
    }
  };
  _handleOnClickComment = () => {
    this.setState(prevState => ({
      showCommentInput: !prevState.showCommentInput,
      inputValue: ""
    }));
  };
  _handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  _handleOnKeyDown = e => {
    const comment = {
      recipe: { id: this.props.post.id },
      user: { id: this.props.auth.user.id },
      text: this.state.inputValue
    };
    if (e.key === "Enter" && e.target.value !== "") {
      this.setState({ showCommentInput: false, inputValue: "" });
      axios.post("http://localhost:8080/api/comment", comment);
    }
  };
  _getTagStyle = () => {
    if (this.props.type === "recipe") {
      return "#cf455c";
    } else if (this.props.type === "menuItem") {
      return "#27496d";
    } else if (this.props.type === "offer") {
      return "#ff8a5c";
    } else if (this.props.type === "donation") {
      return "#444444";
    }
  };
  render() {
    let user = this.props.post.user || this.props.post.restaurant;
    return (
      <Fragment>
        <div className="post-container">
          <div className="profile-container">
            <PostOwner user={user} post={this.props.post} />
            {this.props.type === "review" && (
              <StarRatings
                starDimension="20px"
                rating={this._calculateRating(this.props.post.rating)}
                starRatedColor="#1f4343"
                starSpacing="3px"
                numberOfStars={5}
              />
            )}
            {this.props.type !== "review" && (
              <div
                className="post-tag"
                style={{ backgroundColor: this._getTagStyle() }}
              >
                <div className="post-tag-label">{this.props.type}</div>
              </div>
            )}
          </div>
          <div className="image-text-container">
            <img
              onClick={this._handleOnClick}
              alt=""
              className="post-picture"
              src={`data:image/jpeg;base64,${this.props.post.image}`}
            ></img>
            <span onClick={this._handleOnClick} className="post-text">
              {this.props.post.text}
            </span>
          </div>
          <div className="reacts-comments-container">
            <div className="post-reacts" onClick={this._handleOnClickLike}>
              {this.state.isliked ? (
                <ThumbUpAltIcon />
              ) : (
                <ThumbUpAltOutlinedIcon />
              )}
              {this.state.likes}
            </div>
            <div className="post-comments" onClick={this._handleOnClickComment}>
              <CommentIcon />
              {this.props.post.commentsNumber}
            </div>
          </div>
          {this.state.showCommentInput && (
            <input
              type="text"
              placeholder="Type your comment..."
              value={this.state.inputValue}
              className="post-comment-input"
              onChange={this._handleChange}
              onKeyDown={this._handleOnKeyDown}
            />
          )}
        </div>
        {this.state.showModal && (
          <PostModal
            post={this.props.post}
            type={this.props.type}
            showModal
            onClose={this._handleOnClose}
          />
        )}
      </Fragment>
    );
  }
}

Post.defaultProps = {
  post: {
    user: { username: "Selena GOMEZ", image: "" },
    username: "Selena GOMEZ",
    profilePicture:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    text: "this is a post",
    reactsNumber: 19,
    commentsNumber: 49,
    comments: [
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
        commentText: "this is the first comment"
      },
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
        commentText: "this is the second comment"
      },
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
        commentText: "this is the third comment"
      },
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
        commentText: "this is the fourth comment"
      }
    ],
    reacts: [
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
      },
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
      },
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
      },
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
      }
    ]
  }
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Post);
