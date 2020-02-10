package com.foodies.services.crud.impl;

import com.foodies.models.Menu;
import com.foodies.repositories.MenuRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.MenuCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class MenuCrudServiceImpl extends CrudServiceImpl<Menu> implements MenuCrudService {

    @Autowired
    private MenuRepository menuRepository;

    @Override
    protected CrudRepository<Menu, Long> repository() {
        return menuRepository;
    }

    @Override
    public Menu add(Menu menu) {
        menu.setDate(new Date());
        return menuRepository.save(menu);
    }

    @Override
    public List<Menu> getByRestaurant(Long id) {
        List<Menu> allMenus = menuRepository.findAll();
        List<Menu> restaurantMenus = new ArrayList<>();
        allMenus.forEach(menu -> {
            if (menu.getRestaurant().getId() == id) {
                restaurantMenus.add(menu);
            }
        });
        return restaurantMenus;
    }

    @Override
    public void like(Long id) {
        Menu menu = getById(id);
        menu.setLikes(menu.getLikes()+1);
        update(getById(id), menu);
    }
}
