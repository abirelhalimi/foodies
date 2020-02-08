package com.foodies.services.crud.impl;

import com.foodies.models.Rating;
import com.foodies.repositories.RatingRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.RatingCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class RatingCrudServiceImpl extends CrudServiceImpl<Rating> implements RatingCrudService {

    @Autowired
    private RatingRepository ratingRepository;
    @Override
    protected CrudRepository<Rating, Long> repository() {
        return ratingRepository;
    }
}
