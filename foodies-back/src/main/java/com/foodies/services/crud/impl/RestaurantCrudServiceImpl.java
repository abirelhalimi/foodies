package com.foodies.services.crud.impl;

import com.foodies.models.Restaurant;
import com.foodies.models.User;
import com.foodies.repositories.RestaurantRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.RestaurantCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantCrudServiceImpl extends CrudServiceImpl<Restaurant> implements RestaurantCrudService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private PasswordEncoder encoder = new BCryptPasswordEncoder();

    @Override
    protected CrudRepository<Restaurant, Long> repository() {
        return restaurantRepository;
    }

    @Override
    public Restaurant add(Restaurant restaurant) {
        restaurant.setPassword(encoder.encode(restaurant.getPassword()));
        if(!restaurantExists(restaurant.getEmail(), restaurant.getUsername())) {
            restaurantRepository.save(restaurant);
        }
        return restaurant;
    }

    private boolean restaurantExists(String email, String username) {

        List<Restaurant> restaurants;
        restaurants = restaurantRepository.findAll();

        if (restaurants == null) {
            return false;
        }
        for (Restaurant restaurant : restaurants) {
            if (restaurant.getEmail().equals(email) || restaurant.getUsername().equals(username)) {
                return true;
            }
        }
        return false;
    }
}
