package com.foodies.models;

import javax.persistence.*;
import java.util.List;

@Entity
@SequenceGenerator(name = "RESTAURANT_SQ", sequenceName = "restaurant_sequence")
public class Restaurant {

    public Restaurant(String address, String telephone, String cuisine, String rating, String email, String password, String username, String image) {
        this.address = address;
        this.telephone = telephone;
        this.cuisine = cuisine;
        this.rating = rating;
        this.email = email;
        this.password = password;
        this.username = username;
        this.image = image;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "RESTAURANT_SQ")
    private Long id;

    private String address;
    private String telephone;
    private String cuisine;
    private String rating;
    private String email;
    private String password;
    private String username;
    private String role = "USER";
    private String image;

    @ManyToMany
    private List<User> followers;

    @ManyToMany
    private List<User> following;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<User> getFollowers() {
        return followers;
    }

    public void setFollowers(List<User> followers) {
        this.followers = followers;
    }

    public List<User> getFollowing() {
        return following;
    }

    public void setFollowing(List<User> following) {
        this.following = following;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }
}
