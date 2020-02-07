package com.foodies.services.crud;

import com.foodies.models.Review;
import com.foodies.services.common.CrudService;

import java.util.List;

public interface ReviewCrudService extends CrudService<Review> {
    List<Review> getByUser(Long id);
    public List<Review> getByRestaurant(Long id);
}
