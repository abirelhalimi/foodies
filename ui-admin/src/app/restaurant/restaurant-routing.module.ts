import {NgModule} from '@angular/core';
import {RestaurantDetailsComponent} from './restaurant-details/restaurant-details.component';
import {RouterModule, Routes} from '@angular/router';
import {UpdateRestaurantComponent} from './update-restaurant/update-restaurant.component';
import {CreateRestaurantComponent} from './create-restaurant/create-restaurant.component';

const routes: Routes = [
  {path: 'restaurant/:id', component: RestaurantDetailsComponent},
  {path: 'restaurant/update/:id', component: UpdateRestaurantComponent},
  {path: 'restaurant-create', component: CreateRestaurantComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RestaurantRoutingModule {
}


