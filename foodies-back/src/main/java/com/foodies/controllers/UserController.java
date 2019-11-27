package com.foodies.controllers;

import com.foodies.models.Restaurant;
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
    public User follow(@PathVariable Long id, @Valid @RequestBody Long idUser) {
        User userToUpdate = userCrudService.getById(id), newUserData = userCrudService.getById(id);
        newUserData.getFollowers().add(userCrudService.getById(idUser));
        User userToUpdateOther = userCrudService.getById(idUser), newUserDataOther = userCrudService.getById(idUser);
        newUserDataOther.getFollowing().add(userCrudService.getById(id));
        userCrudService.update(userToUpdateOther, newUserDataOther);
        return userCrudService.update(userToUpdate, newUserData);
    }

    @PostMapping(value = "/unfollow/{id}")
    public User unfollow(@PathVariable Long id, @Valid @RequestBody Long idUser) {
        User userToUpdate = userCrudService.getById(id), newUserData = userCrudService.getById(id);
        newUserData.getFollowers().remove(userCrudService.getById(idUser));
        User userToUpdateOther = userCrudService.getById(idUser), newUserDataOther = userCrudService.getById(idUser);
        newUserDataOther.getFollowing().remove(userCrudService.getById(id));
        userCrudService.update(userToUpdateOther, newUserDataOther);
        return userCrudService.update(userToUpdate, newUserData);
    }
}
