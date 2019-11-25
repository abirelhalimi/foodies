package com.foodies.controllers;

import com.foodies.models.User;
import com.foodies.services.crud.UserCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/account")
@RestController
public class UserCrudController {

    @Autowired
    private UserCrudService userCrudService;

    @GetMapping
    public List<User> getAll() {
        return userCrudService.getAll();
    }

    @PostMapping
    public User add(@Valid @RequestBody User user) {
        return userCrudService.add(user);
    }

    @PutMapping(value = "/{id}")
    public User update(@PathVariable("id") Long id , @Valid @RequestBody User newUserData) {
        return userCrudService.update(userCrudService.getById(id), newUserData);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        userCrudService.delete(id);
    }

    @GetMapping(value = "/{id}")
    public User getById(@PathVariable Long id) {
        return userCrudService.getById(id);
    }
}
