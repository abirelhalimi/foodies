package com.foodies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource(value = { "application.properties"})
public class FoodiesApplication {

    public static void main(String[] args) {
        SpringApplication.run(FoodiesApplication.class, args);
    }

}
