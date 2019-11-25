package com.foodies.services.crud.impl;

import com.foodies.models.Restaurant;
import com.foodies.repositories.RestaurantRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.RestaurantCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class RestaurantCrudServiceImpl extends CrudServiceImpl<Restaurant> implements RestaurantCrudService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Override
    protected CrudRepository<Restaurant, Long> repository() {
        return restaurantRepository;
    }
}
