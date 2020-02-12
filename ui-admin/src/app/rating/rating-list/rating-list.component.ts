import {Component, OnInit} from '@angular/core';
import {Rating} from '../rating';
import {RatingService} from '../rating.service';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css']
})
export class RatingListComponent implements OnInit {

  ratings: Rating[];

  constructor(private ratingService: RatingService) {
  }

  ngOnInit() {
    this.getRatings();
  }

  getRatings() {
    this.ratingService.getRatings()
      .then(ratings => this.ratings = ratings);
  }

  deleteRating(id: number) {
    this.ratingService.deleteRating(id);
  }

}
