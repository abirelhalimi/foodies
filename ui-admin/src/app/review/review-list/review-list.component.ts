import {Component, OnInit} from '@angular/core';
import {Review} from '../review';
import {ReviewService} from '../review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  reviews: Review[];

  constructor(private reviewService: ReviewService) {
  }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews() {
    this.reviewService.getReviews()
      .then(reviews => this.reviews = reviews);
  }

  deleteReview(id: number) {
    this.reviewService.deleteReview(id);
  }
}
