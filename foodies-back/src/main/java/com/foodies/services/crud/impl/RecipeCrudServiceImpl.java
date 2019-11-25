package com.foodies.services.crud.impl;

import com.foodies.models.Recipe;
import com.foodies.repositories.RecipeRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.RecipeCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class RecipeCrudServiceImpl extends CrudServiceImpl<Recipe> implements RecipeCrudService {

    @Autowired
    private RecipeRepository recipeRepository;

    @Override
    protected CrudRepository<Recipe, Long> repository() {
        return recipeRepository;
    }
}
