import {NgModule} from '@angular/core';
import {ReviewDetailsComponent} from './review-details/review-details.component';
import {RouterModule, Routes} from '@angular/router';
import {CreateReviewComponent} from './create-review/create-review.component';
import {UpdateReviewComponent} from './update-review/update-review.component';

const routes: Routes = [
  {path: 'review/:id', component: ReviewDetailsComponent},
  {path: 'review/update/:id', component: UpdateReviewComponent},
  {path: 'review-create', component: CreateReviewComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReviewRoutingModule {
}

