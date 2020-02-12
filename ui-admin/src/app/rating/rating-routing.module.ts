import {NgModule} from '@angular/core';
import {RatingDetailsComponent} from './rating-details/rating-details.component';
import {RouterModule, Routes} from '@angular/router';
import {UpdateRatingComponent} from './update-rating/update-rating.component';
import {CreateRatingComponent} from './create-rating/create-rating.component';


const routes: Routes = [
  {path: 'rating/:id', component: RatingDetailsComponent},
  {path: 'rating/update/:id', component: UpdateRatingComponent},
  {path: 'rating-create', component: CreateRatingComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class RatingRoutingModule {
}
