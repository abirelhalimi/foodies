import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const requireAuth = ComposedComponent => {
  class isAuthentificated extends Component {
    state = {
      redirect: false
    };
    componentDidMount() {
      if (!this.props.auth.isAuthenticated) {
        this.setState({ redirect: true });
      }
    }
    handleredirect = () => {
      if (this.state.redirect) {
        return <Redirect to="/SignIn" />;
      }
    };
    render() {
      return (
        <Fragment>
          {this.handleredirect()}
          <ComposedComponent />
        </Fragment>
      );
    }
  }
  const mapStateToProps = ({ auth }) => ({ auth });
  return connect(mapStateToProps)(isAuthentificated);
};
export default requireAuth;
