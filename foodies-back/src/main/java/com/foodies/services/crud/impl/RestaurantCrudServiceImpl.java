package com.foodies.services.crud.impl;

import com.foodies.models.*;
import com.foodies.repositories.RestaurantRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.RestaurantCrudService;
import com.foodies.services.crud.ReviewCrudService;
import com.foodies.services.crud.UserCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RestaurantCrudServiceImpl extends CrudServiceImpl<Restaurant> implements RestaurantCrudService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private UserCrudService userCrudService;

    @Autowired
    private ReviewCrudService reviewCrudService;

    @Autowired
    private PasswordEncoder encoder = new BCryptPasswordEncoder();

    @Override
    protected CrudRepository<Restaurant, Long> repository() {
        return restaurantRepository;
    }

    @Override
    public Restaurant add(Restaurant restaurant) {
        restaurant.setPassword(encoder.encode(restaurant.getPassword()));
        if (!restaurantExists(restaurant.getEmail(), restaurant.getUsername())) {
            restaurantRepository.save(restaurant);
            User user = new User();
            user.setImage(restaurant.getImage());
            user.setUsername(restaurant.getUsername());
            user.setPassword(restaurant.getPassword());
            user.setEmail(restaurant.getEmail());
            user.setRole("USER_RES");
            userCrudService.add(user);
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
            if (restaurant.getEmail()!=null) {
                if (restaurant.getEmail().equals(email) || restaurant.getUsername().equals(username)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override
    public List<Restaurant> follow(Long id, Long idUser) {
        Restaurant restaurantToFollow = getById(id);
        User userFollowing = userCrudService.getById(idUser);
        addFollowers(restaurantToFollow, userFollowing);
        userCrudService.addFollowingRestaurant(userFollowing, restaurantToFollow);
        return userFollowing.getFollowingRestaurant();
    }

    private void addFollowers(Restaurant restaurantToFollow, User userFollowing) {
        restaurantToFollow.getFollowers().add(userFollowing);
        update(getById(restaurantToFollow.getId()), restaurantToFollow);
    }

    @Override
    public List<Restaurant> unfollow(Long id, Long idUser) {
        Restaurant restaurantToUnfollow = getById(id);
        User userUnfollowing = userCrudService.getById(idUser);
        removeFollowers(restaurantToUnfollow, userUnfollowing);
        userCrudService.removeFollowingRestaurant(userUnfollowing, restaurantToUnfollow);
        return userUnfollowing.getFollowingRestaurant();
    }

    private void removeFollowers(Restaurant restaurantToUnfollow, User userUnfollowing) {
        restaurantToUnfollow.getFollowers().remove(userUnfollowing);
        update(getById(restaurantToUnfollow.getId()), restaurantToUnfollow);
    }

    @Override
    public List<Restaurant> searchRestaurant(String name) {

        List<Restaurant> restaurants = restaurantRepository.findAll();
        List<Restaurant> result = new ArrayList<>();
        restaurants.forEach(restaurant -> {
            String prefix = name.toLowerCase();
            if (restaurant.getName().toLowerCase().startsWith(prefix) || restaurant.getName().toLowerCase().equals(prefix)) {
                result.add(restaurant);
            }
        });
        return result;
    }

    @Override
    public List<Restaurant> getRestaurantsByCuisine(Cuisine cuisine) {
        List<Restaurant> restaurants = restaurantRepository.findAll();
        List<Restaurant> result = new ArrayList<>();
        restaurants.forEach(restaurant -> {
            if (restaurant.getCuisines().contains(cuisine)) {
                result.add(restaurant);
            }
        });
        return result;
    }

    @Override
    public Rating getRestaurantRating(Long id) {
        Rating rating = new Rating(0, 0, 0, 0, 0);
        List<Review> reviews = reviewCrudService.getByRestaurant(id);
        for (Review review : reviews) {
            rating.setDish(rating.getDish()+review.getRating().getDish());
            rating.setService(rating.getService()+review.getRating().getService());
            rating.setPrice(rating.getPrice()+review.getRating().getPrice());
            rating.setLocation(rating.getLocation()+review.getRating().getLocation());
            rating.setAccessibility(rating.getAccessibility()+review.getRating().getAccessibility());
        }
        return rating;
    }

}
