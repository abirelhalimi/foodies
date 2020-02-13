import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CommentIcon from "@material-ui/icons/Comment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import PostModal from "../PostModal/PostModal";
import "./ProfilePost.css";

class ProfilePost extends Component {
  state = {
    hover: false,
    showModal: false,
    comments: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/api/comment/bypost/${this.props.post.id}`)
      .then(res => {
        this.setState({ comments: res.data });
      });
  }
  handleMouseEnter = () => {
    this.setState({ hover: true });
  };
  hanldeMouseLeave = () => {
    this.setState({ hover: false });
  };
  _handleOnClick = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };
  _handleOnClose = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <Fragment>
        <div
          className="profile-post-container"
          style={{
            backgroundImage: `url(data:image/jpeg;base64,${this.props.post.image})`
          }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.hanldeMouseLeave}
          onClick={this._handleOnClick}
        >
          <div className="overlay"></div>
          {this.props.post.image === "" && (
            <div className="profile-post-caption">
              <div className="profile-post-caption-label">
                {this.props.post.text}
              </div>
            </div>
          )}
          {this.state.hover && (
            <div className="profile-post-icons-container">
              <div className="profile-post-icons">
                <div className="profile-post-icon">
                  <ThumbUpAltIcon fontSize="large" />
                  <div className="profile-post-numbers">
                    {this.props.post.likes}
                  </div>
                </div>
                <div className="profile-post-icon">
                  <CommentIcon fontSize="large" />
                  <div className="profile-post-numbers">
                    {this.state.comments.length}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {this.state.showModal && (
          <PostModal
            showModal
            onClose={this._handleOnClose}
            post={this.props.post}
            type={this.props.type}
          />
        )}
      </Fragment>
    );
  }
}
ProfilePost.propTypes = {
  img: PropTypes.string
};

ProfilePost.defaultProps = {
  img:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
};

export default ProfilePost;
