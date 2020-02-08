package com.foodies.services.crud;

import com.foodies.models.Cuisine;
import com.foodies.models.Rating;
import com.foodies.models.Restaurant;
import com.foodies.services.common.CrudService;

import java.util.List;

public interface RestaurantCrudService extends CrudService<Restaurant> {

    List<Restaurant> follow(Long id, Long idUser);

    List<Restaurant> unfollow(Long id, Long idUser);

    List<Restaurant> searchRestaurant(String name);

    List<Restaurant> getRestaurantsByCuisine(Cuisine cuisine);

    Rating getRestaurantRating(Long id);
}
