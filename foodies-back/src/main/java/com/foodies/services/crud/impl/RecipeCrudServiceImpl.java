package com.foodies.services.crud.impl;

import com.foodies.models.Cuisine;
import com.foodies.models.Recipe;
import com.foodies.repositories.RecipeRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.RecipeCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class RecipeCrudServiceImpl extends CrudServiceImpl<Recipe> implements RecipeCrudService {

    @Autowired
    private RecipeRepository recipeRepository;

    @Override
    protected CrudRepository<Recipe, Long> repository() {
        return recipeRepository;
    }

    @Override
    public Recipe add(Recipe recipe) {
        recipe.setDate(new Date());
        return recipeRepository.save(recipe);
    }

    @Override
    public List<Recipe> getByUser(Long id) {
        List<Recipe> allRecipes = recipeRepository.findAll();
        List<Recipe> userRecipes = new ArrayList<>();
        allRecipes.forEach(recipe -> {
            if (recipe.getUser().getId() == id) {
                userRecipes.add(recipe);
            }
        });
        return userRecipes;
    }

    @Override
    public List<Recipe> getRecipesByCuisine(Cuisine cuisine) {
        List<Recipe> recipes = recipeRepository.findAll();
        List<Recipe> result = new ArrayList<>();
        recipes.forEach(recipe -> {
            if (recipe.getCuisines().contains(cuisine)) {
                result.add(recipe);
            }
        });
        return result;
    }
}
