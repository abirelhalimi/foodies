import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PostComment.css";

class PostComment extends Component {
  render() {
    return (
      <div className="post-modal-comment-container">
        <div className="post-modal-comment-container-container">
          <div className="post-modal-comment">
            <div className="post-modal-comment-profile">
              <img
                src={`data:image/jpeg;base64,${this.props.comment.user.image}`}
                alt=""
                className="post-modal-profile-image-comment"
              />
              <span className="post-modal-profile-username-comment">
                {this.props.comment.user.username}
              </span>
            </div>
            <div className="post-modal-comment-text">
              {this.props.comment.text}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
PostComment.propTypes = {
  img: PropTypes.string
};

PostComment.defaultProps = {
  img:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
};

export default PostComment;
