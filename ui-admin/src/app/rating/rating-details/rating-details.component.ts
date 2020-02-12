import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Rating} from '../rating';
import {ActivatedRoute, Router} from '@angular/router';
import {RatingService} from '../rating.service';

@Component({
  selector: 'app-rating-details',
  templateUrl: './rating-details.component.html',
  styleUrls: ['./rating-details.component.css']
})
export class RatingDetailsComponent implements OnInit {

  private sub: Subscription;
  rating: Rating;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ratingService: RatingService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params.id;
      this.getRating(id);
    });
  }

  private getRating(id: number) {
    this.ratingService.getRating(id)
      .then(rating => this.rating = rating);
  }

  list() {
    this.router.navigate(['ratings']);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
