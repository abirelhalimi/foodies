package com.foodies.controllers;

import com.foodies.models.*;
import com.foodies.services.crud.*;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.aspectj.bridge.MessageUtil.fail;


@RequestMapping(value = "/api/mockData")
@RestController
public class DataController {

    @Autowired
    private UserCrudService userCrudService;

    @Autowired
    private RestaurantCrudService restaurantCrudService;

    @Autowired
    private ReviewCrudService reviewCrudService;

    @Autowired
    private CuisineCrudService cuisineCrudService;

    @Autowired
    private RecipeCrudService recipeCrudService;

    @Autowired
    private MenuCrudService menuCrudService;

    @Autowired
    private DonationCrudService donationCrudService;

    @Autowired
    private CommentCrudService commentCrudService;

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

    private void imgTreatmentRec(String name, Review review) throws IOException {

        InputStream inputStream = this.getClass()
                .getClassLoader()
                .getResourceAsStream(name);

        if(inputStream == null) {
            fail("Unable to get resources");
        }
        else {
            review.setImage(IOUtils.toByteArray(inputStream));
        }

    }

    private void imgTreatmentDonation(String name, Donation donation) throws IOException {

        InputStream inputStream = this.getClass()
                .getClassLoader()
                .getResourceAsStream(name);

        if(inputStream == null) {
            fail("Unable to get resources");
        }
        else {
            donation.setImage(IOUtils.toByteArray(inputStream));
        }

    }

    private void imgTreatmentMenu(String name, Menu menu) throws IOException {

        InputStream inputStream = this.getClass()
                .getClassLoader()
                .getResourceAsStream(name);

        if(inputStream == null) {
            fail("Unable to get resources");
        }
        else {
            menu.setImage(IOUtils.toByteArray(inputStream));
        }

    }

    private void imgTreatmentRecipe(String name, Recipe recipe) throws IOException {

        InputStream inputStream = this.getClass()
                .getClassLoader()
                .getResourceAsStream(name);

        if(inputStream == null) {
            fail("Unable to get resources");
        }
        else {
            recipe.setImage(IOUtils.toByteArray(inputStream));
        }

    }

    @GetMapping
    public String populateDatabase() throws IOException {

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

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Couscous");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Crepe");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Juice");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Kebab");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Paella");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Panninis");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Fish");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Chicken");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Pasta");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("FreshFood");
        cuisineCrudService.add(cuisine);

        //cuisine
        cuisine = new Cuisine();
        cuisine.setName("Sandwiches");
        cuisineCrudService.add(cuisine);


        //Adding users
        User user = new User();

        //first user
        user.setEmail("regina@gmail.com");
        user.setPassword("regina");
        user.setUsername("reginaphalange");
        user.setCuisines(cuisineCrudService.getAll().subList(26,35));
        imgTreatment("regina.png",user);

        userCrudService.add(user);

        //second user
        user = new User();
        user.setEmail("ken@gmail.com");
        user.setPassword("ken");
        user.setUsername("kenadams");
        user.setCuisines(cuisineCrudService.getAll().subList(42,50));
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
        List<Cuisine> cuisines = cuisineCrudService.getAll();
        restaurant.setCuisines(cuisines.subList(0,5));
        restaurantCrudService.add(restaurant);

        //second restaurant
        restaurant = new Restaurant();
        restaurant.setAddress("Rue Tansift, Rabat");
        restaurant.setEmail("metros@gmail.com");
        imgTreatmentR("metros.jpg",restaurant);
        restaurant.setPassword("metros");
        restaurant.setTelephone("05377-72425");
        restaurant.setName("Metros De Pizza");
        restaurant.setUsername("metros");
        restaurant.setLatitude(34.003509);
        restaurant.setLongitude(-6.848561);
        restaurant.setCuisines(cuisines.subList(5,10));
        restaurantCrudService.add(restaurant);

        //Adding recommendations
        Review review = new Review();

        Rating rating = new Rating();

        //first recommendation
        imgTreatmentRec("regina.png", review);
        rating.setAccessibility(4);
        rating.setDish(4);
        rating.setLocation(5);
        rating.setPrice(3);
        rating.setService(4);
        review.setRating(rating);
        review.setText("I enjoyed my experience and the food was top notch");
        review.setUser(userCrudService.getById((long) 1));
        review.setDate(new Date("01/25/2020"));
        review.setRestaurant(restaurantCrudService.getById((long) 1));
        reviewCrudService.add(review);

        //second recommendation
        review = new Review();
        imgTreatmentRec("regina.png", review);
        rating = new Rating();
        rating.setAccessibility(4);
        rating.setDish(4);
        rating.setLocation(5);
        rating.setPrice(3);
        rating.setService(4);
        review.setRating(rating);
        review.setText("I enjoyed the experience and the food was top notch");
        review.setUser(userCrudService.getById((long) 2));
        review.setDate(new Date("01/26/2020"));
        review.setRestaurant(restaurantCrudService.getById((long) 2));
        reviewCrudService.add(review);

        //recipe 1
        Recipe recipe = new Recipe();
        recipe.setUser(userCrudService.getById((long) 1));
        recipe.setCuisines(cuisineCrudService.getAll().subList(5,10));
        recipe.setText("Simply slice or chop grilled chicken breast. Cut grilled corn kernels off the cob. Toss chopped Romaine lettuce, cherry tomatoes sliced in half, chopped red onion and avocado (if you happen to have it on hand) in a big bowl.");
        imgTreatmentRecipe("recipe1.png",recipe);
        recipeCrudService.add(recipe);

        //recipe 2
        recipe = new Recipe();
        recipe.setUser(userCrudService.getById((long) 2));
        recipe.setCuisines(cuisineCrudService.getAll().subList(10,12));
        recipe.setText("Heat grill to medium-high. Season chicken with coriander, oregano, salt, and pepper. Grill, covered, turning halfway through, until golden and no longer pink, 18 to 22 minutes. Let rest 5 minutes, then slice.");
        imgTreatmentRecipe("recipe2.png",recipe);
        recipeCrudService.add(recipe);

        //menu 1
        Menu menu = new Menu();
        menu.setRestaurant(restaurantCrudService.getById((long) 1));
        menu.setText("Special Menu for February");
        imgTreatmentMenu("menu1.png",menu);
        menuCrudService.add(menu);

        //menu 2
        menu = new Menu();
        menu.setRestaurant(restaurantCrudService.getById((long) 2));
        menu.setText("This weekend's special menu just for you !");
        imgTreatmentMenu("menu2.jpg",menu);
        menuCrudService.add(menu);

        //donation 1
        Donation donation = new Donation();
        donation.setText("All available tonight for free enough for 80 people.");
        donation.setRestaurant(restaurantCrudService.getById((long) 1));
        donation.setQuantity(80);
        imgTreatmentDonation("menu1.png",donation);
        donationCrudService.add(donation);

        //donation 2
        donation = new Donation();
        donation.setText("This weekend 150 meal will be offered for free. Hurry Up and get your code !");
        donation.setRestaurant(restaurantCrudService.getById((long) 2));
        donation.setQuantity(150);
        imgTreatmentDonation("menu2.jpg",donation);
        donationCrudService.add(donation);

        //offer 1
        donation = new Donation();
        donation.setText("20% off in the next 2 hours !!!");
        donation.setRestaurant(restaurantCrudService.getById((long) 1));
        donation.setQuantity(50);
        donation.setOffer(true);
        imgTreatmentDonation("menu1.png",donation);
        donationCrudService.add(donation);

        //donation 2
        donation = new Donation();
        donation.setText("STUDENTS : 70% off your order this whole weekend !");
        donation.setQuantity(20);
        donation.setRestaurant(restaurantCrudService.getById((long) 2));
        imgTreatmentDonation("menu2.png",donation);
        donation.setOffer(true);
        donationCrudService.add(donation);

        //comment 1
        Comment comment =  new Comment();
        comment.setRecipe(recipeCrudService.getById((long) 1));
        comment.setText("Great recipe. Grilled chicken goes really well with the salad. Do you know how many calories are in it ?");
        comment.setUser(userCrudService.getById((long) 2));
        commentCrudService.add(comment);

        //comment 2
        comment =  new Comment();
        comment.setRecipe(recipeCrudService.getById((long) 2));
        comment.setText("My family is coming over for dinner this friday. I'll try your recipe and hopefully they'll like it");
        comment.setUser(userCrudService.getById((long) 1));
        commentCrudService.add(comment);

        return "Database filled";
    }

}


