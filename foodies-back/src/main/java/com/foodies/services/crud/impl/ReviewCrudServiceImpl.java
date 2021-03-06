package com.foodies.services.crud.impl;

import com.foodies.models.Review;
import com.foodies.repositories.ReviewRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.ReviewCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ReviewCrudServiceImpl extends CrudServiceImpl<Review> implements ReviewCrudService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    protected CrudRepository<Review, Long> repository() {
        return reviewRepository;
    }

    @Override
    public Review add(Review review) {
        review.setDate(new Date());
        return reviewRepository.save(review);
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
    public void like(Long id) {
        Review review = getById(id);
        review.setLikes(review.getLikes() + 1);
        update(getById(id), review);
    }

    @Override
    public void unlike(Long id) {
        Review review = getById(id);
        review.setLikes(review.getLikes() - 1);
        update(getById(id), review);
    }

}
