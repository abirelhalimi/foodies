package com.foodies.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@SequenceGenerator(name = "RECOMMENDATION_SQ", sequenceName = "recommendation_sequence")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "RECOMMENDATION_SQ")
    private Long id;

    @ManyToOne
    private Restaurant restaurant;

    @ManyToOne
    private User user;

    private Date date;

    @Lob
    private byte[] image;

    private String text;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "id")
    private Rating rating;


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

    public Rating getRating() {
        return rating;
    }

    public void setRating(Rating rating) {
        this.rating = rating;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

}
