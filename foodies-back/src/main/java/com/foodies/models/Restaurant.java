package com.foodies.models;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@SequenceGenerator(name = "RESTAURANT_SQ", sequenceName = "restaurant_sequence")
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "RESTAURANT_SQ")
    private Long id;

    private String address;
    private double longitude;
    private double latitude;
    private String telephone;
    private String rating;
    private String email;
    private String password;
    private String username;
    private String name;
    private String role = "USER";

    @Lob
    private byte[] image;

    @ManyToMany
    private List<Cuisine> cuisines;

    @ManyToMany
    private List<User> followers;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

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

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public List<Cuisine> getCuisines() {
        return cuisines;
    }

    public void setCuisines(List<Cuisine> cuisines) {
        this.cuisines = cuisines;
    }

    public List<User> getFollowers() {
        return followers;
    }

    public void setFollowers(List<User> followers) {
        this.followers = followers;
    }
}
