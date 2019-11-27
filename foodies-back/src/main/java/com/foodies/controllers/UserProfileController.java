package com.foodies.controllers;

import com.foodies.models.User;
import com.foodies.services.crud.UserCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequestMapping(value = "/api/account")
@RestController
public class UserProfileController {

    @Autowired
    private UserCrudService userCrudService;

    @PostMapping
    public User signUp(@Valid @RequestBody User user) {
        return userCrudService.add(user);
    }

    @PutMapping(value = "/{id}")
    public User edit(@PathVariable("id") Long id, @Valid @RequestBody User newUserData) {
        return userCrudService.update(userCrudService.getById(id), newUserData);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        userCrudService.delete(id);
    }

    @GetMapping(value = "/{id}")
    public User view(@PathVariable Long id) {
        return userCrudService.getById(id);
    }

}
