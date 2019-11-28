package com.foodies.controllers.crud;

import com.foodies.models.Menu;
import com.foodies.services.crud.MenuCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/menus")
@RestController
public class MenuCrudController {

    @Autowired
    private MenuCrudService menuCrudService;

    @GetMapping
    public List<Menu> getAll() {
        return menuCrudService.getAll();
    }

    @PostMapping
    public Menu add(@Valid @RequestBody Menu menu) {
        return menuCrudService.add(menu);
    }

    @PutMapping(value = "/{id}")
    public Menu update(@PathVariable("id") Long id, @Valid @RequestBody Menu newMenuData) {
        return menuCrudService.update(menuCrudService.getById(id), newMenuData);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        menuCrudService.delete(id);
    }

    @GetMapping(value = "/{id}")
    public Menu getById(@PathVariable Long id) {
        return menuCrudService.getById(id);
    }
}
