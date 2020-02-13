import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantDetailsComponent} from './restaurant-details/restaurant-details.component';
import {CreateRestaurantComponent} from './create-restaurant/create-restaurant.component';
import {UpdateRestaurantComponent} from './update-restaurant/update-restaurant.component';
import {RestaurantService} from './restaurant.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [RestaurantDetailsComponent, CreateRestaurantComponent, UpdateRestaurantComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [RestaurantService]
})
export class RestaurantModule {
}
