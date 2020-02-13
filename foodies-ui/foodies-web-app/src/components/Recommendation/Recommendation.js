import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Post from "../Post";
import Header from "../Header";
import AddPost from "../AddPost";

class Recommendation extends Component {
  state = {
    offers: []
  };
  componentDidMount() {
    axios.get(`http://localhost:8080/api/donate/offer`).then(res => {
      this.setState({
        offers: res.data
      });
    });
  }

  _renderPosts = () => {
    return this.state.offers.map((item, index) => {
      return (
        <Post
          type="recommendation"
          post={item}
          key={index}
          style={{ marginTop: "20px" }}
        />
      );
    });
  };
  render() {
    return (
      <Fragment>
        <div style={{ width: "100%", position: "sticky", top: "0" }}>
          <Header withSections />
        </div>
        <div className="posts-container">
          <div className="posts">{this._renderPosts()}</div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(Recommendation);
