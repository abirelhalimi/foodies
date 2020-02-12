import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ReviewService} from '../review.service';
import {Review} from '../review';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {

  private sub: Subscription;
  private review: Review;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private reviewService: ReviewService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params.id;
      this.getReview(id);
    });
  }

  getReview(id: number) {
    this.reviewService.getReview(id)
      .then(review => this.review = review);
  }

  list() {
    this.router.navigate(['reviews']);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
