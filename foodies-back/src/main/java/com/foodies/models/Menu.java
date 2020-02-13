package com.foodies.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@SequenceGenerator(name = "MENU_SQ", sequenceName = "menu_sequence")
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "MENU_SQ")
    private Long id;

    private String text;
    private int likes;
    private boolean menuItem = true;

    @Lob
    private byte[] image;

    private Date date;

    @ManyToOne
    private Restaurant restaurant;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public boolean isMenuItem() {
        return menuItem;
    }

    public void setMenuItem(boolean menuItem) {
        this.menuItem = menuItem;
    }
}
