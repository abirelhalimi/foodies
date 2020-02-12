import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Recipe} from '../recipe';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  private sub: Subscription;
  recipe: Recipe;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params.id;
      this.getRecipe(id);
    });
  }

  private getRecipe(id: number) {
    this.recipeService.getRecipe(id)
      .then(recipe => this.recipe = recipe);
  }

  list() {
    this.router.navigate(['recipes']);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
