package com.foodies.services.crud.impl;

import com.foodies.models.Review;
import com.foodies.models.Restaurant;
import com.foodies.repositories.ReviewRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.ReviewCrudService;
import com.foodies.services.crud.RestaurantCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewCrudServiceImpl extends CrudServiceImpl<Review> implements ReviewCrudService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private RestaurantCrudService restaurantCrudService;

    @Override
    protected CrudRepository<Review, Long> repository() {
        return reviewRepository;
    }

    @Override
    public List<Review> getByUser(Long id) {
        List<Review> allReviews = reviewRepository.findAll();
        List<Review> userReviews = new ArrayList<>();
        allReviews.forEach(recommendation -> {
            if (recommendation.getUser().getId().equals(id)) {
                userReviews.add(recommendation);
            }
        });
        return userReviews;
    }

    @Override
    public List<Review> getByRestaurant(Long id) {

        List<Review> allReviews = reviewRepository.findAll();
        List<Review> restaurantReviews = new ArrayList<>();
        allReviews.forEach(recommendation -> {
            if (recommendation.getRestaurant().getId().equals(id)) {
                restaurantReviews.add(recommendation);
            }
        });
        return restaurantReviews;
    }

    @Override
    public Review add(Review review) {
        reviewRepository.save(review);
        addRating(review.getRestaurant().getId());
        return review;
    }

    private void addRating(Long id) {
        List<Review> reviews = getByRestaurant(id);
        Restaurant restaurant = restaurantCrudService.getById(id);
        int rating= reviews.stream().mapToInt(Review::getRating).sum();
        restaurant.setRating(rating/ reviews.size());
        restaurantCrudService.update(restaurantCrudService.getById(id),restaurant);
    }
}
