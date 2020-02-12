import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {RestaurantService} from '../restaurant.service';
import {Restaurant} from '../restaurant';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  private sub: Subscription;
  restaurant: Restaurant;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params.id;
      this.getRestaurant(id);
    });
  }

  private getRestaurant(id: number) {
    this.restaurantService.getRestaurant(id)
      .then(restaurant => this.restaurant = restaurant);
  }

  list() {
    this.router.navigate(['restaurants']);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
