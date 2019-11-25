package com.foodies.controllers;

import com.foodies.models.Recipe;
import com.foodies.services.crud.RecipeCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/recipe")
@RestController
public class RecipeCrudController {

    @Autowired
    private RecipeCrudService recipeCrudService;

    @GetMapping
    public List<Recipe> getAll() {
        return recipeCrudService.getAll();
    }

    @PostMapping
    public Recipe add(@Valid @RequestBody Recipe recipe) {
        return recipeCrudService.add(recipe);
    }

    @PutMapping(value = "/{id}")
    public Recipe update(@PathVariable("id") Long id, @Valid @RequestBody Recipe newRecipeData) {
        return recipeCrudService.update(recipeCrudService.getById(id), newRecipeData);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        recipeCrudService.delete(id);
    }

    @GetMapping(value = "/{id}")
    public Recipe getById(@PathVariable Long id) {
        return recipeCrudService.getById(id);
    }
}
