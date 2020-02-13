import { Component, OnInit } from '@angular/core';
import {User} from '../../user/user';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';
import {CuisineService} from '../cuisine.service';
import {Cuisine} from '../cuisine';

@Component({
  selector: 'app-create-cuisine',
  templateUrl: './create-cuisine.component.html',
  styleUrls: ['./create-cuisine.component.css']
})
export class CreateCuisineComponent implements OnInit {

  cuisine: Cuisine = new Cuisine();
  submitted = false;

  constructor(private cuisineService: CuisineService,
              private router: Router,
              ) {
  }

  ngOnInit() {
  }

  newCuisine(): void {
    this.submitted = false;
    this.cuisine = new Cuisine();
  }

  save() {
    this.cuisineService.createCuisine(this.cuisine)
      .then(data => console.log(data));
    this.cuisine = new Cuisine();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/cuisines']);
  }


}
