package com.foodies.services.crud;

import com.foodies.models.Restaurant;
import com.foodies.models.User;
import com.foodies.services.common.CrudService;

import java.util.List;

public interface UserCrudService extends CrudService<User> {

    List<User> follow(Long id, Long idUser);

    List<User> unfollow(Long id, Long idUser);

    void addFollowingRestaurant(User userFollowing, Restaurant restaurantToFollow);

    void removeFollowingRestaurant(User userUnfollowing, Restaurant restaurantToUnfollow);

    User findByUsername(String username);

    List<User> getFollowing(Long id);
}
