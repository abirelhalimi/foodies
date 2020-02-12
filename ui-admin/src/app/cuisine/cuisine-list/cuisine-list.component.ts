import {Component, OnInit} from '@angular/core';
import {Cuisine} from '../cuisine';
import {CuisineService} from '../cuisine.service';

@Component({
  selector: 'app-cuisine-list',
  templateUrl: './cuisine-list.component.html',
  styleUrls: ['./cuisine-list.component.css']
})
export class CuisineListComponent implements OnInit {

  cuisines: Cuisine[];

  constructor(private cuisineService: CuisineService) {
  }

  ngOnInit() {
    this.getCuisines();
  }

  getCuisines() {
    this.cuisineService.getCuisines()
      .then(cuisines => this.cuisines = cuisines);
  }

  deleteCuisine(id: number) {
    this.cuisineService.deleteCuisine(id);
  }

}
