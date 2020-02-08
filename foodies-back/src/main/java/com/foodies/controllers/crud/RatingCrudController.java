package com.foodies.controllers.crud;

import com.foodies.models.Rating;
import com.foodies.services.crud.RatingCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping(value = "/api/ratings")
@RestController
public class RatingCrudController {

    @Autowired
    private RatingCrudService ratingCrudService;

    @GetMapping
    public List<Rating> getRatings() {
        return ratingCrudService.getAll();
    }
}
