import React, { Component, Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import SignUpCard from "./SignUpCard/SignUpCard";
import ProfileType from "../ProfileType";
import Interests from "../Recomendations";
import { connect } from "react-redux";
import { newUser } from "../../redux/actions/userAction";
import axios from "axios";

class SignUp extends Component {
  state = {
    profileTypeChosen: false,
    profileType: "",
    interests: false,
    cuisines: []
  };
  handleOnSubmit = state => {
    this.setState({ interests: true, ...state });
  };
  handleOnProfileChosen = type => {
    this.setState({ profileTypeChosen: true, profileType: type });
  };
  handleOnClickInterests = cuisines => {
    const user =
      this.state.profileType === "Individual"
        ? {
            username: this.state.username.trim(),
            password: this.state.password.trim(),
            email: this.state.email.trim(),
            bio:
              "Don’t know what to do? You can start by hitting that follow button.",
            image:
              "iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAABWVlZgYGDb29v19fX6+vri4uL7+/uurq7t7e3j4+N+fn5ISEjm5uaioqLFxcW8vLw9PT21tbVycnJ7e3uLi4vPz8+pqamFhYUhISEYGBjAwMDLy8tAQEBTU1NsbGw1NTUQEBBkZGSYmJgeHh4qKiqampotLS3IyMT7AAAEwklEQVR4nO3diX6iMBAHYKKIUu8LrWdbe+z7P+EutdVaEkjCjDNh53uC/H9iJidEkRBCCCGEEEIIIYQQQgghhBBCCCGEEEIIH0k/nkzn890+7nao2wKtF6eDg7pxfJx3qZsFpZO2lEE7faBuXW2d9cEU7+yQJtRtrKP7VB7vbBFTt9NXfLTJlxuuqNvqY2T89+kcw+t2Bi75co/ULXYzcc2X21G32sHSJ+C/Loe63bZG734BlXobUbfdys43Xy6EJ3VcJ6BSY+r2V8rqBVQqo05QwbOP+Yl32XisH5D3r/gKEZDzf3ENE1CpCXUSgxVUQKV41sUHuIBqQx1Gq2Kq62ZJnUYDqJf5xm9w04UNqBR1oALv0bYJt8IPViiueM36E/iA6kgd6kbt8bYOp+WpDkZAVj8iyk+oFKN1VJyA6ok610WKlFCx2aKaYSVcUyf7Aj6cuThQR/uC1M/kmGy+bfAS8nhMR3gBVZs63CeEIekVdbhPJ8yELIr+C2bClDpdBLs8U8RhNcNrq9DakDpeVHsnpgp1vAhkp6JMjzpfFLVxEzLoTJ9xEzKY6OMG5LCFgZxwTp0PPSGDsTdyQgZ7iZKwJgZPKfiGxa0pdb4osj5i6YdBPUSdHrIY04AcMDFjcEYadRGDxdyi+fND3Dn+gDpeDnWdhsGwFLkz7VOny6EuY1CH+4S3McPm5DdiQgZjtpzz1Qp7DOp9DvBM4i8n6mjf0OoFg0Wasw+shNTBLrCGNR/Uwa4WOAnZHMXAKomsTieijNwY/YQ4e/nMrl0gzPQZ7DrdAA/IZMB2NQUOyGFy/wvwPiKT01A/wR6EZveM5iAH4CyWZ4rgJvsz6igmUIO3Lataf8PpNQpmPG+unYHc7uJ1leQ3gAPRDPZiSg2b/Qvm6nU3G76dzFWdonFksrhWwb/0M5swmXU8qwaDHW1rc498A24TwnKJ66HMIfciUdR3mU69s1n7dRLbZpyxnCtZ6dps2pxC6mA0puUvpWulIZT4KqtMP1rdLqZNiHeWrNaD1mz7FW0zbGfrVXPS/dRLkiSssieEEEIIIYRA8xBP0vFrtlyc2vdxWiyz1/F8H+OvF3fidIn2MhorrWyKt/e2N0zV7681RjjgPrH6BsD9vGege1RWS2Z3NwP7bsSu9pYgmgHEf3L+Rh2j1Kluxv0f6giVlnWe1Q7yGyGA+F8V9tkiI3H0OwTXQ77+Cspna6eLeukOnPsFqVqfcKAwc9wkCOYveOV2TgXtZZaYXhz6myADukTEvZ2NaGtZ/GPqhvqzPHkbVpm4ZVU0gE7BErF4C2GgvcxF5VwD9w0Jd1D5VwxpMKpX8ZzuqdsHoLxkPFM3D0DpxUzo61k0yoY2z9SNA1FypagJ/8KceZYRxrJMNeNb7IKvhd+MX4tCfl/uHZlOrPJd23ZlKBg4n1KhoU8Y4NqMkf7gP9LLLUjoe1PEjzjcXUsXsDG1IveiSxjs+pOWbiLcnGqY031csEkdjf71RM2p9zndoht1m2DpvtlG3SZYms60SWO2XDFhn7pJwIoJA96t0CrO85uWsFjym5aweOytaQmL8ydJGBpJGD5JGD5JGD5JGD5JGD5JGD5JGL7/MWF/2GqSIYtP8AghRFP8BcMFahF2rSIuAAAAAElFTkSuQmCC",
            cuisines: cuisines
          }
        : {
            username: this.state.username.trim(),
            password: this.state.password.trim(),
            email: this.state.email.trim(),
            address: this.state.address,
            name: this.state.name,
            bio:
              "Don’t know what to do? You can start by hitting that follow button.",
            telephone: this.state.phone,
            image:
              "iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAABWVlZgYGDb29v19fX6+vri4uL7+/uurq7t7e3j4+N+fn5ISEjm5uaioqLFxcW8vLw9PT21tbVycnJ7e3uLi4vPz8+pqamFhYUhISEYGBjAwMDLy8tAQEBTU1NsbGw1NTUQEBBkZGSYmJgeHh4qKiqampotLS3IyMT7AAAEwklEQVR4nO3diX6iMBAHYKKIUu8LrWdbe+z7P+EutdVaEkjCjDNh53uC/H9iJidEkRBCCCGEEEIIIYQQQgghhBBCCCGEEEIIH0k/nkzn890+7nao2wKtF6eDg7pxfJx3qZsFpZO2lEE7faBuXW2d9cEU7+yQJtRtrKP7VB7vbBFTt9NXfLTJlxuuqNvqY2T89+kcw+t2Bi75co/ULXYzcc2X21G32sHSJ+C/Loe63bZG734BlXobUbfdys43Xy6EJ3VcJ6BSY+r2V8rqBVQqo05QwbOP+Yl32XisH5D3r/gKEZDzf3ENE1CpCXUSgxVUQKV41sUHuIBqQx1Gq2Kq62ZJnUYDqJf5xm9w04UNqBR1oALv0bYJt8IPViiueM36E/iA6kgd6kbt8bYOp+WpDkZAVj8iyk+oFKN1VJyA6ok610WKlFCx2aKaYSVcUyf7Aj6cuThQR/uC1M/kmGy+bfAS8nhMR3gBVZs63CeEIekVdbhPJ8yELIr+C2bClDpdBLs8U8RhNcNrq9DakDpeVHsnpgp1vAhkp6JMjzpfFLVxEzLoTJ9xEzKY6OMG5LCFgZxwTp0PPSGDsTdyQgZ7iZKwJgZPKfiGxa0pdb4osj5i6YdBPUSdHrIY04AcMDFjcEYadRGDxdyi+fND3Dn+gDpeDnWdhsGwFLkz7VOny6EuY1CH+4S3McPm5DdiQgZjtpzz1Qp7DOp9DvBM4i8n6mjf0OoFg0Wasw+shNTBLrCGNR/Uwa4WOAnZHMXAKomsTieijNwY/YQ4e/nMrl0gzPQZ7DrdAA/IZMB2NQUOyGFy/wvwPiKT01A/wR6EZveM5iAH4CyWZ4rgJvsz6igmUIO3Lataf8PpNQpmPG+unYHc7uJ1leQ3gAPRDPZiSg2b/Qvm6nU3G76dzFWdonFksrhWwb/0M5swmXU8qwaDHW1rc498A24TwnKJ66HMIfciUdR3mU69s1n7dRLbZpyxnCtZ6dps2pxC6mA0puUvpWulIZT4KqtMP1rdLqZNiHeWrNaD1mz7FW0zbGfrVXPS/dRLkiSssieEEEIIIYRA8xBP0vFrtlyc2vdxWiyz1/F8H+OvF3fidIn2MhorrWyKt/e2N0zV7681RjjgPrH6BsD9vGege1RWS2Z3NwP7bsSu9pYgmgHEf3L+Rh2j1Kluxv0f6giVlnWe1Q7yGyGA+F8V9tkiI3H0OwTXQ77+Cspna6eLeukOnPsFqVqfcKAwc9wkCOYveOV2TgXtZZaYXhz6myADukTEvZ2NaGtZ/GPqhvqzPHkbVpm4ZVU0gE7BErF4C2GgvcxF5VwD9w0Jd1D5VwxpMKpX8ZzuqdsHoLxkPFM3D0DpxUzo61k0yoY2z9SNA1FypagJ/8KceZYRxrJMNeNb7IKvhd+MX4tCfl/uHZlOrPJd23ZlKBg4n1KhoU8Y4NqMkf7gP9LLLUjoe1PEjzjcXUsXsDG1IveiSxjs+pOWbiLcnGqY031csEkdjf71RM2p9zndoht1m2DpvtlG3SZYms60SWO2XDFhn7pJwIoJA96t0CrO85uWsFjym5aweOytaQmL8ydJGBpJGD5JGD5JGD5JGD5JGD5JGD5JGL7/MWF/2GqSIYtP8AghRFP8BcMFahF2rSIuAAAAAElFTkSuQmCC",
            cuisines: cuisines
          };
    if (this.state.profileType === "Individual") {
      axios.post("http://localhost:8080/api/account/user", user).then(res => {
        this.props.newUser(res.data);
      });
    } else if (this.state.profileType === "Restaurant") {
      axios
        .post("http://localhost:8080/api/account/restaurant", user)
        .then(res => {
          this.props.newUser(res.data);
        });
    }
  };
  render() {
    return (
      <Fragment>
        <Header withButtons />
        <div className="cover sign-in-cover">
          {!this.state.profileTypeChosen && !this.state.interests && (
            <ProfileType onProfileChosen={this.handleOnProfileChosen} />
          )}
          {this.state.profileTypeChosen && !this.state.interests && (
            <SignUpCard
              profileType={this.state.profileType}
              onSubmit={this.handleOnSubmit}
            />
          )}
          {this.state.profileTypeChosen && this.state.interests && (
            <Interests
              onClick={this.handleOnClickInterests}
              profileType={this.state.profileType}
            />
          )}
        </div>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, {
  newUser
})(SignUp);
