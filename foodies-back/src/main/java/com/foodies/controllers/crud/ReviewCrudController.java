package com.foodies.controllers.crud;

import com.foodies.models.Review;
import com.foodies.services.crud.ReviewCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/reviews")
@RestController
public class ReviewCrudController {

    @Autowired
    private ReviewCrudService reviewCrudService;

    @GetMapping
    public List<Review> getAll() {
        return reviewCrudService.getAll();
    }

    @PostMapping
    public Review add(@Valid @RequestBody Review review) {
        return reviewCrudService.add(review);
    }

    @PutMapping(value = "/{id}")
    public Review update(@PathVariable("id") Long id, @Valid @RequestBody Review newReviewData) {
        return reviewCrudService.update(reviewCrudService.getById(id), newReviewData);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        reviewCrudService.delete(id);
    }

    @GetMapping(value = "/{id}")
    public Review getById(@PathVariable Long id) {
        return reviewCrudService.getById(id);
    }
}
