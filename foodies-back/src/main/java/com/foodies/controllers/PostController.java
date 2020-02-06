package com.foodies.controllers;

import com.foodies.models.Menu;
import com.foodies.models.Recipe;
import com.foodies.models.Recommendation;
import com.foodies.services.crud.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/post")
@RestController
public class PostController {

    @Autowired
    private RecipeCrudService recipeCrudService;

    @Autowired
    private RecommendationCrudService recommendationCrudService;

    @Autowired
    private MenuCrudService menuCrudService;

    @Autowired
    private UserCrudService userCrudService;

    @Autowired
    private RestaurantCrudService restaurantCrudService;

    @PostMapping(value = "/recipe/{id}")
    public Recipe add(@PathVariable("id") Long id, @Valid @RequestBody Recipe recipe) {
        recipe.setUser(userCrudService.getById(id));
        return recipeCrudService.add(recipe);
    }

    @PostMapping(value = "/recommendation/{id}")
    public Recommendation add(@PathVariable("id") Long id, @Valid @RequestBody Recommendation recommendation) {
        recommendation.setUser(userCrudService.getById(id));
        return recommendationCrudService.add(recommendation);
    }

    @PostMapping(value = "/menu/{id}")
    public Menu add(@PathVariable("id") Long id, @Valid @RequestBody Menu menu) {
        menu.setRestaurant(restaurantCrudService.getById(id));
        return menuCrudService.add(menu);
    }

    @PutMapping(value = "/recipe/{id}")
    public Recipe edit(@PathVariable("id") Long id, @Valid @RequestBody Recipe recipe) {
        return recipeCrudService.update(recipeCrudService.getById(id), recipe);
    }

    @PutMapping(value = "/recommendation/{id}")
    public Recommendation edit(@PathVariable("id") Long id, @Valid @RequestBody Recommendation recommendation) {
        return recommendationCrudService.update(recommendationCrudService.getById(id), recommendation);
    }

    @PutMapping(value = "/menu/{id}")
    public Menu edit(@PathVariable("id") Long id, @Valid @RequestBody Menu menu) {
        return menuCrudService.update(menuCrudService.getById(id), menu);
    }

    @DeleteMapping(value = "/recipe/{id}")
    public void deleteRecipe(@PathVariable("id") Long id) {
        recipeCrudService.delete(id);
    }

    @DeleteMapping(value = "/recommendation/{id}")
    public void deleteComment(@PathVariable("id") Long id) {
        recommendationCrudService.delete(id);
    }

    @DeleteMapping(value = "/menu/{id}")
    public void deleteMenu(@PathVariable("id") Long id) {
        menuCrudService.delete(id);
    }

    @GetMapping(value = "/recipe")
    public List<Recipe> getAllRecipes() {
        return recipeCrudService.getAll();
    }

    @GetMapping(value = "/recommendation")
    public List<Recommendation> getAllRecommendation() {
        return recommendationCrudService.getAll();
    }

    @GetMapping(value = "/menu")
    public List<Menu> getAllMenus() {
        return menuCrudService.getAll();
    }

    @GetMapping(value = "/recipe/{id}")
    public List<Recipe> getRecipesByUser(@PathVariable("id") Long id) {
        return recipeCrudService.getByUser(id);
    }

    @GetMapping(value = "/recommendation/{id}")
    public List<Recommendation> getRecommendationsByUser(@PathVariable("id") Long id) {
        return recommendationCrudService.getByUser(id);
    }

    @GetMapping(value = "/menu/{id}")
    public List<Menu> getMenusByRestaurant(@PathVariable("id") Long id) {
        return menuCrudService.getByRestaurant(id);
    }


    @GetMapping(value = "/recommendations/{id}")
    public List<Recommendation> getRestaurantRecommendations(@PathVariable Long id) {
        return recommendationCrudService.getByRestaurant(id);
    }

}
