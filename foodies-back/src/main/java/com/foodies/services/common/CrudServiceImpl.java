package com.foodies.services.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Optional;

@Service
public abstract class CrudServiceImpl<T> implements CrudService<T> {


    @Autowired
    private ObjectUpdater objectUpdater;

    protected abstract CrudRepository<T, Long> repository();

    @Override
    public T add(T object) {
        return repository().save(object);
    }

    @Override
    public T update(T objectToUpdate, T newObjectData) {
        try {
            objectUpdater.update(objectToUpdate, newObjectData);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return repository().save(objectToUpdate);
    }

    @Override
    public void delete(Long id) {
        Optional<T> objectToDelete = repository().findById(id);
        objectToDelete.ifPresent(t -> repository().delete(t));
    }

    @Override
    public List<T> getAll() {
        return (List<T>) repository().findAll();
    }

    @Override
    public T getById(Long id) {
        Optional<T> object = repository().findById(id);
        return object.orElse(null);
    }
}
