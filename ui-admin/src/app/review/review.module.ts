import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReviewDetailsComponent} from './review-details/review-details.component';
import {CreateReviewComponent} from './create-review/create-review.component';
import {UpdateReviewComponent} from './update-review/update-review.component';
import {ReviewService} from './review.service';
import {FormsModule} from '@angular/forms';
import {RatingModule} from '../rating/rating.module';


@NgModule({
  declarations: [
    ReviewDetailsComponent,
    CreateReviewComponent,
    UpdateReviewComponent],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule
  ],
  providers: [ReviewService],
})
export class ReviewModule {
}
