package com.foodies.services.crud;

import com.foodies.models.Menu;
import com.foodies.services.common.CrudService;

import java.util.List;

public interface MenuCrudService extends CrudService<Menu> {
    List<Menu> getByRestaurant(Long id);
}