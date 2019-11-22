package com.foodies.models;

import javax.persistence.*;
import java.util.List;

@Entity(name = "account")
@SequenceGenerator(name = "USER_SQ", sequenceName = "user_sequence")
public class User {

    public User(String email, String password, String username, String image) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.image = image;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "USER_SQ")
    private Long id;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
