package com.foodies.services.common;

import org.springframework.stereotype.Service;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

@Service
public class ObjectUpdaterImpl implements ObjectUpdater {

    @Override
    public void update(Object objectToUpdate, Object newObjectData) throws InvocationTargetException, IllegalAccessException {
        Field[] fields = objectToUpdate.getClass().getDeclaredFields();
        for (Field field : fields) {
            field.setAccessible(true);
            if (isFieldUpdatable(field)) {
                Method getMethodForNewData = retrieveGetMethodFor(newObjectData, field);
                Method setMethodForExistingObject = retrieveSetMethodFor(objectToUpdate, field);
                setMethodForExistingObject.invoke(objectToUpdate, getMethodForNewData.invoke(newObjectData));
            }
        }
    }

    private Method retrieveSetMethodFor(Object object, Field field) {
        return getMethod(object, field, "set");
    }

    private Method retrieveGetMethodFor(Object object, Field field) {
        return getMethod(object, field, "get");
    }

    private Method getMethod(Object object, Field field, String prefix) {
        Method methods[] = object.getClass().getMethods();
        for (Method method : methods) {
            if (method.getName().toLowerCase().equals(prefix + field.getName().toLowerCase())) {
                return method;
            }
        }
        throw new RuntimeException(prefix + "ter not found for the field " + field.getName() + " in the object " + object.getClass());
    }

    private boolean isFieldUpdatable(Field field) {
        Annotation annotations[] = field.getAnnotations();
        for (Annotation annotation : annotations) {
            if (annotation.annotationType().getName().equals(javax.persistence.Id.class.getName())) {
                return false;
            }
        }
        return true;
    }
}
