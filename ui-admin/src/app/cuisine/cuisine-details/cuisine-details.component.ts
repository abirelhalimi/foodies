import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Cuisine} from '../cuisine';
import {ActivatedRoute, Router} from '@angular/router';
import {CuisineService} from '../cuisine.service';

@Component({
  selector: 'app-cuisine-details',
  templateUrl: './cuisine-details.component.html',
  styleUrls: ['./cuisine-details.component.css']
})
export class CuisineDetailsComponent implements OnInit {

  private sub: Subscription;
  cuisine: Cuisine;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cuisineService: CuisineService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params.id;
      this.getCuisine(id);
    });
  }

  private getCuisine(id: number) {
    this.cuisineService.getCuisine(id)
      .then(cuisine => this.cuisine = cuisine);
  }

  list() {
    this.router.navigate(['cuisines']);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
