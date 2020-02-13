import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ReviewService} from '../review.service';
import {Review} from '../review';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {

  review: Review = new Review();
  submitted = false;

  constructor(private reviewService: ReviewService,
              private router: Router) {
  }

  ngOnInit() {
  }

  newReview(): void {
    this.submitted = false;
    this.review = new Review();
  }

  save() {
    this.reviewService.createReview(this.review)
      .then(data => console.log(data));
    this.review = new Review();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/reviews']);
  }


}
