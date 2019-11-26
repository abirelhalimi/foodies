package com.foodies.controllers.crud;

import com.foodies.models.Cuisine;
import com.foodies.services.crud.CuisineCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/cuisines")
@RestController
public class CuisineCrudController {

    @Autowired
    private CuisineCrudService cuisineCrudService;

    @GetMapping
    public List<Cuisine> getAll() {
        return cuisineCrudService.getAll();
    }

    @PostMapping
    public Cuisine add(@Valid @RequestBody Cuisine cuisine) {
        return cuisineCrudService.add(cuisine);
    }

    @PutMapping(value = "/{id}")
    public Cuisine update(@PathVariable("id") Long id, @Valid @RequestBody Cuisine newCuisineData) {
        return cuisineCrudService.update(cuisineCrudService.getById(id), newCuisineData);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        cuisineCrudService.delete(id);
    }

    @GetMapping(value = "/{id}")
    public Cuisine getById(@PathVariable Long id) {
        return cuisineCrudService.getById(id);
    }
}
