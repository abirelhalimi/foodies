package com.foodies.services.crud.impl;

import com.foodies.models.Recommendation;
import com.foodies.models.Restaurant;
import com.foodies.repositories.RecommendationRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.RecommendationCrudService;
import com.foodies.services.crud.RestaurantCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecommendationCrudServiceImpl extends CrudServiceImpl<Recommendation> implements RecommendationCrudService {

    @Autowired
    private RecommendationRepository recommendationRepository;

    @Autowired
    private RestaurantCrudService restaurantCrudService;

    @Override
    protected CrudRepository<Recommendation, Long> repository() {
        return recommendationRepository;
    }

    @Override
    public List<Recommendation> getByUser(Long id) {
        List<Recommendation> allRecommendations = recommendationRepository.findAll();
        List<Recommendation> userRecommendations = new ArrayList<>();
        allRecommendations.forEach(recommendation -> {
            if (recommendation.getUser().getId().equals(id)) {
                userRecommendations.add(recommendation);
            }
        });
        return userRecommendations;
    }

    @Override
    public List<Recommendation> getByRestaurant(Long id) {

        List<Recommendation> allRecommendations = recommendationRepository.findAll();
        List<Recommendation> restaurantRecommendations = new ArrayList<>();
        allRecommendations.forEach(recommendation -> {
            if (recommendation.getRestaurant().getId().equals(id)) {
                restaurantRecommendations.add(recommendation);
            }
        });
        return restaurantRecommendations;
    }

    @Override
    public Recommendation add(Recommendation recommendation) {
        recommendationRepository.save(recommendation);
        addRating(recommendation.getRestaurant().getId());
        return recommendation;
    }

    private void addRating(Long id) {
        List<Recommendation> recommendations = getByRestaurant(id);
        Restaurant restaurant = restaurantCrudService.getById(id);
        int rating= recommendations.stream().mapToInt(Recommendation::getRating).sum();
        restaurant.setRating(rating/recommendations.size());
        restaurantCrudService.update(restaurantCrudService.getById(id),restaurant);
    }
}
