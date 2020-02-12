import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReviewDetailsComponent} from './review-details/review-details.component';
import {CreateReviewComponent} from './create-review/create-review.component';
import {UpdateReviewComponent} from './update-review/update-review.component';
import {ReviewService} from './review.service';


@NgModule({
  declarations: [
    ReviewDetailsComponent,
    CreateReviewComponent,
    UpdateReviewComponent],
  imports: [
    CommonModule
  ],
  providers: [ReviewService],
})
export class ReviewModule {
}
