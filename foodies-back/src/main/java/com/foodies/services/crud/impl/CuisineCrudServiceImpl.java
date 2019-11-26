package com.foodies.services.crud.impl;

import com.foodies.models.Cuisine;
import com.foodies.repositories.CuisineRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.CuisineCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class CuisineCrudServiceImpl extends CrudServiceImpl<Cuisine> implements CuisineCrudService {

    @Autowired
    private CuisineRepository cuisineRepository;

    @Override
    protected CrudRepository<Cuisine, Long> repository() {
        return cuisineRepository;
    }
}
