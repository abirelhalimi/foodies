package com.foodies.services.crud.impl;

import com.foodies.models.Restaurant;
import com.foodies.models.User;
import com.foodies.repositories.UserRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.UserCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        if (user.getEmail()!=null) {
            if (userDoesntExists(user.getEmail(), user.getUsername())) {
                userRepository.save(user);
            }
        }
        return user;
    }

    @Override
    public User update(User objectToUpdate, User newObjectData) {
        if (newObjectData.getEmail() != null && userDoesntExists(newObjectData.getEmail(), newObjectData.getUsername())) {
            objectToUpdate.setEmail(newObjectData.getEmail());
        }

        if (newObjectData.getPassword() != null) {
            objectToUpdate.setPassword(encoder.encode(newObjectData.getPassword()));
        }
        if(newObjectData.getCuisines()!=null) {
            objectToUpdate.setCuisines(newObjectData.getCuisines());
        }
        if(newObjectData.getUsername()!=null) {
            objectToUpdate.setUsername(newObjectData.getUsername());
        }
        if(newObjectData.getBio()!=null) {
            objectToUpdate.setBio(newObjectData.getBio());
        }
        if(newObjectData.getFollowers()!=null) {
            objectToUpdate.setFollowers(newObjectData.getFollowers());
        }
        if(newObjectData.getFollowing()!=null) {
            objectToUpdate.setFollowing(newObjectData.getFollowing());
        }
        if(newObjectData.getFollowingRestaurant()!=null) {
            objectToUpdate.setFollowingRestaurant(newObjectData.getFollowingRestaurant());
        }
        if(newObjectData.getImage()!=null) {
            objectToUpdate.setImage(newObjectData.getImage());
        }
        userRepository.save(objectToUpdate);
        return objectToUpdate;
    }

    private boolean userDoesntExists(String email, String username) {

        List<User> users;
        users = userRepository.findAll();

        if (users == null) {
            return true;
        }
        for (User user : users) {
            if (user.getEmail().equals(email) || user.getUsername().equals(username)) {
                return false;
            }
        }
        return true;
    }


    @Override
    public List<User> follow(Long id, Long idUser) {
        User userToFollow = getById(id);
        User userFollowing = getById(idUser);
        addFollower(userToFollow, userFollowing);
        addFollowing(userFollowing, userToFollow);
        return userFollowing.getFollowing();
    }

    private void addFollowing(User userFollowing, User userToFollow) {
        userFollowing.getFollowing().add(userToFollow);
        update(getById(userFollowing.getId()), userFollowing);
    }

    @Override
    public void addFollowingRestaurant(User userFollowing, Restaurant restaurantToFollow) {
        userFollowing.getFollowingRestaurant().add(restaurantToFollow);
        update(getById(userFollowing.getId()), userFollowing);
    }

    private void addFollower(User userToFollow, User userFollowing) {
        userToFollow.getFollowers().add(userFollowing);
        update(getById(userToFollow.getId()), userToFollow);
    }

    @Override
    public List<User> unfollow(Long id, Long idUser) {
        User userToUnfollow = getById(id);
        User userUnfollowing = getById(idUser);
        removeFollower(userToUnfollow, userUnfollowing);
        removeFollowing(userUnfollowing, userToUnfollow);
        return userUnfollowing.getFollowing();
    }

    private void removeFollowing(User userUnfollowing, User userToUnfollow) {
        userUnfollowing.getFollowing().remove(userToUnfollow);
        update(getById(userUnfollowing.getId()), userUnfollowing);
    }

    @Override
    public void removeFollowingRestaurant(User userUnfollowing, Restaurant restaurantToUnfollow) {
        userUnfollowing.getFollowingRestaurant().remove(restaurantToUnfollow);
        update(getById(userUnfollowing.getId()), userUnfollowing);
    }

    @Override
    public User findByUsername(String username) {
        List<User> users = userRepository.findAll();
        for (User user: users) {
            if (user.getUsername().equals(username)) {
                return user;
            }
        }
        return null;
    }

    private void removeFollower(User userToUnfollow, User userUnfollowing) {
        userToUnfollow.getFollowers().remove(userUnfollowing);
        update(getById(userToUnfollow.getId()), userToUnfollow);
    }

    @Override
    public List<User> getAll() {
        List<User> users = new ArrayList<>();
        for(User user : userRepository.findAll()) {
            if (user.getRole().equals("USER")) {
                users.add(user);
            }
        }
        return users;
    }
}
