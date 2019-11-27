package com.foodies.services.crud.impl;

import com.foodies.models.User;
import com.foodies.repositories.UserRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.UserCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserCrudServiceImpl extends CrudServiceImpl<User> implements UserCrudService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder encoder = new BCryptPasswordEncoder();

    @Override
    protected CrudRepository<User, Long> repository() {
        return userRepository;
    }

    @Override
    public User add(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        if(!userExists(user.getEmail(), user.getUsername())) {
            userRepository.save(user);
        }
        return user;
    }

    private boolean userExists(String email, String username) {

        List<User> users;
        users = userRepository.findAll();

        if (users == null) {
            return false;
        }
        for (User user : users) {
            if (user.getEmail().equals(email) || user.getUsername().equals(username)) {
                return true;
            }
        }
        return false;
    }
}
