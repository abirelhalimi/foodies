package com.foodies.services.crud.impl;

import com.foodies.models.User;
import com.foodies.repositories.UserRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.UserCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class UserCrudServiceImpl extends CrudServiceImpl<User> implements UserCrudService {

    @Autowired
    private UserRepository userRepository;

    @Override
    protected CrudRepository<User, Long> repository() {
        return userRepository;
    }
}
