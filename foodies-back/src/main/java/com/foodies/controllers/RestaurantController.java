package com.foodies.controllers;

import com.foodies.models.Cuisine;
import com.foodies.models.Restaurant;
import com.foodies.services.crud.RestaurantCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/restaurant")
@RestController
public class RestaurantController {

    @Autowired
    private RestaurantCrudService restaurantCrudService;

    @GetMapping
    public List<Restaurant> getAll() {
        return restaurantCrudService.getAll();
    }

    @GetMapping(value = "/{id}")
    public Restaurant view(@PathVariable Long id) {
        return restaurantCrudService.getById(id);
    }

    @PostMapping(value = "/follow/{id}")
    public List<Restaurant> follow(@PathVariable Long id, @Valid @RequestBody Long idUser) {
        return restaurantCrudService.follow(id, idUser);
    }

    @PostMapping(value = "/unfollow/{id}")
    public List<Restaurant> unfollow(@PathVariable Long id, @Valid @RequestBody Long idUser) {
        return restaurantCrudService.unfollow(id, idUser);
    }

    @PostMapping
    public List<Restaurant> searchRestaurant(@Valid @RequestBody String name) {
        return restaurantCrudService.searchRestaurant(name);
    }

    @PostMapping(value = "/cuisines")
    public List<Restaurant> getRestaurantsByCuisine(@Valid @RequestBody Cuisine cuisine) {
        return restaurantCrudService.getRestaurantsByCuisine(cuisine);
    }

}
