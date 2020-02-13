import { Component, OnInit } from '@angular/core';
import {User} from '../../user/user';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';
import {CuisineService} from '../../cuisine/cuisine.service';
import {Restaurant} from '../restaurant';
import {RestaurantService} from '../restaurant.service';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {

  restaurant: Restaurant = new Restaurant();
  submitted = false;

  constructor(private restaurantService: RestaurantService,
              private router: Router) {
  }

  ngOnInit() {
  }

  newRestaurant(): void {
    this.submitted = false;
    this.restaurant = new Restaurant();
  }

  save() {
    this.restaurantService.createRestaurant(this.restaurant)
      .then(data => console.log(data));
    this.restaurant = new Restaurant();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/restaurants']);
  }


}
