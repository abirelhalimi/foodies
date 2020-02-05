package com.foodies.controllers;

import com.foodies.models.Cuisine;
import com.foodies.models.Recommendation;
import com.foodies.models.Restaurant;
import com.foodies.models.User;
import com.foodies.services.crud.CuisineCrudService;
import com.foodies.services.crud.RecommendationCrudService;
import com.foodies.services.crud.RestaurantCrudService;
import com.foodies.services.crud.UserCrudService;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.InputStream;
import java.util.Date;

import static org.aspectj.bridge.MessageUtil.fail;


@RequestMapping(value = "/api/mockData")
@RestController
public class DataController {

    @Autowired
    private UserCrudService userCrudService;

    @Autowired
    private RestaurantCrudService restaurantCrudService;

    @Autowired
    private RecommendationCrudService recommendationCrudService;

    @Autowired
    private CuisineCrudService cuisineCrudService;

    private void imgTreatment(String name, User user) throws IOException {

        InputStream inputStream = this.getClass()
                .getClassLoader()
                .getResourceAsStream(name);

        if(inputStream == null) {
            fail("Unable to get resources");
        }
        else {
            user.setImage(IOUtils.toByteArray(inputStream));
        }

    }

    private void imgTreatmentR(String name, Restaurant restaurant) throws IOException {

        InputStream inputStream = this.getClass()
                .getClassLoader()
                .getResourceAsStream(name);

        if(inputStream == null) {
            fail("Unable to get resources");
        }
        else {
            restaurant.setImage(IOUtils.toByteArray(inputStream));
        }

    }

    @GetMapping
    public String populateDatabase() throws IOException {

        //Adding users
        User user = new User();

        //first user
        user.setEmail("regina@gmail.com");
        user.setPassword("regina");
        user.setUsername("reginaphalange");
        imgTreatment("regina.png",user);
        userCrudService.add(user);

        //second user
        user = new User();
        user.setEmail("ken@gmail.com");
        user.setPassword("ken");
        user.setUsername("kenadams");
        imgTreatment("ken.png", user);
        userCrudService.add(user);

        //Adding restaurants
        Restaurant restaurant = new Restaurant();

        //first restaurant
        restaurant.setAddress("34 BIS Rue Oued Fès, Rabat 10090");
        restaurant.setEmail("bluespoon@gmail.com");
        imgTreatmentR("bluespoon.png",restaurant);
        restaurant.setPassword("bluespoon");
        restaurant.setTelephone("0650-257842");
        restaurant.setName("Bluespoon Coffee Kitchen");
        restaurant.setUsername("bluespoon");
        restaurant.setLatitude(34.000993);
        restaurant.setLongitude(-6.848071);
        restaurantCrudService.add(restaurant);

        //second restaurant
        restaurant = new Restaurant();
        restaurant.setAddress("Rue Tansift, Rabat");
        restaurant.setEmail("metros@gmail.com");
        imgTreatmentR("metros.png",restaurant);
        restaurant.setPassword("metros");
        restaurant.setTelephone("05377-72425");
        restaurant.setName("Metros De Pizza");
        restaurant.setUsername("metros");
        restaurant.setLatitude(34.003509);
        restaurant.setLongitude(-6.848561);
        restaurantCrudService.add(restaurant);

        //Adding recommendations
        Recommendation recommendation = new Recommendation();

        //first recommendation
//        recommendation.setImage("myplate.png");
        recommendation.setRating("very good");
        recommendation.setText("I enjoyed my experience and the food was top notch");
        recommendation.setUser(userCrudService.getById((long) 1));
        recommendation.setDate(new Date("01/25/2020"));
        recommendation.setRestaurant(restaurantCrudService.getById((long) 1));
        recommendationCrudService.add(recommendation);

        //second recommendation
        recommendation = new Recommendation();
//        recommendation.setImage("myplate2.png");
        recommendation.setRating("good");
        recommendation.setText("I enjoyed the experience and the food was top notch");
        recommendation.setUser(userCrudService.getById((long) 2));
        recommendation.setDate(new Date("01/26/2020"));
        recommendation.setRestaurant(restaurantCrudService.getById((long) 2));
        recommendationCrudService.add(recommendation);

        //Adding cuisines
        Cuisine cuisine = new Cuisine();

        //cuisine
        cuisine.setName("French");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Japanese");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Desert");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Seafood");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Asian");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Filipino");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Indian");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Sushi");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Mexican");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Ice cream");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Cafe");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("American");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Italian");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Brazilian");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Fast Food");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Pizza");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Bar Food");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("International");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Grill");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Healthy Food");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Steak");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("BBQ");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Lebanese");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Syrian");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Arabian");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Moroccan");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Tapas");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Chinese");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Vegetarian");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Vegan");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Breakfast");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Bakery");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Thai");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Australian");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Burger");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Spanish");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Mediterranean");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Middle Eastern");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Greek");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Turkish");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Diet meals");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Biscuit");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Drinks");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Burgers");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Chocolate");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Kids");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Pastry");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Tacos");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Salad");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Soup");
        cuisineCrudService.add(cuisine);

        return "Database filled";
    }

}


