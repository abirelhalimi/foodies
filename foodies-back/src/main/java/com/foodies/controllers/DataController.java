package com.foodies.controllers;

import com.foodies.models.Restaurant;
import com.foodies.models.User;
import com.foodies.services.crud.RestaurantCrudService;
import com.foodies.services.crud.UserCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping(value = "/api/mockData")
@RestController
public class DataController {

    @Autowired
    private UserCrudService userCrudService;

    @Autowired
    private RestaurantCrudService restaurantCrudService;

    @GetMapping
    public String populateDatabase() {

        //Adding users
        User user = new User();

        //first user
        user.setEmail("regina@gmail.com");
        user.setPassword("regina");
        user.setUsername("reginaphalange");
        user.setImage("regina.png");
        userCrudService.add(user);

        //second user
        user = new User();
        user.setEmail("ken@gmail.com");
        user.setPassword("ken");
        user.setUsername("kenadams");
        user.setImage("ken.png");
        userCrudService.add(user);

        //Adding restaurants
        Restaurant restaurant = new Restaurant();

        //first restaurant
        restaurant.setAddress("avenue blabla");
        restaurant.setEmail("central perk");
        restaurant.setImage("centralperk.png");
        restaurant.setPassword("central");
        restaurant.setTelephone("5551235");
        restaurant.setUsername("centralperk");
        restaurantCrudService.add(restaurant);

        //second restaurant
        restaurant = new Restaurant();
        restaurant.setAddress("avenue blublu");
        restaurant.setEmail("mcdonalds@gmail.com");
        restaurant.setImage("mcdonalds.png");
        restaurant.setPassword("mcdonalds");
        restaurant.setTelephone("5553215");
        restaurant.setUsername("mcdonalds");
        restaurantCrudService.add(restaurant);

        return "Database filled";
    }

}


