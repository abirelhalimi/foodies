import {Component, OnInit} from '@angular/core';
import {Restaurant} from '../restaurant';
import {RestaurantService} from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getRestaurants()
      .then(restaurants => this.restaurants = restaurants);
  }

  deleteRestaurant(id: number) {
    this.restaurantService.deleteRestaurant(id);

  }

}
