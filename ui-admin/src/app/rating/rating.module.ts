import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingDetailsComponent} from './rating-details/rating-details.component';
import {CreateRatingComponent} from './create-rating/create-rating.component';
import {UpdateRatingComponent} from './update-rating/update-rating.component';
import {RatingService} from './rating.service';


@NgModule({
  declarations: [RatingDetailsComponent, CreateRatingComponent, UpdateRatingComponent],
  imports: [
    CommonModule
  ],
  providers: [RatingService]
})
export class RatingModule {
}
