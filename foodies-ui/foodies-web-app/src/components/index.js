import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Post from "./Post";
import Feed from "./Feed/Feed";
import IndividualProfile from "./IndividualProfile/IndividualProfile";
import RestaurantProfile from "./RestaurantProfile";
import AddMenu from "./AddMenu";
// import isAuthentificated from "../utils/isAuthentificated";
import "./index.css";
import RestaurantFeed from "./RestaurantFeed";
import RestaurantStatistics from "./RestaurantStatistics/RestaurantStatistics";
import RecipesFeed from "./RecipesFeed";
import ReviewsFeed from "./ReviewsFeed/ReviewsFeed";
import OffersFeed from "./OffersFeed/OffersFeed";
import Recommendation from "./Recommendation";
import DonationsFeed from "./DonationsFeed/DonationsFeed";
import MenusFeed from "./MenusFeed/MenusFeed";
import RestaurantSignIn from "./RestaurantSignIn";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route
              exact
              path="/RestaurantSignIn"
              component={RestaurantSignIn}
            />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/AddMenu" component={AddMenu} />
            <Route exact path="/Feed" component={Feed} />
            <Route exact path="/RestaurantFeed" component={RestaurantFeed} />
            <Route exact path="/Post" component={Post} />
            <Route exact path="/Recipes" component={RecipesFeed} />
            <Route exact path="/Reviews" component={ReviewsFeed} />
            <Route exact path="/Offers" component={OffersFeed} />
            <Route exact path="/Donations" component={DonationsFeed} />
            <Route exact path="/Menus" component={MenusFeed} />
            <Route exact path="/Statistics" component={RestaurantStatistics} />
            <Route exact path="/Recommendation" component={Recommendation} />
            <Route exact path="/Profile/:id" component={IndividualProfile} />
            <Route
              exact
              path="/RestaurantProfile/:id"
              component={RestaurantProfile}
            />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
