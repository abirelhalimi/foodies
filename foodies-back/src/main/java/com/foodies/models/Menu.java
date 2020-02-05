package com.foodies.models;

import javax.persistence.*;
import java.sql.Blob;
import java.util.Date;

@Entity
@SequenceGenerator(name = "MENU_SQ", sequenceName = "menu_sequence")
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "MENU_SQ")
    private Long id;

    private String text;

    @Lob
    private byte[] image;

    private Date date;
    private boolean isOffer;

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

    public boolean isOffer() {
        return isOffer;
    }

    public void setOffer(boolean offer) {
        isOffer = offer;
    }
}
