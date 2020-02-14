import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Post from "../Post";
import Header from "../Header";
import AddPost from "../AddPost";

class MenusFeed extends Component {
  state = {
    menus: []
  };
  componentDidMount() {
    axios.get(`http://localhost:8080/api/post/menu`).then(res => {
      this.setState({
        menus: res.data
      });
    });
  }

  _renderPosts = () => {
    return this.state.menus.map((item, index) => {
      return (
        <Post
          type="menuItem"
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
          <div className="posts">
            <AddPost />
            {this._renderPosts()}
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(MenusFeed);
