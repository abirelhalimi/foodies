package com.foodies.services.crud.impl;

import com.foodies.models.Recommendation;
import com.foodies.repositories.RecommendationRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.RecommendationCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;

public class RecommendationCrudServiceImpl extends CrudServiceImpl<Recommendation> implements RecommendationCrudService {

    @Autowired
    private RecommendationRepository recommendationRepository;

    @Override
    protected CrudRepository<Recommendation, Long> repository() {
        return recommendationRepository;
    }
}
