package com.foodies.controllers;

import com.foodies.models.Restaurant;
import com.foodies.models.User;
import com.foodies.repositories.RestaurantRepository;
import com.foodies.services.crud.RestaurantCrudService;
import com.foodies.services.crud.UserCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/restaurant")
@RestController
public class RestaurantController {

    @Autowired
    private RestaurantCrudService restaurantCrudService;

    @Autowired
    private UserCrudService userCrudService;

    @GetMapping
    public List<Restaurant> getAll() {
        return restaurantCrudService.getAll();
    }

    @GetMapping(value = "/{id}")
    public Restaurant view(@PathVariable Long id) {
        return restaurantCrudService.getById(id);
    }

    @PostMapping(value = "/follow/{id}")
    public Restaurant follow(@PathVariable Long id, @Valid @RequestBody Long idUser) {
        Restaurant restaurantToUpdate = restaurantCrudService.getById(id), newRestaurantData = restaurantCrudService.getById(id);
        newRestaurantData.getFollowers().add(userCrudService.getById(idUser));
        return restaurantCrudService.update(restaurantToUpdate, newRestaurantData);
    }

    @PostMapping(value = "/unfollow/{id}")
    public Restaurant unfollow(@PathVariable Long id, @Valid @RequestBody Long idUser) {
        Restaurant restaurantToUpdate = restaurantCrudService.getById(id), newRestaurantData = restaurantCrudService.getById(id);
        newRestaurantData.getFollowers().remove(userCrudService.getById(idUser));
        return restaurantCrudService.update(restaurantToUpdate, newRestaurantData);
    }

}
