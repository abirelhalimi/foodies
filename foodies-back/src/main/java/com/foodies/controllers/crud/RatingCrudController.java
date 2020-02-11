package com.foodies.controllers.crud;

import com.foodies.models.Rating;
import com.foodies.models.Recipe;
import com.foodies.services.crud.RatingCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/ratings")
@RestController
public class RatingCrudController {

    @Autowired
    private RatingCrudService ratingCrudService;

    @GetMapping
    public List<Rating> getAll() {
        return ratingCrudService.getAll();
    }

    @PostMapping
    public Rating add(@Valid @RequestBody Rating rating) {
        return ratingCrudService.add(rating);
    }

    @PutMapping(value = "/{id}")
    public Rating update(@PathVariable("id") Long id, @Valid @RequestBody Rating newRatingData) {
        return ratingCrudService.update(ratingCrudService.getById(id), newRatingData);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        ratingCrudService.delete(id);
    }

    @GetMapping(value = "/{id}")
    public Rating getById(@PathVariable Long id) {
        return ratingCrudService.getById(id);
    }
}
