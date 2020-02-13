import React, { Component } from "react";
import RecomendationCard from "./RecomendationCard";
import Button from "../Button";
import "./assets/css/index.css";
import Healthy from "./assets/healthy.jpg";
import American from "./assets/american.jpg";
import Asian from "./assets/asian.jpg";
import Biscuits from "./assets/biscuits.jpg";
import Burgers from "./assets/burgers.jpg";
import DietMeals from "./assets/diet-meals.jpg";
import Drinks from "./assets/drinks.jpg";
import IceCream from "./assets/ice-cream.jpg";
import Couscous from "./assets/couscous.jpg";
import Chinese from "./assets/chinese.jpg";
import Chocolate from "./assets/chocolate.jpg";
import Crepe from "./assets/crepe.jpg";
import KidsFood from "./assets/kids-food.jpg";
import FastFood from "./assets/fast-food.jpg";
import SeaFood from "./assets/sea-food.jpg";
import Pastery from "./assets/pastery.jpg";
import Grill from "./assets/grill.jpg";
import Indian from "./assets/indian.jpg";
import Italian from "./assets/italian.jpg";
import Juice from "./assets/juice.jpg";
import Kebab from "./assets/kebab.jpg";
import Moroccan from "./assets/moroccan.jpg";
import Paella from "./assets/paella.jpg";
import Panninis from "./assets/panninis.jpg";
import Pizza from "./assets/pizza.jpg";
import Fish from "./assets/fish.jpg";
import Chicken from "./assets/chicken.jpg";
import FreshFood from "./assets/fresh-food.jpg";
import Pasta from "./assets/pasta.jpg";
import Salads from "./assets/salads.jpg";
import Sandwiches from "./assets/sandwich.jpg";
import Soups from "./assets/soups.jpg";
import Sushis from "./assets/sushis.jpg";
import Tacos from "./assets/tacos.jpg";
import Tapas from "./assets/tapas.jpg";
import Meats from "./assets/meats.jpg";
import Bakery from "./assets/bakery.jpg";
import Vegan from "./assets/vegan.jpg";

class Recomendations extends Component {
  state = {
    cuisines: []
  };
  handleOnClick = (selected, index) => {
    if (!selected) {
      this.setState(prevState => ({
        cuisines: [...prevState.cuisines, { id: index }]
      }));
    } else {
      let cuisines = this.state.cuisines;
      cuisines = cuisines.filter(item => item.id !== index);
      this.setState({ cuisines: cuisines });
    }
  };
  handleOnClickButton = () => {
    this.props.onClick(this.state.cuisines);
  };
  render() {
    const cards = [
      { id: 20, img: Healthy, label: "Healthy" },
      { id: 41, img: DietMeals, label: "Diet meals" },
      { id: 12, img: American, label: "American" },
      { id: 10, img: IceCream, label: "Ice cream" },
      { id: 5, img: Asian, label: "Asian" },
      { id: 42, img: Biscuits, label: "Biscuit" },
      { id: 43, img: Drinks, label: "Drinks" },
      { id: 44, img: Burgers, label: "Burgers" },
      { id: 28, img: Chinese, label: "Chinese" },
      { id: 45, img: Chocolate, label: "Chocolate" },
      { id: 51, img: Couscous, label: "Couscous" },
      { id: 52, img: Crepe, label: "Crepe" },
      { id: 46, img: KidsFood, label: "Kids" },
      { id: 15, img: FastFood, label: "Fast food" },
      { id: 4, img: SeaFood, label: "Sea food" },
      { id: 47, img: Pastery, label: "Pastery" },
      { id: 19, img: Grill, label: "Grill" },
      { id: 7, img: Indian, label: "Indian" },
      { id: 13, img: Italian, label: "Italian" },
      { id: 53, img: Juice, label: "Juice" },
      { id: 54, img: Kebab, label: "Kebab" },
      { id: 26, img: Moroccan, label: "Moroccan" },
      { id: 55, img: Paella, label: "Paella" },
      { id: 56, img: Panninis, label: "Panninis" },
      { id: 16, img: Pizza, label: "Pizza" },
      { id: 57, img: Fish, label: "Fish" },
      { id: 58, img: Chicken, label: "Chicken" },
      { id: 59, img: Pasta, label: "Pasta" },
      { id: 60, img: FreshFood, label: "Fresh food" },
      { id: 49, img: Salads, label: "Salads" },
      { id: 61, img: Sandwiches, label: "Sandwiches" },
      { id: 50, img: Soups, label: "Soups" },
      { id: 8, img: Sushis, label: "Sushis" },
      { id: 48, img: Tacos, label: "Tacos" },
      { id: 27, img: Tapas, label: "Tapas" },
      { id: 21, img: Meats, label: "Meats" },
      { id: 32, img: Bakery, label: "Bakery" },
      { id: 30, img: Vegan, label: "Vegan" }
    ];

    return (
      <div className="intersets-cover">
        <div className="intersets-container">
          {cards.map(item => {
            return (
              <RecomendationCard
                key={item.id}
                img={item.img}
                label={item.label}
                onClick={selected => this.handleOnClick(selected, item.id)}
              />
            );
          })}
          <Button
            linkTo={
              this.props.profileType === "Restaurant"
                ? "/RestaurantSignIn"
                : "/SignIn"
            }
            width="50%"
            label="Done"
            onClick={this.handleOnClickButton}
          />
        </div>
      </div>
    );
  }
}
export default Recomendations;
