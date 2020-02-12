import {NgModule} from '@angular/core';
import {RatingDetailsComponent} from './rating-details/rating-details.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'rating/:id', component: RatingDetailsComponent},
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
