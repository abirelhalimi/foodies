package com.foodies.services.crud;

import com.foodies.models.Cuisine;
import com.foodies.models.Recipe;
import com.foodies.services.common.CrudService;

import java.util.List;

public interface RecipeCrudService extends CrudService<Recipe> {
    List<Recipe> getByUser(Long id);

    List<Recipe> getRecipesByCuisine(Cuisine cuisine);
    void like(Long id);
    void unlike(Long id);
}
