package com.foodies.services.crud;

import com.foodies.models.Recommendation;
import com.foodies.services.common.CrudService;

import java.util.List;

public interface RecommendationCrudService extends CrudService<Recommendation> {
    List<Recommendation> getByUser(Long id);
    public List<Recommendation> getByRestaurant(Long id);
}
