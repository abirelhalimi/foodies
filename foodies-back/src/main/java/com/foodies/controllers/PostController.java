package com.foodies.controllers;

import com.foodies.models.Cuisine;
import com.foodies.models.Menu;
import com.foodies.models.Recipe;
import com.foodies.models.Review;
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
    private ReviewCrudService reviewCrudService;

    @Autowired
    private MenuCrudService menuCrudService;

    @Autowired
    private UserCrudService userCrudService;

    @Autowired
    private RestaurantCrudService restaurantCrudService;

    @Autowired
    private DonationCrudService donationCrudService;

    @PostMapping(value = "/recipe/{id}")
    public Recipe add(@PathVariable("id") Long id, @Valid @RequestBody Recipe recipe) {
        recipe.setUser(userCrudService.getById(id));
        return recipeCrudService.add(recipe);
    }

    @PostMapping(value = "/review/{id}")
    public Review add(@PathVariable("id") Long id, @Valid @RequestBody Review review) {
        review.setUser(userCrudService.getById(id));
        return reviewCrudService.add(review);
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

    @PutMapping(value = "/review/{id}")
    public Review edit(@PathVariable("id") Long id, @Valid @RequestBody Review review) {
        return reviewCrudService.update(reviewCrudService.getById(id), review);
    }

    @PutMapping(value = "/menu/{id}")
    public Menu edit(@PathVariable("id") Long id, @Valid @RequestBody Menu menu) {
        return menuCrudService.update(menuCrudService.getById(id), menu);
    }

    @DeleteMapping(value = "/recipe/{id}")
    public void deleteRecipe(@PathVariable("id") Long id) {
        recipeCrudService.delete(id);
    }

    @DeleteMapping(value = "/review/{id}")
    public void deleteReview(@PathVariable("id") Long id) {
        reviewCrudService.delete(id);
    }

    @DeleteMapping(value = "/menu/{id}")
    public void deleteMenu(@PathVariable("id") Long id) {
        menuCrudService.delete(id);
    }

    @GetMapping(value = "/recipe")
    public List<Recipe> getAllRecipes() {
        return recipeCrudService.getAll();
    }

    @GetMapping(value = "/review")
    public List<Review> getAllReviews() {
        return reviewCrudService.getAll();
    }

    @GetMapping(value = "/menu")
    public List<Menu> getAllMenus() {
        return menuCrudService.getAll();
    }

    @GetMapping(value = "/recipe/{id}")
    public List<Recipe> getRecipesByUser(@PathVariable("id") Long id) {
        return recipeCrudService.getByUser(id);
    }

    @GetMapping(value = "/review-user/{id}")
    public List<Review> getReviewsByUser(@PathVariable("id") Long id) {
        return reviewCrudService.getByUser(id);
    }

    @GetMapping(value = "/user-posts/{id}")
    public int getNumberOfPosts(@PathVariable Long id) {
        return getReviewsByUser(id).size()+getRecipesByUser(id).size();
    }

    @GetMapping(value = "/restaurant-posts")
    public int getNumberOfPostsRestaurant(@PathVariable Long id) {
        return getMenusByRestaurant(id).size()+donationCrudService.getAllByRestaurant(id).size();
    }

    @GetMapping(value = "/menu/{id}")
    public List<Menu> getMenusByRestaurant(@PathVariable("id") Long id) {
        return menuCrudService.getByRestaurant(id);
    }


    @GetMapping(value = "/review-restaurant/{id}")
    public List<Review> getRestaurantRecommendations(@PathVariable Long id) {
        return reviewCrudService.getByRestaurant(id);
    }

    @PostMapping(value = "/recipes")
    public List<Recipe> getRecipesByCuisine(Cuisine cuisine) {
        return recipeCrudService.getRecipesByCuisine(cuisine);
    }

    @PostMapping(value = "/menu/like/{id}")
    public void likeMenu(@PathVariable Long id) {
        menuCrudService.like(id);
    }

    @PostMapping(value = "/menu/unlike/{id}")
    public void unlikeMenu(@PathVariable Long id) {
        menuCrudService.unlike(id);
    }

    @PostMapping(value = "/recipe/like/{id}")
    public void likeRecipe(@PathVariable Long id) {
        recipeCrudService.like(id);
    }

    @PostMapping(value = "/recipe/unlike/{id}")
    public void unlikeRecipe(@PathVariable Long id) {
        recipeCrudService.unlike(id);
    }
    @PostMapping(value = "/review/like/{id}")
    public void likeReview(@PathVariable Long id) {
        reviewCrudService.like(id);
    }

    @PostMapping(value = "/review/unlike/{id}")
    public void unlikeReview(@PathVariable Long id) {
        reviewCrudService.unlike(id);
    }
}
