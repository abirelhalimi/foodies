import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingDetailsComponent} from './rating-details/rating-details.component';
import {CreateRatingComponent} from './create-rating/create-rating.component';
import {UpdateRatingComponent} from './update-rating/update-rating.component';
import {RatingService} from './rating.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [RatingDetailsComponent, CreateRatingComponent, UpdateRatingComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CreateRatingComponent
  ],
  providers: [RatingService]
})
export class RatingModule {
}
