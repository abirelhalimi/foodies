package com.foodies.services.crud;

import com.foodies.models.Recipe;
import com.foodies.services.common.CrudService;

import java.util.List;

public interface RecipeCrudService extends CrudService<Recipe> {
    List<Recipe> getByUser(Long id);
}
