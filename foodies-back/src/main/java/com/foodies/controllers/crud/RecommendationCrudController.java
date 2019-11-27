package com.foodies.controllers.crud;

import com.foodies.models.Recommendation;
import com.foodies.services.crud.RecommendationCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/recommendations")
@RestController
public class RecommendationCrudController {

    @Autowired
    private RecommendationCrudService recommendationCrudService;

    @GetMapping
    public List<Recommendation> getAll() {
        return recommendationCrudService.getAll();
    }

    @PostMapping
    public Recommendation add(@Valid @RequestBody Recommendation recommendation) {
        return recommendationCrudService.add(recommendation);
    }

    @PutMapping(value = "/{id}")
    public Recommendation update(@PathVariable("id") Long id, @Valid @RequestBody Recommendation newRecommendationData) {
        return recommendationCrudService.update(recommendationCrudService.getById(id), newRecommendationData);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        recommendationCrudService.delete(id);
    }

    @GetMapping(value = "/{id}")
    public Recommendation getById(@PathVariable Long id) {
        return recommendationCrudService.getById(id);
    }
}
