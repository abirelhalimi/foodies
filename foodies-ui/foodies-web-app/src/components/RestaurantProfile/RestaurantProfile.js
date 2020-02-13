import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import RestaurantHeader from "../RestaurantHeader";
import ProfileInformationCard from "../IndividualProfile/ProfileInformationCard";
import ProfilePost from "../ProfilePost";
import "../IndividualProfile/IndividualProfile.css";

class RestaurantProfile extends Component {
  state = {
    posts: [],
    user: {},
    isLoading: true
  };
  componentDidMount() {
    const { params } = this.props.match;
    axios
      .all([
        axios.get(`http://localhost:8080/api/donate/offers/${params.id}`),
        axios.get(`http://localhost:8080/api/donate/donation/${params.id}`),
        axios.get(`http://localhost:8080/api/post/menu/${params.id}`),
        axios.get(`http://localhost:8080/api/restaurant/${params.id}`)
      ])
      .then(
        axios.spread((resOffer, resDonation, resMenu, resUser) => {
          const posts = resOffer.data.concat(
            resDonation.data.concat(resMenu.data)
          );
          console.log(posts);
          this.setState({ posts: posts, user: resUser.data, isLoading: false });
        })
      );
  }
  _handleOnFollow = () => {
    let user = {
      id: this.props.auth.user.id
    };
    axios
      .post(`http://localhost:8080/api/user/follow/${this.state.user.id}`, user)
      .then(res => {
        console.log(res.data);
      });
  };
  _getPostType = post => {
    if (post.cuisines) {
      return "recipe";
    } else if (post.offer) {
      return "offer";
    } else if (post.rating) {
      return "review";
    }
  };
  render() {
    if (this.state.isLoading) {
      return <div>wait</div>;
    }
    return (
      <div>
        <RestaurantHeader withSections />
        <div className="individual-profile-container">
          <div
            className="profile-img"
            style={{
              backgroundImage: `url(data:image/jpeg;base64,${this.state.user.image})`
            }}
          ></div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "75%" }}>
            <ProfileInformationCard
              onFollow={this._handleOnFollow}
              connectedProfile={this.props.auth.user.id === this.state.user.id}
              restaurant
              userProfile={this.state.user}
              posts={this.state.posts}
            />
            <div className="individual-profile-posts">
              {this.state.posts.map((item, key) => {
                return (
                  <ProfilePost
                    key={key}
                    post={item}
                    type={this._getPostType(item)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RestaurantProfile.propTypes = {
  posts: PropTypes.array,
  restaurant: PropTypes.bool
};

RestaurantProfile.defaultProps = {
  posts: [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
  ]
};
const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(RestaurantProfile);
