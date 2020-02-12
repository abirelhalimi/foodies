import {NgModule} from '@angular/core';
import {RestaurantDetailsComponent} from './restaurant-details/restaurant-details.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'restaurant/:id', component: RestaurantDetailsComponent},
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


