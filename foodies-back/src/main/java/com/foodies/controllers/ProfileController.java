package com.foodies.controllers;

import com.foodies.models.Restaurant;
import com.foodies.models.User;
import com.foodies.services.crud.RestaurantCrudService;
import com.foodies.services.crud.UserCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequestMapping(value = "/api/account")
@RestController
public class ProfileController {

    @Autowired
    private UserCrudService userCrudService;

    @Autowired
    private RestaurantCrudService restaurantCrudService;

    @PostMapping(value = "/user")
    public User signUp(@Valid @RequestBody User user) {
        return userCrudService.add(user);
    }

    @PostMapping(value = "/restaurant")
    public Restaurant signUp(@Valid @RequestBody Restaurant restaurant) {
        return restaurantCrudService.add(restaurant);
    }

    @PutMapping(value = "/user/{id}")
    public User edit(@PathVariable("id") Long id, @Valid @RequestBody User newUserData) {
        return userCrudService.update(userCrudService.getById(id), newUserData);
    }

    @PutMapping(value = "/restaurant/{id}")
    public Restaurant edit(@PathVariable("id") Long id, @Valid @RequestBody Restaurant newRestaurantData) {
        return restaurantCrudService.update(restaurantCrudService.getById(id), newRestaurantData);
    }

    @DeleteMapping(value = "/user/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        userCrudService.delete(id);
    }

    @DeleteMapping(value = "/restaurant/{id}")
    public void deleteRestaurant(@PathVariable("id") Long id) {
        restaurantCrudService.delete(id);
    }

    @GetMapping(value = "/user/{id}")
    public User viewUser(@PathVariable Long id) {
        return userCrudService.getById(id);
    }

    @GetMapping(value = "/restaurant/{id}")
    public Restaurant viewRestaurant(@PathVariable Long id) {
        return restaurantCrudService.getById(id);
    }

}
