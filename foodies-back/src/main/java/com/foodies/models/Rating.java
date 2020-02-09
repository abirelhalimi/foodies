package com.foodies.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
@SequenceGenerator(name = "RATING_SQ", sequenceName = "rating_sequence")
public class Rating {

    @Id
    @GeneratedValue
    private Long id;

    private int dish;
    private int service;
    private int price;
    private int location;
    private int accessibility;

    public Rating(int dish, int service, int price, int location, int accessibility) {
        this.dish = dish;
        this.service = service;
        this.price = price;
        this.location = location;
        this.accessibility = accessibility;
    }

    public Rating() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getDish() {
        return dish;
    }

    public void setDish(int dish) {
        this.dish = dish;
    }

    public int getService() {
        return service;
    }

    public void setService(int service) {
        this.service = service;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getLocation() {
        return location;
    }

    public void setLocation(int location) {
        this.location = location;
    }

    public int getAccessibility() {
        return accessibility;
    }

    public void setAccessibility(int accessibility) {
        this.accessibility = accessibility;
    }

}
