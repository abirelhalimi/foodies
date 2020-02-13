import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../recipe/recipe';
import {RecipeService} from '../../recipe/recipe.service';
import {Router} from '@angular/router';
import {Rating} from '../rating';
import {RatingService} from '../rating.service';

@Component({
  selector: 'app-create-rating',
  templateUrl: './create-rating.component.html',
  styleUrls: ['./create-rating.component.css']
})
export class CreateRatingComponent implements OnInit {

  rating: Rating = new Rating();
  submitted = false;

  constructor(private ratingService: RatingService,
              private router: Router,
  ) {
  }

  ngOnInit() {
  }

  newRating(): void {
    this.submitted = false;
    this.rating = new Rating();
  }

  save() {
    this.ratingService.createRating(this.rating)
      .then(data => console.log(data));
    this.rating = new Rating();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/ratings']);
  }

}
