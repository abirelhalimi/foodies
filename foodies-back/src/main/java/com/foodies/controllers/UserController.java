package com.foodies.controllers;

import com.foodies.models.User;
import com.foodies.services.crud.UserCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/user")
@RestController
public class UserController {

    @Autowired
    private UserCrudService userCrudService;

    @GetMapping
    public List<User> getAll() {
        return userCrudService.getAll();
    }

    @GetMapping(value = "/{id}")
    public User view(@PathVariable Long id) {
        return userCrudService.getById(id);
    }

    @PostMapping(value = "/follow/{id}")
    public List<User> follow(@PathVariable Long id, @Valid @RequestBody Long idUser) {
        return userCrudService.follow(id, idUser);
    }

    @PostMapping(value = "/unfollow/{id}")
    public List<User> unfollow(@PathVariable Long id, @Valid @RequestBody Long idUser) {
        return userCrudService.unfollow(id, idUser);
    }
}