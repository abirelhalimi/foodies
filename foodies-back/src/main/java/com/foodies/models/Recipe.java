package com.foodies.models;

import javax.persistence.*;
import java.sql.Blob;
import java.util.Date;
import java.util.List;

@Entity
@SequenceGenerator(name = "RECIPE_SQ", sequenceName = "recipe_sequence")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "RECIPE_SQ")
    private Long id;

    private Date date;
    private int likes;

    @Lob
    private byte[] image;

    private String text;

    @ManyToMany
    private List<Cuisine> cuisines;

    @ManyToOne
    private User user;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Cuisine> getCuisines() {
        return cuisines;
    }

    public void setCuisines(List<Cuisine> cuisines) {
        this.cuisines = cuisines;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }
}
