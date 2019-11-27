package com.foodies.controllers.crud;

import com.foodies.models.Restaurant;
import com.foodies.services.crud.RestaurantCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/restaurants")
@RestController
public class RestaurantCrudController {

    @Autowired
    private RestaurantCrudService restaurantCrudService;

    @GetMapping
    public List<Restaurant> getAll() {
        return restaurantCrudService.getAll();
    }

    @PostMapping
    public Restaurant add(@Valid @RequestBody Restaurant restaurant) {
        return restaurantCrudService.add(restaurant);
    }

    @PutMapping(value = "/{id}")
    public Restaurant update(@PathVariable("id") Long id, @Valid @RequestBody Restaurant newRestaurantData) {
        return restaurantCrudService.update(restaurantCrudService.getById(id), newRestaurantData);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        restaurantCrudService.delete(id);
    }

    @GetMapping(value = "/{id}")
    public Restaurant getById(@PathVariable Long id) {
        return restaurantCrudService.getById(id);
    }
}
